import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = insertContactSchema.extend({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState("");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      form.reset();
      setSelectedService("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const services = [
    "Website Development",
    "SEO Optimization",
    "Graphic Design",
    "Content Writing",
    "Social Media Management",
    "Call Center Services",
    "Chat Support",
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" data-testid="text-contact-title">Ready to Grow Your Business?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-contact-description">
            Let's discuss how we can help you achieve your goals. Get in touch for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact Info - Left Column */}
          <div className="lg:col-span-2 bg-gradient-to-br from-brand-blue to-brand-deep-blue text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-8" data-testid="text-contact-info-title">Get in Touch</h3>
            
            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm" data-testid="text-contact-email-label">Email</p>
                  <p className="text-blue-100" data-testid="text-contact-email">hello@buzzplussolutions.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm" data-testid="text-contact-phone-label">Phone</p>
                  <p className="text-blue-100" data-testid="text-contact-phone">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm" data-testid="text-contact-hours-label">Business Hours</p>
                  <p className="text-blue-100" data-testid="text-contact-hours">Mon - Fri: 9AM - 6PM</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-6 border-t border-blue-400">
              <p className="font-semibold mb-4 text-sm" data-testid="text-contact-social-title">Follow Us</p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center hover:bg-yellow-500 hover:scale-110 transition-all duration-300 shadow-lg" 
                  data-testid="link-contact-facebook"
                >
                  <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center hover:bg-yellow-500 hover:scale-110 transition-all duration-300 shadow-lg" 
                  data-testid="link-contact-twitter"
                >
                  <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center hover:bg-yellow-500 hover:scale-110 transition-all duration-300 shadow-lg" 
                  data-testid="link-contact-linkedin"
                >
                  <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center hover:bg-yellow-500 hover:scale-110 transition-all duration-300 shadow-lg" 
                  data-testid="link-contact-instagram"
                >
                  <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Column */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
              {/* First Name & Last Name Side by Side */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3" data-testid="label-first-name">First Name</label>
                  <Input
                    {...form.register("firstName")}
                    placeholder="John"
                    className="h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:ring-0 transition-colors"
                    data-testid="input-first-name"
                  />
                  {form.formState.errors.firstName && (
                    <p className="text-red-500 text-sm mt-2" data-testid="error-first-name">{form.formState.errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3" data-testid="label-last-name">Last Name</label>
                  <Input
                    {...form.register("lastName")}
                    placeholder="Doe"
                    className="h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:ring-0 transition-colors"
                    data-testid="input-last-name"
                  />
                  {form.formState.errors.lastName && (
                    <p className="text-red-500 text-sm mt-2" data-testid="error-last-name">{form.formState.errors.lastName.message}</p>
                  )}
                </div>
              </div>

              {/* Email Full Width */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3" data-testid="label-email">Email</label>
                <Input
                  {...form.register("email")}
                  type="email"
                  placeholder="john@example.com"
                  className="h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:ring-0 transition-colors"
                  data-testid="input-email"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-2" data-testid="error-email">{form.formState.errors.email.message}</p>
                )}
              </div>

              {/* Service Selection Full Width */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3" data-testid="label-service">Service Interested In</label>
                <Select value={selectedService} onValueChange={(value) => {
                  setSelectedService(value);
                  form.setValue("service", value);
                }}>
                  <SelectTrigger className="h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:ring-0 transition-colors" data-testid="select-service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service} data-testid={`option-service-${service.toLowerCase().replace(/\s+/g, '-')}`}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.formState.errors.service && (
                  <p className="text-red-500 text-sm mt-2" data-testid="error-service">{form.formState.errors.service.message}</p>
                )}
              </div>

              {/* Message Full Width */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3" data-testid="label-message">Message</label>
                <Textarea
                  {...form.register("message")}
                  rows={5}
                  placeholder="Tell us about your project and goals..."
                  className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:ring-0 transition-colors resize-none"
                  data-testid="input-message"
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm mt-2" data-testid="error-message">{form.formState.errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full h-14 bg-brand-blue text-white font-bold rounded-lg hover:bg-brand-deep-blue hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
                data-testid="button-contact-submit"
              >
                {contactMutation.isPending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
