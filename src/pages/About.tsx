import { Link } from 'react-router-dom';
import { Phone, Shield, Target, Heart, Award, Users, ChevronRight, CheckCircle, Zap } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="About Naples Pest Experts — Over 12 Years of Trusted Service"
        description="Learn more about Naples Pest Experts. We are a family-owned pest control company serving Naples, Florida with eco-friendly and effective solutions."
      />

      {/* Hero */}
      <section 
        className="relative pt-40 pb-32 px-8 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B6B3A 0%, #0f4a28 100%)' }}
      >
        <div className="glow-primary opacity-20 -top-40 -left-40 scale-150"></div>
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <span className="text-white font-mono text-xs uppercase tracking-widest mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/10">Founded 2011</span>
          <h1 className="text-5xl md:text-7xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
            Our Mission: A <br/>
            <span className="text-white font-bold underline decoration-white/30 underline-offset-8">Pest-Free Naples</span>
          </h1>
          <p className="text-xl text-gray-100 mb-12 max-w-3xl leading-relaxed">
            For over 12 years, Naples Pest Experts has been the silent guardian of Southwest Florida properties. We aren't just exterminators; we are your neighbors, dedicated to protecting high-end estates and family homes alike.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl border-t border-white/10 pt-12">
            {[
              { val: "12+", label: "Years Experience" },
              { val: "15k+", label: "Pests Neutralized" },
              { val: "5.0", label: "Average Rating" },
              { val: "24/7", label: "Local Response" }
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                <div className="text-[10px] text-gray-300 uppercase font-bold tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-medium text-text-main leading-tight">Built on Trust, Science, and Community.</h2>
          <p className="text-gray-600 leading-relaxed">
            Naples Pest Experts started with a single truck and a commitment to radical transparency. In an industry often clouded by vague pricing and unnecessary chemicals, we stood out by offering fixed-rate guarantees and Integrated Pest Management (IPM) protocols.
          </p>
          <p className="text-gray-500 leading-relaxed">
            We understand the unique ecology of Collier County. From the swamp-adjacent neighborhoods in Golden Gate to the salt-air environments of Marco Island, we've developed customized treatment blueprints for every micro-climate in Southwest Florida.
          </p>
          <div className="pt-8">
             <Link to="/contact" className="inline-flex items-center gap-3 bg-primary text-white font-black py-4 px-10 rounded-2xl hover:opacity-90 transition-all text-lg shadow-xl shadow-primary/20 group">
                Work With Us <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
             </Link>
          </div>
        </div>
        <div className="relative">
           <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-primary/20 to-primary/5 border border-gray-100 p-1">
              <div className="w-full h-full rounded-[2.8rem] bg-gray-50 p-12 flex flex-col justify-center relative overflow-hidden shadow-2xl">
                 <div className="glow-primary opacity-30 top-0 right-0"></div>
                 <Shield className="w-16 h-16 text-primary/40 mb-8" />
                 <h4 className="text-text-main text-2xl font-medium mb-6">Our Core Values</h4>
                 <ul className="space-y-4 text-gray-600 text-sm">
                    <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-primary" /> Guaranteed Results or We Re-treat Free</li>
                    <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-primary" /> Transparent Upfront Written Estimates</li>
                    <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-primary" /> Eco-Conscious & Family-Safe Products</li>
                    <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-primary" /> Continuous Technical Education</li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-32 bg-surface px-8 border-y border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
           {[
             { icon: <Target className="w-10 h-10" />, title: "Precision", text: "We use acoustic sensors and thermal mapping to target the source, not just the symptoms." },
             { icon: <Heart className="w-10 h-10" />, title: "Care", text: "Treating your home as if it were our own, with ultimate respect for your property." },
             { icon: <Award className="w-10 h-10" />, title: "Integrity", text: "No hidden fees, no long-term contracts unless you want them. Pure local service." }
           ].map(v => (
             <div key={v.title} className="group">
                <div className="w-20 h-20 rounded-3xl bg-white border border-gray-200 flex items-center justify-center text-primary mb-8 mx-auto group-hover:bg-primary/10 group-hover:border-primary/20 transition-all shadow-sm">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-medium text-text-main mb-4">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto glass-panel p-16 rounded-[3rem] border border-primary/20 text-center relative overflow-hidden bg-primary/5 shadow-2x">
          <h2 className="text-4xl font-medium text-text-main mb-8 leading-tight">Ready to Experience Local Care?</h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
            Join the 1,200+ Naples families who trust us for year-round pest defense.
          </p>
          <a href="tel:+12395550174" className="inline-flex items-center gap-3 bg-primary text-white font-bold py-5 px-12 rounded-2xl hover:opacity-90 transition-all text-xl shadow-2xl shadow-primary/20 group">
            <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" /> Talk to an Expert: +1 239-555-0174
          </a>
        </div>
      </section>
    </div>
  );
}
