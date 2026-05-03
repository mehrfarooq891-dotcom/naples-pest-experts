import SEO from '../components/SEO';

export default function Terms() {
  return (
    <div className="flex flex-col">
      <SEO title="Terms of Service — Naples Pest Experts" description="Guidelines for using our trusted pest control services." />
      
      <section 
        className="relative pt-40 pb-20 px-8 overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg, #1B6B3A 0%, #0f4a28 100%)' }}
      >
        <div className="glow-primary opacity-20 -top-40 -left-40 scale-150"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl font-medium text-white mb-6 tracking-tight">Terms of Service</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Transparent guidelines for a professional partnership.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white px-8 max-w-4xl mx-auto">
        <div className="prose prose-primary text-gray-600 space-y-6">
          <p>Last Updated: October 2025</p>
          <p>
            By accessing the Naples Pest Experts website, you agree to comply with and be bound by the following terms and conditions.
          </p>
          <h2 className="text-2xl text-text-main font-medium">Service Standards</h2>
          <p>
            Naples Pest Experts provides trusted pest control specialists since 2011. We connect homeowners with local pest control professionals with a commitment to quality and transparency. We are not responsible for the actual performance of the pest control services provided by third-party contractors.
          </p>
          <h2 className="text-2xl text-text-main font-medium">User Conduct</h2>
          <p>
            Users agree not to use this site for any fraudulent purposes or to submit false information.
          </p>
          <h2 className="text-2xl text-text-main font-medium">Disclaimers</h2>
          <p>
            The information provided on this site is for general informational purposes. All warranties, express or implied, are disclaimed.
          </p>
        </div>
      </section>
    </div>
  );
}
