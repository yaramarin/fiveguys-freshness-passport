
import React, { useRef, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import IngredientCard from '../components/IngredientCard';
import Footer from '../components/Footer';

// Ingredient data
const ingredients = [
  {
    name: 'Premium Ground Beef',
    origin: 'Family Farms, Midwest USA',
    description: 'Our beef comes from premium cattle raised in the heart of America. Never frozen, always fresh, and ground daily in each restaurant.',
    image: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    category: 'Beef'
  },
  {
    name: 'Idaho Potatoes',
    origin: 'Snake River Valley, Idaho',
    description: 'Our fries are made from potatoes grown in Idaho\'s volcanic soil. Each batch is cut fresh daily and cooked in pure, cholesterol-free peanut oil.',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Potatoes'
  },
  {
    name: 'Artisan Buns',
    origin: 'Local Bakeries',
    description: 'Our buns are baked fresh using a secret recipe by local bakeries near each restaurant, ensuring the perfect blend of sweetness and texture.',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    category: 'Bakery'
  },
  {
    name: 'Fresh Tomatoes',
    origin: 'California Central Valley',
    description: 'Our tomatoes are vine-ripened under the California sun, hand-selected for optimal ripeness and delivered fresh to our restaurants.',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Vegetables'
  },
  {
    name: 'Crisp Lettuce',
    origin: 'Salinas Valley, California',
    description: 'Our lettuce is grown in the fertile Salinas Valley, known as the "Salad Bowl of the World," and delivered fresh to ensure the perfect crunch.',
    image: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
    category: 'Vegetables'
  },
  {
    name: 'Peanut Oil',
    origin: 'Southern United States',
    description: 'Our pure peanut oil is sourced from sustainable farms in the Southern United States, providing the perfect cooking medium for our famous fries.',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80',
    category: 'Condiments'
  }
];

const Index = () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (titleRef.current) {
            titleRef.current.classList.add('animate-fade-up');
          }
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* About section */}
      <section ref={aboutSectionRef} className="py-20 bg-fiveguys-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 
              ref={titleRef}
              className="text-3xl md:text-4xl font-bold mb-6 opacity-0"
            >
              Our Commitment to <span className="text-gradient">Quality</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Five Guys, we believe that the quality of our ingredients directly impacts the quality of our food. That's why we've created the Freshness Passport – a transparent look at where we source every ingredient that goes into making your favorite Five Guys meal.
            </p>
          </div>
        </div>
      </section>
      
      {/* Ingredients section */}
      <section id="ingredients" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Journey of <span className="text-gradient">Our Ingredients</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ingredients.map((ingredient, index) => (
              <IngredientCard
                key={ingredient.name}
                name={ingredient.name}
                origin={ingredient.origin}
                description={ingredient.description}
                image={ingredient.image}
                category={ingredient.category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Quality standards section */}
      <section className="py-20 bg-fiveguys-red">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Quality Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-full">
                  <svg className="w-8 h-8 text-fiveguys-red" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fresh, Never Frozen</h3>
                <p className="text-white/80">Our ingredients are delivered fresh to our restaurants, never frozen, preserving their natural flavors.</p>
              </div>
              
              <div className="p-6 rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-full">
                  <svg className="w-8 h-8 text-fiveguys-red" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ethical Sourcing</h3>
                <p className="text-white/80">We partner with farmers and suppliers who share our commitment to sustainable and ethical practices.</p>
              </div>
              
              <div className="p-6 rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-full">
                  <svg className="w-8 h-8 text-fiveguys-red" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Handcrafted Quality</h3>
                <p className="text-white/80">Every burger and batch of fries is handcrafted with care by our trained team members.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Taste the Five Guys Difference
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Experience the quality that comes from using the finest ingredients, prepared fresh daily. Visit your local Five Guys today.
            </p>
            <a 
              href="#" 
              className="px-8 py-3 bg-fiveguys-red text-white font-medium rounded-md hover:bg-red-700 transition-colors duration-300 inline-flex items-center"
            >
              Find Your Nearest Location
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
