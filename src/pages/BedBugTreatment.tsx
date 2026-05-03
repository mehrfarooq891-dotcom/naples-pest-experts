import { ShieldCheck, AlertTriangle, Moon, Zap, Phone, ArrowRight, Star, Clock, Home, Search } from 'lucide-react';
import SEO from '../components/SEO';
import Schema from '../components/Schema';

export default function BedBugTreatment() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bed Bug Treatment & Remediation",
    "description": "Professional bed bug heat and chemical treatments in Naples, FL. Discreet and guaranteed elimination.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Naples Pest Experts"
    }
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title="Bed Bug Treatment Naples FL — Fast, Discreet Extermination"
        description="Don't lose another night's sleep. Naples Pest Experts offers advanced bed bug heat and chemical treatments in Naples, FL. Fast and guaranteed. Call +1 239-555-0174."
      />
      <Schema data={serviceSchema} />

      {/* Hero */}
      <section 
        className="relative pt-40 pb-32 px-8 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2a0a0a, #8B0000)' }}
      >
        <div className="glow-primary opacity-20 -top-40 -left-40 scale-150"></div>
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
             <AlertTriangle className="w-4 h-4 text-white" />
             <span className="text-white font-mono text-[10px] uppercase tracking-[0.2em] font-bold">Priority Crisis Response</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
            Guaranteed Bed Bug <br/>
            <span className="text-white font-bold">Elimination</span>
          </h1>
          <p className="text-xl text-gray-100 mb-12 max-w-3xl leading-relaxed">
            Bed bugs can happen to anyone. In Naples' high-traffic seasonal environment, they spread quickly through travel and rentals. Our team provides discreet, comprehensive remediation that kills every stage of the lifecycle—from eggs to adults—guaranteed.
          </p>
          <a href="tel:+12395550174" className="bg-primary text-white font-black py-5 px-10 rounded-2xl shadow-xl flex items-center justify-center gap-3 hover:opacity-90 transition-all hover:scale-105 active:scale-95 text-xl">
            <Phone className="w-6 h-6" /> Emergency Inspection: +1 239-555-0174
          </a>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-white px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-medium text-text-main mb-8 underline decoration-red-500/30 underline-offset-8">Signs You Have Bed Bugs</h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            Bed bugs are nocturnal and incredibly small. If you notice these signs in your bedroom or guest room, you likely have an active infestation that requires professional help.
          </p>
          <ul className="space-y-6">
            {[
              { t: "Dark Spotting on Sheets", d: "Small rusty or reddish stains on bed sheets or mattresses caused by crushed bed bugs." },
              { t: "Morning Bites", d: "Waking up with small, red, itchy welts—often appearing in a straight line or cluster." },
              { t: "Visible Shells", d: "Finding translucent, pale yellow skins that nymphs shed as they grow larger." },
              { t: "A Musty Odor", d: "A sweet, heavy odor produced by the bed bugs' scent glands." }
            ].map(sign => (
              <li key={sign.t} className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500 flex-shrink-0 group-hover:bg-red-100 transition-all">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-text-main font-medium mb-1">{sign.t}</h4>
                  <p className="text-sm text-gray-500">{sign.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-surface p-10 rounded-[3rem] border border-gray-100 shadow-xl">
           <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-medium text-text-main">The Heat Solution</h3>
           </div>
           <p className="text-gray-600 text-sm leading-[1.8] mb-8">
             For extreme infestations in Naples, we utilize <strong>Thermal Remediation</strong>. By raising the temperature of an affected room to 120°F+, we achieve a 100% kill rate in a single visit without the need for extensive chemical use. This is the preferred method for Naples luxury hotels and high-end rentals.
           </p>
           <div className="p-6 rounded-2xl bg-white border border-gray-100 text-xs text-gray-400 font-bold uppercase tracking-widest shadow-sm">
              Thermal Kill Index: 100% Effective
           </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center rounded-[3rem] p-16 bg-red-50 border border-red-100 shadow-xl">
          <h2 className="text-4xl font-medium text-text-main mb-6 leading-tight">Don't Suffer Another Night</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
            Our treatments are discreet, arriving in unmarked vehicles for your privacy. 
            Sleep comfortably knowing Naples' best bed bug team is on the case.
          </p>
          <a href="tel:+12395550174" className="inline-flex items-center gap-3 bg-red-600 text-white font-bold py-5 px-12 rounded-2xl hover:opacity-90 transition-all text-xl shadow-2xl shadow-red-500/20">
            <Phone className="w-6 h-6" /> Immediate Crisis Help: +1 239-555-0174
          </a>
        </div>
      </section>
    </div>
  );
}
