import { AlertTriangle, Clock, Zap, Phone, ArrowRight, ShieldCheck, Bug, Droplets, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import Schema from '../components/Schema';

export default function EmergencyPestControl() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Emergency Pest Control Response",
    "description": "24/7 emergency pest control services in Naples, FL. Rapid response for wasps, bed bugs, termites, and rodents.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Naples Pest Experts"
    }
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title="24/7 Emergency Pest Control Naples FL — Fast Response Exterminators"
        description="Need an exterminator right now? Naples Pest Experts offers 24/7 emergency pest control for wasps, termites, bed bugs, and more in Naples, FL."
      />
      <Schema data={serviceSchema} />

      {/* Hero */}
      <section 
        className="relative pt-40 pb-32 px-8 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #7f1d1d, #b91c1c)' }}
      >
        <div className="glow-red opacity-10 top-0 left-0 scale-150 animate-pulse"></div>
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
             <Clock className="w-4 h-4 text-white" />
             <span className="text-white font-mono text-[10px] uppercase tracking-[0.2em] font-bold">Priority Crisis Dispatch Active</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
            Emergency Help <br/>
            <span className="text-white font-bold underline decoration-white/30 underline-offset-8">Right Now</span>
          </h1>
          <p className="text-xl text-gray-100 mb-12 max-w-2xl leading-relaxed">
            Found a swarm of termites? A wasp nest by the front door? Bed bugs in the guest room? Don't wait for business hours. Our rapid-response team is on call 24/7 for Naples residents.
          </p>
          <a href="tel:+12395550174" className="bg-[#DC2626] text-white font-black py-6 px-12 rounded-2xl shadow-xl flex items-center justify-center gap-4 transition-all hover:opacity-90 hover:scale-105 active:scale-95 text-xl">
            <Phone className="w-7 h-7" /> Call Emergency Line: +1 239-555-0174
          </a>
        </div>
      </section>

      {/* Situations Grid */}
      <section className="py-24 bg-white px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
         {[
           { title: "Active Wasp Nests", desc: "Huge nests on ceilings or patios. We clear them and treat the area to prevent rebuilds.", icon: <Zap className="w-8 h-8" /> },
           { title: "Termite Swarmers", desc: "If you see thousands of flying termites, your house is at immediate risk. We stop the swarm.", icon: <Bug className="w-8 h-8" /> },
           { title: "Rodent Breaches", desc: "A rat in the kitchen or bedroom? We remove the intruder and seal the hole immediately.", icon: <ShieldCheck className="w-8 h-8" /> },
           { title: "Bed Bug Discovery", desc: "Don't spend the night on the couch. We provide instant remediation for peace of mind.", icon: <ShieldCheck className="w-8 h-8" /> },
           { title: "Kitchen Crisis", desc: "German roaches in a restaurant or home? We provide medical-grade rapid elimination.", icon: <Droplets className="w-8 h-8" /> },
           { title: "Mystery Stings", desc: "Waking up with bites but don't know what they are? Our experts diagnose and solve it.", icon: <AlertTriangle className="w-8 h-8" /> }
         ].map(item => (
           <div key={item.title} className="p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-red-200 transition-all group shadow-sm hover:shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-medium text-text-main mb-4 leading-tight">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
           </div>
         ))}
      </section>

      {/* Map/Area Section */}
      <section className="py-24 px-8 bg-surface border-y border-gray-100 text-center">
         <h2 className="text-3xl font-medium text-text-main mb-6">Naples Priority Service Radius</h2>
         <p className="text-gray-600 max-w-2xl mx-auto mb-12">
           Our emergency technicians are stationed near Tamiami Trail N and Golden Gate Pkwy, 
           allowing us to reach almost any Naples address within 45-60 minutes.
         </p>
         <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-red-600">
            <span>Old Naples</span>
            <span>Park Shore</span>
            <span>Pelican Bay</span>
            <span>The Vineyards</span>
            <span>Aqualane Shores</span>
         </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto glass-panel p-16 rounded-[3rem] border border-red-500/20 text-center relative overflow-hidden bg-red-50 shadow-2xl">
          <h2 className="text-4xl font-medium text-text-main mb-8 leading-tight">Don't Wait Until Morning</h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
            Pest problems only get worse with time. Secure your property and your peace of mind with Naples' fastest exterminators.
          </p>
          <a href="tel:+12395550174" className="inline-flex items-center gap-3 bg-[#DC2626] text-white font-bold py-5 px-12 rounded-2xl hover:opacity-90 transition-all text-xl shadow-2xl shadow-red-500/20 group">
            <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" /> Priority Dispatch: +1 239-555-0174
          </a>
        </div>
      </section>
    </div>
  );
}
