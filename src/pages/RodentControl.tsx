import { ShieldCheck, AlertTriangle, Search, Zap, Phone, ArrowRight, Star, Clock, Home, Building2 } from 'lucide-react';
import SEO from '../components/SEO';
import Schema from '../components/Schema';

export default function RodentControl() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Rodent Control & Exclusion",
    "description": "Professional rat and mouse elimination in Naples, FL. We specialize in exclusion to keep rodents out for good.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Naples Pest Experts"
    }
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title="Rodent Control Naples FL — Rat & Mouse Exterminators"
        description="Keep rats and mice out of your Naples home. Naples Pest Experts specializes in rodent exclusion, trapping, and sanitation. Call +1 239-555-0174."
      />
      <Schema data={serviceSchema} />

      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-white px-8 overflow-hidden">
        <div className="glow-primary opacity-20 -top-40 -left-40 scale-150"></div>
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-sm">
             <ShieldCheck className="w-4 h-4 text-primary" />
             <span className="text-primary font-mono text-[10px] uppercase tracking-[0.2em] font-bold">Structural Exclusion Experts</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium text-text-main mb-8 tracking-tight leading-[1.1]">
            Rodent-Free <br/>
            <span className="text-primary font-bold">Living Forever</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
            Rats and mice don't just destroy food—they chew through electrical wiring, creating fire hazards in your attic. In Naples, "Roof Rats" are an epidemic. Naples Pest Experts doesn't just trap rodents; we seal your home so they can't come back.
          </p>
          <a href="tel:+12395550174" className="bg-primary text-white font-black py-5 px-10 rounded-2xl shadow-xl flex items-center justify-center gap-3 hover:opacity-90 transition-all hover:scale-105 active:scale-95 text-xl">
            <Phone className="w-6 h-6" /> Block the Entry: +1 239-555-0174
          </a>
        </div>
      </section>

      {/* The Difference Section */}
      <section className="py-24 bg-white px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
         <div className="order-2 md:order-1 relative">
            <div className="aspect-square rounded-[3rem] bg-surface border border-gray-100 flex items-center justify-center relative overflow-hidden shadow-xl\">
               <div className="text-center p-10 relative z-10">
                  <Home className="w-20 h-20 text-primary/20 mb-6 mx-auto" />
                  <h3 className="text-text-main font-medium text-xl mb-4\">Whole-Home Exclusion</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6\">"A mouse can fit through a hole the size of a dime. We find every dime-sized hole in your Naples residence and seal it with galvanized mesh."</p>
               </div>
            </div>
         </div>
         <div className="order-1 md:order-2">
            <h2 className="text-4xl font-medium text-text-main mb-8 underline decoration-primary/30 underline-offset-8">Our 3-Phase Rodent Strategy</h2>
            <div className="space-y-12">
               {[
                 { t: "Exclusion & Sealing", d: "The most important step. We audit your roof shingles, soffit vents, and pipe entries, sealing every potential entry point with professional-grade materials." },
                 { t: "Safe Extraction", d: "We utilize humane and fast-acting trapping systems to remove existing rodents from your attic and interior spaces." },
                 { t: "Sanitation & Odor Control", d: "Rodent droppings carry disease. We offer full attic sanitation services to remove biohazards and nesting materials left behind." }
               ].map((step, idx) => (
                 <div key={idx} className="flex gap-6 group">
                   <div className="text-2xl font-black text-gray-100 group-hover:text-primary/20 transition-colors w-10">0{idx+1}</div>
                   <div>
                     <h4 className="text-text-main font-medium mb-2 text-lg">{step.t}</h4>
                     <p className="text-gray-500 text-sm leading-relaxed">{step.d}</p>
                   </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto bg-surface p-16 rounded-[3rem] border border-gray-100 shadow-2xl text-center relative overflow-hidden">
          <h2 className="text-4xl font-medium text-text-main mb-8 leading-tight">Hear Noises in the Attic?</h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto text-lg">
            Don't wait for them to chew through your AC ducts or wiring. 
            Naples' rodent exclusion experts are a phone call away.
          </p>
          <a href="tel:+12395550174" className="inline-flex items-center gap-3 bg-primary text-white font-bold py-5 px-12 rounded-2xl hover:opacity-90 transition-all text-xl shadow-2xl shadow-primary/20">
            <Phone className="w-6 h-6" /> Get Your Free Attic Check: +1 239-555-0174
          </a>
        </div>
      </section>
    </div>
  );
}
