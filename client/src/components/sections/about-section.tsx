import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AboutSection() {
  const stats = [
    { number: "250+", label: "Happy Clients" },
    { number: "500+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6" data-testid="text-about-title">About Buzzplussolutions</h2>
            <p className="text-xl text-gray-600 mb-6" data-testid="text-about-description">
              We're a passionate team of digital marketing experts and business process specialists dedicated to helping businesses thrive in the digital age.
            </p>
            <p className="text-gray-600 mb-8" data-testid="text-about-details">
              With years of experience across web development, SEO, social media, and customer support, we understand what it takes to build a successful online presence and streamline business operations for maximum growth.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" data-testid={`stat-${index}`}>
                  <div className="text-3xl font-bold text-brand-blue mb-2" data-testid={`stat-number-${index}`}>{stat.number}</div>
                  <div className="text-gray-600" data-testid={`stat-label-${index}`}>{stat.label}</div>
                </div>
              ))}
            </div>

            <Button 
              className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-deep-blue transition-colors"
              data-testid="button-about-meet-team"
              asChild
            >
              <Link href="/about">Meet Our Team</Link>
            </Button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team collaboration" 
              className="rounded-xl shadow-lg w-full"
              data-testid="img-about-team"
            />
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800 mb-1" data-testid="text-about-satisfaction">98%</div>
                <div className="text-gray-600 text-sm" data-testid="text-about-satisfaction-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
