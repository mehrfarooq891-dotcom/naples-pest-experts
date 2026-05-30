import { Calendar, ChevronRight, Search, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Blog() {
  const posts = [
    {
      id: 'pest-control-for-bonita-springs-residents-complete-local-guide',
      title: "Pest Control for Bonita Springs Residents — Complete Local Guide",
      excerpt: "Living in Bonita Springs comes with incredible natural scenery, but also unique moisture and pest issues. Read our complete guide to termites, rodents, and seasonal pest management.",
      date: "May 30, 2026",
      readTime: "5 min read",
      category: "Local Guide",
      gradient: "linear-gradient(135deg, #0A4A3C, #031F19)"
    },
    {
      id: 'drywood-vs-subterranean-termites-in-naples-know-the-difference',
      title: "Drywood vs Subterranean Termites in Naples — Know the Difference",
      excerpt: "Faced with a termite infestation? Compare drywood and subterranean termites, learn how to identify warning signs, and find out which poses the greater danger to Southwest Florida homes.",
      date: "May 29, 2026",
      readTime: "6 min read",
      category: "Termite Defense",
      gradient: "linear-gradient(135deg, #4A2C2A, #1A0F0E)"
    },
    {
      id: 'what-are-palmetto-bugs-and-why-are-they-everywhere-in-naples',
      title: "What Are Palmetto Bugs and Why Are They Everywhere in Naples?",
      excerpt: "New to Naples and startled by giant flying roaches? Learn the truth about palmetto bugs, why the local climate breeds them, and how to keep them out of your home.",
      date: "May 28, 2026",
      readTime: "5 min read",
      category: "Roach Control",
      gradient: "linear-gradient(135deg, #3B2314, #170E08)"
    },
    {
      id: 'pest-control-for-marco-island-homeowners-what-makes-it-different',
      title: "Pest Control for Marco Island Homeowners — What Makes It Different",
      excerpt: "Waterfront living brings unique pest challenges. Discover how salt air, moisture levels, docks, canals, and island geography require specialized, ocean-safe treatments.",
      date: "May 27, 2026",
      readTime: "5 min read",
      category: "Island Advisor",
      gradient: "linear-gradient(135deg, #0B3C5D, #051C2C)"
    },
    {
      id: 'mosquito-borne-diseases-in-collier-county-what-naples-residents-should-know',
      title: "Mosquito Borne Diseases in Collier County — What Naples Residents Should Know",
      excerpt: "Don't ignore the buzz. Mosquitoes in Collier County transmit serious health conditions. Learn about West Nile, Dengue, and how to safeguard your Naples household.",
      date: "May 24, 2026",
      readTime: "6 min read",
      category: "Health Advisory",
      gradient: "linear-gradient(135deg, #1e3a3a, #0d1e1e)"
    },
    {
      id: 'how-to-prepare-your-naples-home-for-pest-control-treatment',
      title: "How to Prepare Your Naples Home for Pest Control Treatment",
      excerpt: "Maximize treatment efficacy with our comprehensive pest treatment checklist. Learn what to do before your Naples pest control technician arrives.",
      date: "May 23, 2026",
      readTime: "5 min read",
      category: "Preparation",
      gradient: "linear-gradient(135deg, #1A365D, #0D1B2A)"
    },
    {
      id: 'ants-in-your-naples-home-why-how-to-get-rid-of-them',
      title: "Ants in Your Naples Home? Here is Why and How to Get Rid of Them",
      excerpt: "Tired of persistent ants in your kitchen or painful stings in your yard? Compare ghost ants and fire ants, learn why they invade Naples homes, and find the ultimate solutions.",
      date: "May 20, 2026",
      readTime: "6 min read",
      category: "Ant Control",
      gradient: "linear-gradient(135deg, #124A2F, #061F13)"
    },
    {
      id: 'termite-season-naples-florida-what-homeowners-must-know',
      title: "Termite Season in Southwest Florida — What Naples Homeowners Must Know",
      excerpt: "Termite season in Naples typically runs March to May. Learn why Collier County is a hotspot for swarms and how to protect your structure before the damage starts.",
      date: "May 18, 2026",
      readTime: "6 min read",
      category: "Termite Alert",
      gradient: "linear-gradient(135deg, #4a2c2a, #1a0f0e)"
    },
    {
      id: 'how-much-does-pest-control-cost-naples-fl',
      title: "How Much Does Pest Control Cost in Naples Florida in 2025?",
      excerpt: "Get transparent 2025 pest control rates in Naples, FL. Compare general exterminator prices, termite systems, mosquito mitigation, and rodent exclusions today.",
      date: "May 13, 2026",
      readTime: "6 min read",
      category: "Pricing Advice",
      gradient: "linear-gradient(135deg, #1e3a5f, #0f1d30)"
    },
    {
      id: 'is-pest-control-safe-kids-pets-naples',
      title: "Is Pest Control Safe for Kids and Pets? Naples Families Ask",
      excerpt: "Concerned about child & pet safety during pest treatments? Learn about families' choices with child & pet safe pest control and eco friendly exterminator practices in Southwest Florida.",
      date: "May 12, 2026",
      readTime: "5 min read",
      category: "Family & Pet Safety",
      gradient: "linear-gradient(135deg, #0F6A54, #073D30)"
    },
    {
      id: 'signs-you-have-termites-naples',
      title: "7 Warning Signs You Have Termites in Your Naples, FL Home",
      excerpt: "In Southwest Florida, termites are a constant threat. Learn the subtle signs that your home is under attack before major damage occurs.",
      date: "Oct 24, 2025",
      readTime: "6 min read",
      category: "Termite Defense",
      gradient: "linear-gradient(135deg, #8B4513, #4a2c0a)"
    },
    {
      id: 'roach-prevention-summer-naples',
      title: "How to Keep Cockroaches Out of Your Naples Kitchen This Summer",
      excerpt: "The rainy season in Collier County brings pests indoors. Use these professional cockroach control tips to create a perimeter roaches can't cross.",
      date: "Oct 28, 2025",
      readTime: "4 min read",
      category: "Prevention",
      gradient: "linear-gradient(135deg, #2d4a1e, #1B6B3A)"
    },
    {
      id: 'mosquito-control-guide-naples',
      title: "The Ultimate Guide to Mosquito Control in South Collier County",
      excerpt: "Don't let mosquitoes ruin your evening by the pool. We break down the most effective outdoor protection strategies for Naples residents during peak season.",
      date: "Aug 05, 2025",
      readTime: "8 min read",
      category: "Outdoor Living",
      gradient: "linear-gradient(135deg, #0a2a4a, #1a5a8a)"
    },
    {
      id: 'mosquito-season-naples-preparation',
      title: "Mosquito Season in Naples Florida — When It Starts and How to Prepare",
      excerpt: "Naples mosquito season runs from May to October. Learn why Collier County is a hotspot and how to defend your home before the swarm begins.",
      date: "May 07, 2026",
      readTime: "5 min read",
      category: "Outdoor Living",
      gradient: "linear-gradient(135deg, #1B6B3A, #0f4a28)"
    },
    {
      id: 'bed-bug-treatment-naples',
      title: "Bed Bug Treatment in Naples — What to Expect and How Long It Takes",
      excerpt: "Discover the best bed bug treatment options in Naples, how long chemical and heat treatments take, and how to prepare your home.",
      date: "May 09, 2026",
      readTime: "7 min read",
      category: "Extermination",
      gradient: "linear-gradient(135deg, #7A1C1C, #3B0D0D)"
    },
    {
      id: 'rodent-control-naples-fl-how-to-keep-rats-out-of-your-attic',
      title: "Rodent Control in Naples FL — How to Keep Rats Out of Your Attic",
      excerpt: "Roof rats are common in Naples attic spaces. Learn the signs of infestation and 5 expert rodent exclusion methods to secure your Southwest Florida home.",
      date: "May 10, 2026",
      readTime: "7 min read",
      category: "Rodent Defense",
      gradient: "linear-gradient(135deg, #1a1a1a, #303030)"
    }
  ];

  return (
    <div className="flex flex-col bg-white overflow-hidden min-h-screen">
      <SEO 
        title="Naples Pest Advice & Intelligence Blog — Expert Extermination Tips"
        description="Stay informed with the latest pest control advice from Naples Pest Experts. Preventing termites, roaches, and mosquitoes in Southwest Florida."
      />

      <section 
        className="relative pt-40 pb-32 px-8 overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg, #1B6B3A 0%, #0f4a28 100%)' }}
      >
        <div className="glow-primary opacity-20 -top-40 -right-40 scale-150"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-medium text-white mb-6 tracking-tight leading-tight">
            Local Pest <span className="text-white">Intelligence</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            The specialized knowledge you need to protect your Southwest Florida property from invasive insects and rodents.
          </p>
        </div>
      </section>

      <section className="py-24 px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 bg-white">
        {posts.map((post) => (
          <Link 
            key={post.id} 
            to={`/blog/${post.id}`} 
            className="group bg-white rounded-[2.5rem] border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all flex flex-col h-full text-[#1A1A1A] overflow-hidden"
          >
            <div 
              className="w-full h-[180px]"
              style={{ background: post.gradient, borderRadius: '8px 8px 0 0' }}
            />
            <div className="p-8 flex flex-col flex-1">
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                   <Clock className="w-3 h-3" /> {post.readTime}
                </div>
              </div>
              
              <h2 className="text-2xl font-medium text-[#1A1A1A] mb-6 leading-tight group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.2em] flex items-center gap-2">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 px-8 border-t border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto text-center rounded-[3rem] p-16 border border-gray-100 bg-white shadow-xl">
          <h2 className="text-3xl font-medium text-[#1A1A1A] mb-6">Stay One Step Ahead of the Bugs</h2>
          <p className="text-gray-500 mb-10 max-w-md mx-auto">
            Get monthly Naples pest alerts and seasonal prevention checklists sent straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="bg-gray-50 border border-gray-200 text-[#1A1A1A] rounded-xl py-4 px-6 flex-1 focus:outline-none focus:border-primary transition-colors"
            />
            <button className="bg-primary text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
