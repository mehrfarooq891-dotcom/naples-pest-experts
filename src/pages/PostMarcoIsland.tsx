import { Calendar, ChevronLeft, Phone, Bug, Droplets, ArrowRight, CheckCircle2, HelpCircle, ShieldAlert, Waves, Compass, Anchor, Info, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PostMarcoIsland() {
  const islandPests = [
    {
      name: "Subterranean & Drywood Termites",
      keywordRef: "termite control marco island",
      signs: "Mud tubes along concrete stilts, wings near boat docks, frass pellets on lanai beams",
      hazard: "Extreme structural hazard for waterfront stilt homes & high-end timber ceilings",
      desc: "Waterfront moisture accelerates termite foraging. Subterranean termites construct deep underground chambers and tunnel up through dock pilings or foundation blocks, while Drywood termites target sea-breeze-exposed trusses directly.",
      bgColor: "bg-amber-50/50 border-amber-100",
      pillColor: "bg-amber-100 text-amber-800"
    },
    {
      name: "Saltmarsh & Asian Tiger Mosquitoes",
      keywordRef: "mosquito control marco island",
      signs: "Aggressive daytime feeding, swarms around mangroves, pools, and lanais",
      hazard: "High nuisance & potential disease vector (Dengue, West Nile)",
      desc: "Marco Island's adjacent mangroves, tidal basins, and high water table provide endless breeding grounds. Standard lawn treatments fail here; specialized barrier misting is required to shield waterfront patios.",
      bgColor: "bg-sky-50/40 border-sky-100",
      pillColor: "bg-sky-100 text-sky-850"
    },
    {
      name: "Ghost Ants & Bigheaded Ants",
      signs: "Moisture trails near sliding patio doors, micro-lines under marble countertops",
      hazard: "Interior nuisance & potential damage to electrical connections",
      desc: "Waterfront homes face extreme ant pressure as sandy canal soil pushes colonies indoors during heavy high tides or seasonal storm surges. They seek the moisture of AC condensation lines and plumbing voids.",
      bgColor: "bg-emerald-50/40 border-emerald-100",
      pillColor: "bg-emerald-100 text-emerald-800"
    },
    {
      name: "Roof Rats & Sewer Rodents",
      signs: "Scratches in attic spaces, insulation damage, chew marks on PVC docks",
      hazard: "Chewed wiring, structural fires, pathogen transmission",
      desc: "Our beloved royal palms and dense tropical foliage act as natural highways for roof rats. They effortlessly leap from palm fronds onto metal roofs or climb dock lines to nest in home attics and boat garages.",
      bgColor: "bg-slate-50 border-slate-150",
      pillColor: "bg-slate-100 text-slate-800"
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEO 
        title="Pest Control for Marco Island Homeowners — Waterfront Extermination Guide"
        description="Waterfront living brings unique pest issues. Discover details on pest control marco island fl, exterminator marco island, and waterfront termite & mosquito defense."
      />

      {/* Hero Header */}
      <section 
        className="relative pt-48 pb-24 px-8 overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg, #0B3C5D 0%, #051C2C 100%)' }}
      >
        <div className="glow-primary opacity-20 -top-40 -right-40 scale-150"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors font-bold uppercase tracking-widest text-[10px]">
            <ChevronLeft className="w-4 h-4" /> Back to Intelligence Blog
          </Link>
          
          <div className="flex items-center justify-center gap-4 mb-6 uppercase font-black tracking-[0.3em] text-[10px]">
            <span className="text-white bg-white/10 px-4 py-1.5 rounded-full border border-white/20 uppercase tracking-[0.2em] flex items-center gap-1.5">
              <Waves className="w-3 h-3 text-cyan-400" /> Coastal Advisory
            </span>
            <span className="text-white/60 flex items-center gap-2">
              <Calendar className="w-3 h-3" /> May 27, 2026
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
            Pest Control for Marco Island Homeowners:<br/>
            What Makes It Different?
          </h1>

          <div className="w-48 h-[1px] bg-white/20 mx-auto mb-4"></div>
          <div className="text-white/40 text-[8px] font-black uppercase tracking-[2em] ml-[2em]">
            BARRIER WATERFRONT INTELLIGENCE
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-32 px-8 max-w-4xl mx-auto leading-relaxed text-[#1A1A1A] space-y-8 pt-12">
        <div className="prose prose-primary max-w-none">
          
          {/* Intro quote */}
          <p className="text-xl text-gray-500 mb-8 italic border-l-4 border-cyan-650/30 pl-8 py-2">
            "Living on the water is paradise, but it creates a perfect storm for pest activity. For Marco Island homes, the boundary between nature and your living room is incredibly thin."
          </p>

          <h2 id="waterfront-challenges" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">The Waterfront Connection: Unique Island Challenges</h2>
          <p>
            Marco Island is a gem of Southwest Florida, revered for its gorgeous crescent beaches, intricate canal systems, and exquisite waterfront estates. Yet, the very features that draw us to this coastal sanctuary are the exact elements that make pest management here highly specialized. 
          </p>
          <p>
            Standard suburban pest control methods built for inland developments simply fall short when applied to island environments. When implementing robust <strong>pest control marco island fl</strong> plans, a technician must evaluate saltwater proximity, dense mangrove networks, high-humidity winds, and the unique architecture of waterfront homes (such as elevated piling foundations and extensive seawalls).
          </p>

          <h2 id="salt-air-and-moisture" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Salt Air, Humidity, and Moisture Acceleration</h2>
          <p>
            Waterfront properties are constantly besieged by Southwest Florida's humid gulf breezes and high-intensity salt air. This atmosphere has profound biological impacts on local pest populations:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 bg-cyan-50/10 border border-cyan-100 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Compass className="w-6 h-6 text-cyan-700" />
                <h3 className="text-lg font-bold text-[#1A1A1A]">Corrosive Degradation</h3>
              </div>
              <p className="text-sm text-gray-650 leading-relaxed">
                Salt spray corrodes wood sealants, paint, and concrete surfaces faster than inland areas. This creates microscopic structural fissures and cracks that invite ants, spiders, and colonizing termites inside your drywall.
              </p>
            </div>
            
            <div className="p-6 bg-cyan-50/10 border border-cyan-100 rounded-2xl">
              <Droplets className="w-6 h-6 text-cyan-700" />
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                Elevated Soil Saturation
              </h3>
              <p className="text-sm text-gray-650 leading-relaxed">
                The high water table on Marco Island means that our sandy soil is constantly soaked. Pests that live or breed in the soil are continually driven upward into drier elevated crawl spaces, stilts, and walls to find sanctuary.
              </p>
            </div>
          </div>

          <h2 id="island-pests" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Specific Pests Common to Marco Island</h2>
          <p>
            Due to our immediate proximity to the Ten Thousand Islands and Collier County's vast mangrove swamps, homeowners encounter highly persistent pest structures that require a trained <strong>exterminator marco island</strong>:
          </p>

          <div className="space-y-6 mt-6">
            {islandPests.map((pest, index) => (
              <div key={index} id={`pest-${index}`} className={`p-6 rounded-3xl border ${pest.bgColor} flex flex-col gap-4 shadow-sm`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200/60 pb-3">
                  <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                    <Bug className="w-5 h-5 text-cyan-700 flex-shrink-0" />
                    {pest.name}
                  </h3>
                  {pest.keywordRef && (
                    <span className={`text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-wider font-semibold ${pest.pillColor}`}>
                      {pest.keywordRef}
                    </span>
                  )}
                </div>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-500">
                    <strong>Common Indicators:</strong> {pest.signs}
                  </p>
                  <p className="text-gray-500">
                    <strong>Damage Profile:</strong> {pest.hazard}
                  </p>
                </div>
                <p className="text-sm text-[#333] leading-relaxed mt-2 italic pl-4 border-l-2 border-cyan-400">
                  {pest.desc}
                </p>
              </div>
            ))}
          </div>

          <h2 id="dock-and-boat" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Waterfront Docks, Boat Lifts, and Decking Concerns</h2>
          <p>
            For many Marco Island residents, the backyard canal dock is the jewel of the home. Unfortunately, docks are highly vulnerable to specialized infestations:
          </p>
          <ul className="list-none space-y-4 my-6">
            <li className="flex gap-3">
              <Anchor className="w-6 h-6 text-cyan-700 flex-shrink-0 mt-0.5" />
              <span><strong>Spider Colonization:</strong> Spiders, particularly Orb Weavers and Brown Widows, love building extensive webs around boat lifts and outdoor dock lights where swarms of insects gather under night lighting.</span>
            </li>
            <li className="flex gap-3">
              <Anchor className="w-6 h-6 text-cyan-700 flex-shrink-0 mt-0.5" />
              <span><strong>Marine Wood Borers & Termites:</strong> Constant wood-to-water exposure makes marine timbers incredibly appealing to foraging termites. Comprehensive <strong>termite control marco island</strong> is necessary to monitor both dock connections and house footings.</span>
            </li>
            <li className="flex gap-3">
              <Anchor className="w-6 h-6 text-cyan-700 flex-shrink-0 mt-0.5" />
              <span><strong>Rodent Nesting:</strong> Boat hulls and dock locker boxes left covered during off-season periods make secure, dry nesting sanctuaries for roof rats who chew structural wiring or fuel line hoses.</span>
            </li>
          </ul>

          <h2 id="island-treatment-challenges" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Eco-Conscious Protection on Vulnerable Coastlines</h2>
          <p>
            Because Marco Island is surrounded by delicate marine ecosystems, estuaries, and canals, pest control cannot be approached with a "spray everything" mental attitude. Inappropriate pesticide applications can run off into water bodies, harming non-target aquatic life, seagrass beds, and dolphins.
          </p>
          <p>
            At Naples Pest Experts, we practice advanced **Integrated Pest Management (IPM)**. We utilize precise, non-repellent micro-baits, baiting stations that handle termites from the soil safely, and organic-derived botanical repellents for sensitive canal-front areas. This keeps your home perfectly protected while keeping our pristine island waters sparkling clean.
          </p>

          {/* Marco FAQ */}
          <div className="mt-20 pt-12 border-t border-gray-150">
            <h3 className="text-3xl font-medium text-[#1A1A1A] mb-10">Marco Island Pest FAQ</h3>
            <div className="space-y-8">
              <div id="faq-1">
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-cyan-700 flex-shrink-0" /> Does normal wind affect mosquito barrier treatments on the island?
                </h4>
                <p className="text-gray-650 pl-7">
                  Yes. Marco Island experiences heavy offshore afternoon breezes. Standard sprays can drift or dissipate. We utilize heavy, micro-encapsulated formulations that physically bind and adhere to the undersides of tough sea-grape leaves or palm fronds, ensuring water-resistant protection.
                </p>
              </div>
              <div id="faq-2">
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-cyan-700 flex-shrink-0" /> What is the best way to prevent roof rats from nesting on my boat lift?
                </h4>
                <p className="text-gray-650 pl-7">
                  Trim any palm branches and sea grapes back at least 6 to 8 feet from docks or roof structures. Keep all boat covers tight, secure docking lines with rodent guards, and ensure that no food residue, fishing bait, or trash bags are left outdoors in dock boxes overnight.
                </p>
              </div>
              <div id="faq-3">
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-cyan-700 flex-shrink-0" /> Are there specific termites that target canal seawalls?
                </h4>
                <p className="text-gray-650 pl-7">
                  Yes, Subterranean species are highly active in the damp soil behind canal seawalls and riprap barriers. They can tunnel extensive distances underground. Regular termite perimeter baiting stations are the single best way to halt them before they transition from seawalls into home foundations.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 pt-12 border-t border-gray-200 text-center animate-fade-in">
            <div className="inline-block p-1 bg-cyan-50 rounded-full mb-6">
              <div className="bg-cyan-100 text-cyan-950 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Dedicated Marco Island Services
              </div>
            </div>
            <h3 className="text-3xl font-medium text-[#1A1A1A] mb-4">Protect Your Waterfront Paradise Property</h3>
            <p className="mb-10 max-w-xl mx-auto text-gray-500 text-sm">
              Don't allow ocean breeze pests to compromise your structural integrity or ruin your outdoor lanai evenings. Rely on Naples Pest Experts for dependable, sea-safe solutions designed specially for Marco Island lifestyles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12395550174" className="inline-flex items-center gap-3 bg-cyan-850 text-white font-black py-4 px-10 rounded-2xl hover:bg-cyan-750 transition-all text-lg shadow-2xl shadow-cyan-950/25">
                <Phone className="w-5 h-5" /> Speak with Marco Island Specialists
              </a>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-white border border-gray-200 text-[#1A1A1A] font-bold py-4 px-10 rounded-2xl hover:bg-gray-50 transition-all text-lg">
                Request Free Audit
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
                 { id: 'mosquito-borne-diseases-in-collier-county-what-naples-residents-should-know', title: "Mosquito Borne Diseases in Collier County — What Naples Residents Should Know", type: "Health Alert" },
                 { id: 'how-much-does-pest-control-cost-naples-fl', title: "How Much Does Pest Control Cost in Naples FL?", type: "Pricing Guide" }
               ].map(p => (
                 <Link key={p.id} to={`/blog/${p.id}`} className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-cyan-600/20 transition-all group flex flex-col justify-between h-56 shadow-sm hover:shadow-md">
                    <span className="text-[10px] font-bold text-cyan-700 tracking-[0.2em] uppercase">{p.type}</span>
                    <h4 className="text-2xl font-medium text-[#1A1A1A] leading-tight group-hover:text-cyan-750 transition-colors">{p.title}</h4>
                    <div className="text-xs font-bold text-gray-400 flex items-center gap-2 group-hover:text-cyan-700 transition-colors uppercase tracking-widest">
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
