import { Calendar, Clock, ChevronLeft, Phone, ShieldCheck, Bug, Droplets, ArrowRight, CheckCircle2, HelpCircle, AlertTriangle, Home, ClipboardList, Sparkles, AlertCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PostPestPreparation() {
  const checklists = [
    {
      room: "Kitchen & Dining Areas",
      icon: <Sparkles className="w-5 h-5 text-emerald-600" />,
      steps: [
        "Clear all countertops of food, small appliances, and clutter.",
        "Store food in airtight plastic containers or inside the refrigerator.",
        "Put away all dishes, utensils, pots, and pans in closed cabinets.",
        "Wipe down surfaces and sweep up any loose food crumbs or organic residue.",
        "Empty all trash bins and wipe dry the sink areas."
      ]
    },
    {
      room: "Bathrooms",
      icon: <Droplets className="w-5 h-5 text-emerald-600" />,
      steps: [
        "Remove toothbrushes, hairbrushes, make-up, and personal toiletries from counters.",
        "Place toiletries inside drawers or seal them in Ziploc bags.",
        "Clear out storage areas under the sink if specific pest activity is suspected there.",
        "Wash and dry any wet towels or bathmats to eliminate excess moisture."
      ]
    },
    {
      room: "Living Rooms & Bedrooms",
      icon: <Home className="w-5 h-5 text-emerald-600" />,
      steps: [
        "Pull large furniture (sofas, beds, bookshelves) 2 to 3 feet away from baseboards.",
        "This allows the technician seamless access to apply barrier treatments.",
        "Pick up clothing, children's toys, and shoes from the floor.",
        "Strip bed linens and wash them on high heat if being treated for bed bugs or fleas."
      ]
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEO 
        title="How to Prepare Your Naples Home for Pest Control Treatment"
        description="Maximize treatment efficacy with our comprehensive pest treatment checklist naples florida. Learn what to do before pest control naples arrives."
      />

      {/* Hero Header */}
      <section 
        className="relative pt-48 pb-24 px-8 overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg, #1A365D 0%, #0D1B2A 100%)' }}
      >
        <div className="glow-primary opacity-20 -top-40 -right-40 scale-150"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors font-bold uppercase tracking-widest text-[10px]">
            <ChevronLeft className="w-4 h-4" /> Back to Intelligence Blog
          </Link>
          
          <div className="flex items-center justify-center gap-4 mb-6 uppercase font-black tracking-[0.3em] text-[10px]">
            <span className="text-white bg-white/10 px-4 py-1.5 rounded-full border border-white/20 uppercase tracking-[0.2em] flex items-center gap-1.5">
              <ClipboardList className="w-3 h-3 text-sky-450" /> Preparation Guide
            </span>
            <span className="text-white/60 flex items-center gap-2">
              <Calendar className="w-3 h-3" /> May 23, 2026
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
            How to Prepare Your Naples Home<br/>
            for Pest Control Treatment<br/>
            <span className="italic font-bold underline decoration-white/20 underline-offset-8">Preparation Checklists</span>
          </h1>

          <div className="w-48 h-[1px] bg-white/20 mx-auto mb-4"></div>
          <div className="text-white/40 text-[8px] font-black uppercase tracking-[2em] ml-[2em]">
            TREATMENT OPTIMIZATION ADVISORY
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-32 px-8 max-w-4xl mx-auto leading-relaxed text-[#1A1A1A] space-y-8 pt-12">
        <div className="prose prose-primary max-w-none">
          
          {/* Intro quote */}
          <p className="text-xl text-gray-500 mb-8 italic border-l-4 border-sky-600/30 pl-8 py-2">
            "While premium pest treatments are highly advanced, their success is a partnership. Taking the correct steps before your technician arrives can dramatically enhance treatment results and speed up colony elimination."
          </p>

          <h2 className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Why Proper Preparation Equals Better Results</h2>
          <p>
            When tackling pest infestations, the application of products is only half the battle. Proper <strong>pest control preparation naples</strong> is critical to achieving long-term success. Think of preparation as setting the stage for success.
          </p>
          <p>
            When areas are clean, organized, and cleared of structural obstructions, treatment barriers can be applied exactly where target insects forage and nest. De-cluttering prevents pests from relocating to untreated areas, while cleaning removes competing food sources, forcing pests to ingest baits instead. Utilizing a detailed <strong>pest treatment checklist naples florida</strong> makes the entire process seamless.
          </p>

          <h2 className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Your Room-by-Room Checklist</h2>
          <p>
            To make preparing your property straightforward, we have broken down the critical tasks into simple checklists. Completing these tasks <strong>before pest control naples</strong> experts arrive ensures quick and efficient application:
          </p>

          <div className="space-y-6 mt-6">
            {checklists.map((group, index) => (
              <div key={index} className="p-6 rounded-3xl border border-gray-150 bg-slate-50/50 flex flex-col gap-4 shadow-sm">
                <div className="flex items-center gap-3 border-b border-gray-200/60 pb-3">
                  {group.icon}
                  <h3 className="text-xl font-bold text-[#1A1A1A]">{group.room}</h3>
                </div>
                <ul className="space-y-2">
                  {group.steps.map((step, sIdx) => (
                    <li key={sIdx} className="flex gap-2 text-sm text-[#333] leading-relaxed">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">What to Do with Pets and Exotic Animals</h2>
          <p>
            The safety of your furry, feathered, or scaled family members is always our absolute highest priority. Review these rules for pet safety prior to treatment:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 bg-sky-50/30 border border-sky-100 rounded-2xl">
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                🐶 Cats and Dogs
              </h3>
              <p className="text-sm text-gray-650 leading-relaxed">
                Plan to keep cats and dogs confined to an untreated room, out of the house during the application, or safely in their crates. They must not contact treated surfaces until products have thoroughly dried (usually 1-2 hours).
              </p>
            </div>
            
            <div className="p-6 bg-sky-50/30 border border-sky-100 rounded-2xl">
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                🐠 Birds, Fish & Reptiles
              </h3>
              <p className="text-sm text-gray-650 leading-relaxed">
                Birds are highly sensitive to airborne particles and should leave the property. For fish aquariums, turn off the air pumps and cover the entire tank tightly with plastic wrap/towels to protect them from drifts.
              </p>
            </div>
          </div>

          <h2 className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Securing Food and Dinnerware Safety</h2>
          <p>
            It is a common point of anxiety: what if chemical residues land on eating surfaces or food? Fortunately, modern non-repellent formulations are precisely applied using target-focused methods. However, we still recommend safeguarding your food and dishes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-650 my-4">
            <li>Never leave perishable items or bread loaves exposed on counters.</li>
            <li>Store dry pantry ingredients in glass containers or rigid plastic bins.</li>
            <li>If dishes are accidentally left exposed during a perimeter spray, simply wash them with hot, soapy water before using them.</li>
            <li>Cover baby highchairs, pet food dishes, and outdoor cooking equipment completely.</li>
          </ul>

          <h2 className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">After Treatment Instructions: Returning Home Safely</h2>
          <p>
            Once the treatment has been successfully administered, the following quick habits ensure your home stays pest-free while safety remains maintained:
          </p>
          <div className="bg-slate-900 text-white p-8 rounded-3xl my-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-sky-400" /> Post-Treatment Best Practices
            </h3>
            <ol className="list-decimal list-inside space-y-4 text-gray-300 text-sm">
              <li><strong>Allow Surfaces to Dry:</strong> Wait for all liquids to dry completely before walking barefoot.</li>
              <li><strong>Avoid Deep Cleaning Immediate Margins:</strong> Do not mop adjacent to baseboards or clean out freshly baited voids. You want the products to remain untouched so they can work!</li>
              <li><strong>Expect to See Pests temporarily:</strong> Do not panic if you see a slight uptick in pest activity. Baits and flushes attract them out of hiding and into contact with treatment barriers. This is a sign the treatment is working.</li>
              <li><strong>Report Persistence:</strong> If you continue to see moderate pest activity after 14 days, call your technician to schedule a localized follow-up check.</li>
            </ol>
          </div>

          <h2 className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">How Long Do You Have to Stay Out of the Home?</h2>
          <p>
            For standard interior maintenance sprays (e.g., target-baits for roaches or ants), you generally do not need to leave your home at all. Professional baits are applied cleanly inside cabinets, hinges, crevices, and voids where they are totally out of reach of your family.
          </p>
          <p>
            However, for broadcast liquid treatments, flea flushes, or extensive interior misting, you must plan to leave the home during the service and remain outside for <strong>2 to 4 hours</strong> after the application is finished. This window allows the liquid barriers to set and dry safely without interference.
          </p>

          {/* FAQ Section */}
          <div className="mt-20 pt-12 border-t border-gray-150">
            <h3 className="text-3xl font-medium text-[#1A1A1A] mb-10">Preparation FAQ</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-sky-600 flex-shrink-0" /> Do I need to empty all kitchen cabinets before pest control arrives?
                </h4>
                <p className="text-gray-650 pl-7">
                  For general preventative maintenance, no. However, if your home is actively suffering from a severe German Cockroach or pantry moth infestation, you will need to completely empty cabinet drawers and pantries so the interiors can be treated directly.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-sky-600 flex-shrink-0" /> Should I clean my home before or after the treatment?
                </h4>
                <p className="text-gray-650 pl-7">
                  Always clean *before* the treatment. Sweeping and vacuuming gets rid of competing food crumbs and dust, which helps our treatments bind directly to surfaces. Standard cleaning immediately after can wash away critical treatment borders.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-sky-600 flex-shrink-0" /> What if it rains immediately after an exterior perimeter application?
                </h4>
                <p className="text-gray-650 pl-7">
                  Modern professional outdoor barrier liquids are structured to bind quickly to stucco and concrete, remaining active even through Southwest Florida's heavy tropical rainstorms once dry. If a sudden downpour hits during application, we will return to re-treat affected spots for free.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 pt-12 border-t border-gray-200 text-center animate-fade-in">
            <div className="inline-block p-1 bg-sky-50 rounded-full mb-6">
              <div className="bg-sky-100 text-sky-950 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Maximize Your Home Pest Defense Program
              </div>
            </div>
            <h3 className="text-3xl font-medium text-[#1A1A1A] mb-4">Book Your Professional Pest Solution Today</h3>
            <p className="mb-10 max-w-xl mx-auto text-gray-500 text-sm">
              Ready to protect your Collier County property with elite, eco-conscious methods? Get customized treatments from Naples Pest Experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12395550174" className="inline-flex items-center gap-3 bg-sky-850 text-white font-black py-4 px-10 rounded-2xl hover:bg-sky-750 transition-all text-lg shadow-2xl shadow-sky-900/20">
                <Phone className="w-5 h-5" /> Speak with Naples Pest Experts
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
                 { id: 'is-pest-control-safe-kids-pets-naples', title: "Is Pest Control Safe for Kids & Pets? Naples Families Ask", type: "Family First" },
                 { id: 'how-much-does-pest-control-cost-naples-fl', title: "How Much Does Pest Control Cost in Naples FL?", type: "Pricing Guide" }
               ].map(p => (
                 <Link key={p.id} to={`/blog/${p.id}`} className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-sky-650/20 transition-all group flex flex-col justify-between h-56 shadow-sm hover:shadow-md">
                    <span className="text-[10px] font-bold text-sky-750 tracking-[0.2em] uppercase">{p.type}</span>
                    <h4 className="text-2xl font-medium text-[#1A1A1A] leading-tight group-hover:text-sky-750 transition-colors">{p.title}</h4>
                    <div className="text-xs font-bold text-gray-400 flex items-center gap-2 group-hover:text-sky-750 transition-colors uppercase tracking-widest">
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
