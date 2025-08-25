interface PortfolioCardProps {
  item: {
    title: string;
    description: string;
    image: string;
    category: string;
    result: string;
  };
  index: number;
}

export default function PortfolioCard({ item, index }: PortfolioCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow" data-testid={`card-portfolio-${index}`}>
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-48 object-cover"
        data-testid={`img-portfolio-${index}`}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2" data-testid={`text-portfolio-title-${index}`}>{item.title}</h3>
        <p className="text-gray-600 mb-4" data-testid={`text-portfolio-description-${index}`}>{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500" data-testid={`text-portfolio-category-${index}`}>{item.category}</span>
          <span className="text-brand-blue font-semibold" data-testid={`text-portfolio-result-${index}`}>{item.result}</span>
        </div>
      </div>
    </div>
  );
}
