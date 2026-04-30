import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Shield, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#1A2E1A] text-white pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Naples Pest Experts</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Southwest Florida's premier lead generation platform for professional pest control. 
            Ranked #1 for reliability and local expertise in Naples, Collier County, and beyond.
          </p>
          <div className="flex gap-4">
             <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors text-white"><Facebook className="w-4 h-4" /></a>
             <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors text-white"><Twitter className="w-4 h-4" /></a>
             <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors text-white"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Our Services</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/termite-control-naples" className="hover:text-primary transition-colors">Termite Control</Link></li>
            <li><Link to="/cockroach-control-naples" className="hover:text-primary transition-colors">Rodent & Roach Control</Link></li>
            <li><Link to="/mosquito-control-naples" className="hover:text-primary transition-colors">Mosquito Solutions</Link></li>
            <li><Link to="/bed-bug-treatment-naples" className="hover:text-primary transition-colors">Bed Bug Heat Treatment</Link></li>
            <li><Link to="/emergency-pest-control-naples" className="hover:text-red-400 transition-colors font-bold text-red-500">24/7 Emergency Response</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Service Areas</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/service-areas" className="hover:text-primary transition-colors">Naples Park</Link></li>
            <li><Link to="/service-areas" className="hover:text-primary transition-colors">Marco Island</Link></li>
            <li><Link to="/service-areas" className="hover:text-primary transition-colors">Bonita Springs</Link></li>
            <li><Link to="/service-areas" className="hover:text-primary transition-colors">Cape Coral</Link></li>
            <li><Link to="/service-areas" className="hover:text-primary transition-colors">Estero & Golden Gate</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>4821 Tamiami Trail N, <br/>Naples, FL 34103</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <a href="tel:+12395550174" className="hover:text-primary font-bold text-white transition-colors">+1 239-555-0174</a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>leads@naplespestexperts.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-[0.2em]">
          © 2026 Naples Pest Experts • All Rights Reserved • Licensed #JB193775
        </p>
        <div className="flex gap-6 text-[10px] text-gray-400 font-bold uppercase">
           <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
           <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
