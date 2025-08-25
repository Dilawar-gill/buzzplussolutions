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

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-gradient-to-br from-brand-blue to-brand-deep-blue text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6" data-testid="text-contact-info-title">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="text-brand-orange h-5 w-5 mr-4" />
                    <div>
                      <p className="font-semibold" data-testid="text-contact-email-label">Email</p>
                      <p className="text-blue-100" data-testid="text-contact-email">hello@buzzplussolutions.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-brand-orange h-5 w-5 mr-4" />
                    <div>
                      <p className="font-semibold" data-testid="text-contact-phone-label">Phone</p>
                      <p className="text-blue-100" data-testid="text-contact-phone">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-brand-orange h-5 w-5 mr-4" />
                    <div>
                      <p className="font-semibold" data-testid="text-contact-hours-label">Business Hours</p>
                      <p className="text-blue-100" data-testid="text-contact-hours">Mon - Fri: 9AM - 6PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-blue-400">
                  <p className="font-semibold mb-4" data-testid="text-contact-social-title">Follow Us</p>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors" data-testid="link-contact-facebook">
                      <i className="fab fa-facebook-f text-white"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors" data-testid="link-contact-twitter">
                      <i className="fab fa-twitter text-white"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors" data-testid="link-contact-linkedin">
                      <i className="fab fa-linkedin-in text-white"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors" data-testid="link-contact-instagram">
                      <i className="fab fa-instagram text-white"></i>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" data-testid="label-first-name">First Name</label>
                  <Input
                    {...form.register("firstName")}
                    placeholder="John"
                    className="w-full"
                    data-testid="input-first-name"
                  />
                  {form.formState.errors.firstName && (
                    <p className="text-red-500 text-sm mt-1" data-testid="error-first-name">{form.formState.errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" data-testid="label-last-name">Last Name</label>
                  <Input
                    {...form.register("lastName")}
                    placeholder="Doe"
                    className="w-full"
                    data-testid="input-last-name"
                  />
                  {form.formState.errors.lastName && (
                    <p className="text-red-500 text-sm mt-1" data-testid="error-last-name">{form.formState.errors.lastName.message}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" data-testid="label-email">Email</label>
                <Input
                  {...form.register("email")}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full"
                  data-testid="input-email"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1" data-testid="error-email">{form.formState.errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" data-testid="label-service">Service Interested In</label>
                <Select value={selectedService} onValueChange={(value) => {
                  setSelectedService(value);
                  form.setValue("service", value);
                }}>
                  <SelectTrigger className="w-full" data-testid="select-service">
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
                  <p className="text-red-500 text-sm mt-1" data-testid="error-service">{form.formState.errors.service.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" data-testid="label-message">Message</label>
                <Textarea
                  {...form.register("message")}
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full"
                  data-testid="input-message"
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm mt-1" data-testid="error-message">{form.formState.errors.message.message}</p>
                )}
              </div>
              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-deep-blue transition-colors"
                data-testid="button-contact-submit"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
