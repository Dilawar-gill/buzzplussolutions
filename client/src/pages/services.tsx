import ServicesSection from "@/components/sections/services-section";

export default function Services() {
  return (
    <div className="pt-16">
      <div className="bg-brand-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-testid="text-services-page-title">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto" data-testid="text-services-page-description">
            Comprehensive digital solutions to grow your business and streamline operations
          </p>
        </div>
      </div>
      <div className="bg-white -mt-16 relative z-10 rounded-t-3xl">
        <ServicesSection />
      </div>
    </div>
  );
}
