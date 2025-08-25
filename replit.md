# Overview

This is a digital marketing agency website called "Buzzplussolutions" that offers comprehensive business services including website development, SEO optimization, graphic design, content writing, social media management, and call center services. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a contact form system and an interactive chatbot for customer engagement.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Client-side routing implemented with Wouter library for lightweight navigation
- **UI Components**: Extensive use of Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for contact forms and chatbot interactions
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Logging**: Custom request logging middleware for API endpoint monitoring

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL connection
- **Fallback Storage**: In-memory storage implementation for development/testing environments
- **Schema Validation**: Zod schemas for runtime validation and type inference

## Authentication and Authorization
- **Current State**: Basic structure in place with user schema defined
- **Session Management**: Express session configuration with connect-pg-simple for PostgreSQL session storage
- **Security**: Prepared for future implementation of authentication flows

## External Dependencies
- **Database Hosting**: Neon Database (serverless PostgreSQL)
- **UI Components**: Radix UI ecosystem for accessible component primitives
- **Fonts**: Google Fonts integration (Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Icons**: Font Awesome and Lucide React for iconography
- **Date Handling**: date-fns library for date manipulation and formatting
- **Development Tools**: Replit-specific plugins for development environment integration