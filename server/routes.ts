import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission API
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          message: 'All fields are required'
        });
      }
      
      // In a real application, you would handle this data
      // For example, send an email or store in database
      console.log('Contact form submission:', { name, email, subject, message });
      
      return res.status(200).json({ 
        message: 'Message received successfully'
      });
    } catch (error) {
      console.error('Error handling contact form submission:', error);
      return res.status(500).json({
        message: 'An error occurred while processing your request'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
