import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '/' },
    { name: 'Emergencies', path: '/emergency-pest-control-naples' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-gray-200 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
             <Shield className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-text-main leading-none">Naples Pest</span>
            <span className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mt-1">Experts</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`hover:text-primary transition-colors ${location.pathname === link.path ? 'text-primary font-bold' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="tel:+12395550174" 
            className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-text-main px-4 py-2 rounded-xl border border-gray-200 transition-all font-bold"
          >
            <Phone className="w-4 h-4 text-primary" /> +1 239-555-0174
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-text-main">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-8 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-300 z-50 shadow-2xl">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a href="tel:+12395550174" className="bg-primary text-white py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" /> +1 239-555-0174
          </a>
        </div>
      )}
    </nav>
  );
}
