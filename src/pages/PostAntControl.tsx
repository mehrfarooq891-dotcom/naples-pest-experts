import { Calendar, Clock, ChevronLeft, Phone, ShieldCheck, Bug, Droplets, ArrowRight, CheckCircle2, HelpCircle, AlertTriangle, ShieldAlert, Sparkles, Home, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PostAntControl() {
  const antTypes = [
    {
      type: "Ghost Ants",
      keywordRef: "ghost ants naples fl",
      size: "Tiny (1.3 to 1.5 mm)",
      appearance: "Dark head/thorax with translucent, pale abdomen & legs",
      habitat: "Kitchens, bathrooms, baseboards, potted plants",
      desc: "Extremely common in Southwest Florida. Called 'ghost' ants because their semi-translucent bodies make them nearly invisible except when moving across dark surfaces. They seek out sweet foods, syrups, and moisture."
    },
    {
      type: "Fire Ants",
      keywordRef: "fire ants naples florida",
      size: "Medium (2 to 6 mm)",
      appearance: "Reddish-brown to black, aggressive behaviour",
      habitat: "Sandy lawns, garden beds, sunny outdoor areas, driveways",
      desc: "A significant hazard in Naples yards. Fire ants build large, dome-like sandy nests and attack aggressively in swarms if disturbed, delivering painful, burning stings that can cause allergic reactions."
    },
    {
      type: "Carpenter Ants",
      size: "Large (6 to 13 mm)",
      appearance: "Reddish-black, segmented body, powerful jaws",
      habitat: "Damp wood, attic beams, wall voids, hollow trees",
      desc: "These large ants nest in moist or decaying structural wood. Unlike termites, they do not eat wood; instead, they hollow it out to build nests, leaving behind sawdust-like 'frass' and structural damage."
    },
    {
      type: "Bigheaded Ants",
      size: "Small to Medium (2 to 4 mm)",
      appearance: "Major workers have extremely oversized heads relative to bodies",
      habitat: "Under pavers, slab foundations, multi-queen supercolony trails",
      desc: "An invasive species highly prevalent in Southwest Florida. They form massive supercolonies with hundreds of thousands of members, creating dense trails along driveways, foundations, and throughout garden beds."
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEO 
        title="Ants in Your Naples Home — How to Get Rid of Them & Local Identification"
        description="Dealing with ghost ants or fire ants? Get expert advice on ant control naples fl. Learn why ants invade Naples homes and how local ant exterminators protect your home."
      />

      {/* Hero Header */}
      <section 
        className="relative pt-48 pb-24 px-8 overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg, #124A2F 0%, #061F13 100%)' }}
      >
        <div className="glow-primary opacity-20 -top-40 -right-40 scale-150"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors font-bold uppercase tracking-widest text-[10px]">
            <ChevronLeft className="w-4 h-4" /> Back to Intelligence Blog
          </Link>
          
          <div className="flex items-center justify-center gap-4 mb-6 uppercase font-black tracking-[0.3em] text-[10px]">
            <span className="text-white bg-white/10 px-4 py-1.5 rounded-full border border-white/20 uppercase tracking-[0.2em] flex items-center gap-1.5">
              <Bug className="w-3 h-3 text-emerald-400" /> Pest Advisory
            </span>
            <span className="text-white/60 flex items-center gap-2">
              <Calendar className="w-3 h-3" /> May 20, 2026
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
            Ants in Your Naples Home?<br/>
            Here is Why & How to Get Rid of Them<br/>
            <span className="italic font-bold underline decoration-white/20 underline-offset-8">A Southwest Florida Guide</span>
          </h1>

          <div className="w-48 h-[1px] bg-white/20 mx-auto mb-4"></div>
          <div className="text-white/40 text-[8px] font-black uppercase tracking-[2em] ml-[2em]">
            EXPERT ANT CONTROL INTEL
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-32 px-8 max-w-4xl mx-auto leading-relaxed text-[#1A1A1A] space-y-8 pt-12">
        <div className="prose prose-primary max-w-none">
          
          {/* Intro quote */}
          <p className="text-xl text-gray-500 mb-8 italic border-l-4 border-emerald-650/30 pl-8 py-2">
            "In general, if you see one ant in Southwest Florida, there are thousands more trailing behind. Understanding which species has entered your perimeter is the key to successfully reclaiming your kitchen and yard."
          </p>

          <h2 className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Naples: An Multi-Species Assembly of Household Ants</h2>
          <p>
            It is a classic Florida scenario: you leave a single drop of soda or a small crumb of crust on the kitchen counter, walk away for fifteen minutes, and return to find a dense, marching black line covering your backsplash. 
          </p>
          <p>
            Due to our tropical climate and humid conditions, our sandy terrain plays host to an incredibly diverse population of ant species. Successful <strong>ant control naples fl</strong> requires knowing which species has crossed your threshold, because baiting techniques that neutralize one type of ant could be completely ignored by another.
          </p>

          <h2 className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">4 Common Household Ants Found in Naples, Florida</h2>
          <p>
            While there are dozens of different species active throughout Collier County, the vast majority of residential invasions are caused by these four main culprits:
          </p>

          <div className="space-y-6 mt-6">
            {antTypes.map((item, index) => (
              <div key={index} className="p-6 rounded-3xl border border-gray-150 bg-slate-50/50 flex flex-col gap-4 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200/60 pb-3">
                  <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    {item.type}
                  </h3>
                  {item.keywordRef && (
                    <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                      Featured: {item.keywordRef}
                    </span>
                  )}
                </div>
                <div className="space-y-1.5 text-sm my-1">
                  <p className="text-gray-650">
                    <strong>Average Size:</strong> {item.size}
                  </p>
                  <p className="text-gray-650">
                    <strong>Typical Appearance:</strong> {item.appearance}
                  </p>
                  <p className="text-gray-650">
                    <strong>Primary Nesting Site:</strong> {item.habitat}
                  </p>
                </div>
                <p className="text-sm text-[#333] leading-relaxed italic border-l-2 border-gray-300 pl-4 py-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Why Do Ants Invade Naples Homes So Aggressively?</h2>
          <p>
            Many property owners feel frustrated, believing that seeing ants is a sign of a dirty house. In reality, even the most pristine, clinical kitchens in Naples suffer from ants. Ants enter structures seeking three fundamental resources:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="p-6 bg-[#f4fcf7] border border-emerald-100 rounded-2xl">
              <Droplets className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Moisture & Water</h3>
              <p className="text-xs text-gray-650 leading-relaxed">
                During hot dry spells, ants migrate inside for water. During the rainy season, heavy downpours flood their subterranean tunnels, forcing them inside to survive.
              </p>
            </div>
            
            <div className="p-6 bg-[#f4fcf7] border border-emerald-100 rounded-2xl">
              <Sparkles className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Constant Food Supply</h3>
              <p className="text-xs text-gray-650 leading-relaxed">
                From grease splatters on the stovetop to pet food bowls left on utility room floors, residential properties offer reliable sources of starch, protein, and sugars.
              </p>
            </div>

            <div className="p-6 bg-[#f4fcf7] border border-emerald-100 rounded-2xl">
              <Home className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Comfortable Shelter</h3>
              <p className="text-xs text-gray-650 leading-relaxed">
                AC-cooled walls, hollow doors, space beneath appliances, and cozy attic insulation offer excellent nesting spots safe from natural predators.
              </p>
            </div>
          </div>

          <h2 className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">The Real Pain Point: Yard Dangers of Fire Ants</h2>
          <p>
            While <strong>ghost ants naples fl</strong> inside the kitchen are primarily an annoying eyesore, pests in your yard can pose a genuine safety hazard. 
          </p>
          <p>
            In Southwest Florida, <strong>fire ants naples florida</strong> are a persistent nuisance. Unlike common garden ants, fire ants are extremely protective of their dome mounds. When a child, pet, or gardener accidentally steps near their structure, hundreds of insects can swarm up onto the victim simultaneously.
          </p>
          <p>
            Their stings are not just bites; they inject a painful alkaloid venom that causes intense burning, followed by itchy, white pustules that last for days. For sensitive individuals or senior residents with compromised immune systems, fire ant attacks can escalate to severe allergic reactions requiring urgent medical care.
          </p>

          <h2 className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">DIY Spraying vs. Professional Extermination</h2>
          <p>
            When ants show up, the instinct for many is to buy a quick can of aerosol insect spray from a retail store and douse the visible column. This is actually one of the worst mistakes you can make.
          </p>
          <p>
            Most consumer sprays are quick-kill repellents. When foraging ants die instantly on a trail, the rest of the underground colony detects the emergency chemical signal. Through a defensive survival mechanism called <em>budding</em>, the single queen ant will divide the colony into multiple smaller, satellite queens and disperse them in different directions throughout your walls, multiplying your infestation overnight.
          </p>
          <p>
            By hiring an experienced, licensed <strong>ant exterminator naples</strong>, you ensure the use of non-repellent baits. Ants walk through these advanced treatments, carry the active ingredient back deep into the heart of the nest, and share it with the queens, safely collapsing the entire network from within.
          </p>

          {/* Ant Cost/Pricing FAQ */}
          <div className="mt-20 pt-12 border-t border-gray-150">
            <h3 className="text-3xl font-medium text-[#1A1A1A] mb-10">Ant Control FAQ</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Why do ants keep coming back even after my home is cleaned?
                </h4>
                <p className="text-gray-650 pl-7">
                  Ants leave behind chemicals called pheromones as trail markers. Even when you sweep up crumb piles, the scent trail remains, guiding scouts from outdoor colonies directly back to the same cabinet. Professional surface cleaning is necessary to break these invisible paths.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Are your ant control treatments safe to use around my family and pets?
                </h4>
                <p className="text-gray-650 pl-7">
                  Yes, absolutely. Elite services prioritize integrated pest management (IPM) techniques. We use target-specific green baits placed securely inside child-resistant cracks and wall voids rather than running indiscriminate, chemical-heavy fogging programs.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" /> How long does it take to completely wipe out a ghost ant colony?
                </h4>
                <p className="text-gray-650 pl-7">
                  Because non-repellent treatments operate slowly to ensure ingestion reaches the colony's queens, you should expect to see ant trailing decrease drammatically over 48 to 72 hours, with complete colony crash achieved within 7 to 10 days of service.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 pt-12 border-t border-gray-200 text-center animate-fade-in">
            <div className="inline-block p-1 bg-emerald-50 rounded-full mb-6">
              <div className="bg-emerald-100 text-emerald-850 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Professional Collier County Pest Protection
              </div>
            </div>
            <h3 className="text-3xl font-medium text-[#1A1A1A] mb-4">Reclaim Your Home and Lawn from Ants Today</h3>
            <p className="mb-10 max-w-xl mx-auto text-gray-500 text-sm">
              Don't let ghost ants infest your pantry or fire ants take over your yard. Rely on the local specialists at Naples Pest Experts for dependable, family-friendly ant solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12395550174" className="inline-flex items-center gap-3 bg-emerald-800 text-white font-black py-4 px-10 rounded-2xl hover:bg-emerald-700 transition-all text-lg shadow-2xl shadow-emerald-900/20">
                <Phone className="w-5 h-5" /> Call Naples Pest Experts
              </a>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-white border border-gray-200 text-[#1A1A1A] font-bold py-4 px-10 rounded-2xl hover:bg-gray-50 transition-all text-lg">
                Get Free Estimate
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
                 { id: 'is-pest-control-safe-kids-pets-naples', title: "Is Pest Control Safe for Kids & Pets? Naples Families Ask", type: "Family First" },
                 { id: 'how-much-does-pest-control-cost-naples-fl', title: "How Much Does Pest Control Cost in Naples FL?", type: "Pricing Guide" }
               ].map(p => (
                 <Link key={p.id} to={`/blog/${p.id}`} className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-emerald-600/20 transition-all group flex flex-col justify-between h-56 shadow-sm hover:shadow-md">
                    <span className="text-[10px] font-bold text-emerald-700 tracking-[0.2em] uppercase">{p.type}</span>
                    <h4 className="text-2xl font-medium text-[#1A1A1A] leading-tight group-hover:text-emerald-700 transition-colors">{p.title}</h4>
                    <div className="text-xs font-bold text-gray-400 flex items-center gap-2 group-hover:text-emerald-700 transition-colors uppercase tracking-widest">
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
