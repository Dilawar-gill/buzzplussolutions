import ContactSection from "@/components/sections/contact-section";

export default function Contact() {
  return (
    <div className="pt-16">
      <div className="bg-brand-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-testid="text-contact-page-title">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto" data-testid="text-contact-page-description">
            Ready to take your business to the next level? Let's start the conversation
          </p>
        </div>
      </div>
      <div className="bg-white -mt-16 relative z-10 rounded-t-3xl">
        <ContactSection />
      </div>
    </div>
  );
}
