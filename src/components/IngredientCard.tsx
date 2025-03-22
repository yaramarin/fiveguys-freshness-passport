
import React, { useRef, useEffect, useState } from 'react';

interface IngredientCardProps {
  name: string;
  origin: string;
  description: string;
  image: string;
  category: string;
  index: number;
}

const IngredientCard: React.FC<IngredientCardProps> = ({ 
  name, 
  origin, 
  description, 
  image, 
  category,
  index
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'vegetables':
        return 'bg-green-100 text-green-800';
      case 'beef':
        return 'bg-red-100 text-red-800';
      case 'potatoes':
        return 'bg-yellow-100 text-yellow-800';
      case 'bakery':
        return 'bg-amber-100 text-amber-800';
      case 'condiments':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div
      ref={cardRef}
      className={`ingredient-card rounded-lg overflow-hidden transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="ingredient-image w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`badge ${getCategoryColor(category)}`}>
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-sm font-medium text-fiveguys-red mb-3">Origin: {origin}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default IngredientCard;
