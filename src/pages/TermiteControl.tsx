import { ShieldCheck, AlertTriangle, Search, Droplets, CheckCircle, Phone, ArrowRight, Star, Zap, Calendar, MapPin, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Schema from '../components/Schema';

export default function TermiteControl() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Termite Control & Elimination",
    "description": "Professional termite inspections and treatments in Naples, FL using barrier and baiting systems.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Naples Pest Experts"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best termite control for Naples, Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best termite control in Naples is a combination of Sentricon baiting systems and Termidor liquid soil barriers. Given Southwest Florida's sandy soil and high termite pressure, a comprehensive approach that targets both subterranean and drywood species is essential."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title="Termite Control Naples FL — Professional Treatment & Inspection"
        description="Protect your Naples home from termites. Naples Pest Experts offers advanced termite control, Sentricon baiting, and free inspections in Florida. Call +1 239-555-0174."
      />
      <Schema data={serviceSchema} />
      <Schema data={faqSchema} />

      {/* Hero */}
      <section 
        className="relative pt-40 pb-32 px-8 overflow-hidden min-h-[70vh] flex items-center"
        style={{ background: 'linear-gradient(135deg, #4a2c0a, #8B4513)' }}
      >
        <div className="glow-primary opacity-30 -top-40 -left-40 scale-150"></div>
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
             <ShieldCheck className="w-4 h-4 text-white" />
             <span className="text-white font-mono text-[10px] uppercase tracking-[0.2em] font-bold">Structural Preservation Specialists</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
            Advanced Termite Control <br/>
            <span className="text-white font-bold">Naples, Florida</span>
          </h1>
          <p className="text-xl text-gray-100 mb-12 max-w-3xl leading-relaxed">
            In our coastal paradise, termites aren't just an inconvenience—they are a financial catastrophe waiting to happen. Naples Pest Experts provides industry-leading liquid barriers and smart baiting systems designed to neutralize colonies before they compromise your structural integrity.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="tel:+12395550174" className="bg-primary text-white font-black py-5 px-10 rounded-2xl shadow-xl flex items-center justify-center gap-3 hover:opacity-90 transition-all hover:scale-105 active:scale-95 text-xl">
              <Phone className="w-6 h-6" /> Free Inspection: +1 239-555-0174
            </a>
            <div className="flex items-center gap-4 px-8 border border-gray-100 rounded-2xl backdrop-blur-md bg-surface shadow-sm">
               <div className="flex -space-x-2">
                 {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>)}
               </div>
               <div className="text-left">
                  <div className="text-text-main font-bold text-sm">4.9/5 Rating</div>
                  <div className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">500+ Naples Homes Served</div>
               </div>
            </div>
          </div>

          <div className="mt-16 w-full max-w-3xl">
             <div className="bg-surface p-10 rounded-[2.5rem] border border-gray-100 text-left relative overflow-hidden group shadow-sm">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                   <AlertTriangle className="w-32 h-32 text-primary" />
                </div>
                <div className="relative z-10">
                   <h2 className="text-text-main font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" /> The Naples Termite Crisis (AEO Info)
                   </h2>
                   <p className="text-gray-500 text-sm leading-[1.8]">
                     Termite control in Naples, Florida involves the systematic identification and eradication of wood-destroying organisms like <strong>Subterranean Termites</strong> and <strong>Asian Subterranean Colony</strong> formations. Because Southwest Florida's unique sandy soil and high water table provide the perfect breeding ground, professional extermination requires a combination of 120-linear-foot soil treatments or the installation of Sentricon baiting technology. Standard homeowners insurance in Florida does not cover termite damage, making preventative professional maintenance a non-negotiable part of property ownership. — AEO Answer Block
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Signs of Termites */}
      <section className="py-32 bg-white px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="sticky top-32">
              <span className="text-primary font-bold uppercase text-[10px] tracking-[0.3em] mb-4 block">Biological Warfare</span>
              <h2 className="text-4xl md:text-5xl font-medium text-text-main mb-8 leading-tight">
                How to Detect a Silent <span className="text-primary">Infestation</span>.
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Termites are masters of stealth. They eat wood from the inside out, often leaving the surface paint intact. By the time most Naples homeowners see actual damage, the colony has likely been active for 18–24 months. 
              </p>
              <p className="text-gray-400 mb-10 text-sm leading-relaxed">
                Our team uses thermal acoustic mapping and moisture sensors to see behind your drywall, identifying thermal signatures that reveal termite activity in the North Naples, Port Royal, and Golden Gate Estates areas.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Frass Disposal", desc: "Small piles of sawdust-like pellets found near baseboards or window sills—a classic sign of Drywood termites in Naples." },
                  { title: "Mud Tubes", desc: "Pencil-sized tunnels made of soil used by Subterranean termites to travel from the ground to your wood." },
                  { title: "Hollow Wood", desc: "Structural beams that sound thin or empty when tapped with a tool, indicating internal consumption." },
                  { title: "Swarmer Wings", desc: "Small, translucent wings discarded near entry points after a spring flight—usually following a heavy Naples rain." }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-surface hover:bg-gray-50 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-text-main font-medium text-base mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-12">
               <div className="p-10 rounded-[2.5rem] bg-surface border border-gray-100 shadow-xl">
                  <h3 className="text-2xl font-medium text-text-main mb-6 underline decoration-primary/30 underline-offset-8">Subterranean Termite Strategy</h3>
                  <p className="text-gray-600 text-sm leading-[1.8] mb-6">
                    In Naples, the Subterranean termite is our biggest adversary. These colonies live deep underground—sometimes up to 20 feet—and build complex tunnel systems to reach your home. They require moisture to survive, making leaky pipes or heavy Florida rainfall their best friends.
                  </p>
                  <p className="text-gray-500 text-sm leading-[1.8] mb-8 italic">
                    "We found a massive Formosan colony in a Pelican Bay home that had bypassed a traditional liquid barrier. We had to switch to advanced baiting to eliminate the queen directly at the source." — Lead Technician, Naples Pest Experts.
                  </p>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-[10px] font-bold text-text-main uppercase tracking-widest">Active Monitoring Recommended for Collier County</span>
                  </div>
               </div>

               <div className="p-10 rounded-[2.5rem] bg-surface border border-gray-100 shadow-md">
                  <h3 className="text-2xl font-medium text-text-main mb-6">Drywood Termite Prevention</h3>
                  <p className="text-gray-600 text-sm leading-[1.8] mb-6">
                    Unlike their subterranean cousins, Drywood termites don't need soil. They enter your attic through soffit vents or cracks in your roofline. In the high-end custom homes along the Naples coastline, we often see drywood termites targeting second-story wooden balconies and decorative trim.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                        <div className="text-text-main font-bold text-lg mb-1">98%</div>
                        <div className="text-gray-400 text-[10px] uppercase font-bold tracking-tighter">Effective Prevention</div>
                     </div>
                     <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                        <div className="text-text-main font-bold text-lg mb-1">24/7</div>
                        <div className="text-gray-400 text-[10px] uppercase font-bold tracking-tighter">Baiting Surveillance</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24 bg-white px-8 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-text-main mb-4">The True Cost of Termite Neglect</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              In Florida, termites cause more property damage than fires and storms combined. 
              Waiting for visible signs is a gamble you shouldn't take with your Naples investment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Structural Instability", text: "Termites can hollow out support beams, floor joists, and roof trusses, leading to sagging floors and ceiling collapses if left unmanaged." },
              { title: "Plummeting Home Value", text: "A failed WDO (Wood-Destroying Organism) report can stall a real estate transaction in Naples or knock 10-15% off your selling price." },
              { title: "Insurance Exclusions", text: "Almost no standard Florida homeowners policy covers termite damage. The repair bills come entirely out of your pocket—often costing $10,000+." }
            ].map(item => (
              <div key={item.title} className="p-10 rounded-3xl bg-surface border border-gray-100 hover:border-primary/20 transition-all shadow-sm">
                 <ShieldCheck className="w-10 h-10 text-primary mb-6" />
                 <h4 className="text-text-main text-xl font-medium mb-4">{item.title}</h4>
                 <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Treatment Tech */}
      <section className="py-32 bg-white px-8">
        <div className="max-w-5xl mx-auto">
           <h2 className="text-4xl md:text-5xl font-medium text-text-main mb-16 text-center leading-tight">
             Our <span className="text-primary">Multi-Layered</span> <br/> 
             Defense Protocol
           </h2>
           <div className="space-y-4">
              {[
                { step: "01", title: "Thermal Acoustic Mapping", text: "We use high-frequency sensors that detect the microscopic 'clicking' sounds of worker termites devouring wood behind your walls." },
                { step: "02", title: "Chemical Barrier (Termidor® SC)", text: "For ground-based subterranean colonies, we create a non-repellent liquid barrier around your foundation that pests carry back to the nest." },
                { step: "03", title: "Intelligent Baiting (Sentricon®)", text: "Strategic bait stations are installed around the perimeter. These stations work 24/7 to intercept and eliminate the entire colony, including the queen." },
                { step: "04", title: "Moisture Mitigation", text: "We identify and recommend repairs for external moisture issues—like poorly positioned sprinklers or clogged gutters—that attract pests." },
                { step: "05", title: "Annual Recertification", text: "Every Naples client receives an annual intensive inspection and a formal WDO certificate for their records." }
              ].map((s) => (
                <div key={s.step} className="p-8 rounded-2xl bg-surface border border-gray-100 flex gap-8 items-center group hover:bg-gray-50 transition-all shadow-sm">
                   <div className="text-4xl font-black text-gray-100 group-hover:text-primary/10 transition-colors w-20 flex-shrink-0 leading-none">
                      {s.step}
                   </div>
                   <div>
                      <h4 className="text-xl font-medium text-text-main mb-2">{s.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{s.text}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Detailed FAQ */}
      <section className="py-32 bg-white px-8 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-medium text-text-main mb-6">Naples Termite Control FAQ</h2>
            <p className="text-gray-500">Everything you need to know about protecting your wood in the tropics.</p>
          </div>
          <div className="space-y-6">
            {[
              { q: "How much is a termite treatment in Naples, Florida?", a: "Residential termite treatments range from $800 to $2,500 depending on home size and type of colony. Preventative baiting plans typically range from $300 to $600 annually." },
              { q: "Can I kill termites myself?", a: "DIY termite treatments are rarely effective against the deep-seated colonies found in Naples. Professional-grade equipment like thermal sensors and high-concentration soil barriers are necessary for 100% elimination." },
              { q: "What months are termites most active in SWFL?", a: "Termites in Southwest Florida are active year-round due to the heat, but 'swarming' season typically peaks in the Spring (March-May) following heavy rain cycles." },
              { q: "Is Termidor or Sentricon better for Naples homes?", a: "It depends on your building type. Termidor is an excellent liquid barrier for single-family homes with yard space, while Sentricon is ideal for multi-unit properties or those with direct concrete-to-edge landscaping." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] bg-surface border border-gray-100 shadow-sm" itemScope itemType="https://schema.org/Question">
                <h3 className="text-lg font-medium text-text-main mb-4" itemProp="name">{item.q}</h3>
                <div className="text-gray-500 text-sm leading-relaxed" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                   <p itemProp="text">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-white px-8">
        <div className="max-w-4xl mx-auto bg-surface p-16 rounded-[2.5rem] border border-gray-100 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
          <h2 className="text-4xl font-medium text-text-main mb-8">Save Your Structural Integrity</h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            Our specialized termite task force is ready to inspect your Naples property today. 
            Don't let them eat your equity. 
          </p>
          <a href="tel:+12395550174" className="inline-flex items-center gap-3 bg-primary text-white font-bold py-5 px-12 rounded-2xl hover:opacity-90 transition-all text-xl shadow-2xl shadow-primary/20">
            <Phone className="w-6 h-6" /> Free WDO Check: +1 239-555-0174
          </a>
        </div>
      </section>
    </div>
  );
}
