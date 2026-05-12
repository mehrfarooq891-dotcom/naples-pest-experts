import { MapPin, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function ServiceAreas() {
  const areas = [
    {
      name: "Naples",
      detail: "Our primary service hub. With humid summers and dense residential areas like Old Naples, we focus on roach prevention and mosquito control.",
      risk: "High Humidity - Termite Magnet"
    },
    {
      name: "Marco Island",
      detail: "The waterfront luxury homes here face extreme moisture levels. We specialize in dock-side spider control and deep-ground termite barriers.",
      risk: "Salt Air Corrosion & Spider Infestations"
    },
    {
      name: "Bonita Springs",
      detail: "Mixing older homes with newer developments, Bonita Springs requires a hybrid approach for rodent exclusion and preventative treatments.",
      risk: "Rodent Colony Proximity"
    },
    {
      name: "Estero",
      detail: "The residential growth in Estero has disturbed many natural habitats, leading to increased ant and lizard issues in private communities.",
      risk: "Habitual Ant Hills"
    },
    {
      name: "Golden Gate",
      detail: "Our Golden Gate team handles larger lot sizes where mosquito control and perimeter 'barrier shields' are the top priority.",
      risk: "Large Lot Mosquito Density"
    },
    {
      name: "Cape Coral",
      detail: "Across the bridge, Cape Coral's sprawling canal system makes it a paradise for pests. We offer specialized canal-side baiting stations.",
      risk: "Waterfront Pest Pressure"
    }
  ];

  return (
    <div className="flex flex-col">
      <SEO 
        title="Pest Control Service Areas — Naples, Marco Island & Bonita Springs"
        description="Naples Pest Experts serves the entire Southwest Florida region including Marco Island, Estero, Cape Coral, and more. Local experts for every neighborhood."
      />
      
      <section 
        className="relative pt-40 pb-32 px-8 overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg, #1B6B3A 0%, #0f4a28 100%)' }}
      >
        <div className="glow-primary opacity-20 -top-40 -left-40 scale-150"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl font-medium text-white mb-6 tracking-tight">Local Experts in Every Corner of Collier County</h1>
          <p className="text-xl text-gray-100 mb-12">
            We don't just cover Naples. Our fleet is stationed strategically across Southwest Florida to ensure rapid response times, 
            wherever you are.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {areas.map((area) => (
          <div key={area.name} className="p-10 rounded-[2.5rem] bg-surface border border-gray-100 hover:border-primary/30 transition-all flex flex-col shadow-sm">
             <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="text-2xl font-medium text-text-main">{area.name}</h3>
             </div>
             <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
               {area.detail}
             </p>
             <div className="mt-auto">
                <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mb-4">Principal Risk: {area.risk}</span>
                <button className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider hover:gap-4 transition-all hover:text-primary/80">
                   View Area Map <ArrowRight className="w-4 h-4" />
                </button>
             </div>
          </div>
        ))}
      </section>

      <section className="py-24 bg-white px-8 text-center border-y border-gray-100 shadow-inner relative overflow-hidden">
         <div className="glow-primary opacity-10"></div>
         <h2 className="text-3xl font-medium text-text-main mb-6 relative z-10">Don't See Your Location Listed?</h2>
         <p className="text-gray-500 mb-10 max-w-xl mx-auto relative z-10 text-lg">
           We often travel within a 45-mile radius of the Naples city center. Give us a call to verify if our technicians can reach your property today.
         </p>
         <a href="tel:+12395550174" className="inline-flex items-center gap-3 bg-primary text-white font-bold py-4 px-8 rounded-xl hover:opacity-90 transition-all shadow-xl shadow-primary/20">
            Verify Service Area: +1 239-555-0174
         </a>
      </section>
    </div>
  );
}
