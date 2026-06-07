import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Paint Correction', href: '#services' },
    { name: 'Ceramic Coating', href: '#services' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-panel shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="https://b3600126a9f8f38e474c.cdn6.editmysite.com/uploads/b/b3600126a9f8f38e474c2d9f56a4dd73ccfc39ce59457fc9d759517d59f2d85f/ag%20letter_1780095805.jpeg?width=2400" 
              alt="Aris Detailing Logo" 
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full border-2 border-amber-500 shadow-lg"
            />
            <span className="font-orbitron font-bold text-xl md:text-2xl tracking-wider text-white hidden sm:block">ARIS<span className="text-amber-500">DETAILING</span></span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-amber-500 transition-colors uppercase tracking-wide">
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact" className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-obsidian font-semibold rounded-sm transition-all duration-300 tracking-wide text-sm uppercase">
              Book Mobile Service
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel absolute top-full left-0 right-0 border-t-0 p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="block text-gray-300 hover:text-amber-500 font-medium py-2 uppercase tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="block text-center w-full px-6 py-3 bg-amber-500 hover:bg-amber-600 text-obsidian font-semibold rounded-sm transition-all duration-300 uppercase tracking-wide"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Mobile Service
          </a>
        </div>
      )}
    </header>
  );
}
