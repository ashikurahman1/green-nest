import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 via-white to-white py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-800">Privacy Policy</h1>
          <p className="text-green-600 text-sm mt-2">
            Last updated: December 2025
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white shadow-md border border-green-100 rounded-2xl p-8 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-green-800">
              1. Information We Collect
            </h2>
            <p className="text-green-700 text-sm mt-2 leading-relaxed">
              We collect information to provide a better experience on
              Greennest. This includes:
            </p>
            <ul className="mt-3 space-y-2 text-green-700 text-sm">
              <li>• Name and email address</li>
              <li>• Phone number (optional)</li>
              <li>• Delivery or billing details (only if you place orders)</li>
              <li>• Messages you send through our contact form</li>
              <li>• Basic usage data to improve website performance</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-green-800">
              2. How We Use Your Information
            </h2>
            <p className="text-green-700 text-sm mt-2 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="mt-3 space-y-2 text-green-700 text-sm">
              <li>• Provide and improve our products and services</li>
              <li>• Respond to your messages and support requests</li>
              <li>• Process orders and send updates</li>
              <li>• Analyze website performance and user behavior</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-green-800">
              3. How We Protect Your Data
            </h2>
            <p className="text-green-700 text-sm mt-2 leading-relaxed">
              Your data is stored securely. We use modern security practices to
              protect your personal information from unauthorized access, loss,
              or misuse.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-green-800">
              4. Sharing of Information
            </h2>
            <p className="text-green-700 text-sm mt-2 leading-relaxed">
              We do not sell or trade your personal information. We may share
              information only with trusted service providers (like payment or
              delivery partners) when necessary to complete your order.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-green-800">
              5. Cookies & Tracking
            </h2>
            <p className="text-green-700 text-sm mt-2 leading-relaxed">
              Greennest may use cookies to improve website performance and
              personalize your experience. You can disable cookies in your
              browser settings anytime.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-green-800">
              6. Your Choices
            </h2>
            <p className="text-green-700 text-sm mt-2 leading-relaxed">
              You may request to update or delete your personal data by
              contacting us at:
            </p>
            <p className="text-green-700 text-sm mt-2">support@greennest.com</p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-green-800">
              7. Changes to This Policy
            </h2>
            <p className="text-green-700 text-sm mt-2 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be posted here with a new “Last updated” date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
