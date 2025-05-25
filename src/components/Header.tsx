
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 portfolio-navy shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-white">
            Oki Dwi Yulianto
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white hover:text-portfolio-yellow transition-colors duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 text-white hover:text-portfolio-yellow transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
