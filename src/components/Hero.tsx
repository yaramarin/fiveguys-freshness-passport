
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const overlay = overlayRef.current;

    if (title && subtitle && overlay) {
      title.classList.add('animate-fade-up');
      setTimeout(() => {
        subtitle.classList.add('animate-fade-up');
      }, 300);
      setTimeout(() => {
        overlay.classList.add('opacity-60');
      }, 600);
    }
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <img 
          src="https://images.unsplash.com/photo-1612392166886-ee8475b03af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
          alt="Fresh ingredients" 
          className="w-full h-full object-cover object-center animate-blur-in"
        />
      </div>
      
      {/* Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-black opacity-40 transition-opacity duration-1000"
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 bg-white text-fiveguys-red rounded-full text-sm font-semibold mb-4 animate-fade-up animation-delay-300">FARM TO TABLE FRESHNESS</span>
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0"
          >
            The Freshness Passport
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-white mb-8 opacity-0"
          >
            Discover the journey of our hand-selected, <span className="font-bold underline decoration-fiveguys-red">never frozen</span> ingredients that make every Five Guys meal exceptional.
          </p>
          <div className="mt-8 opacity-0 animate-fade-up animation-delay-600">
            <a 
              href="#ingredients" 
              className="px-8 py-3 bg-fiveguys-red text-white font-medium rounded-md hover:bg-red-700 transition-colors duration-300 inline-flex items-center"
            >
              Explore Our Fresh Ingredients
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
