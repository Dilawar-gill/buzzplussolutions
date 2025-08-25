import ServiceCard from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ServicesSection() {
  const services = [
    {
      title: "Website Development",
      description: "Custom, responsive websites that convert visitors into customers with modern design and optimal performance.",
      icon: "fas fa-code",
      color: "bg-brand-blue",
      features: ["Responsive Design", "E-commerce Integration", "CMS Solutions"],
    },
    {
      title: "SEO Optimization",
      description: "Boost your search rankings and organic traffic with data-driven SEO strategies and proven techniques.",
      icon: "fas fa-search",
      color: "bg-green-500",
      features: ["Keyword Research", "Technical SEO", "Content Optimization"],
    },
    {
      title: "Graphic Design",
      description: "Eye-catching visual designs that communicate your brand message and captivate your audience effectively.",
      icon: "fas fa-palette",
      color: "bg-purple-500",
      features: ["Brand Identity", "Marketing Materials", "Digital Graphics"],
    },
    {
      title: "Content Writing",
      description: "Compelling, SEO-optimized content that engages your audience and drives conversions across all platforms.",
      icon: "fas fa-pen-fancy",
      color: "bg-brand-orange",
      features: ["Blog Posts", "Social Media Copy", "Website Content"],
    },
    {
      title: "Social Media Management",
      description: "Strategic social media growth with engaging content, community management, and data-driven campaigns.",
      icon: "fas fa-share-alt",
      color: "bg-pink-500",
      features: ["Content Strategy", "Community Management", "Analytics & Reporting"],
    },
    {
      title: "Call Center Services",
      description: "Professional call agents and voice support to enhance customer experience and drive sales growth.",
      icon: "fas fa-phone",
      color: "bg-teal-500",
      features: ["Inbound Support", "Outbound Sales", "24/7 Coverage"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" data-testid="text-services-title">Our Expert Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-services-description">
            Comprehensive solutions to accelerate your business growth and streamline operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Chat Support CTA */}
        <div className="mt-16 bg-gradient-to-r from-brand-blue to-brand-deep-blue rounded-xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4" data-testid="text-chat-support-title">Need Chat Support Agents?</h3>
          <p className="text-xl mb-6 text-blue-100" data-testid="text-chat-support-description">Provide instant customer service with our trained chat support specialists</p>
          <Button 
            className="bg-brand-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            data-testid="button-chat-support-cta"
            asChild
          >
            <Link href="/contact">Get Chat Support Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
