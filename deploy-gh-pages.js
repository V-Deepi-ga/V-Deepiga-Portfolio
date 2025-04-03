#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colors for console output
const colors = {
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

console.log(`${colors.blue}Starting GitHub Pages deployment process...${colors.reset}`);

// Step 1: Build the project first
console.log(`${colors.yellow}Building project...${colors.reset}`);
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log(`${colors.green}Build completed successfully!${colors.reset}`);
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

// Step 2: Create or modify index.html in the dist/public folder
const publicDir = path.join(__dirname, 'dist', 'public');
const indexPath = path.join(publicDir, 'index.html');

console.log(`${colors.yellow}Preparing index.html for GitHub Pages...${colors.reset}`);

if (fs.existsSync(indexPath)) {
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Update paths to be relative (for GitHub Pages)
  indexContent = indexContent.replace(/href="\//g, 'href="./');
  indexContent = indexContent.replace(/src="\//g, 'src="./');
  
  // If there's an issue with SPA routing, add a script for GitHub Pages 404 handling
  if (!indexContent.includes('window.location.pathname')) {
    const scriptForRouting = `
<script type="text/javascript">
  // Single Page Apps for GitHub Pages
  // This redirects urls to the index.html page, avoiding 404 issues on refresh
  (function() {
    if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
      const path = window.location.pathname;
      const segments = path.split('/');
      const repoName = segments[1];  // Get your repository name
      
      if (repoName && !path.includes('assets') && !path.includes('.js') && !path.includes('.css')) {
        window.history.replaceState(null, null, './');
      }
    }
  })();
</script>`;
    
    // Insert before closing head tag
    indexContent = indexContent.replace('</head>', scriptForRouting + '</head>');
  }
  
  fs.writeFileSync(indexPath, indexContent);
  console.log(`${colors.green}Index.html updated for GitHub Pages compatibility${colors.reset}`);
}

// Step 3: Create a 404.html file that redirects to index.html
const notFoundPath = path.join(publicDir, '404.html');
const notFoundContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script type="text/javascript">
    // Redirect to the root when a 404 occurs
    window.location.href = './';
  </script>
</head>
<body>
  <p>Redirecting to homepage...</p>
</body>
</html>`;

fs.writeFileSync(notFoundPath, notFoundContent);
console.log(`${colors.green}Created 404.html redirect page${colors.reset}`);

// Step 4: Deploy to GitHub Pages using gh-pages
console.log(`${colors.yellow}Deploying to GitHub Pages...${colors.reset}`);
try {
  execSync('npx gh-pages -d dist/public', { stdio: 'inherit' });
  console.log(`${colors.green}Deployment completed successfully!${colors.reset}`);
  console.log(`${colors.blue}Your site should now be available at your GitHub Pages URL!${colors.reset}`);
} catch (error) {
  console.error('Deployment failed:', error);
  process.exit(1);
}