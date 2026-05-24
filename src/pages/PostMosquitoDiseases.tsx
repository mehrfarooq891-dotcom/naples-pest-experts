import { Calendar, Clock, ChevronLeft, Phone, ShieldCheck, Bug, Droplets, ArrowRight, CheckCircle2, HelpCircle, AlertTriangle, ShieldAlert, Sparkles, Heart, Users, Activity, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PostMosquitoDiseases() {
  const diseases = [
    {
      name: "West Nile Virus (WNV)",
      keywordRef: "west nile virus naples",
      status: "Endemic to Collier County",
      riskLevel: "High Seasonal Frequency",
      transmission: "Transmitted via Culex mosquitoes feeding on infected birds",
      symptoms: "Fever, headache, body aches, joint pains, vomiting, diarrhea, or rash.",
      desc: "This is the most common mosquito diseases naples florida vector. While 80% of infected individuals show no symptoms, older residents or individuals with compromised immune systems can develop severe, potentially life-threatening neurological conditions such as encephalitis or meningitis.",
      bg: "bg-amber-50/50 border-amber-100",
      badgeColor: "bg-amber-100 text-amber-800"
    },
    {
      name: "Dengue Fever",
      keywordRef: "dengue fever florida",
      status: "Increasing Local Transmission Alerts",
      riskLevel: "Subtropical Concern",
      transmission: "Transmitted by Aedes aegypti and Aedes albopictus mosquitoes",
      symptoms: "Sudden high fever, severe headache, behind-the-eyes pain, muscle/joint pain ('breakbone fever'), rash.",
      desc: "Previously limited mostly to international travelers, local transmission of dengue fever florida has seen a notable increase in recent years due to changing climate patterns. It can progress to severe Dengue, demanding immediate emergency room care.",
      bg: "bg-red-50/40 border-red-100",
      badgeColor: "bg-red-100 text-red-800"
    },
    {
      name: "Eastern Equine Encephalitis (EEE)",
      status: "Rare but Extemely Severe",
      riskLevel: "Critical Care Risk",
      transmission: "Transmitted through Culiseta melanura and other swamp mosquitoes",
      symptoms: "Chills, fever, intense headache, progress rapidly into confusion, seizures, and coma.",
      desc: "While cases of EEE in humans are relatively rare in Florida, the disease is exceptionally severe, carrying a staggering 30% mortality rate. Survivors often face long-term neurological challenges, making year-round mosquito prevention collier county a top public health advisory.",
      bg: "bg-purple-50/50 border-purple-100",
      badgeColor: "bg-purple-100 text-purple-800"
    },
    {
      name: "St. Louis Encephalitis (SLE)",
      status: "Sporadic Regional Outbreaks",
      riskLevel: "Moderate to High Seasonal",
      transmission: "Transmitted and spread primarily by the Culex nigripalpus species",
      symptoms: "Fever, headache, nausea, sleepiness, neck stiffness, and motor system coordination loss.",
      desc: "Similar to WNV, older adults are at a considerably higher risk of developing the neuroinvasive form of SLE. The virus is maintained in a cycle between wild avian populations and local mosquito vectors that thrive in wet Southwest Florida environments.",
      bg: "bg-blue-50/40 border-blue-100",
      badgeColor: "bg-blue-100 text-blue-850"
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEO 
        title="Mosquito Borne Diseases in Collier County — Naples Residents Health Guide"
        description="Learn about mosquito diseases naples florida including west nile virus naples and dengue fever florida. Find professional mosquito prevention collier county tips."
      />

      {/* Hero Header */}
      <section 
        className="relative pt-48 pb-24 px-8 overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg, #1e3a3a 0%, #0d1e1e 100%)' }}
      >
        <div className="glow-primary opacity-20 -top-40 -right-40 scale-150"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors font-bold uppercase tracking-widest text-[10px]">
            <ChevronLeft className="w-4 h-4" /> Back to Intelligence Blog
          </Link>
          
          <div className="flex items-center justify-center gap-4 mb-6 uppercase font-black tracking-[0.3em] text-[10px]">
            <span className="text-white bg-white/10 px-4 py-1.5 rounded-full border border-white/20 uppercase tracking-[0.2em] flex items-center gap-1.5">
              <ShieldAlert className="w-3 h-3 text-red-400" /> Health Alert
            </span>
            <span className="text-white/60 flex items-center gap-2">
              <Calendar className="w-3 h-3" /> May 24, 2026
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
            Mosquito Borne Diseases in Collier County —<br/>
            What Naples Residents Should Know
          </h1>

          <div className="w-48 h-[1px] bg-white/20 mx-auto mb-4"></div>
          <div className="text-white/40 text-[8px] font-black uppercase tracking-[2em] ml-[2em]">
            PUBLIC HEALTH & SAFETY BRIEFING
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-32 px-8 max-w-4xl mx-auto leading-relaxed text-[#1A1A1A] space-y-8 pt-12">
        <div className="prose prose-primary max-w-none">
          
          {/* Intro */}
          <p className="text-xl text-gray-500 mb-8 italic border-l-4 border-emerald-800/20 pl-8 py-2">
            "We often view mosquitoes as a mere irritation during a backyard barbecue. But in Southwest Florida, these insects represent our most significant vector-borne medical concern—making proactive protection a critical family responsibility."
          </p>

          <h2 className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">More Than a Nuisance: The Health Risks of Florida Mosquitoes</h2>
          <p>
            When we talk about pests in Collier County, the focus is often on the property damage caused by termites, or the extreme nuisance of ants in your kitchen. However, mosquitoes represent a different order of priority altogether. They are not simply pests; they are active disease vectors.
          </p>
          <p>
            As tropical weather trends extend and coastal development expands near our swampy maritime wildlands, the prevalence of <strong>mosquito diseases naples florida</strong> represents an ever-present concern. Protecting your home from bites is not merely about comfort—it is a cornerstone of family wellness and preventative medicine.
          </p>

          <h2 className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">4 Mosquito-Borne Viruses Active in Southwest Florida</h2>
          <p>
            Florida is home to over 80 species of mosquitoes, several of which are actively capable of transmitting viral pathogens directly into the human bloodstream. Here are the four major viral concerns local authorities and residents monitor:
          </p>

          <div className="space-y-6 mt-6">
            {diseases.map((disease, index) => (
              <div key={index} className={`p-6 rounded-3xl border ${disease.bg} flex flex-col gap-4 shadow-sm`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200/60 pb-3">
                  <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    {disease.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${disease.badgeColor}`}>
                      {disease.status}
                    </span>
                  </div>
                </div>
                <div className="space-y-1.5 text-sm">
                  {disease.keywordRef && (
                    <p className="text-[11px] font-mono text-emerald-850 font-bold uppercase tracking-wider">
                      Target Term: {disease.keywordRef}
                    </p>
                  )}
                  <p className="text-gray-500">
                    <strong>Transmission Mechanism:</strong> {disease.transmission}
                  </p>
                  <p className="text-gray-500">
                    <strong>Primary Warning Symptoms:</strong> {disease.symptoms}
                  </p>
                </div>
                <p className="text-sm text-[#333] leading-relaxed mt-2 bg-white/60 p-4 rounded-xl border border-gray-100">
                  {disease.desc}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Who is Most at Risk in the Naples Community?</h2>
          <p>
            A common misconception is that mosquito-borne viruses strike everyone with equal severity. In reality, while anyone can contract a virus from a single infected mosquito bite, different demographics face vastly unequal outcomes:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="p-6 bg-slate-50 border border-gray-150 rounded-2xl">
              <Users className="w-8 h-8 text-emerald-800 mb-4" />
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Seniors (Age 65+)</h3>
              <p className="text-xs text-gray-650 leading-relaxed">
                Older residents make up a substantial segment of our Naples community. Due to progressive immunosenescence, the likelihood of a West Nile or SLE infection turning neuroinvasive accelerates exponentially after age 60.
              </p>
            </div>
            
            <div className="p-6 bg-slate-50 border border-gray-150 rounded-2xl">
              <Heart className="w-8 h-8 text-emerald-800 mb-4" />
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Compromised Immunity</h3>
              <p className="text-xs text-gray-650 leading-relaxed">
                Individuals managing chronic illness, autoimmune conditions, or undergoing oncology treatments have fewer defenses against neurological complications, meaning preventing a bite at the starting gate is crucial.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-gray-150 rounded-2xl">
              <Activity className="w-8 h-8 text-emerald-800 mb-4" />
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Outdoor Enthusiasts</h3>
              <p className="text-xs text-gray-650 leading-relaxed">
                From golfers and gardeners to early-morning runners along the coast, those who spend active hours outdoors during dawn and dusk face substantially elevated exposure rates to vector swarms.
              </p>
            </div>
          </div>

          <h2 className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Personal and Family Protection: The 3 "D"s</h2>
          <p>
            Public health organizations, including the Florida Department of Health, advocate for a simple three-step defense process to minimize exposure inside your neighborhood:
          </p>
          <ul className="list-none space-y-4 my-6">
            <li className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Drain Standing Water:</strong> Mosquitoes lay eggs in as little as a bottle cap of water. Check pool covers, bird baths, pet bowls, flowerpots, and sagging gutters weekly to eliminate breeding grounds.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Dress in Protective Wear:</strong> When stepping into wooded trail areas, marshes, or backyard garden plots, wear loose-fitting long-sleeved shirts and long pants to create a physical barrier between skin and proboscis.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Defend with CDC-Approved Repellent:</strong> Apply a reliable repellent containing DEET, Picaridin, Oil of Lemon Eucalyptus (OLE), or IR3535 to both clothing and exposed skin.</span>
            </li>
          </ul>

          <h2 className="text-3xl text-[#1A1A1A] font-bold mt-12 mb-6">Securing the Perimeter: Professional Mosquito Barrier Treatments</h2>
          <p>
            While personal repellents and empty bird baths offer basic individual protection, they are rarely enough to stop aggressive swarms during peak humid summer months. 
          </p>
          <p>
            Professional <strong>mosquito prevention collier county</strong> treatments create a highly effective spatial shield around your entire living area. Licensed specialists evaluate your grounds to locate hidden micro-habitats (such as dense tropical foliage, underside of palm fronds, or shaded mulch voids) and apply targeted micro-encapsulated treatments.
          </p>
          <p>
            These specialized solutions chemically bind to the undersides of leaves where mosquitoes rest during the heat of the day. When insects land, they contact the treatment, knocking down populations immediately and interrupting the rapid breeding cycle right at the perimeter of your lanai.
          </p>

          {/* Health FAQ Section */}
          <div className="mt-20 pt-12 border-t border-gray-150">
            <h3 className="text-3xl font-medium text-[#1A1A1A] mb-10">Vector Disease FAQ</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-800 flex-shrink-0" /> Can you catch West Nile Virus from someone else?
                </h4>
                <p className="text-gray-650 pl-7">
                  No. West Nile virus is not contagious and cannot be spread from person to person through causal contact, kissing, or sharing dinnerware. Infection inside Southwest Florida is strictly the result of direct transmission via the bite of an infected Culex mosquito.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-800 flex-shrink-0" /> Are newer mosquito species showing up in Collier County?
                </h4>
                <p className="text-gray-650 pl-7">
                  Yes. Public health entomologists continue to monitor for invasive vectors like <em>Culex lactator</em> and <em>Aedes aegypti</em>, which continue to move northward. These vectors present an increased challenge because they often adapt highly search-efficient indoor biting habits.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-800 flex-shrink-0" /> Are professional barrier sprays safe for non-target gardens & pollinators?
                </h4>
                <p className="text-gray-650 pl-7">
                  Yes, when applied responsibly by trained technicians. We never broadcast products indiscriminately over flowering beds where butterflies or bees find pollen. Instead, we target non-flowering shrubs and shaded foliage margins where adult mosquitoes actively rest.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 pt-12 border-t border-gray-200 text-center animate-fade-in">
            <div className="inline-block p-1 bg-emerald-50 rounded-full mb-6">
              <div className="bg-emerald-100 text-emerald-950 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Professional Mosquito Defense Program
              </div>
            </div>
            <h3 className="text-3xl font-medium text-[#1A1A1A] mb-4">Request a Customized Mosquito Defense Program</h3>
            <p className="mb-10 max-w-xl mx-auto text-gray-500 text-sm">
              Keep your yard safe, and protect your loved ones from infectious mosquito-borne diseases. Contact the local pest safety experts for dependable barrier solutions in Collier County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12395550174" className="inline-flex items-center gap-3 bg-emerald-850 text-white font-black py-4 px-10 rounded-2xl hover:bg-emerald-750 transition-all text-lg shadow-2xl shadow-emerald-900/20">
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
                 { id: 'mosquito-season-naples-preparation', title: "Mosquito Season in Naples Florida — When It Starts and How to Prepare", type: "Outdoor Living" },
                 { id: 'is-pest-control-safe-kids-pets-naples', title: "Is Pest Control Safe for Kids & Pets? Naples Families Ask", type: "Family First" }
               ].map(p => (
                 <Link key={p.id} to={`/blog/${p.id}`} className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-emerald-600/20 transition-all group flex flex-col justify-between h-56 shadow-sm hover:shadow-md">
                    <span className="text-[10px] font-bold text-emerald-850 tracking-[0.2em] uppercase">{p.type}</span>
                    <h4 className="text-2xl font-medium text-[#1A1A1A] leading-tight group-hover:text-emerald-800 transition-colors">{p.title}</h4>
                    <div className="text-xs font-bold text-gray-400 flex items-center gap-2 group-hover:text-emerald-850 transition-colors uppercase tracking-widest">
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
