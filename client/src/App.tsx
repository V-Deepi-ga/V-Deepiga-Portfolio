import { useEffect } from 'react';
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

// Components
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import NotFound from "@/pages/not-found";

function HomePage() {
  useEffect(() => {
    document.title = "Deepiga | Portfolio";
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function Router() {
  // Get the base path from environment or default to '/V-Deepiga-Portfolio/'
  const basePath = import.meta.env.BASE_URL || '/V-Deepiga-Portfolio/';
  
  return (
    <Switch>
      {/* Exact path for the homepage */}
      <Route path={basePath} component={HomePage} />
      {/* Support for index.html direct access */}
      <Route path={`${basePath}index.html`} component={HomePage} />
      {/* Support for direct access to other routes */}
      <Route path={`${basePath}about`} component={HomePage} />
      <Route path={`${basePath}skills`} component={HomePage} />
      <Route path={`${basePath}projects`} component={HomePage} />
      <Route path={`${basePath}contact`} component={HomePage} />
      {/* Catch all 404 route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
