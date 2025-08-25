import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertChatMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid contact data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create contact" });
      }
    }
  });

  // Get all contacts
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  // Chatbot message
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      
      // Simple chatbot responses
      const responses: Record<string, string> = {
        services: "We offer 7 core services: Website Development, SEO, Graphic Design, Content Writing, Social Media Management, Call Center Services, and Chat Support. Which one interests you most?",
        pricing: "Our pricing is tailored to each project. We offer flexible packages starting from $500 for basic services. Would you like me to connect you with our team for a custom quote?",
        contact: "Perfect! I can connect you with our team right away. Please use the contact form or call us at +1 (555) 123-4567. Our team is available Mon-Fri 9AM-6PM.",
        portfolio: "You can check out our success stories in the portfolio section! We've helped 250+ clients achieve amazing results. Would you like to see examples for a specific service?",
        default: "Thanks for your message! Our team will get back to you soon. In the meantime, feel free to explore our services or use the quick options."
      };

      let response = responses.default;
      const messageLower = message.toLowerCase();
      
      if (messageLower.includes('service') || messageLower.includes('what do you do')) {
        response = responses.services;
      } else if (messageLower.includes('price') || messageLower.includes('cost') || messageLower.includes('pricing')) {
        response = responses.pricing;
      } else if (messageLower.includes('contact') || messageLower.includes('talk') || messageLower.includes('speak')) {
        response = responses.contact;
      } else if (messageLower.includes('portfolio') || messageLower.includes('work') || messageLower.includes('example')) {
        response = responses.portfolio;
      }

      const chatData = insertChatMessageSchema.parse({ message, response });
      const chatMessage = await storage.createChatMessage(chatData);
      
      res.json({ response, chatMessage });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid chat data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to process chat message" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
