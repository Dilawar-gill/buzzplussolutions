import AboutSection from "@/components/sections/about-section";

export default function About() {
  return (
    <div className="pt-16">
      <div className="bg-brand-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-testid="text-about-page-title">About Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto" data-testid="text-about-page-description">
            Learn about our mission, team, and commitment to your success
          </p>
        </div>
      </div>
      <div className="bg-gray-50 -mt-16 relative z-10 rounded-t-3xl">
        <AboutSection />
      </div>
    </div>
  );
}
