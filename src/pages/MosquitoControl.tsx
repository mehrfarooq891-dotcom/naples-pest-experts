import { Droplets, ShieldCheck, Sun, Wind, Phone, ArrowRight, Star, Clock, Zap, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import Schema from '../components/Schema';

export default function MosquitoControl() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mosquito Control & Misting",
    "description": "Professional mosquito barrier treatments and misting systems in Naples, FL.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Naples Pest Experts"
    }
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title="Mosquito Control Naples FL — Outdoor Protection Systems"
        description="Reclaim your backyard with Naples' best mosquito control. Barrier sprays and misting systems to protect your family in Naples, FL. Call +1 239-555-0174."
      />
      <Schema data={serviceSchema} />

      {/* Hero */}
      <section 
        className="relative pt-40 pb-32 px-8 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a2a1a, #1B6B3A)' }}
      >
        <div className="glow-primary opacity-30 -top-40 -left-40 scale-150 animate-pulse"></div>
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
             <Wind className="w-4 h-4 text-white" />
             <span className="text-white font-mono text-[10px] uppercase tracking-[0.2em] font-bold">Outdoor Living Protection</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
            Enjoy Your Yard <br/>
            <span className="text-white font-bold">Without the Bite</span>
          </h1>
          <p className="text-xl text-gray-100 mb-12 max-w-3xl leading-relaxed">
            Naples is a tropical paradise, but the mosquitoes don't have to be part of your evening. Our advanced misting barriers and growth regulators target mosquitoes exactly where they hide, ensuring your pool deck and lanai stay bug-free.
          </p>
          <a href="tel:+12395550174" className="bg-primary text-white font-black py-5 px-10 rounded-2xl shadow-xl flex items-center justify-center gap-3 hover:opacity-90 transition-all hover:scale-105 active:scale-95 text-xl">
            <Phone className="w-6 h-6" /> Schedule Mosquito Spray: +1 239-555-0174
          </a>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="py-24 bg-white px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
         {[
           { 
             title: "Monthly Barrier Shield", 
             desc: "A custom-mixed residual spray applied to the foliage around your yard. It creates a 21-day protection zone where mosquitoes rest, killing them on contact.",
             icon: <ShieldCheck className="w-7 h-7" />
           },
           { 
             title: "Habitat Remediation", 
             desc: "We identify and neutralize micro-breeding grounds in your landscape, from bromeliads to gutters, stopping the lifecycle before it starts.",
             icon: <Droplets className="w-7 h-7" />
           },
           { 
             title: "Event Protection", 
             desc: "Hosting a wedding or BBQ in Naples? Our rapid-knockdown treatment clears the area of mosquitoes just hours before the event starts.",
             icon: <Star className="w-7 h-7" />
           },
           { 
             title: "Automated Misting", 
             desc: "The ultimate solution for large coastal estates. Discreet nozzles dispense a fine mist at peak mosquito activity times, day or night.",
             icon: <Clock className="w-7 h-7" />
           }
         ].map(item => (
           <div key={item.title} className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-primary/20 transition-all flex gap-8 group shadow-sm hover:shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-medium text-text-main mb-4 leading-tight">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
           </div>
         ))}
      </section>

      {/* AEO Block */}
      <section className="py-24 px-8 bg-surface border-y border-gray-100">
         <div className="max-w-4xl mx-auto bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <Sun className="w-24 h-24 text-primary" />
            </div>
            <div className="relative z-10">
               <h3 className="text-text-main font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" /> Naples AEO Insight
               </h3>
               <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">
                 "How can homeowners reduce mosquitoes in Southwest Florida?"
               </p>
               <p className="text-gray-500 leading-relaxed">
                 In Southwest Florida, homeowners should utilize the <strong>Tip, Toss, and Turn</strong> method: Tip over containers that hold water, Toss out trash or clutter, and Turn over large objects like wheelbarrows. Additionally, since Naples is home to the Aedes aegypti mosquito, which breeds in small amounts of water, homeowners should treat decorative plants like bromeliads with mosquito dunks (BTI) and maintain a professional barrier spray service throughout the wet summer months (May through October) when populations peak.
               </p>
            </div>
         </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto glass-panel p-16 rounded-[3rem] border border-primary/20 text-center relative overflow-hidden bg-surface shadow-2xl">
          <h2 className="text-4xl font-medium text-text-main mb-8 leading-tight">Ready for a Bug-Free Backyard?</h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto text-lg">
            Protect your family from Zika, West Nile, and Heartworm. 
            Get Naples' premier outdoor defense plan today.
          </p>
          <a href="tel:+12395550174" className="inline-flex items-center gap-3 bg-primary text-white font-bold py-5 px-12 rounded-2xl hover:opacity-90 transition-all text-xl shadow-2xl shadow-primary/20">
            <Phone className="w-6 h-6" /> Start Protection: +1 239-555-0174
          </a>
        </div>
      </section>
    </div>
  );
}
