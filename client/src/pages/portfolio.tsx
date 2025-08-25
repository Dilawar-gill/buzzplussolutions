import PortfolioSection from "@/components/sections/portfolio-section";

export default function Portfolio() {
  return (
    <div className="pt-16">
      <div className="bg-brand-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-testid="text-portfolio-page-title">Portfolio</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto" data-testid="text-portfolio-page-description">
            Discover the success stories and results we've achieved for our clients
          </p>
        </div>
      </div>
      <div className="bg-gray-50 -mt-16 relative z-10 rounded-t-3xl">
        <PortfolioSection />
      </div>
    </div>
  );
}
