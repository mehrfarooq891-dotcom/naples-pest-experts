import { Shield, Bug, Zap, Clock, ThumbsUp, MapPin, Phone, Star, CheckCircle, ChevronRight, Calendar, ArrowRight, ShieldCheck, Search, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Schema from '../components/Schema';

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Naples Pest Experts",
    "image": "https://naplespestexperts.com/logo.png",
    "@id": "https://naplespestexperts.com",
    "url": "https://naplespestexperts.com",
    "telephone": "+12395550174",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4821 Tamiami Trail N",
      "addressLocality": "Naples",
      "addressRegion": "FL",
      "postalCode": "34103",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.142,
      "longitude": -81.7948
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title="Pest Control Naples FL — Fast, Local & Guaranteed Exterminators"
        description="Looking for the best pest control in Naples FL? Naples Pest Experts offers same-day termite, roach, and mosquito control. Call +1 239-555-0174 now!"
      />
      <Schema data={localBusinessSchema} />

      {/* Hero Section */}
      <section 
        className="relative pt-40 pb-32 px-8 overflow-hidden min-h-[85vh] flex items-center bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80')` 
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 z-[1]" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}></div>

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-[2]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 30V20h2v10h24V20h2v10h24v2H34v24h-2V32H6v-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        
        <div className="glow-primary opacity-20 -top-40 -left-40 scale-150 z-[3]"></div>
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-white/20">
               <ShieldCheck className="w-3 h-3" /> Licensed Florida Exterminator #JB193775
            </div>
            <h1 className="text-5xl md:text-7xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
              Pest Control in <span className="text-white/80">Naples, FL</span> — Fast, Local & Guaranteed
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
              Don't let termites, roaches, or mosquitoes take over your Southwest Florida sanctuary. 
              Naples Pest Experts provides immediate, eco-friendly relief for homeowners and businesses across Collier County.
              Our team combines 12+ years of local experience with the latest state-approved tech to create an impenetrable shield around your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 items-center">
              <a 
                href="tel:+12395550174" 
                className="w-full sm:w-auto bg-white text-[#1B6B3A] hover:bg-gray-100 font-black py-5 px-10 rounded-2xl shadow-lg flex flex-col items-center gap-1 transition-all transform hover:scale-105"
              >
                <span className="text-[10px] uppercase opacity-70 tracking-tighter">Emergency Hotline 24/7</span>
                <span className="text-xl flex items-center gap-2"><Phone className="w-5 h-5" /> +1 239-555-0174</span>
              </a>
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white font-bold py-5 px-10 rounded-2xl hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-2 group">
                Request Free Inspection <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* AEO Block */}
            <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 max-w-xl">
              <p className="text-xs text-white/70 leading-relaxed italic">
                <strong className="text-white font-bold not-italic block mb-2 underline decoration-white/30">Who is the best pest control company in Naples FL?</strong>
                If you are searching for the best pest control company in Naples FL, Naples Pest Experts is the top-rated local choice. 
                We provide comprehensive property protection against Florida's most aggressive pests, including subterranean termites and German cockroaches. 
                Our 12+ years of on-the-ground experience in Collier County allows us to offer 100% satisfaction guarantees on every treatment, 
                making us the most reliable exterminator for Southwest Florida residents.
              </p>
            </div>
          </div>
          
          {/* Hero Visual */}
          <div className="hidden lg:block relative">
             <div className="aspect-square rounded-[3rem] bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center p-16">
                   <div className="text-center">
                      <Bug className="w-32 h-32 text-white/10 mb-8 mx-auto animate-pulse" />
                      <div className="h-2 w-48 bg-white/10 rounded-full mx-auto overflow-hidden">
                         <div className="h-full bg-white w-[85%]"></div>
                      </div>
                      <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mt-4">Threat Level: High (Seasonal)</p>
                   </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute top-10 left-10 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl">
                   <p className="text-3xl font-black text-white leading-none">120m</p>
                   <p className="text-[10px] text-white/60 uppercase font-black tracking-tighter">Avg. Response Time</p>
                </div>
                <div className="absolute bottom-10 right-10 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl">
                   <p className="text-white font-bold flex items-center gap-2"><Star className="w-4 h-4 fill-white text-white" /> 4.9/5</p>
                   <p className="text-[10px] text-white/60 uppercase font-black tracking-tighter">Customer Rating</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* About Section - Brief */}
      <section className="py-24 px-8 border-y border-gray-100 bg-surface relative z-10">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-3xl md:text-4xl font-medium text-text-main mb-8">Locally Vetted. Neighborhood Focused. Professional Grade.</h2>
           <p className="text-lg text-gray-600 leading-relaxed mb-8">
             Naples Pest Experts is a premier local pest control referral network connecting Naples homeowners with with the city's most respected licensed and vetted pest control professionals. For over 12 years, we've carefully selected the most capable specialists in Southwest Florida to ensure your property receives elite-level protection.
           </p>
           <p className="text-gray-500 text-sm italic mb-10 max-w-2xl mx-auto">
             From the high-rises of Park Shore to the sprawling estates of Golden Gate, 
             we help you find the perfect treatment plan that fits your environment, your family, and your budget.
           </p>
           <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs border-b border-primary/30 pb-1 hover:text-primary hover:border-primary transition-all">
             How Our Vetting Works <ArrowRight className="w-4 h-4" />
           </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-medium text-text-main mb-6">Naples' Most Comprehensive Protection Suite</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our specialized modules cover every pest threat common to Southwest Florida homes and businesses. 
            Choose a service to learn how we neutralize the risk.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Termite Control", 
              path: "/termite-control-naples",
              desc: "Florida termites never sleep. We offer advanced liquid barriers and baiting systems to stop subterranean and drywood termites from destroying your investment.",
              tags: ["Sentricon Certified", "Liquid Barrier", "WDO Reports"],
              image: "https://images.unsplash.com/photo-1595228702420-b3740f7f9761?auto=format&fit=crop&w=800&q=80"
            },
            { 
              title: "Cockroach Control", 
              path: "/cockroach-control-naples",
              desc: "Roaches are more than a nuisance; they're a health risk. We deploy targeted, low-toxicity treatments to eliminate infestations at the source.",
              tags: ["IGRs Used", "Medical-Grade Bait", "Guaranteed Result"],
              image: "https://images.unsplash.com/photo-1595228702420-b3740f7f9761?auto=format&fit=crop&w=800&q=80"
            },
            { 
              title: "Mosquito Control", 
              path: "/mosquito-control-naples",
              desc: "Reclaim your backyard. Our monthly misting and barrier treatments keep the Naples mosquito population away from your family and pets.",
              tags: ["Monthly Misting", "Foliage Spray", "Habitat Removal"],
              image: "https://images.unsplash.com/photo-1533236897211-13ef20bc767d?auto=format&fit=crop&w=800&q=80"
            },
            { 
              title: "Bed Bug Treatment", 
              path: "/bed-bug-treatment-naples",
              desc: "Don't lose a night's sleep. Our heat and chemical treatments are discreet, fast, and guaranteed to wipe out every stage of the bed bug lifecycle.",
              tags: ["Thermal Remediation", "Discreet Service", "Fast Kill"],
              image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80"
            },
            { 
              title: "Rodent Control", 
              path: "/rodent-control-naples",
              desc: "Mice and rats in Naples can chew through wires and cause fires. We find the entry points, seal them up, and humanely remove the intruders.",
              tags: ["Total Exclusion", "Attic Sanitation", "Snap Traps"],
              image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=800&q=80"
            },
            { 
              title: "Emergency Response", 
              path: "/emergency-pest-control-naples",
              desc: "Need help right now? Our rapid response team is always on standby for urgent pest crises—wasps, bed bugs, and critical kitchen infestations.",
              tags: ["24/7 Dispatch", "1-Hour ETA", "Crisis Resolution"]
            }
          ].map((s) => (
            <Link 
              key={s.title} 
              to={s.path} 
              className="group p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-primary transition-all flex flex-col h-full shadow-sm hover:shadow-xl overflow-hidden"
              id={`service-card-${s.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {s.image && (
                <img 
                  id={`service-img-${s.title.toLowerCase().replace(/\s+/g, '-')}`}
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-[220px] object-cover rounded-t-[8px] mb-8"
                  style={{ height: '220px', width: '100%', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="w-14 h-14 mb-8 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-medium text-text-main mb-4 leading-tight">{s.title}</h3>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed flex-1">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                 {s.tags.map(tag => <span key={tag} className="text-[9px] uppercase font-bold tracking-widest px-2 py-1 bg-gray-50 border border-gray-100 rounded-md text-gray-500">{tag}</span>)}
              </div>
              <div className="text-primary text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-32 px-8 relative overflow-hidden bg-white">
        <div className="glow-primary opacity-20 bottom-0 right-0 scale-150"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-text-main mb-8 leading-tight">
                The Science of Pest Defense in <span className="text-primary font-bold">Naples</span>.
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                We don't just spray; we strategize. Naples Pest Experts utilizes Integrated Pest Management (IPM) to ensure long-term solutions that are safe for your family while being lethal to pests. Our approach considers the unique biology of Florida's ecosystem, targetting pests where they live, breed, and enter your home.
              </p>
              
              <div className="space-y-8">
                {[
                  { 
                    title: "Certified Entemologists", 
                    desc: "Our team isn't just technicians; they are trained specialists who understand pest behavior, lifecycles, and vulnerabilities in the specialized Southwest Florida climate." 
                  },
                  { 
                    title: "The 3-Zone Protection Strategy", 
                    desc: "We secure your interior, the immediate perimeter, and the landscape boundary to create a multi-layered shield that pests cannot penetrate." 
                  },
                  { 
                    title: "Advanced AI Tracking", 
                    desc: "We use data-driven monitoring to predict pest cycles, ensuring we're one step ahead of the termites, ants, and roaches before they reach your doorstep." 
                  },
                  { 
                    title: "Naples Local Experts", 
                    desc: "Based right here on Tamiami Trail, we know exactly what bugs are biting in Marco Island, Bonita Springs, and Estero at any given time of year." 
                  }
                ].map((item) => (
                  <div key={item.title} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-text-main font-medium mb-2 text-lg underline decoration-primary/30 underline-offset-4">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 p-1">
                <div className="w-full h-full rounded-[2.8rem] bg-white p-12 flex flex-col justify-center relative overflow-hidden shadow-xl">
                  <div className="glow-primary opacity-30 top-0 left-0"></div>
                  <div className="relative z-10">
                    <p className="text-primary font-bold tracking-widest uppercase text-xs mb-6">Naples Client Spotlight</p>
                    <blockquote className="text-2xl text-text-main font-medium leading-tight mb-8">
                      "After moving from Michigan, the Palmetto bugs in Naples were a shock. Naples Pest Experts cleared the house in one visit and we haven't seen a roach in 6 months. Their tech even checked our attic for roof rats!"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">SM</div>
                      <div>
                        <div className="text-text-main font-medium">Sarah Miller</div>
                        <div className="text-gray-500 text-sm">Pelican Bay Resident</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-10 -left-10 p-8 rounded-3xl bg-white border border-gray-100 shadow-2xl glass-panel">
                <div className="text-3xl font-bold text-text-main mb-1">12K+</div>
                <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">Homes Protected</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yelp Reviews Section */}
      <section className="py-24 px-8 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-text-main mb-4 tracking-tight">What Naples Residents Are Saying</h2>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-[#d32323] text-white px-3 py-1 rounded-md font-black text-sm tracking-tighter italic">yelp</div>
                <div className="flex gap-0.5 text-[#d32323]">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <div className="relative">
                    <Star className="w-5 h-5 text-gray-200 fill-gray-200" />
                    <div className="absolute inset-0 overflow-hidden w-[80%]">
                      <Star className="w-5 h-5 fill-[#d32323] text-[#d32323]" />
                    </div>
                  </div>
                </div>
                <span className="text-xl font-bold text-[#d32323]">4.8/5</span>
              </div>
              <p className="text-gray-500 font-medium tracking-wide uppercase text-[10px] flex items-center gap-2">
                Naples Pest Experts on Yelp <span className="w-1 h-1 bg-gray-300 rounded-full"></span> (47 reviews)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "James M.",
                location: "Naples Park",
                review: "Found termites in our garage. Called Naples Pest Experts and they arrived same day. Professional, thorough, and the price was fair. Zero termites since."
              },
              {
                name: "Sandra R.",
                location: "Pelican Bay",
                review: "Mosquitoes were ruining our backyard. One treatment and the difference was night and day. Finally enjoying our pool again. Highly recommend!"
              },
              {
                name: "Mike T.",
                location: "Golden Gate",
                review: "Roach problem in the kitchen — handled it discreetly and fast. Haven't seen one in 4 months. Worth every penny."
              }
            ].map((r, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col hover:shadow-xl transition-all shadow-sm">
                <div className="flex gap-0.5 text-[#d32323] mb-6">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic flex-1 mb-6">
                  "{r.review}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-400">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-text-main font-bold text-sm tracking-tight">{r.name}</div>
                    <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">{r.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://www.yelp.com/biz/naples-pest-experts" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#d32323] text-white font-black py-4 px-10 rounded-xl hover:opacity-90 transition-all shadow-lg text-sm uppercase tracking-widest"
            >
              Read All Reviews on Yelp
            </a>
          </div>
        </div>
      </section>

      {/* AEO / FAQ Section */}
      <section className="py-32 px-8 bg-surface border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-medium text-text-main mb-6">Pest Control Questions & Answers</h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know about professional extermination in Naples, Florida.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What is the best pest control for Naples, Florida?",
                a: "The best pest control in Naples focuses on both invasive species like German Cockroaches and local concerns like Subterranean Termites and Palmetto Bugs. Naples Pest Experts uses a quarterly barrier system specifically designed for the high humidity and heavy rainfall cycles of Southwest Florida."
              },
              {
                q: "How much does professional pest control cost in Naples?",
                a: "Naples pest control pricing typically ranges from $35 to $60 per month for standard residential maintenance. Termite treatments are priced by linear foot or bait station count. We offer free, instant estimates tailored to your home's square footage and specific pest threats."
              },
              {
                q: "Is pest control worth it in Southwest Florida?",
                a: "Absolutely. Due to our tropical climate, pests in Naples are active year-round. Professional protection prevents termite damage (which can exceed $10,000 in repairs) and reduces health risks from mosquitoes and roaches, making it a critical aspect of home maintenance in Collier County."
              },
              {
                q: "Are the pesticides safe for my family and pets?",
                a: "Yes. Our team uses EPA-registered products and low-toxicity baiting systems. We prioritize targeted application over blanket spraying, ensuring your children and pets are safe while achieving 100% elimination of target pests. We also offer organic-based treatment options."
              },
              {
                q: "How often should I have pest control done in Naples?",
                a: "For most Naples homes, we recommend a quarterly treatment cycle (every 90 days). This maintains a consistent chemical barrier that breaks the pest lifecycle. However, high-moisture areas or properties with previous termite history may require monthly inspections."
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-[2rem] bg-white border border-gray-100 hover:shadow-lg transition-all"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <h3 className="text-xl font-medium text-text-main mb-4 flex items-start gap-4" itemProp="name">
                   <span className="text-primary font-bold">Q.</span> {item.q}
                </h3>
                <div 
                  className="text-gray-500 leading-relaxed pl-10" 
                  itemScope 
                  itemType="https://schema.org/Answer" 
                  itemProp="acceptedAnswer"
                >
                  <p itemProp="text">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final SEO Content Area */}
      <section className="py-32 px-8 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-[#1A1A1A] text-sm leading-[1.8] tracking-wide">
            <div className="space-y-6">
              <h4 className="text-text-main text-lg font-medium">Protecting Your Naples Property Investment</h4>
              <p>
                In Naples, Florida, owning a home is a luxury, but maintaining it against the elements—and the pests—is a full-time commitment. Our city's unique geography, nestled between the Everglades and the Gulf of Mexico, creates a biological hotspot for insects and rodents. From the high-end estates in Port Royal to the family neighborhoods in North Naples, no property is naturally immune to infestation. Termites alone cause billions in property damage annually across Florida, and Naples homes are at particular risk due to the moist, sandy soil conditions that subterranean termites love.
              </p>
              <p>
                Naples Pest Experts was founded on the principle that local knowledge is the most powerful tool in pest management. We understand how the changing seasons—from the dry winters to the sweltering, wet summers—affect bug migrations. When the rains start in May, ants lead a charge toward your kitchen. When the temperatures drop slightly in November, rodents look for warmth in your attic. Our technicians are trained to anticipate these shifts, adjusting our barrier treatments to provide proactive, rather than reactive, defense.
              </p>
            </div>
            <div className="space-y-6">
               <h4 className="text-text-main text-lg font-medium">Sustainable & Targeted Extermination Techniques</h4>
               <p>
                 Modern pest control isn't just about the chemicals; it's about the technology and methodology. At Naples Pest Experts, we leverage the latest in baiting technology and moisture analysis. We don't just spray baseboards; we identify the entry points under sinks, around plumbing penetrations, and along window sills where pests actually cross the threshold. By sealing these entry points (exclusion) and using targeted baits, we reduce the total volume of pesticide used in your home while increasing the effectiveness of the treatment.
               </p>
               <p>
                 Security and trust are paramount when choosing a service provider to enter your home. That's why every one of our technicians undergoes rigorous background checks and continuous education. We are a family-owned business deeply rooted in the Naples community, supporting local schools and charities in Golden Gate and Bonita Springs. When you call +1 239-555-0174, you're not reaching a distant corporate call center; you're speaking with a neighbor who understands the value of a pest-free home.
               </p>
               <div className="pt-6 flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-text-main font-bold text-xl leading-none">5.0</span>
                    <div className="flex gap-1 py-2 text-accent">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/60">Google Verified Rating</span>
                  </div>
                  <div className="w-px h-12 bg-gray-100"></div>
                  <div className="flex flex-col">
                     <span className="text-text-main font-bold text-xl leading-none">12+</span>
                     <span className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/60 mt-2">Years Serving Naples</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 px-8 text-center border-t border-gray-100 bg-white">
        <h3 className="text-xl font-medium text-text-main mb-6">Serving All Neighborhoods in Naples</h3>
        <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-500 font-medium">
          {["Naples Park", "Pine Ridge", "Pelican Bay", "Golden Gate", "Vineyards", "Old Naples", "East Naples", "North Naples", "Port Royal"].map(n => (
            <span key={n} className="px-3 py-1 rounded-full border border-gray-200 bg-gray-50">{n}</span>
          ))}
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 px-8 bg-surface border-t border-gray-100 relative z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center mb-12">
          <h2 className="text-3xl font-medium text-text-main">Local Pest Intelligence</h2>
          <Link to="/blog" className="text-primary text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-4 transition-all">
            View All Posts <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              id: 'signs-you-have-a-rodent-problem-in-your-naples-attic',
              title: "Signs You Have a Rodent Problem in Your Naples Attic",
              date: "June 2, 2026"
            },
            {
              id: 'how-often-should-you-get-pest-control-in-naples-florida',
              title: "How Often Should You Get Pest Control in Naples Florida?",
              date: "May 31, 2026"
            },
            {
              id: 'pest-control-for-bonita-springs-residents-complete-local-guide',
              title: "Pest Control for Bonita Springs Residents — Complete Local Guide",
              date: "May 30, 2026"
            },
            {
              id: 'drywood-vs-subterranean-termites-in-naples-know-the-difference',
              title: "Drywood vs Subterranean Termites in Naples — Know the Difference",
              date: "May 29, 2026"
            },
            {
              id: 'what-are-palmetto-bugs-and-why-are-they-everywhere-in-naples',
              title: "What Are Palmetto Bugs and Why Are They Everywhere in Naples?",
              date: "May 28, 2026"
            },
            {
              id: 'pest-control-for-marco-island-homeowners-what-makes-it-different',
              title: "Pest Control for Marco Island Homeowners — What Makes It Different",
              date: "May 27, 2026"
            },
            {
              id: 'mosquito-borne-diseases-in-collier-county-what-naples-residents-should-know',
              title: "Mosquito Borne Diseases in Collier County — What Naples Residents Should Know",
              date: "May 24, 2026"
            },
            {
              id: 'how-to-prepare-your-naples-home-for-pest-control-treatment',
              title: "How to Prepare Your Naples Home for Pest Control Treatment",
              date: "May 23, 2026"
            },
            {
              id: 'ants-in-your-naples-home-why-how-to-get-rid-of-them',
              title: "Ants in Your Naples Home? Here is Why and How to Get Rid of Them",
              date: "May 20, 2026"
            },
            {
              id: 'termite-season-naples-florida-what-homeowners-must-know',
              title: "Termite Season in Southwest Florida — What Naples Homeowners Must Know",
              date: "May 18, 2026"
            },
            {
              id: 'how-much-does-pest-control-cost-naples-fl',
              title: "How Much Does Pest Control Cost in Naples Florida in 2025?",
              date: "May 13, 2026"
            },
            {
              id: 'is-pest-control-safe-kids-pets-naples',
              title: "Is Pest Control Safe for Kids & Pets? Naples Families Ask",
              date: "May 12, 2026"
            },
            {
              id: 'signs-you-have-termites-naples',
              title: "7 Warning Signs You Have Termites in Your Naples, FL Home",
              date: "Oct 24, 2025"
            },
            {
              id: 'roach-prevention-summer-florida',
              title: "How to Keep Roaches Out of Your Naples Kitchen This Summer",
              date: "Sep 12, 2025"
            },
            {
              id: 'mosquito-control-guide-naples',
              title: "The Ultimate Guide to Mosquito Control in South Collier County",
              date: "Aug 05, 2025"
            }
          ].map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 transition-all flex flex-col shadow-sm hover:shadow-md">
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-4 flex items-center gap-2">
                <Calendar className="w-3 h-3" /> {post.date}
              </span>
              <h3 className="text-lg font-medium text-text-main mb-4 leading-tight flex-1">{post.title}</h3>
              <div className="flex items-center gap-2 text-primary text-[10px] uppercase font-bold tracking-widest">
                Read Post <ChevronRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 px-8 bg-white border-t border-gray-100 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8">
           <h2 className="text-3xl md:text-4xl font-medium text-text-main mb-2">Visit Our Naples Office</h2>
           <p className="text-gray-600">4821 Tamiami Trail N, Naples, FL 34103</p>
        </div>
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-sm">
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

      {/* Final CTA */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto glass-panel p-12 rounded-3xl border border-primary/20 text-center relative overflow-hidden bg-primary/5 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="text-3xl md:text-4xl font-medium text-text-main mb-6">Ready to Experience a Pest-Free Home?</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            Schedule your free professional inspection today. Our technicians are standing by to protect your Naples property.
          </p>
          <a 
            href="tel:+12395550174" 
            className="inline-flex items-center gap-3 bg-accent text-white font-bold py-4 px-10 rounded-xl hover:opacity-90 transition-all text-lg shadow-lg shadow-accent/20"
          >
            <Phone className="w-5 h-5" /> +1 239-555-0174
          </a>
        </div>
      </section>
    </div>
  );
}
