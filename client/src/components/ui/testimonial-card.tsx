import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: {
    content: string;
    author: string;
    position: string;
    avatar: string;
  };
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl" data-testid={`card-testimonial-${index}`}>
      <div className="flex items-center mb-4">
        <div className="flex text-brand-orange">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
      </div>
      <p className="text-gray-600 mb-6 italic" data-testid={`text-testimonial-content-${index}`}>"{testimonial.content}"</p>
      <div className="flex items-center">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.author} 
          className="w-12 h-12 rounded-full mr-4"
          data-testid={`img-testimonial-avatar-${index}`}
        />
        <div>
          <p className="font-semibold text-gray-800" data-testid={`text-testimonial-author-${index}`}>{testimonial.author}</p>
          <p className="text-sm text-gray-500" data-testid={`text-testimonial-position-${index}`}>{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
}
