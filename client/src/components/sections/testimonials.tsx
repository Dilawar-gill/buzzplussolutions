import TestimonialCard from "@/components/ui/testimonial-card";

export default function Testimonials() {
  const testimonials = [
    {
      content: "Buzzplussolutions transformed our online presence completely. Our website traffic increased by 400% and sales are through the roof!",
      author: "Michael Chen",
      position: "CEO, TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    },
    {
      content: "Their customer support team is incredible. Professional, responsive, and they truly care about our success. Highly recommended!",
      author: "Sarah Johnson",
      position: "Founder, Creative Studio",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    },
    {
      content: "The social media management has been game-changing. Our engagement rates increased 300% and we're getting leads daily now.",
      author: "David Rodriguez",
      position: "Owner, Local Restaurant",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" data-testid="text-testimonials-title">What Our Clients Say</h2>
          <p className="text-xl text-gray-600" data-testid="text-testimonials-subtitle">Real results from real businesses</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
