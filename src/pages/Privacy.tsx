import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <div className="flex flex-col">
      <SEO title="Privacy Policy — Naples Pest Experts" description="Our privacy practices regarding your data." />
      <section className="pt-40 pb-32 bg-white px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-medium text-text-main mb-8">Privacy Policy</h1>
        <div className="prose prose-primary text-gray-600 space-y-6">
          <p>Last Updated: October 2025</p>
          <p>
            At Naples Pest Experts, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our website or services.
          </p>
          <h2 className="text-2xl text-text-main font-medium">Information We Collect</h2>
          <p>
            When you request a quote or contact us via our forms, we collect your name, phone number, and email address. We also collect information about the pest problem you are facing to provide an accurate estimate.
          </p>
          <h2 className="text-2xl text-text-main font-medium">How We Use Your Data</h2>
          <p>
            Your information is primarily used to connect you with professional pest control services in Naples, FL. By submitting a request, you agree to be contacted by our team or our local partners regarding your service quote.
          </p>
          <h2 className="text-2xl text-text-main font-medium">Security</h2>
          <p>
             We implement industry-standard security measures to protect your sensitive data from unauthorized access.
          </p>
        </div>
      </section>
    </div>
  );
}
