import PortfolioCard from "@/components/ui/portfolio-card";

export default function PortfolioSection() {
  const portfolioItems = [
    {
      title: "E-commerce Platform",
      description: "Complete online store with payment integration and inventory management",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Website Development",
      result: "+180% Sales",
    },
    {
      title: "Social Media Campaign",
      description: "Multi-platform strategy that increased engagement and follower growth",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Social Media Management",
      result: "+320% Reach",
    },
    {
      title: "Brand Identity Design",
      description: "Complete rebrand including logo, colors, and marketing materials",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Graphic Design",
      result: "New Brand",
    },
    {
      title: "SEO Optimization",
      description: "Improved search rankings and organic traffic growth",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "SEO",
      result: "+450% Traffic",
    },
    {
      title: "Call Center Setup",
      description: "24/7 customer support operation with trained agents",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Call Center",
      result: "98% Satisfaction",
    },
    {
      title: "Content Strategy",
      description: "Blog and content marketing that drives qualified leads",
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Content Writing",
      result: "+275% Leads",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" data-testid="text-portfolio-title">Our Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-portfolio-description">
            See how we've helped businesses like yours achieve remarkable growth and success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
