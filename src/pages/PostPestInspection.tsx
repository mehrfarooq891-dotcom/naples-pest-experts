import { Calendar, ChevronLeft, Phone, Search, FileText, CheckCircle2, HelpCircle, ArrowRight, ShieldCheck, Clock, ShieldAlert, Sparkles, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PostPestInspection() {
  const inspectionSteps = [
    {
      title: "Step 1: Exterior Perimeter Screening",
      desc: "The home pest inspection naples process begins on the outside. The licensed tech walks the entire perimeter of your foundation, checking block walls for cracks, evaluating expansion joints, inspecting window/door seals, and identifying where exterior utility lines enter the building.",
      points: ["Inspects stucco, siding, and brick mortar lines", "Checks expansion joints and crawlspace vents", "Identifies overhanging canopy branches and vegetation bridges"]
    },
    {
      title: "Step 2: Attic Crawlspace & Roofline Diagnostics",
      desc: "This is the most critical phase for locating roof rats, wasps, and wood-boring insects. Your inspector will enter the attic to trace electrical conduits, examine fiberglass insulation layers, scan structural roof trusses, and check ventilation screens for chew marks or gaps.",
      points: ["Scans wooden rafters for drywood termite pellets", "Examines insulation for rodent tunneling or nests", "Validates soffit screens and gable vents are fully secure"]
    },
    {
      title: "Step 3: Moisture Matrix & Plumbing Integrity Check",
      desc: "Pests require continuous humidity and water. The inspector uses moisture meters to scan walls under bathroom sinks, behind kitchen refrigerators, dishwasher seals, laundry hookups, and exterior air conditioning lines.",
      points: ["Pinpoints slow structural pipe leaks with diagnostic meters", "Checks water heaters and exterior hose bibs", "Scans condensation drainage lines for stagnation"]
    },
    {
      title: "Step 4: Target Interior Diagnostic Sweep",
      desc: "Finally, the inspector reviews the inner living spaces. This includes scanning wall baseboards, corners, kitchen cabinetry voids, bathroom plumbing traps, garage door frameworks, and window frames to map any current nests or insect trails.",
      points: ["Examines cabinet kickplates and wall transitions", "Scans garage thresholds and utility closets", "Identifies minor silverfish or spider breeding areas"]
    }
  ];

  const whatTheyLookFor = [
    {
      category: "Wood-Destroying Organisms (WDO)",
      keywordRef: "termite inspection naples",
      detail: "Formosan termites, drywood termites, powderpost beetles, and wood-decaying wood fungi. We search for frass, wings, and mud tubes.",
    },
    {
      category: "Invasive Mammals & Rodents",
      keywordRef: "pest inspection naples fl",
      detail: "Invasive roof rats, field mice, and gray squirrels in crawlspaces, checking paper duct trails, urine glow, and ceiling paths.",
    },
    {
      category: "Nuisance & Structural Insects",
      keywordRef: "home pest inspection naples",
      detail: "American cockroaches (palmetto bugs), German roaches, ghost ants, silverfish, and aggressive paper wasps behind your soffits.",
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEO 
        title="What Happens During a Pest Inspection in Naples FL? Step Guide"
        description="Curious about a pest inspection naples fl? Explore our step-by-step walkthrough, learn what inspectors look for, and book a free pest inspection naples."
      />

      {/* Hero Header */}
      <section 
        className="relative pt-48 pb-24 px-8 overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg, #1A365D 0%, #0B1C33 100%)' }}
      >
        <div className="glow-primary opacity-20 -top-40 -right-40 scale-150"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors font-bold uppercase tracking-widest text-[10px]">
            <ChevronLeft className="w-4 h-4" /> Back to Intelligence Blog
          </Link>
          
          <div className="flex items-center justify-center gap-4 mb-6 uppercase font-black tracking-[0.3em] text-[10px]">
            <span className="text-white bg-white/10 px-4 py-1.5 rounded-full border border-white/20 uppercase tracking-[0.2em] flex items-center gap-1.5">
              <Search className="w-3 h-3 text-blue-400 animate-pulse" /> Diagnostic Brief
            </span>
            <span className="text-white/60 flex items-center gap-2">
              <Calendar className="w-3 h-3" /> June 5, 2026
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
            What Happens During a Professional<br/>
            Pest Inspection in Naples?
          </h1>

          <div className="w-48 h-[1px] bg-white/20 mx-auto mb-4"></div>
          <div className="text-white/40 text-[8px] font-black uppercase tracking-[2em] ml-[2em]">
            EXCLUSION & INSPECTION MASTER PROTOCOLS
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-32 px-8 max-w-4xl mx-auto leading-relaxed text-[#1A1A1A] space-y-8 pt-12">
        <div className="prose prose-primary max-w-none">
          
          {/* Intro quote */}
          <p className="text-xl text-gray-500 mb-8 italic border-l-4 border-blue-900/30 pl-8 py-2">
            "An inspection isn't just a brief walk around your home. It's a structured piece of diagnostic detective work designed to read the silent story of your building's micro-climate before pests establish a foothold."
          </p>

          <h2 id="remove-mystery" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Removing the Mystery from Home Pest Inspections</h2>
          <p>
            For many homeowners, the arrival of a pest control inspector feels slightly mysterious. They arrive with bright flashlights, diagnostic clipboards, moisture sensors, and telescopic inspection mirrors, disappear into your dark crawlspace or utility rooms, and emerge later with a detailed set of recommendations.
          </p>
          <p>
            Because Naples operates in a subtropical climate, we experience constant, non-stop insect and rodent pressure. A certified **pest inspection naples fl** professional does not merely walk around counting bugs. Instead, we scan for environmental attractants, structural entry opportunities, moisture anomalies, and early nesting signs that remain completely invisible to the untrained eye.
          </p>
          <p>
            Understanding the process reduces apprehension and shows how a proactive baseline investigation keeps your estate protected without unneeded chemical treatments.
          </p>

          <h2 id="step-by-step" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">The Professional Home Inspection Process: Step-by-Step</h2>
          <p className="mb-6">
            When we execute a comprehensive diagnostic inspection, our certified field technicians follow a highly systematic, four-part protocol to map your property's specific boundaries:
          </p>

          <div className="space-y-8 mt-6">
            {inspectionSteps.map((step, index) => (
              <div key={index} className="p-8 rounded-3xl border border-gray-150 bg-slate-50/50 flex flex-col gap-4 shadow-sm">
                <h3 className="text-xl font-bold text-[#1A1A1A] border-b border-gray-200/50 pb-3 flex items-center gap-2">
                  <span className="p-1 px-2 text-xs rounded-lg bg-blue-900 text-white font-mono">0{index + 1}</span>
                  {step.title}
                </h3>
                <p className="text-sm text-[#333] leading-relaxed">
                  {step.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
                  {step.points.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-gray-650">
                      <CheckCircle2 className="w-4 h-4 text-emerald-650 flex-shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h2 id="what-inspectors-look-for" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">What Professional Inspectors Look For</h2>
          <p>
            Our tech is hunting for key bio-indicators grouped into three primary pest categories:
          </p>

          <div className="overflow-x-auto my-8 border border-gray-150 rounded-3xl shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-gray-150 text-xs font-bold uppercase tracking-wider text-gray-500">
                  <th className="p-4 md:p-6 w-1/3">Target Threat Category</th>
                  <th className="p-4 md:p-6 w-1/3">Core Keywords Covered</th>
                  <th className="p-4 md:p-6 w-1/3">Primary Visual Markers Checked</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {whatTheyLookFor.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 md:p-6 font-bold text-slate-800">
                      {row.category}
                    </td>
                    <td className="p-4 md:p-6">
                      <span className="inline-block text-[9px] font-mono font-bold text-blue-800 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {row.keywordRef}
                      </span>
                    </td>
                    <td className="p-4 md:p-6 text-xs text-gray-500 leading-relaxed">
                      {row.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="duration" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">How Long Does a Home Inspection Typically Take?</h2>
          <p>
            An average, professionally executed **home pest inspection naples** takes between <strong>45 and 90 minutes</strong>. 
          </p>
          <p>
            This duration depends heavily on the size of your single-family home, whether the property features crawlspaces or simple slab construction, the complexity of the attic rafters, and the abundance of landscaping. Large estates in coastal neighborhood areas with multiple outbuildings and active pool screens may require up to two hours for a complete, exhaustive structural map.
          </p>

          <h2 id="what-happens-after" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">What Happens After the Inspection is Completed?</h2>
          <p>
            Once the inspector has fully crawled, checked, and tested your structure, they will sit down with you to present three immediate components:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-650 my-6">
            <li><strong>Digital Diagnostic Report:</strong> A step-by-step summary highlighting every identified pest source, evidence of active infestations, map of wood-damaging organisms, and moisture level maps with thermal photographs if available.</li>
            <li><strong>Sanitation and Physical recommendations:</strong> Advice on trim heights, landscape mulching, physical gaps to patch, and gutter adjustments to reduce pest attractiveness naturally.</li>
            <li><strong>Custom Treatment Proposal:</strong> If active issues are spotted, they provide an upfront pricing plan to clear the pests and set up a quarterly defense barrier to stop their return.</li>
          </ul>

          <h2 id="questions-to-ask" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Crucial Questions to Ask Your Inspector</h2>
          <p>
            Make sure to maximize your technician's local knowledge by asking these three core questions before they leave your property:
          </p>
          <ol className="list-decimal pl-6 space-y-4 my-6 text-gray-600">
            <li><em>"Did you identify any active signs or historical structural damage from subterranean or drywood termites?"</em></li>
            <li><em>"What are the top three physical entry gaps on compliance walls or soffit lines where pests could easily slip inside?"</em></li>
            <li><em>"Is our yard's watering schedule or soil mulch thickness currently creating a high-moisture breeding ground near the foundation?"</em></li>
          </ol>

          {/* FAQ Section */}
          <div className="mt-20 pt-12 border-t border-gray-150">
            <h3 className="text-3xl font-medium text-[#1A1A1A] mb-10">Pest Inspection FAQ</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-800 flex-shrink-0" /> Do I need to empty my kitchen cabinets before my inspection?
                </h4>
                <p className="text-gray-650 pl-7 text-sm">
                  No, you do not need to prep. A primary inspection is purely diagnostic and visual. You won't need to empty pantries or move heavy dressers unless active, deep infestations (like nesting bed bugs or severe roaches) are verified and a formal treatment is scheduled.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-800 flex-shrink-0" /> What is the difference between general inspection and a WDO termite report?
                </h4>
                <p className="text-gray-650 pl-7 text-sm">
                  A general inspection focuses on common crawl insects, spiders, rodents, and landscaping access. A Wood-Destroying Organism (WDO) termite report is a highly specific, officially state-certified legal document often required for bank loans or real estate closings, focusing strictly on structural wood borers.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-800 flex-shrink-0" /> How often should a Naples home be inspected for termites?
                </h4>
                <p className="text-gray-650 pl-7 text-sm">
                  We recommend a thorough **termite inspection naples** assessment at least once a year. Because subterranean termite colonies live deep underground and tunnel silently within framing, an annual diagnostic check is key to catching wood damage before it ruins your home's integrity.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 pt-12 border-t border-gray-250 text-center animate-fade-in">
            <div className="inline-block p-1 bg-blue-50 rounded-full mb-6">
              <div className="bg-blue-100 text-blue-950 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Professional Collier & Lee County Diagnostic Fleet
              </div>
            </div>
            <h3 className="text-3xl font-medium text-[#1A1A1A] mb-4">Request Your Complete Diagnostic Evaluation</h3>
            <p className="mb-10 max-w-xl mx-auto text-gray-505 text-sm">
              Take the guesswork out of structural pest protection. Secure absolute coverage and real peace of mind with Naples Pest Experts' comprehensive, zero-obligation **free pest inspection naples** diagnostic scan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12395550174" className="inline-flex items-center gap-3 bg-blue-900 text-white font-black py-4 px-10 rounded-2xl hover:bg-blue-850 transition-all text-lg shadow-2xl shadow-blue-950/25">
                <Phone className="w-5 h-5" /> Schedule Free Diagnostic Assessment
              </a>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-white border border-gray-200 text-[#1A1A1A] font-bold py-4 px-10 rounded-2xl hover:bg-gray-50 transition-all text-lg">
                Ask a Specialist Online
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
                 { id: 'how-often-should-you-get-pest-control-in-naples-florida', title: "How Often Should You Get Pest Control in Naples Florida?", type: "Planning Guide" },
                 { id: 'pest-control-for-rental-properties-in-naples-landlord-guide', title: "Pest Control for Rental Properties in Naples — Landlord Guide", type: "Compliance" }
               ].map(p => (
                 <Link key={p.id} to={`/blog/${p.id}`} className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-blue-600/20 transition-all group flex flex-col justify-between h-56 shadow-sm hover:shadow-md">
                    <span className="text-[10px] font-bold text-blue-700 tracking-[0.2em] uppercase">{p.type}</span>
                    <h4 className="text-2xl font-medium text-[#1A1A1A] leading-tight group-hover:text-blue-850 transition-colors">{p.title}</h4>
                    <div className="text-xs font-bold text-gray-400 flex items-center gap-2 group-hover:text-blue-750 transition-colors uppercase tracking-widest">
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
