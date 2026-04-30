import { Calendar, ChevronRight, Search, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Blog() {
  const posts = [
    {
      id: 'signs-you-have-termites-naples',
      title: "7 Warning Signs You Have Termites in Your Naples, FL Home",
      excerpt: "In Southwest Florida, termites are a constant threat. Learn the subtle signs that your home is under attack before major damage occurs.",
      date: "Oct 24, 2025",
      readTime: "6 min read",
      category: "Termite Defense"
    },
    {
      id: 'roach-prevention-summer-florida',
      title: "How to Keep Roaches Out of Your Naples Kitchen This Summer",
      excerpt: "The rainy season in Collier County brings pests indoors. Use these professional tips to create a perimeter roaches can't cross.",
      date: "Sep 12, 2025",
      readTime: "4 min read",
      category: "Prevention"
    },
    {
      id: 'mosquito-control-guide-naples',
      title: "The Ultimate Guide to Mosquito Control in South Collier County",
      excerpt: "Don't let mosquitoes ruin your evening by the pool. We break down the most effective outdoor protection strategies for Naples residents.",
      date: "Aug 05, 2025",
      readTime: "8 min read",
      category: "Outdoor Living"
    }
  ];

  return (
    <div className="flex flex-col">
      <SEO 
        title="Naples Pest Advice & Intelligence Blog — Expert Extermination Tips"
        description="Stay informed with the latest pest control advice from Naples Pest Experts. Preventing termites, roaches, and mosquitoes in Southwest Florida."
      />

      <section className="pt-40 pb-20 px-8 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-medium text-text-main mb-6 tracking-tight leading-tight">
          Local Pest <span className="text-primary">Intelligence</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          The specialized knowledge you need to protect your Southwest Florida property from invasive insects and rodents.
        </p>
      </section>

      <section className="py-24 px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {posts.map((post) => (
          <Link 
            key={post.id} 
            to={`/blog/${post.id}`} 
            className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all flex flex-col h-full"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest\">
                 <Clock className="w-3 h-3" /> {post.readTime}
              </div>
            </div>
            
            <h2 className="text-2xl font-medium text-text-main mb-6 leading-tight group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1\">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between pt-6 border-t border-gray-100\">
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.2em] flex items-center gap-2\">
                <Calendar className="w-3 h-3" /> {post.date}
              </span>
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all\">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 px-8 border-t border-gray-100 bg-surface">
        <div className="max-w-4xl mx-auto text-center rounded-[3rem] p-16 border border-gray-100 bg-white shadow-xl\">
          <h2 className="text-3xl font-medium text-text-main mb-6\">Stay One Step Ahead of the Bugs</h2>
          <p className="text-gray-500 mb-10 max-w-md mx-auto\">
            Get monthly Naples pest alerts and seasonal prevention checklists sent straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto\">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="bg-gray-50 border border-gray-200 text-text-main rounded-xl py-4 px-6 flex-1 focus:outline-none focus:border-primary transition-colors\"
            />
            <button className="bg-primary text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20\">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
