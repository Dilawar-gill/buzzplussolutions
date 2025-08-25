import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon: string;
    color: string;
    features: string[];
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-shadow group" data-testid={`card-service-${index}`}>
      <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <i className={`${service.icon} text-white text-2xl`}></i>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4" data-testid={`text-service-title-${index}`}>{service.title}</h3>
      <p className="text-gray-600 mb-6" data-testid={`text-service-description-${index}`}>{service.description}</p>
      <ul className="text-sm text-gray-500 space-y-2 mb-6">
        {service.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-center" data-testid={`text-service-feature-${index}-${featureIndex}`}>
            <Check className="h-4 w-4 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Button 
        variant="ghost" 
        className="text-brand-blue font-semibold hover:text-brand-deep-blue transition-colors p-0"
        data-testid={`button-service-learn-more-${index}`}
      >
        Learn More <i className="fas fa-arrow-right ml-2"></i>
      </Button>
    </div>
  );
}
