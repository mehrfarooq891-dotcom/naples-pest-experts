import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Shield, Bug } from 'lucide-react';
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
          <div className="relative w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-6 transition-all shadow-lg shadow-primary/20">
             <Shield className="w-8 h-8 text-white" />
             <Bug className="w-3.5 h-3.5 text-white absolute top-[1.1rem] left-[1.1rem]" />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-bold tracking-tight leading-none transition-colors ${scrolled ? 'text-text-main' : 'text-white'}`}>Naples Pest</span>
            <span className={`text-[10px] font-black uppercase tracking-[0.2em] mt-1 transition-colors ${scrolled ? 'text-primary' : 'text-white/80'}`}>EXPERTS</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className={`hidden lg:flex items-center gap-8 text-sm font-medium transition-colors ${scrolled ? 'text-gray-600' : 'text-white'}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`hover:text-primary transition-colors ${scrolled ? (location.pathname === link.path ? 'text-primary font-bold' : '') : (location.pathname === link.path ? 'text-white font-bold' : '')}`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="tel:+12395550174" 
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all font-bold ${scrolled ? 'bg-gray-50 hover:bg-gray-100 text-text-main border-gray-200' : 'bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm'}`}
          >
            <Phone className={`w-4 h-4 ${scrolled ? 'text-primary' : 'text-white'}`} /> +1 239-555-0174
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden transition-colors ${scrolled ? 'text-text-main' : 'text-white'}`}>
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
