import { Phone, MapPin, Mail, Clock, Send, ShieldCheck, ChevronRight, Zap } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Contact Naples Pest Experts — Get Your Free Quote Fast"
        description="Contact Naples Pest Experts for the same-day pest control in Naples, FL. Call +1 239-555-0174 or visit our office at 4821 Tamiami Trail N."
      />

      {/* Hero */}
      <section 
        className="relative pt-40 pb-32 px-8 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B6B3A 0%, #0f4a28 100%)' }}
      >
        <div className="glow-primary opacity-20 -top-40 -right-40 scale-150"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-white font-mono text-[10px] uppercase font-bold tracking-[0.3em] mb-6 block border border-white/20 bg-white/10 px-4 py-1.5 rounded-full w-fit mx-auto">Immediate Assistance</span>
          <h1 className="text-5xl md:text-7xl font-medium text-white mb-8 tracking-tight leading-tight">
            How Can We <br/>
            <span className="text-white font-bold underline decoration-white/20 underline-offset-8 italic">Protect</span> You?
          </h1>
          <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Found a pest problem? Don't wait. Our dispatch team is standing by to send a certified technician to your Naples property.
          </p>
        </div>
      </section>

      {/* Grid Content */}
      <section className="py-24 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden group">
            <div className="glow-primary opacity-20 top-0 left-0"></div>
            <div className="relative z-10">
               <h3 className="text-2xl font-medium text-text-main mb-8">Direct Contact</h3>
               <div className="space-y-10">
                 {[
                   { icon: <Phone className="w-6 h-6" />, label: "Call Us Anytime", val: "+1 239-555-0174", sub: "24/7 Emergency Dispatch Available" },
                   { icon: <MapPin className="w-6 h-6" />, label: "Visit Our Office", val: "4821 Tamiami Trail N", sub: "Naples, FL 34103" },
                   { icon: <Mail className="w-6 h-6" />, label: "Email Support", val: "help@naplespestexperts.com", sub: "Replies within 2 business hours" },
                   { icon: <Clock className="w-6 h-6" />, label: "Business Hours", val: "Mon - Sat: 8AM - 6PM", sub: "Sunday: Emergency Only" }
                 ].map(item => (
                   <div key={item.label} className="flex gap-6 items-start group/item transition-all">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-primary group-hover/item:bg-primary/10 transition-all flex-shrink-0 shadow-inner">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-1">{item.label}</div>
                        <div className="text-lg text-text-main font-medium mb-1">{item.val}</div>
                        <div className="text-xs text-gray-400">{item.sub}</div>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full">
           <form className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl space-y-8 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-3">
                    <label className="text-xs uppercase font-bold text-gray-600 tracking-widest\">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 text-text-main text-sm focus:outline-none focus:border-primary/50 transition-all" />
                 </div>
                 <div className="space-y-3">
                    <label className="text-xs uppercase font-bold text-gray-600 tracking-widest\">Phone Number</label>
                    <input type="tel" placeholder="(239) 000-0000" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 text-text-main text-sm focus:outline-none focus:border-primary/50 transition-all" />
                 </div>
              </div>
              <div className="space-y-3">
                 <label className="text-xs uppercase font-bold text-gray-600 tracking-widest\">Service Needed</label>
                 <select className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 text-text-main text-sm focus:outline-none focus:border-primary/50 transition-all appearance-none\">
                    <option>Termite Control</option>
                    <option>Cockroach Elimination</option>
                    <option>Mosquito Misting</option>
                    <option>Rodent Exclusion</option>
                    <option>Bed Bug Heat Treatment</option>
                    <option>Other / Emergency</option>
                 </select>
              </div>
              <div className="space-y-3">
                 <label className="text-xs uppercase font-bold text-gray-600 tracking-widest\">How can we help?</label>
                 <textarea rows={4} placeholder="Tell us about your pest problem..." className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 text-text-main text-sm focus:outline-none focus:border-primary/50 transition-all resize-none\"></textarea>
              </div>
              <button className="w-full bg-primary text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:opacity-90 transition-all transform active:scale-95 shadow-xl shadow-primary/20 uppercase tracking-widest text-sm\">
                 Send Request <Send className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-gray-500 text-center uppercase font-bold tracking-widest leading-relaxed px-10\">
                BY CLICKING "SEND REQUEST" YOU AGREE TO RECEIVE COMMUNICATIONS FROM NAPLES PEST EXPERTS REGARDING YOUR SERVICE QUOTE.
              </p>
           </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 px-8 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-8">
           <h2 className="text-3xl md:text-4xl font-medium text-text-main mb-2">Visit Our Naples Office</h2>
           <p className="text-gray-600">4821 Tamiami Trail N, Naples, FL 34103</p>
        </div>
        <div className="max-w-7xl mx-auto rounded-xl overflow-hidden shadow-sm">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.7412491031896!2d-81.8033453259349!3d26.205094190144298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db1e3e26e42259%3A0xabd2a47aead32031!2s4821%20Tamiami%20Trl%20N%2C%20Naples%2C%20FL%2034103%2C%20USA!5e0!3m2!1sen!2s!4v1777796219205!5m2!1sen!2s" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '12px' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
