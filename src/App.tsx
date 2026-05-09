import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import TermiteControl from './pages/TermiteControl';
import CockroachControl from './pages/CockroachControl';
import MosquitoControl from './pages/MosquitoControl';
import BedBugTreatment from './pages/BedBugTreatment';
import RodentControl from './pages/RodentControl';
import EmergencyPestControl from './pages/EmergencyPestControl';
import ServiceAreas from './pages/ServiceAreas';
import Blog from './pages/Blog';
import PostTermiteSigns from './pages/PostTermiteSigns';
import PostRoachControl from './pages/PostRoachControl';
import PostMosquitoControl from './pages/PostMosquitoControl';
import PostMosquitoSeason from './pages/PostMosquitoSeason';
import PostBedBugTreatment from './pages/PostBedBugTreatment';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import { useEffect } from 'react';

// Simplified About & Contact are now formal pages

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

import { useLocation } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#050508] text-slate-200 font-sans antialiased overflow-x-hidden relative">
        {/* Atmospheric Background Glows */}
        <div className="glow-purple opacity-20 pointer-events-none"></div>
        <div className="glow-blue opacity-10 pointer-events-none -bottom-40 -right-40"></div>
        
        <Navigation />
        
        <main className="flex-1 relative z-10 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/termite-control-naples" element={<TermiteControl />} />
            <Route path="/cockroach-control-naples" element={<CockroachControl />} />
            <Route path="/mosquito-control-naples" element={<MosquitoControl />} />
            <Route path="/bed-bug-treatment-naples" element={<BedBugTreatment />} />
            <Route path="/rodent-control-naples" element={<RodentControl />} />
            <Route path="/emergency-pest-control-naples" element={<EmergencyPestControl />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/signs-you-have-termites-naples" element={<PostTermiteSigns />} />
            <Route path="/blog/roach-prevention-summer-naples" element={<PostRoachControl />} />
            <Route path="/blog/mosquito-control-guide-naples" element={<PostMosquitoControl />} />
            <Route path="/blog/mosquito-season-naples-preparation" element={<PostMosquitoSeason />} />
            <Route path="/blog/bed-bug-treatment-naples" element={<PostBedBugTreatment />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        <Footer />

        {/* Visual Overlay Effect */}
        <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050508]/40 z-20 overflow-hidden"></div>
      </div>
    </Router>
  );
}
