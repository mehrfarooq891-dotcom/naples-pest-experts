import { Calendar, ChevronLeft, Phone, Bug, Droplets, ArrowRight, CheckCircle2, HelpCircle, ShieldAlert, Sparkles, Eye, Info, ShieldCheck, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PostPalmettoBugs() {
  const bugFacts = [
    {
      title: "American Cockroach (Periplaneta americana)",
      category: "The Classic Palmetto Bug",
      indicators: "Reddish-brown, fully developed wings, very fast runner, capable of flight",
      size: "Large (1.5 to 2.1 inches long)",
      desc: "This is the primary insect most locals mean when they say 'palmetto bug.' They are drawn to wet areas and frequently glide from tree trunks, roofs, or palm trees into home attics or crawlspaces."
    },
    {
      title: "Smokybrown Cockroach (Periplaneta fuliginosa)",
      category: "The Dark Invader",
      indicators: "Very dark mahogany brown, highly prone to dehydration, nocturnal flyer",
      size: "Large (1.2 to 1.5 inches long)",
      desc: "Highly common in Southwest Florida gardens, gutters, and dense trees. They require high structural moisture to survive and enter home structures when outdoor mulch beds dry out during dry spells."
    },
    {
      title: "Florida Woods Cockroach (Eurycotis floridana)",
      category: "The 'Stink' Bug",
      indicators: "Dark, thick-bodied, short wing pads (can't fly), emits strong musky defense odor",
      size: "Robust (1.2 to 1.6 inches long)",
      desc: "They live under decaying logs, leaves, and damp bark. Unlike other roaches, they reproduce slowly and rarely establish breeding networks inside homes, but create alarm when they wander indoors."
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEO 
        title="What Are Palmetto Bugs & Why Are They in Naples? (Action Guide)"
        description="Shocked by big roaches naples fl? Learn the truth about palmetto bugs naples florida, how they differ from typical roaches, and when to call a palmetto bug exterminator."
      />

      {/* Hero Header */}
      <section 
        className="relative pt-48 pb-24 px-8 overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg, #3B2314 0%, #170E08 100%)' }}
      >
        <div className="glow-primary opacity-20 -top-40 -left-40 scale-150"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors font-bold uppercase tracking-widest text-[10px]">
            <ChevronLeft className="w-4 h-4" /> Back to Intelligence Blog
          </Link>
          
          <div className="flex items-center justify-center gap-4 mb-6 uppercase font-black tracking-[0.3em] text-[10px]">
            <span className="text-white bg-white/10 px-4 py-1.5 rounded-full border border-white/20 uppercase tracking-[0.2em] flex items-center gap-1.5">
              <Bug className="w-3 h-3 text-amber-500" /> Pest Intelligence
            </span>
            <span className="text-white/60 flex items-center gap-2">
              <Calendar className="w-3 h-3" /> May 28, 2026
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
            What Are Palmetto Bugs<br/>
            & Why Are They Everywhere in Naples?
          </h1>

          <div className="w-48 h-[1px] bg-white/20 mx-auto mb-4"></div>
          <div className="text-white/40 text-[8px] font-black uppercase tracking-[2em] ml-[2em]">
            FLORIDA COCKROACH BRIEFING
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-32 px-8 max-w-4xl mx-auto leading-relaxed text-[#1A1A1A] space-y-8 pt-12">
        <div className="prose prose-primary max-w-none">
          
          {/* Intro quote */}
          <p className="text-xl text-gray-500 mb-8 italic border-l-4 border-amber-800/20 pl-8 py-2">
            "For newcomers to Naples, encountering a two-inch insect that suddenly flies directly toward them is a dramatic, unforgettable initiation. Let's separate coastal myth from biological reality."
          </p>

          <h2 id="newcomers-shock" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Naples Newcomers are Always Shocked</h2>
          <p>
            You have just moved into your dream villa in Naples, Florida, enjoying the lush foliage, pristine golf courses, and spectacular sunset views. Then, you open your utility closet or walk out onto your patio at night, and freeze. Staring back at you is a massive, prehistoric-looking insect with waving antennae. You tap your foot, and instead of scurrying away, it spreads its wings and flies straight into your living room.
          </p>
          <p>
            Welcome to Southwest Florida! You have just met your first "palmetto bug." Finding these **big roaches naples fl** residents talk about is a standard rite of passage. But what exactly are they, and how do you prevent them from taking over your domestic sanctuary?
          </p>

          <h2 id="bug-vs-cockroach" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Palmetto Bug vs. Cockroach: What Is the Difference?</h2>
          <p>
            Here is the honest biological truth: **a palmetto bug is a cockroach**. 
          </p>
          <p>
            In Florida, "palmetto bug" is largely a polite, regional euphemism used to describe several species of large cockroaches that live outdoors. While "cockroach" carries a dirty, unsanitary connotation associated with tiny German cockroaches, "palmetto bug" sounds a bit more natural. 
          </p>
          <p>
            In Southwest Florida, the label typically refers to three large outdoor species of areawide **florida cockroach naples** properties experience:
          </p>

          <div className="space-y-6 mt-6">
            {bugFacts.map((bug, index) => (
              <div key={index} className="p-6 rounded-3xl border border-gray-150 bg-slate-50/50 flex flex-col gap-4 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200/60 pb-3">
                  <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                    <Bug className="w-5 h-5 text-amber-900 flex-shrink-0" />
                    {bug.title}
                  </h3>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-100 text-amber-905">
                    {bug.category}
                  </span>
                </div>
                <div className="space-y-1 text-sm text-gray-500">
                  <p><strong>Average Size:</strong> {bug.size}</p>
                  <p><strong>Primary Characteristics:</strong> {bug.indicators}</p>
                </div>
                <p className="text-sm text-[#333] leading-relaxed italic border-l-2 border-amber-600 pl-4 py-0.5">
                  {bug.desc}
                </p>
              </div>
            ))}
          </div>

          <h2 id="climate-hotspot" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Why the Naples Climate is a Palmetto Bug Paradise</h2>
          <p>
            To understand why **palmetto bugs naples florida** are everywhere, we have to look outside at our coastal environment. Pests do not invade your home to be malicious—our regional climate simply nurtures them flawlessly:
          </p>
          <ul className="list-none space-y-4 my-6">
            <li className="flex gap-3">
              <Droplets className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
              <span><strong>Intense Humidity and Heat:</strong> These insects are tropical by nature. Naples' year-round warm temperatures and high humidity keep their respiratory organs lubricated, allowing them to thrive and expand.</span>
            </li>
            <li className="flex gap-3">
              <Droplets className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
              <span><strong>Heavy Rain Forcing Migration:</strong> During our heavy summer downpours, outdoor nesting spots in hollow palm trees or mulch fills become completely flooded. To survive, they move upwards and search for dry gaps along your home's exterior fascia or door sweeps.</span>
            </li>
            <li className="flex gap-3">
              <Droplets className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
              <span><strong>Lush Landscaping:</strong> Our beautiful neighborhood canopies—Spanish moss, live oak trees, and saw palmettos—provide abundant organic decaying materials, which represent their favorite food source.</span>
            </li>
          </ul>

          <h2 id="hiding-spots" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Where They Sneak and Hide in Your Naples Home</h2>
          <p>
            When palmetto bugs transition indoors, they seek out dark, moist, and undisturbed zones that mimic their natural forest floor habitats:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="p-6 bg-amber-50/10 border border-amber-100 rounded-2xl">
              <Home className="w-8 h-8 text-amber-900 mb-4" />
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Moisture Hubs</h3>
              <p className="text-xs text-gray-650 leading-relaxed">
                Found beneath kitchen and bathroom sinks, behind water heaters, or around air conditioner condensation lines.
              </p>
            </div>
            
            <div className="p-6 bg-amber-50/10 border border-amber-100 rounded-2xl">
              <Home className="w-8 h-8 text-amber-900 mb-4" />
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Dark Attic Voids</h3>
              <p className="text-xs text-gray-650 leading-relaxed">
                Up near soffits, plumbing vents, and electrical wiring entry points inside insulation where heat rises.
              </p>
            </div>

            <div className="p-6 bg-amber-50/10 border border-amber-100 rounded-2xl">
              <Home className="w-8 h-8 text-amber-900 mb-4" />
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Exterior Gaps</h3>
              <p className="text-xs text-gray-650 leading-relaxed">
                Inside crawl spaces, behind peeling stucco, or underneath hollow areas of wood-pile storage on patios.
              </p>
            </div>
          </div>

          <h2 id="prevention-elimination" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">How to Prevent and Eliminate Palmetto Bugs</h2>
          <p>
            Preventing palmetto bug invasions requires a combination of smart outdoor landscaping practices and an airtight perimeter barrier:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-650 my-4">
            <li><strong>Seal Exterior Openings:</strong> Seal gaps around outdoor pipes, utility cables, and dryer vents with steel wool and caulk. Verify that roof soffit screens are intact.</li>
            <li><strong>Refine Landscaping Habits:</strong> Keep mulch beds at least 12 inches away from your foundation wall. Trim tree limbs and palm leaves so they do not touch your roof or siding.</li>
            <li><strong>Reduce Moisture Accumulation:</strong> Ensure downspouts direct rain far away from your walls, fix leaking hose bibbs, and wipe dry your crawlspaces.</li>
            <li><strong>Establish a Professional Perimeter:</strong> Retail spray cans do little to affect mature outdoor populations. A skilled, professional **palmetto bug exterminator naples** service creates a long-lasting, invisible perimeter treatment that stops bugs before they step onto your foundation.</li>
          </ul>

          {/* Roach FAQ */}
          <div className="mt-20 pt-12 border-t border-gray-150">
            <h3 className="text-3xl font-medium text-[#1A1A1A] mb-10">Palmetto Bug FAQ</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-700 flex-shrink-0" /> Can palmetto bugs bite or harm humans?
                </h4>
                <p className="text-gray-650 pl-7">
                  While they possess strong chewing mouthparts, palmetto bugs are non-aggressive and rarely bite humans. If they do, the bite is minor and harmless. However, because they crawl through sewage and decay, they can mechanical-spread bacteria like Salmonella across food-prep surfaces.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-700 flex-shrink-0" /> Why do they fly directly at people's faces?
                </h4>
                <p className="text-gray-650 pl-7">
                  It feels like an attack, but it is not! Palmetto bugs are poor glide-flyers. When startled, they take flight toward light sources or tall, dark silhouettes (which they mistake for trees to land on). Inside a room, you or your flashlight are the tallest dark shape, which is why they head straight for you.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-700 flex-shrink-0" /> Does having palmetto bugs mean my home is dirty?
                </h4>
                <p className="text-gray-650 pl-7">
                  Absolutely not. Unlike German cockroaches, which rely on interior grease and poor sanitation to thrive, American and Smokybrown cockroaches live primarily outdoors. They wander inside looking for water or escaping bad weather, regardless of how spotless your kitchen is.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 pt-12 border-t border-gray-250 text-center animate-fade-in">
            <div className="inline-block p-1 bg-amber-55/10 rounded-full mb-6">
              <div className="bg-amber-100 text-amber-950 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Collier County Roach Mitigation
              </div>
            </div>
            <h3 className="text-3xl font-medium text-[#1A1A1A] mb-4">Reclaim Your Home and Lanai from Palmetto Bugs</h3>
            <p className="mb-10 max-w-xl mx-auto text-gray-500 text-sm">
              Tired of startling encounters with flying roaches? Let Naples Pest Experts build an absolute protective shield around your Southwest Florida property with leading, family-safe products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12395550174" className="inline-flex items-center gap-3 bg-amber-900 text-white font-black py-4 px-10 rounded-2xl hover:bg-amber-850 transition-all text-lg shadow-2xl shadow-amber-950/25">
                <Phone className="w-5 h-5" /> Contact Our Roach Specialists
              </a>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-white border border-gray-200 text-[#1A1A1A] font-bold py-4 px-10 rounded-2xl hover:bg-gray-50 transition-all text-lg">
                Request Free Assessment
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
                 { id: 'roach-prevention-summer-naples', title: "Preventing Cockroaches in Naples During Humid Summers", type: "Summer Defenses" },
                 { id: 'how-much-does-pest-control-cost-naples-fl', title: "How Much Does Pest Control Cost in Naples FL?", type: "Pricing Guide" }
               ].map(p => (
                 <Link key={p.id} to={`/blog/${p.id}`} className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-amber-600/20 transition-all group flex flex-col justify-between h-56 shadow-sm hover:shadow-md">
                    <span className="text-[10px] font-bold text-amber-700 tracking-[0.2em] uppercase">{p.type}</span>
                    <h4 className="text-2xl font-medium text-[#1A1A1A] leading-tight group-hover:text-amber-800 transition-colors">{p.title}</h4>
                    <div className="text-xs font-bold text-gray-400 flex items-center gap-2 group-hover:text-amber-700 transition-colors uppercase tracking-widest">
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
