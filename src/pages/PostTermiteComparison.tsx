import { Calendar, ChevronLeft, Phone, Bug, Droplets, ArrowRight, CheckCircle2, HelpCircle, ShieldAlert, FileText, Info, ShieldCheck, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PostTermiteComparison() {
  const comparisonData = [
    {
      feature: "Nesting Location",
      drywood: "Deep inside dry wooden structures (attic trusses, furniture, ceiling beams)",
      subterranean: "Deep underground in highly saturated sandy soil; build mud tubes to reach wood"
    },
    {
      feature: "Moisture Needs",
      drywood: "Extremely low; retrieve moisture strictly from air and digested cellulose",
      subterranean: "Extremely high; require constant contact with moist soil to avoid dehydration"
    },
    {
      feature: "Damage Speed",
      drywood: "Relatively slow (takes several years to notice massive structural failures)",
      subterranean: "Extremely rapid (can cause catastrophic structural damage in under a year)"
    },
    {
      feature: "Swarmer Flight Season",
      drywood: "Typically late spring to autumn; fly primarily at night around light sources",
      subterranean: "Primarily early spring (March to May) during warm days following rainstorms"
    },
    {
      feature: "Primary Evident Sign",
      drywood: "Shed translucent wings, tiny localized kick-out holes with grit-like fecal pellets",
      subterranean: "Earthen mud tubes on slab foundations, hollow-sounding wood, soil-packed galleries"
    },
    {
      feature: "Standard Local Treatment",
      drywood: "Whole-structure structural tent fumigation, or localized targeted foam/wood treatments",
      subterranean: "Soil chemical barrier systems, or advanced active subground baiting stations"
    }
  ];

  const signsDrywood = [
    "Pellets or Frass: Tiny hexagonal fecal droppings resembling coarse coffee grounds or sand beneath structures.",
    "Kick-out Holes: Tiny, pinhead-sized holes in drywall, trim, or doors where they push out droppings.",
    "Shed Translucent Wings: Discarded wings laying on windowsills, tables, or near light lenses.",
    "Surface Blistering: Thin wood surfaces or paint that appears bubbled, wavy, or sounds paper-thin."
  ];

  const signsSubterranean = [
    "Earthen Mud Tubes: Pencil-thick mud lines climbing up concrete slabs, brick footings, or drywall.",
    "Packed-Dirt Galleries: Wooden beams hollowed out along the grain and packed with sandy mud or soil.",
    "Hollow Timber Wood: Structural wood that sounds hollow or soft when tapped with a screwdriver.",
    "Daytime Swarmers: Hundreds of dark-bodied winged insects crawling out of walls onto windows during spring days."
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEO 
        title="Drywood vs Subterranean Termites in Naples — Identification Guide"
        description="Faced with a termite invasion? Compare drywood termites naples florida vs subterranean termites naples. Get expert termite identification naples tips here."
      />

      {/* Hero Header */}
      <section 
        className="relative pt-48 pb-24 px-8 overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg, #4A2C2A 0%, #1A0F0E 100%)' }}
      >
        <div className="glow-primary opacity-20 -top-40 -right-40 scale-150"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors font-bold uppercase tracking-widest text-[10px]">
            <ChevronLeft className="w-4 h-4" /> Back to Intelligence Blog
          </Link>
          
          <div className="flex items-center justify-center gap-4 mb-6 uppercase font-black tracking-[0.3em] text-[10px]">
            <span className="text-white bg-white/10 px-4 py-1.5 rounded-full border border-white/20 uppercase tracking-[0.2em] flex items-center gap-1.5">
              <Bug className="w-3 h-3 text-red-400" /> Termite Intel
            </span>
            <span className="text-white/60 flex items-center gap-2">
              <Calendar className="w-3 h-3" /> May 29, 2026
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
            Drywood vs Subterranean<br/>
            Termites in Naples —<br/>
            <span className="italic font-bold underline decoration-white/20 underline-offset-8">Know the Difference</span>
          </h1>

          <div className="w-48 h-[1px] bg-white/20 mx-auto mb-4"></div>
          <div className="text-white/40 text-[8px] font-black uppercase tracking-[2em] ml-[2em]">
            IDENTIFICATION & CONTROL PROTOCOLS
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-32 px-8 max-w-4xl mx-auto leading-relaxed text-[#1A1A1A] space-y-8 pt-12">
        <div className="prose prose-primary max-w-none">
          
          {/* Intro quote */}
          <p className="text-xl text-gray-500 mb-8 italic border-l-4 border-amber-800/20 pl-8 py-2">
            "Termites are Southwest Florida's single greatest threat to residential value. But treating them effectively requires identifying which enemy is at your gates. Drywood and Subterranean termites demand entirely different battle strategies."
          </p>

          <h2 id="two-enemies" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Two Different Enemies, Two Different Treatments</h2>
          <p>
            For homeowners in Southwest Florida, the question isn't whether you will meet termites, but rather <em>when</em>. However, treating termites is not a one-size-fits-all process. The absolute biggest mistake a property owner can make is assuming that any termite treatment will cure any infestation.
          </p>
          <p>
            Naples experiences aggressive pressure from two fundamentally distinct groups of structural wood-boring insects: <strong>drywood termites naples florida</strong> houses face in dry upper attics, and <strong>subterranean termites naples</strong> soils harbor underground. Because these pests occupy completely different ecological niches, treating subterranean termites with drywood systems (or vice-versa) guarantees treatment failure. Clean, professional <strong>termite identification naples</strong> is the foundation of structural defense.
          </p>

          <h2 id="comparison-table" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Side-by-Side Comparison</h2>
          <p className="mb-6">
            Understanding how these two major <strong>termite types florida</strong> hosts differ is the initial step:
          </p>

          <div className="overflow-x-auto my-8 border border-gray-150 rounded-3xl shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-gray-150 text-xs font-bold uppercase tracking-wider text-gray-500">
                  <th className="p-4 md:p-6 w-1/4">Metric / Feature</th>
                  <th className="p-4 md:p-6 w-3/8 text-amber-900 bg-amber-50/50">Drywood Termites</th>
                  <th className="p-4 md:p-6 w-3/8 text-red-900 bg-red-50/20">Subterranean Termites</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50/55 transition-colors">
                    <td className="p-4 md:p-6 font-bold text-gray-800">{row.feature}</td>
                    <td className="p-4 md:p-6 text-gray-500 bg-amber-50/10">{row.drywood}</td>
                    <td className="p-4 md:p-6 text-gray-500 bg-red-50/5">{row.subterranean}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="signs-identification" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Symptom Search: Warning Signs for Each Species</h2>
          <p>
            When searching for evidence of termites in your Naples home, keep your eyes open for these highly specific structural clues and behavioral signs:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="p-8 rounded-3xl border border-amber-100 bg-amber-50/20 flex flex-col gap-4 shadow-sm">
              <h3 className="text-xl font-bold text-amber-950 flex items-center gap-2">
                <Bug className="w-5 h-5 text-amber-600" /> Drywood Termite Clues
              </h3>
              <ul className="space-y-3">
                {signsDrywood.map((sign, index) => {
                  const [title, desc] = sign.split(':');
                  return (
                    <li key={index} className="text-sm text-[#333] leading-relaxed flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
                      <span><strong>{title}:</strong>{desc}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="p-8 rounded-3xl border border-red-100 bg-red-50/10 flex flex-col gap-4 shadow-sm">
              <h3 className="text-xl font-bold text-red-955 flex items-center gap-2">
                <Bug className="w-5 h-5 text-red-650" /> Subterranean Termite Clues
              </h3>
              <ul className="space-y-3">
                {signsSubterranean.map((sign, index) => {
                  const [title, desc] = sign.split(':');
                  return (
                    <li key={index} className="text-sm text-[#333] leading-relaxed flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                      <span><strong>{title}:</strong>{desc}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <h2 id="treatment-protocols" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Treatment Plan: How Exterminators Tackle Each Threat</h2>
          <p>
            Because these species target different areas and require different moisture structures, the treatment methods represent entirely different philosophies:
          </p>

          <div className="space-y-6">
            <div className="p-6 bg-slate-50 border border-gray-150 rounded-2xl">
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">Targeting Drywood Colonies</h3>
              <p className="text-sm text-gray-650 leading-relaxed mb-4">
                Drywood termites live fully inside structural wood, meaning they have no connection to the soil outside. Standard soil barriers will have zero effect.
              </p>
              <ul className="list-disc pl-6 text-xs text-gray-500 space-y-2">
                <li><strong>Tent Fumigation:</strong> The gold standard. The home is sealed under a specialized tarp, and a gas fumigant is introduced. The gas penetrates right into the heart of wood timbers, wiping out all colonies instantly.</li>
                <li><strong>Spot Wood Injection:</strong> For early-stage or highly localized drywood colonies, specialists apply pressurized direct termiticide foams or heat/microwave processes directly into the affected wooden structures.</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-50 border border-gray-150 rounded-2xl">
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">Tackling Subterranean Infestations</h3>
              <p className="text-sm text-gray-650 leading-relaxed mb-4">
                Subterranean termites require direct, daily access to moisture inside the soil. To destroy them, we must sever their lifeline down to the earth or intercept them before they reach the structure.
              </p>
              <ul className="list-disc pl-6 text-xs text-gray-500 space-y-2">
                <li><strong>Liquid Soil Barrier Systems:</strong> Technicians trench and treat the soil around the exact perimeter foundation of your slab, creating an invisible, non-repellent barrier that termites carry back to wipe out the nest.</li>
                <li><strong>Advanced Sentricon Baiting Stations:</strong> Ground stations containing highly appetizing cellulose baits are placed around your property. Termites feed on the bait, share it with the subterranean colony networks, and collapse the entire system.</li>
              </ul>
            </div>
          </div>

          <h2 id="greatest-threat" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">The Verdict: Which is More Dangerous in Naples?</h2>
          <p>
            Strictly in terms of **speed of destruction**, **Subterranean termites** (particularly the invasive Formosan super-colonies and Asian Subterranean species active in Southwest Florida) are significantly more dangerous. They contain millions of active workers per nest and can consume feet of structural framing, drywall, and woodwork in under six months.
          </p>
          <p>
            However, **Drywood termites** are dangerous in a different way: stealth. Because they live directly inside the wood without mud tubes or contact to the soil, drywood colonies can feed silently in your master bedroom ceiling beams or second-story wood trusses for a decade before a cosmetic bulge or structural sagging alerts you to their presence.
          </p>

          {/* Termite FAQ */}
          <div className="mt-20 pt-12 border-t border-gray-150">
            <h3 className="text-3xl font-medium text-[#1A1A1A] mb-10">Termite Identification FAQ</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-700 flex-shrink-0" /> How can I tell a winged termite from a flying ant?
                </h4>
                <p className="text-gray-650 pl-7 text-sm">
                  Termites possess straight, bead-like antennae, thick, uniform cylindrical waists (no segmentation), and four wings of identical size. Flying ants have bent ("elbowed") antennae, restricted cinched waists, and unequal wing sizes with the front wings being notably larger.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-700 flex-shrink-0" /> Do termites consume wood flooring as fast as drywall?
                </h4>
                <p className="text-gray-650 pl-7 text-sm">
                  Subterranean termites eat through soft drywall backing very rapidly. They can feed on oak or engineered wood floors, but they prefer soft woods like pine and fir. Regardless, any feeding on hardwood floors causes extensive, high-cost buckling.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-700 flex-shrink-0" /> Can I use store-bought spot sprays to kill subterranean nests?
                </h4>
                <p className="text-gray-650 pl-7 text-sm">
                  No. DIY spot sprays only kill the immediate foraging termites on contact. The remaining subterranean network (located 10 to 20 feet under your grass lawns) will simply close off that minor tunnel and tunnel up in a different wall, continuing their damage unnoticed.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 pt-12 border-t border-gray-250 text-center animate-fade-in">
            <div className="inline-block p-1 bg-amber-55/10 rounded-full mb-6">
              <div className="bg-amber-100 text-amber-950 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Collier County Certified Termite Identification
              </div>
            </div>
            <h3 className="text-3xl font-medium text-[#1A1A1A] mb-4">Request a Free Professional Termite Identification Audit</h3>
            <p className="mb-10 max-w-xl mx-auto text-gray-500 text-sm">
              Spotted swarmers, frass, or suspicious mud tubes? Schedule a drywood and subterranean inspection from the local certified termite experts before major damage is done.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12395550174" className="inline-flex items-center gap-3 bg-red-850 text-white font-black py-4 px-10 rounded-2xl hover:bg-red-750 transition-all text-lg shadow-2xl shadow-red-950/25">
                <Phone className="w-5 h-5" /> Book Termite Identification Service
              </a>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-white border border-gray-200 text-[#1A1A1A] font-bold py-4 px-10 rounded-2xl hover:bg-gray-50 transition-all text-lg">
                Get Free Assessment
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
                 { id: 'termite-season-naples-florida-what-homeowners-must-know', title: "Termite Season in Southwest Florida — What Naples Homeowners Must Know", type: "Termite Alert" },
                 { id: 'how-much-does-pest-control-cost-naples-fl', title: "How Much Does Pest Control Cost in Naples FL?", type: "Pricing Guide" }
               ].map(p => (
                 <Link key={p.id} to={`/blog/${p.id}`} className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-red-650/20 transition-all group flex flex-col justify-between h-56 shadow-sm hover:shadow-md">
                    <span className="text-[10px] font-bold text-red-700 tracking-[0.2em] uppercase">{p.type}</span>
                    <h4 className="text-2xl font-medium text-[#1A1A1A] leading-tight group-hover:text-red-750 transition-colors">{p.title}</h4>
                    <div className="text-xs font-bold text-gray-400 flex items-center gap-2 group-hover:text-red-700 transition-colors uppercase tracking-widest">
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
