import { Bug, ShieldCheck, Zap, Droplets, Phone, ArrowRight, Star, Heart, Clock, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';
import Schema from '../components/Schema';

export default function CockroachControl() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Cockroach Elimination",
    "description": "Expert cockroach extermination in Naples, FL. We target German roaches, American roaches (Palmetto bugs), and more.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Naples Pest Experts"
    }
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title="Cockroach Control Naples FL — Get Rid of Roaches Today"
        description="Fast, effective cockroach control in Naples, FL. We eliminate German roaches and Palmetto bugs with guaranteed results. Call +1 239-555-0174."
      />
      <Schema data={serviceSchema} />

      {/* Hero */}
      <section 
        className="relative pt-40 pb-32 px-8 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a1a0a, #3d3d00)' }}
      >
        <div className="glow-primary opacity-30 -top-40 -right-40 scale-150"></div>
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
             <Bug className="w-4 h-4 text-white" />
             <span className="text-white font-mono text-[10px] uppercase tracking-[0.2em] font-bold">Naples' Leading Exterminators</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
            Total Cockroach <br/>
            <span className="text-white font-bold">Elimination</span>
          </h1>
          <p className="text-xl text-gray-100 mb-12 max-w-3xl leading-relaxed">
            From the massive "Palmetto Bugs" to the invasive German Cockroach, roaches are a health hazard and a nuisance. Naples Pest Experts uses medical-grade baits and growth regulators to wipe out infestations in kitchens, bathrooms, and utility areas.
          </p>
          <a href="tel:+12395550174" className="bg-primary text-white font-black py-5 px-10 rounded-2xl shadow-xl flex items-center justify-center gap-3 hover:opacity-90 transition-all hover:scale-105 active:scale-95 text-xl">
            <Phone className="w-6 h-6" /> Stop the Roaches: +1 239-555-0174
          </a>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-24 bg-white px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-medium text-text-main mb-8 underline decoration-primary/30 underline-offset-8">Why Roaches Love Naples Homes</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Southwest Florida's high humidity and rainy seasons create a paradise for cockroaches. They don't just enter your home for food; they enter for moisture and shelter from the intense Florida sun.
          </p>
          <div className="space-y-6">
            {[
              { t: "German Cockroaches", d: "Small, fast-breeding, and highly resistant to DIY sprays. These thrive in kitchens and around electronics." },
              { t: "American Cockroaches (Palmetto Bugs)", d: "The giant flying roaches common in Naples. They enter through drains and attic vents." },
              { t: "Asian Cockroaches", d: "Often mistaken for German roaches, these are attracted to lights and fly frequently." },
              { t: "Smokybrown Cockroaches", d: "These prefer the moist, dark environments of Florida landscapes and mulch beds." }
            ].map(type => (
              <div key={type.t} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/20 transition-all shadow-sm">
                <h4 className="text-text-main font-medium mb-2">{type.t}</h4>
                <p className="text-sm text-gray-500">{type.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-3xl bg-surface border border-gray-100 flex items-center justify-center relative overflow-hidden shadow-xl">
             <div className="text-center p-12">
                <AlertTriangle className="w-16 h-16 text-primary/40 mb-4 mx-auto" />
                <h3 className="text-text-main font-medium mb-2">Did You Know?</h3>
                <p className="text-gray-500 text-sm italic">"One pair of German cockroaches can produce over 30,000 descendants in a single year in the warm Naples climate."</p>
             </div>
          </div>
          {/* Floating Stat */}
          <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-white border border-gray-100 shadow-2xl">
             <div className="text-2xl font-bold text-text-main">99%</div>
             <div className="text-[10px] text-primary uppercase font-bold tracking-widest">Initial Kill Rate</div>
          </div>
        </div>
      </section>

      {/* AEO Block */}
      <section className="py-24 px-8 bg-white border-y border-gray-100">
         <div className="max-w-4xl mx-auto bg-surface p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <h3 className="text-text-main font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
               <Zap className="w-4 h-4 text-primary" /> AEO Question Answered
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">
              "How do I get rid of cockroaches permanently in Naples, FL?"
            </p>
            <p className="text-gray-500 leading-relaxed">
              To permanently get rid of cockroaches in Naples, you must address three pillars: <strong>Source Elimination</strong> (gel baits in hiding spots), <strong>Exclusion</strong> (sealing gaps under doors and around pipes), and <strong>Moisture Control</strong> (fixing leaky faucets). Professional exterminators use IGRs (Insect Growth Regulators) which stop the breeding cycle, combined with professional-grade residual sprays that create a long-lasting barrier. Naples homeowners should prioritize kitchen sanitation and avoid leaving pet food out overnight to prevent re-infestation.
            </p>
         </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center rounded-[3rem] p-16 bg-surface border border-gray-100 shadow-xl">
          <h2 className="text-4xl font-medium text-text-main mb-6">Ready for a Roach-Free Kitchen?</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
            Our technicians use the safest, most effective gel baits and sprays in the industry. 
            Same-day service available in most of Naples.
          </p>
          <a href="tel:+12395550174" className="inline-flex items-center gap-3 bg-primary text-white font-bold py-5 px-12 rounded-2xl hover:opacity-90 transition-all text-xl shadow-2xl shadow-primary/20">
            <Phone className="w-6 h-6" /> Get Your Free Quote: +1 239-555-0174
          </a>
        </div>
      </section>
    </div>
  );
}
