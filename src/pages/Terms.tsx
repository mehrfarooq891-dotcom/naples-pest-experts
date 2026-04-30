import SEO from '../components/SEO';

export default function Terms() {
  return (
    <div className="flex flex-col">
      <SEO title="Terms of Service — Naples Pest Experts" description="Guidelines for using our Lead Generation services." />
      <section className="pt-40 pb-32 bg-white px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-medium text-text-main mb-8">Terms of Service</h1>
        <div className="prose prose-primary text-gray-600 space-y-6">
          <p>Last Updated: October 2025</p>
          <p>
            By accessing the Naples Pest Experts website, you agree to comply with and be bound by the following terms and conditions.
          </p>
          <h2 className="text-2xl text-text-main font-medium">Lead Generation Service</h2>
          <p>
            Naples Pest Experts is a lead generation platform. We connect homeowners with local pest control professionals. We are not responsible for the actual performance of the pest control services provided by third-party contractors.
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
