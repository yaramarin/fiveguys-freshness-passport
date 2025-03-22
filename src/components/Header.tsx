
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-fiveguys-red font-bold text-xl md:text-2xl">FIVE GUYS</span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-fiveguys-black hover:text-fiveguys-red transition-colors duration-200 font-medium">
              Menu
            </a>
            <a href="#" className="text-fiveguys-black hover:text-fiveguys-red transition-colors duration-200 font-medium">
              Locations
            </a>
            <a href="#" className="text-fiveguys-red transition-colors duration-200 font-medium border-b-2 border-fiveguys-red">
              Freshness Passport
            </a>
            <a href="#" className="text-fiveguys-black hover:text-fiveguys-red transition-colors duration-200 font-medium">
              Our Story
            </a>
          </nav>
          
          <div className="flex md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-fiveguys-black hover:text-fiveguys-red transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white absolute w-full left-0 transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      } overflow-hidden shadow-md`}>
        <div className="px-4 pt-2 pb-6 space-y-4">
          <a href="#" className="block py-2 text-fiveguys-black hover:text-fiveguys-red transition-colors font-medium">
            Menu
          </a>
          <a href="#" className="block py-2 text-fiveguys-black hover:text-fiveguys-red transition-colors font-medium">
            Locations
          </a>
          <a href="#" className="block py-2 text-fiveguys-red transition-colors font-medium">
            Freshness Passport
          </a>
          <a href="#" className="block py-2 text-fiveguys-black hover:text-fiveguys-red transition-colors font-medium">
            Our Story
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
