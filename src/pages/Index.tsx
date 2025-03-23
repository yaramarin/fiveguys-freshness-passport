import React, { useRef, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import IngredientCard from '../components/IngredientCard';
import IngredientsPassport from '../components/IngredientsPassport';
import Footer from '../components/Footer';

// Ingredient data
const ingredients = [
  {
    name: 'Premium Ground Beef',
    origin: 'Dehesas de Extremadura, Spain',
    description: 'Our beef comes from the finest free-range cattle raised in the rich pastures of Extremadura. Never frozen, always fresh, and ground daily in each restaurant.',
    image: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    category: 'Beef'
  },
  {
    name: 'Galician Potatoes',
    origin: 'Ribeira Sacra, Galicia, Spain',
    description: 'Our fries are made from potatoes grown in the fertile soil of Galicia. Each batch is cut fresh daily and cooked in pure, cholesterol-free Spanish olive oil.',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Potatoes'
  },
  {
    name: 'Artisan Buns',
    origin: 'Local Bakeries in Madrid',
    description: 'Our buns are baked fresh using a secret recipe by local bakeries in Madrid, ensuring the perfect blend of sweetness and texture with traditional Spanish baking methods.',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    category: 'Bakery'
  },
  {
    name: 'Fresh Tomatoes',
    origin: 'Huerta de Murcia, Spain',
    description: 'Our tomatoes are vine-ripened under the Mediterranean sun in Murcia, hand-selected for optimal ripeness and delivered fresh to our restaurants daily.',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Vegetables'
  },
  {
    name: 'Crisp Lettuce',
    origin: 'El Ejido, Almería, Spain',
    description: 'Our lettuce is grown in the greenhouse capital of Europe, Almería, known for its perfect growing conditions, and delivered fresh daily to ensure the perfect crunch.',
    image: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
    category: 'Vegetables'
  },
  {
    name: 'Peanut Oil',
    origin: 'Andalusia, Spain',
    description: 'Our premium peanut oil is sourced from sustainable farms in Andalusia, providing the perfect cooking medium for our famous fries with authentic Spanish flavor.',
    image: '/lovable-uploads/5d4da4d1-f715-40ba-aae9-f60f6a662193.png',
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
              Our Commitment to <span className="text-gradient">Fresh Quality</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Five Guys, we believe that the quality of our ingredients directly impacts the quality of our food. That's why we've created the Freshness Passport – a transparent look at where we source every ingredient that goes into making your favorite Five Guys meal.
            </p>
            <div className="flex items-center justify-center mt-8">
              <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <p className="font-semibold text-left">
                  Every ingredient delivered <span className="text-green-600">fresh daily</span><br />
                  <span className="text-sm font-normal text-gray-500">No freezers in our restaurants</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ingredients cards section */}
      <section id="ingredients" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Journey of <span className="text-gradient">Our Fresh Ingredients</span>
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-gray-700">
            We partner with farmers who share our passion for quality and freshness. 
            Our ingredients travel from farm to restaurant in record time to maintain peak freshness.
          </p>
          
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
      
      {/* Freshness Guarantee section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-green-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="p-1 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                    <div className="w-28 h-28 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h3 className="text-2xl font-bold mb-4 text-center md:text-left">The Five Guys Freshness Guarantee</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>All produce delivered within 24-48 hours of harvest</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Beef ground fresh every morning in each restaurant</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>No freezers in our restaurants - only coolers</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Potatoes cut fresh daily for our signature fries</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ingredients Passport section */}
      <section className="py-20 bg-fiveguys-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            The Complete <span className="text-gradient">Freshness Passport</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Our commitment to transparency means we share every fresh ingredient that goes into our menu items. 
            Discover the complete list in our official Freshness Passport.
          </p>
          
          <IngredientsPassport />
        </div>
      </section>
      
      {/* Quality standards section */}
      <section className="py-20 bg-fiveguys-red">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Fresh Quality Standards</h2>
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
                <h3 className="text-xl font-semibold mb-2">Handcrafted Daily</h3>
                <p className="text-white/80">Every burger and batch of fries is handcrafted with care by our trained team members using fresh ingredients.</p>
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
              Taste the Five Guys Fresh Difference
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Experience the quality that comes from using the finest fresh ingredients, prepared daily. Visit your local Five Guys today.
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
