import { Calendar, Clock, ChevronLeft, Phone, ShieldCheck, Bug, Thermometer, Wind, Droplets, ArrowRight, CheckCircle2, HelpCircle, AlertTriangle, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PostTermiteSeason() {
  const termiteTypes = [
    {
      type: "Subterranean Termites",
      character: "Ground-Based Colonies",
      signs: "Mud tubes on foundation, softwood damage, discarded wings",
      hazard: "Very High - Can destroy structural integrity rapidly",
      colorBg: "bg-orange-50/65 border-orange-100",
      pillColor: "bg-orange-100 text-orange-800",
      desc: "These termites live in the soil and build mud tubes to reach wood. They are the most destructive type in Florida due to their massive colony sizes."
    },
    {
      type: "Drywood Termites",
      character: "Timber-Based Colonies",
      signs: "Frass (kick-out holes with sand-like pellets), hollow-sounding wood",
      hazard: "Medium-High - Slow but persistent structural damage",
      colorBg: "bg-yellow-50/65 border-yellow-100",
      pillColor: "bg-yellow-100 text-yellow-800",
      desc: "Drywood termites don't need contact with the soil. They live entirely within the wood they consume, making them harder to detect without professional help."
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEO 
        title="Termite Season in Naples Florida (2025 Guide) — Prevention & Swarms"
        description="Termite season naples florida typically runs March to May. Learn about termite swarm naples, subterranean termite treatment naples, and prevention tips."
      />

      {/* Hero Header */}
      <section 
        className="relative pt-48 pb-24 px-8 overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg, #4a2c2a 0%, #1a0f0e 100%)' }}
      >
        <div className="glow-primary opacity-10 -bottom-40 -left-40 scale-150"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors font-bold uppercase tracking-widest text-[10px]">
            <ChevronLeft className="w-4 h-4" /> Back to Intelligence Blog
          </Link>
          
          <div className="flex items-center justify-center gap-4 mb-6 uppercase font-black tracking-[0.3em] text-[10px]">
            <span className="text-white bg-white/10 px-4 py-1.5 rounded-full border border-white/20 uppercase tracking-[0.2em] flex items-center gap-1.5">
              <ShieldAlert className="w-3 h-3 text-orange-400" /> Seasonal Alert
            </span>
            <span className="text-white/60 flex items-center gap-2">
              <Calendar className="w-3 h-3" /> May 18, 2026
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
            Termite Season in Southwest Florida:<br/>
            What Naples Homeowners Must Know<br/>
            <span className="italic font-bold underline decoration-white/20 underline-offset-8">2025 Prevention Guide</span>
          </h1>

          <div className="w-48 h-[1px] bg-white/20 mx-auto mb-4"></div>
          <div className="text-white/40 text-[8px] font-black uppercase tracking-[2em] ml-[2em]">
            STRUCTURAL RISK ADVISORY
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-32 px-8 max-w-4xl mx-auto leading-relaxed text-[#1A1A1A] space-y-8 pt-12">
        <div className="prose prose-primary max-w-none">
          
          {/* Intro */}
          <p className="text-xl text-gray-500 mb-8 italic border-l-4 border-orange-600/30 pl-8 py-2">
            "In Naples, it's not a matter of 'if' termites will find your home, but 'when.' Between March and May, the swarms begin, and silent destruction follows if you aren't prepared."
          </p>

          <h2 className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">The Swarming Season: March to May in Naples</h2>
          <p>
            As the humidity rises and the first spring rains arrive in Southwest Florida, a biological clock triggers one of the most stressful events for homeowners: <strong>termite season naples florida</strong>. This period, typically spanning from late March through May, is when colonies send out winged "reproductives" or swarmers to start new colonies.
          </p>
          <p>
            A <strong>termite swarm naples</strong> doesn't necessarily mean your house is falling down, but it is the ultimate red flag. It means there is a mature colony nearby—and potentially already inside your walls. Understanding these seasonal patterns is the first step in effective <strong>termite prevention florida</strong>.
          </p>

          <h2 className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Two Silent Invaders: Termite Types in Naples</h2>
          <p>
            Homeowners in Naples generally face two distinct threats. While both consume cellulose (wood), their habits and required treatments vary significantly:
          </p>

          <div className="space-y-6 mt-6">
            {termiteTypes.map((item, index) => (
              <div key={index} className={`p-6 rounded-3xl border ${item.colorBg} flex flex-col gap-4 shadow-sm`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
                  <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                    <Bug className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    {item.type}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${item.pillColor}`}>
                      {item.character}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 font-medium">
                    <strong className="text-orange-900">Primary Signs:</strong> {item.signs}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong className="text-red-900">Risk Level:</strong> {item.hazard}
                  </p>
                  <p className="text-[#1A1A1A] text-sm leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Why Naples Soil is a Termite Paradise</h2>
          <p>
            Naples offers a "perfect storm" for termite activity. Our local environment checks every box for a thriving colony:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="p-6 bg-orange-50/30 border border-orange-100 rounded-2xl">
              <Droplets className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">High Moisture</h3>
              <p className="text-sm text-gray-650 leading-relaxed">
                Southwest Florida's water table is high, and our tropical downpours keep the sandy soil moist—essential for subterranean termite survival.
              </p>
            </div>
            
            <div className="p-6 bg-orange-50/30 border border-orange-100 rounded-2xl">
              <Thermometer className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Steady Heat</h3>
              <p className="text-sm text-gray-650 leading-relaxed">
                Termites are cold-blooded. Our year-round warm temperatures allow colonies to remain active and foraging 365 days a year.
              </p>
            </div>

            <div className="p-6 bg-orange-50/30 border border-orange-100 rounded-2xl">
              <Wind className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Humidity</h3>
              <p className="text-sm text-gray-650 leading-relaxed">
                High humidity prevents worker termites from drying out as they forage above ground, allowing them to expand into your attic spaces.
              </p>
            </div>
          </div>

          <h2 className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Prevention: Stop Them Before the Swarm</h2>
          <p>
            Don't wait for wings in your window tracks. Proactive <strong>termite prevention florida</strong> starts with these steps:
          </p>
          <ul className="list-none space-y-4 my-6">
            <li className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <span><strong>Eliminate Wood-to-Soil Contact:</strong> Ensure your home's siding or stucco starts at least 6 inches above the soil line.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <span><strong>Manage Drainage:</strong> Point all downspouts away from the foundation and fix any leaky outdoor faucets immediately.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <span><strong>Annual Inspections:</strong> A professional ear can find termites you can't see. Regular audits are the only way to catch them early.</span>
            </li>
          </ul>

          <h2 className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">What to Do if You See Swarmers</h2>
          <p>
            If you wake up to hundreds of winged insects near a sliding door or light fixture, follow these steps:
          </p>
          <div className="bg-slate-900 text-white p-8 rounded-3xl my-8">
            <ol className="list-decimal list-inside space-y-4">
              <li><strong>Don't Panic:</strong> Swarmers don't bite or sting. They are looking for a place to start a family, not eat your house right this second.</li>
              <li><strong>Save Some Samples:</strong> Place a few in a Ziploc bag or clear tape. Accurate identification is critical for the right treatment.</li>
              <li><strong>Look for the Source:</strong> Try to see where they are coming from. Wings left on windowsills are a big clue.</li>
              <li><strong>Call the Professionals:</strong> <strong>Subterranean termite treatment naples</strong> requires specialized equipment and chemicals you can't buy at big-box stores.</li>
            </ol>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 pt-12 border-t border-gray-100">
            <h3 className="text-3xl font-medium text-[#1A1A1A] mb-10">Termite Season FAQ</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-orange-600 flex-shrink-0" /> Are those ants or termites swarming?
                </h4>
                <p className="text-gray-650 pl-7">
                  It's a common mistake. Termites have straight antennae, thick waists, and two pairs of wings of equal length. Ants have elbowed antennae, pinched waists, and unequal wing sizes. If you aren't sure, save a sample!
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-orange-600 flex-shrink-0" /> Does my homeowners insurance cover termite damage?
                </h4>
                <p className="text-gray-650 pl-7">
                  In almost all cases, no. Insurance companies consider termite damage a "preventable maintenance issue." This is why a professional "termite bond" or guarantee is so valuable in Naples.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-orange-600 flex-shrink-0" /> How often should I get inspected in Naples?
                </h4>
                <p className="text-gray-650 pl-7">
                  Given the high termite pressure in Collier County, an annual professional inspection is the absolute minimum recommendation for all single-family homes and structures.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 pt-12 border-t border-gray-100 text-center animate-fade-in">
            <div className="inline-block p-1 bg-orange-50 rounded-full mb-6">
              <div className="bg-orange-100 text-orange-850 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Protect Your Property Investment
              </div>
            </div>
            <h3 className="text-3xl font-medium text-[#1A1A1A] mb-6">Book Your Pre-Season Termite Audit</h3>
            <p className="mb-10 max-w-xl mx-auto text-[#1A1A1A]">
              Don't wait for swarmers to appear. Naples Pest Experts provides the most comprehensive termite defense systems in Collier County, including Sentricon and liquid barriers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12395550174" className="inline-flex items-center gap-3 bg-orange-800 text-white font-black py-4 px-10 rounded-2xl hover:bg-orange-700 transition-all text-lg shadow-2xl shadow-orange-900/20">
                <Phone className="w-5 h-5" /> Speak with Naples Pest Experts
              </a>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-white border border-gray-200 text-[#1A1A1A] font-bold py-4 px-10 rounded-2xl hover:bg-gray-50 transition-all text-lg">
                Schedule Free Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Posts */}
      <section className="py-24 px-8 border-t border-gray-100 bg-surface">
         <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-medium text-[#1A1A1A] mb-10 uppercase tracking-widest">Continue Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                 { id: 'signs-you-have-termites-naples', title: "7 Warning Signs of Termite Infestation", type: "Homeowner IQ" },
                 { id: 'how-much-does-pest-control-cost-naples-fl', title: "How Much Does Pest Control Cost in Naples FL?", type: "Pricing Guide" }
               ].map(p => (
                 <Link key={p.id} to={`/blog/${p.id}`} className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-orange-600/20 transition-all group flex flex-col justify-between h-56 shadow-sm hover:shadow-md">
                    <span className="text-[10px] font-bold text-orange-700 tracking-[0.2em] uppercase">{p.type}</span>
                    <h4 className="text-2xl font-medium text-[#1A1A1A] leading-tight group-hover:text-orange-700 transition-colors">{p.title}</h4>
                    <div className="text-xs font-bold text-gray-400 flex items-center gap-2 group-hover:text-orange-700 transition-colors uppercase tracking-widest">
                       Read Post <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
