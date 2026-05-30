import { Calendar, ChevronLeft, Phone, Bug, Droplets, ArrowRight, CheckCircle2, HelpCircle, ShieldAlert, MapPin, Compass, Info, ShieldCheck, Home, CalendarRange } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PostBonitaSprings() {
  const commonPests = [
    {
      name: "Subterranean & Drywood Termites",
      keywordRef: "termite control bonita springs",
      threat: "Extreme danger to older frame homes near the Imperial River & wood-framed country club villas.",
      desc: "Humid conditions along the river and irrigation on lush golf fairways speed up termite nesting. Subterranean species tunnel up through damp sandy soils, while Drywood termites attack dry attics and exposed framing timbers on Barefoot Beach."
    },
    {
      name: "Roof Rats, Marsh Mice & Rodents",
      keywordRef: "rodent control bonita springs",
      threat: "Nesting in cozy attics, eating AC insulation, chewing drywall.",
      desc: "With abundant citrus groves, oak canopies, and palm trees, Bonita Springs represents a natural habitat for roof rats. They use dense high branches to drop onto roofs, entering crawlspaces or AC lines to build nests."
    },
    {
      name: "Ghost Ants & Crazy Ants",
      threat: "Persistent interior kitchen invasions, crawling into electrical sockets.",
      desc: "Ants are extremely proactive in sand dunes and landscaped soils. They enter structures in massive swarms searching for water during dry winter periods or moving high up to escape waterlogged ground after summer storms."
    }
  ];

  const seasonalPests = [
    {
      season: "Spring (March - May)",
      focus: "Termite Swarms & Mosquito Awakenings",
      activity: "As temperatures warm up and spring rains begin, subterranean termites swarm to start new colonies. Mosquitoes begin multiplying rapidly in stagnant wetland puddles."
    },
    {
      season: "Summer (June - August)",
      focus: "Palmetto Bugs, Fleas & Tropical Mosquitoes",
      activity: "Peak humidity and heavy afternoon downpours drive palmetto bugs out of tree hollows into homes. Mosquito activity reaches its highest point across flooded marshes."
    },
    {
      season: "Fall (September - November)",
      focus: "Rodent Ingress & Ant Relocations",
      activity: "As nights cool slightly, roof rats search for warm attic spaces. Major storms or changing high tides force outdoor ant nests to seek refuge inside concrete block walls."
    },
    {
      season: "Winter (December - February)",
      focus: "Pest Maintenance & Silverfish Activity",
      activity: "Pests slow down but search for moisture inside. Dry winter winds push spiders and silverfish deep into crawlspaces, laundry rooms, and pantries."
    }
  ];

  const neighborhoods = [
    {
      name: "Bonita Bay & Pelican Landing",
      zone: "Established master-planned communities nestled along Estero Bay, marked by extensive natural preserves."
    },
    {
      name: "Barefoot Beach & Little Hickory Island",
      zone: "Elite beachfront properties exposed to extreme salt spray, coastal winds, and high sand-dwelling pests."
    },
    {
      name: "Imperial River & Historic Downtown",
      zone: "Riverfront homes with old-growth oak trees, older framing, and persistent damp-soil subterranean termite pressure."
    },
    {
      name: "Bonita National, Palmira & Valencia Bonita",
      zone: "Newer golf course communities with extensive turfgrass management, and seasonal fire ant or sod webworm issues."
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEO 
        title="Complete Local Pest Control Guide for Bonita Springs FL"
        description="Faced with termites, rodents, or ants? Discover comprehensive pest control bonita springs fl. Find tips on termite & rodent control. Book a certified exterminator bonita springs."
      />

      {/* Hero Header */}
      <section 
        className="relative pt-48 pb-24 px-8 overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg, #0A4A3C 0%, #031F19 100%)' }}
      >
        <div className="glow-primary opacity-20 -top-40 -right-40 scale-150"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors font-bold uppercase tracking-widest text-[10px]">
            <ChevronLeft className="w-4 h-4" /> Back to Intelligence Blog
          </Link>
          
          <div className="flex items-center justify-center gap-4 mb-6 uppercase font-black tracking-[0.3em] text-[10px]">
            <span className="text-white bg-white/10 px-4 py-1.5 rounded-full border border-white/20 uppercase tracking-[0.2em] flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-emerald-450" /> Local Guide
            </span>
            <span className="text-white/60 flex items-center gap-2">
              <Calendar className="w-3 h-3" /> May 30, 2026
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-3xl lg:text-5xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
            Pest Control for Bonita Springs Residents:<br/>
            The Complete Local Guide
          </h1>

          <div className="w-48 h-[1px] bg-white/20 mx-auto mb-4"></div>
          <div className="text-white/40 text-[8px] font-black uppercase tracking-[2em] ml-[2em]">
            LOCAL ENVIRONMENTAL DEFENSE BRIEFING
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-32 px-8 max-w-4xl mx-auto leading-relaxed text-[#1A1A1A] space-y-8 pt-12">
        <div className="prose prose-primary max-w-none">
          
          {/* Intro quote */}
          <p className="text-xl text-gray-500 mb-8 italic border-l-4 border-emerald-600/30 pl-8 py-2">
            "Nestled beautifully between Fort Myers and Naples, Bonita Springs offers a serene lifestyle of coastal waterways, state parks, and golf estates. But these very attributes foster a lively ecological zone where pests flourish."
          </p>

          <h2 id="bonita-challenges" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Peculiar Pest Pressures in Bonita Springs</h2>
          <p>
            Whether you are walking along Barefoot Beach, cruising the winding waters of the Imperial River, or living in one of our golf course communities, Bonita Springs is home to a lush subtropical climate. However, our distinct hydrology—where the freshwater Everglades basin meets the saltwater of Estero Bay—creates unique, heavy insect activity.
          </p>
          <p>
            Standard corporate pest schedules ignore these microclimate shifts. If you want a pristine lifestyle inside your home, deploying expert, localized **pest control bonita springs fl** plans is critical. Only customized, targeted applications can hold back coastal ants, riverway rodents, and subterranean termite colonies.
          </p>

          <h2 id="common-pests" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">The Most Common Invasions in Bonita Springs</h2>
          <p className="mb-6">
            In our coastal environment, homeowners face highly persistent structural pests that necessitate the expertise of a licensed **exterminator bonita springs** based:
          </p>

          <div className="space-y-6 mt-6">
            {commonPests.map((pest, index) => (
              <div key={index} className="p-6 rounded-3xl border border-gray-150 bg-slate-50/50 flex flex-col gap-4 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200/60 pb-3">
                  <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                    <Bug className="w-5 h-5 text-emerald-800 flex-shrink-0" />
                    {pest.name}
                  </h3>
                  {pest.keywordRef && (
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-emerald-100 text-emerald-850 uppercase tracking-wider font-semibold">
                      {pest.keywordRef}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-550">
                  <strong>Primary Danger:</strong> {pest.threat}
                </p>
                <p className="text-sm text-[#333] leading-relaxed mt-1">
                  {pest.desc}
                </p>
              </div>
            ))}
          </div>

          <h2 id="seasonal-calendar" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Seasonal Pest Activity in Bonita Springs</h2>
          <p>
            Subtropical pests don't follow calendars strictly, but changing weather runs their cycles:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {seasonalPests.map((season, sIdx) => (
              <div key={sIdx} className="p-6 bg-emerald-50/10 border border-emerald-100 rounded-2xl flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <CalendarRange className="w-6 h-6 text-emerald-800" />
                  <h3 className="text-lg font-bold text-[#1A1A1A]">{season.season}</h3>
                </div>
                <p className="text-xs font-bold text-emerald-850 uppercase tracking-widest">{season.focus}</p>
                <p className="text-sm text-gray-650 leading-relaxed">{season.activity}</p>
              </div>
            ))}
          </div>

          <h2 id="why-local-matters" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Why Local Expertise and Hydrology Knowledge Matter</h2>
          <p>
            Proper pest defense is a science of hydrology, soil architecture, and biology. The ground of Bonita Springs varies dramatically.
          </p>
          <p>
            Near Barefoot Beach, sandy shell-rich soils are highly alkaline and drain instantly, supporting localized sand flees and beachfront ants. Moving inland toward Imperial River, soils become organically saturated and hold heavy moisture—representing the perfect environment for massive colonies of subterranean termites.
          </p>
          <p>
            Understanding these soil chemistry gradients allows our technicians to select the exact right termiticide bindings and baiting anchors. Standardized corporate treatments simply dilute out too fast in heavy river silt or wash away on sandy coastal dunes.
          </p>

          <h2 id="coverage-areas" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Bonita Springs Neighborhoods We Secure</h2>
          <p>
            Naples Pest Experts provides extensive, neighbor-recommended protection across all of Bonita Springs:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {neighborhoods.map((n, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-gray-150 flex flex-col gap-2">
                <h4 className="text-base font-bold text-[#1A1A1A] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-850" /> {n.name}
                </h4>
                <p className="text-xs text-gray-650 leading-relaxed">{n.zone}</p>
              </div>
            ))}
          </div>

          {/* Bonita FAQ */}
          <div className="mt-20 pt-12 border-t border-gray-150">
            <h3 className="text-3xl font-medium text-[#1A1A1A] mb-10">Bonita Springs Pest FAQ</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-805 flex-shrink-0" /> Are roof rats a larger issue near Estero Bay preserves?
                </h4>
                <p className="text-gray-650 pl-7 text-sm">
                  Yes. Properties backing up directly to state parks, Estero Bay preserves, or heavy mangrove lines experience high wild rodent populations. Year-round exclusion services—where all tiny house cracks are sealed—are necessary to prevent roof rats from transitioning from native scrub oaks to attics.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-805 flex-shrink-0" /> When is the prime swarming window for subterranean termites in Bonita?
                </h4>
                <p className="text-gray-650 pl-7 text-sm">
                  The primary window runs from March to June. Swarms usually occur on warm mornings immediately following the initial heavy spring rains. If you spot hundreds of discarded clear wings inside, seek immediate termite diagnostics.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-805 flex-shrink-0" /> Do golf course communities experience different ant pressures?
                </h4>
                <p className="text-gray-650 pl-7 text-sm">
                  Yes. The heavily fertilized, well-irrigated fairways provide endless nesting sources for Bigheaded ants and Red Imported Fire Ants. When winter dry seasons hit, these colonies move outward from golf lawns directly into the irrigated flowerbeds of surrounding homes.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 pt-12 border-t border-gray-200 text-center animate-fade-in">
            <div className="inline-block p-1 bg-emerald-50 rounded-full mb-6">
              <div className="bg-emerald-100 text-emerald-950 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Professional Bonita Springs Solutions
              </div>
            </div>
            <h3 className="text-3xl font-medium text-[#1A1A1A] mb-4">Secure Your Bonita Springs Sanctuary</h3>
            <p className="mb-10 max-w-xl mx-auto text-gray-500 text-sm">
              Don't leave your coastal estate exposed to termite wood degradation or crawling insect paths. Request a comprehensive, tailored defense scheme from the local leaders who understand Bonita's environment perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12395550174" className="inline-flex items-center gap-3 bg-emerald-850 text-white font-black py-4 px-10 rounded-2xl hover:bg-emerald-750 transition-all text-lg shadow-2xl shadow-emerald-950/25">
                <Phone className="w-5 h-5" /> Book Bonita Springs Exterm Service
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
                 { id: 'drywood-vs-subterranean-termites-in-naples-know-the-difference', title: "Drywood vs Subterranean Termites in Naples — Know the Difference", type: "Termite Guide" },
                 { id: 'pest-control-for-marco-island-homeowners-what-makes-it-different', title: "Pest Control for Marco Island Homeowners — What Makes It Different", type: "Coastal Advisor" }
               ].map(p => (
                 <Link key={p.id} to={`/blog/${p.id}`} className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-emerald-600/20 transition-all group flex flex-col justify-between h-56 shadow-sm hover:shadow-md">
                    <span className="text-[10px] font-bold text-emerald-855 tracking-[0.2em] uppercase">{p.type}</span>
                    <h4 className="text-2xl font-medium text-[#1A1A1A] leading-tight group-hover:text-emerald-800 transition-colors">{p.title}</h4>
                    <div className="text-xs font-bold text-gray-400 flex items-center gap-2 group-hover:text-emerald-855 transition-colors uppercase tracking-widest">
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
