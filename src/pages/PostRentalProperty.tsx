import { Calendar, ChevronLeft, Phone, Building2, Scale, Users, ShieldCheck, CheckCircle2, HelpCircle, ArrowRight, Table, AlertCircle, Briefcase, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PostRentalProperty() {
  const legalDuties = [
    {
      actor: "Landlord / Owner Defenses",
      keywordRef: "landlord pest control naples fl",
      role: "Structural Integrity & Initial Cleansing",
      responsibilities: [
        "Keeping structural exterior walls, roofs, windows, and doors sealed tightly against wild rodents and wood-destroying termites.",
        "Supplying fully functional, clean, and pest-free living units at the absolute start of the lease agreement.",
        "Providing ongoing extermination for multi-family units (duplexes, triplexes, or apartment blocks) where pests move easily between units.",
        "Ensuring plumbing leaks and moisture problems under kitchens/baths are repaired to prevent wood rotting and cockroach attractions."
      ]
    },
    {
      actor: "Tenant / Resident Duties",
      keywordRef: "tenant pest control naples",
      role: "Daily Sanitization & Immediate Notification",
      responsibilities: [
        "Maintaining interior spaces in a completely sanitary, clean, food-debris-free state.",
        "Removing home garbage and waste regularly and storing it in covered outdoor receptacles.",
        "Notifying the landlord or property manager immediately in writing when any signs of pests, termites, or rodents are spotted.",
        "Taking responsibility for pest treatments if pests (such as bed bugs or fleas) are proven to have been introduced by the tenant's pet or personal belongings."
      ]
    }
  ];

  const maintenancePlan = [
    {
      step: "Step 1: Semi-Annual Perimeter Exclusion",
      details: "Sealing cracks in concrete block walls, repairing torn window and lanai screens, and checking entry doors for secure weatherstripping."
    },
    {
      step: "Step 2: Proactive Quarterly Barrier Defense",
      details: "Applying high-grade, long-lasting micro-encapsulated liquid and granular blockages along exterior foundations to block pests before entry."
    },
    {
      step: "Step 3: Annual Termite & Wood Moisture Sweep",
      details: "A critical diagnostic check of attic rafters, timber framing, and plumbing areas to capture subterranean or drywood termites early."
    },
    {
      step: "Step 4: Swift Tenant Reporting Channels",
      details: "Providing an easy, documented avenue for tenants to mention crawling bugs, allowing quick suppression before a small bug problem turns into a large infestation."
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEO 
        title="Pest Control for Rental Properties in Naples — Landlord Guide"
        description="Confused about landlord vs tenant responsibilities? Explore our comprehensive pest control rental property naples guide. Understand Florida legal pest rules."
      />

      {/* Hero Header */}
      <section 
        className="relative pt-48 pb-24 px-8 overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)' }}
      >
        <div className="glow-primary opacity-20 -top-40 -right-40 scale-150"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors font-bold uppercase tracking-widest text-[10px]">
            <ChevronLeft className="w-4 h-4" /> Back to Intelligence Blog
          </Link>
          
          <div className="flex items-center justify-center gap-4 mb-6 uppercase font-black tracking-[0.3em] text-[10px]">
            <span className="text-white bg-white/10 px-4 py-1.5 rounded-full border border-white/20 uppercase tracking-[0.2em] flex items-center gap-1.5">
              <Building2 className="w-3 h-3 text-slate-350" /> Rental Advisory
            </span>
            <span className="text-white/60 flex items-center gap-2">
              <Calendar className="w-3 h-3" /> June 4, 2026
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-3xl lg:text-5xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
            Pest Control for Rental Properties<br/>
            in Naples — Landlord Guide
          </h1>

          <div className="w-48 h-[1px] bg-white/20 mx-auto mb-4"></div>
          <div className="text-white/40 text-[8px] font-black uppercase tracking-[2em] ml-[2em]">
            PROPERTY MANAGEMENT COMPLIANCE GUIDE
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-32 px-8 max-w-4xl mx-auto leading-relaxed text-[#1A1A1A] space-y-8 pt-12">
        <div className="prose prose-primary max-w-none">
          
          {/* Intro quote */}
          <p className="text-xl text-gray-500 mb-8 italic border-l-4 border-slate-600/30 pl-8 py-2">
            "In Southwest Florida's hot rental market, property damage and tenant disputes often trace back to a single source: pests. Managing rental pest defense proactively isn't just about protecting your building; it is your legal duty."
          </p>

          <h2 id="naples-rental-market" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Naples Rental Properties and Pest Liability</h2>
          <p>
            Whether you own a high-end luxury condo in Park Shore, a seasonal beach villa near Vanderbilt Beach, or a single-family residential home in Golden Gate Estates, managing a rental property in Naples, Florida is a lucrative but highly active investment.
          </p>
          <p>
            With our non-stop warm climate, heavy rainfall, and highly porous sandy soils, pests are a year-round threat. When cockroaches, termites, or roof rats invade a rental property, it quickly creates friction between landlords and tenants. It often leads to disputes over who is responsible for paying treatment fees.
          </p>
          <p>
            To prevent these complex, expensive misunderstandings, landlords must understand Florida legal codes, clearly outline lease agreements, and implement a proactive **pest control rental property naples** protection plan.
          </p>

          <h2 id="florida-law" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Florida Statutes on Extermination Duties</h2>
          <p>
            Under Florida Landlord Tenant Law (specifically <strong>Florida Statute 83.51</strong>), the responsibility for general pest control is legally defined unless written otherwise in a custom lease agreement.
          </p>
          <p>
            For **multi-family rental units** (such as duplexes, triplexes, or apartment buildings), the law states that the landlord <em>must</em> make reasonable provisions for the extermination of rats, mice, roaches, ants, and wood-destroying organisms. This is because pests in multi-family buildings cross unit lines effortlessly via common plumbing channels and attics, meaning a single tenant cannot defend their individual unit on their own.
          </p>
          <p>
            For **single-family homes** and duplexes, the statute allows landlords to transfer this responsibility to the tenant. However, because tenants rarely perform professional-grade preventative applications, transferring this duty usually leads to deferred maintenance and severe, long-term pest problems. Let's detail the legal and practical split between these roles:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            {legalDuties.map((duty, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-slate-150 bg-slate-50/50 flex flex-col gap-4 shadow-sm">
                <div className="border-b border-gray-200 pb-3">
                  <span className="text-[9px] font-mono font-bold bg-slate-200 px-3 py-1 rounded-full text-slate-800 uppercase tracking-widest block w-fit mb-2">
                    {duty.keywordRef}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{duty.actor}</h3>
                  <p className="text-xs text-gray-500 italic mt-0.5">{duty.role}</p>
                </div>
                <ul className="space-y-3 flex-grow">
                  {duty.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="text-xs text-gray-650 leading-relaxed flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 id="preventive-maintenance" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">The Optimal Preventive Plan for Landlords</h2>
          <p>
            The old proverb "an ounce of prevention is worth a pound of cure" is especially true for Florida real estate. Reactive pest treatments—calling a cheap exterminator only when a tenant threatens to withhold rent over a roach infestation—ultimately cost up to three times more than a structured, seasonal protection program.
          </p>
          <p>
            By working with a certified **property manager exterminator naples** specialist to implement a professional, quarterly perimeter barrier program, you can build a defensive, documented shield around your investment assets:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {maintenancePlan.map((p, i) => (
              <div key={i} className="p-6 bg-slate-50 border border-slate-150 rounded-2xl">
                <h4 className="font-bold text-[#1A1A1A] mb-2">{p.step}</h4>
                <p className="text-sm text-gray-650 leading-relaxed">{p.details}</p>
              </div>
            ))}
          </div>

          <h2 id="bulk-discounts" className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Maximize ROI: Bulk Portfolio Discount Programs</h2>
          <p>
            If you are a Southwest Florida landlord with multiple rental properties, managing separate single-service bills is a major administrative headache. 
          </p>
          <p>
            To address this, Naples Pest Experts offers specialized commercial and residential portfolio plans. Under our bulk service structures, landlords can bundle several properties—even across different neighborhoods like Lely Resort, Bonita Springs, and Marco Island—under a unified service calendar. This entitles you to significant volume discounts, simplified single-invoice digital portals, and automated digital service reports after every visit. 
          </p>
          <p>
            This automated documentation provides immediate written proof that you are actively maintaining habitable rental units, which is your best legal shield against potential tenant disputes or health claims.
          </p>

          {/* Landlord FAQ */}
          <div className="mt-20 pt-12 border-t border-gray-150">
            <h3 className="text-3xl font-medium text-[#1A1A1A] mb-10">Landlord Pest Control FAQ</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-slate-700 flex-shrink-0" /> Can a tenant withhold rent if subterranean termites are found?
                </h4>
                <p className="text-gray-650 pl-7 text-sm">
                  Under Florida landlord tenant laws, if a structural pest infestation like subterranean termites compromises the building's habitability, a tenant can deliver a formal 7-day notice of non-compliance. If the landlord fails to take reasonable steps to initiate treatments within those seven days, the tenant may have legal grounds to terminate the lease or withhold rent.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-slate-700 flex-shrink-0" /> How do we handle tenant-imported bed bugs in rental units?
                </h4>
                <p className="text-gray-650 pl-7 text-sm">
                  This is the most common renter dispute. While the landlord is responsible for delivering a unit free of bed bugs, any infestation introduced later during a lease is typically the tenant's financial responsibility. Because proving who introduced bed bugs is difficult, we recommend scheduling an independent, licensed inspection before new tenants move in to establish a clear, documentable baseline.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-slate-700 flex-shrink-0" /> Are quarterly pest control expenses fully tax-deductible?
                </h4>
                <p className="text-gray-650 pl-7 text-sm">
                  Yes. General preventative pest control fees, structural wood termite inspections, and rodent exclusion expenditures incurred on an active income-generating residential or commercial rental property represent standard, fully deductible operating expenses under the IRS guidelines.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 pt-12 border-t border-gray-250 text-center animate-fade-in">
            <div className="inline-block p-1 bg-slate-50 rounded-full mb-6">
              <div className="bg-slate-150 text-slate-800 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Collier County Certified Fleet & Asset Solutions
              </div>
            </div>
            <h3 className="text-3xl font-medium text-[#1A1A1A] mb-4">Request a Property Management Pest Defense Proposal</h3>
            <p className="mb-10 max-w-xl mx-auto text-gray-500 text-sm">
              Protect your property assets and minimize tenant complaints. Get a customized, discounted portfolio service program tailored directly to your rental units, and secure your long-term peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12395550174" className="inline-flex items-center gap-3 bg-slate-900 text-white font-black py-4 px-10 rounded-2xl hover:bg-slate-800 transition-all text-lg shadow-2xl shadow-slate-950/25">
                <Phone className="w-5 h-5" /> Book Rental Asset Assessment
              </a>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-white border border-gray-200 text-[#1A1A1A] font-bold py-4 px-10 rounded-2xl hover:bg-gray-50 transition-all text-lg">
                View Landlord Rates
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
                 { id: 'how-much-does-pest-control-cost-naples-fl', title: "How Much Does Pest Control Cost in Naples FL?", type: "Pricing Guide" }
               ].map(p => (
                 <Link key={p.id} to={`/blog/${p.id}`} className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-slate-300/30 transition-all group flex flex-col justify-between h-56 shadow-sm hover:shadow-md">
                    <span className="text-[10px] font-bold text-slate-600 tracking-[0.2em] uppercase">{p.type}</span>
                    <h4 className="text-2xl font-medium text-[#1A1A1A] leading-tight group-hover:text-slate-800 transition-colors">{p.title}</h4>
                    <div className="text-xs font-bold text-gray-400 flex items-center gap-2 group-hover:text-slate-600 transition-colors uppercase tracking-widest">
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
