import React from 'react';
import { Heart, ArrowLeft, FileText, Scale, AlertCircle } from 'lucide-react';

interface TermsConditionsProps {
  onBack: () => void;
}

function TermsConditions({ onBack }: TermsConditionsProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-green-700 hover:text-green-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
                Voice For Peace
              </h1>
            </div>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms and <span className="text-green-700">Conditions</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Please read these terms and conditions carefully before using our donation platform
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Important Notice */}
          <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-xl border border-red-200 mb-8">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-red-800 mb-2">Important Legal Notice</h3>
                <p className="text-red-700 mb-0">
                  By making a donation or using this website, you agree to be bound by these terms and conditions. 
                  If you do not agree, please do not use our services.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Scale className="w-6 h-6 text-green-600 mr-2" />
                1. Acceptance of Terms
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  These Terms and Conditions ("Terms") govern your use of the Voice For Peace website and donation platform. 
                  By accessing or using our services, you agree to be bound by these Terms.
                </p>
                <p className="text-gray-700">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting 
                  on this page. Your continued use of the service after changes constitutes acceptance of the new Terms.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. About Voice For Peace</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Voice For Peace is a humanitarian initiative dedicated to providing aid and support to Palestinian communities. 
                  We operate as a transparent platform for collecting and distributing donations for humanitarian purposes.
                </p>
                <p className="text-gray-700">
                  Our mission is to facilitate compassionate giving and ensure that donations reach those in need through 
                  verified channels and partnerships.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Donations and Payments</h3>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">3.1 Donation Process</h4>
                  <p className="text-gray-700">
                    All donations are processed through secure third-party payment gateways. We do not store payment information 
                    on our servers. Donations are voluntary and non-refundable except as outlined in our Cancellation and Refunds policy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">3.2 Use of Funds</h4>
                  <p className="text-gray-700">
                    Donations will be used exclusively for humanitarian aid purposes including but not limited to: food supplies, 
                    medical aid, shelter assistance, and emergency relief for Palestinian communities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">3.3 Transparency</h4>
                  <p className="text-gray-700">
                    We commit to maintaining transparency about fund utilization and will provide regular updates to our community 
                    about the impact of donations.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Provide accurate and truthful information when making donations</li>
                  <li>• Ensure you have the legal right and capacity to make donations</li>
                  <li>• Use the website only for lawful purposes</li>
                  <li>• Respect the privacy and rights of other users</li>
                  <li>• Not attempt to interfere with the website's functionality or security</li>
                  <li>• Comply with all applicable laws and regulations</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy and Data Protection</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  We are committed to protecting your privacy. Personal information collected during the donation process 
                  is used solely for processing donations and providing updates about our humanitarian efforts.
                </p>
                <p className="text-gray-700">
                  For detailed information about how we collect, use, and protect your data, please refer to our Privacy Policy.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  All content on this website, including text, graphics, logos, and images, is the property of Voice For Peace 
                  or its licensors and is protected by copyright and other intellectual property laws.
                </p>
                <p className="text-gray-700">
                  You may not reproduce, distribute, or create derivative works from any content without our express written permission.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimers and Limitations</h3>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">7.1 Service Availability</h4>
                  <p className="text-gray-700">
                    We strive to maintain continuous service but do not guarantee uninterrupted access. 
                    We may suspend or discontinue services for maintenance or other reasons.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">7.2 Third-Party Services</h4>
                  <p className="text-gray-700">
                    We use third-party payment processors and other services. We are not responsible for the performance 
                    or policies of these third-party providers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">7.3 Limitation of Liability</h4>
                  <p className="text-gray-700">
                    To the maximum extent permitted by law, Voice For Peace shall not be liable for any indirect, 
                    incidental, or consequential damages arising from your use of our services.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  These Terms are governed by the laws of India. Any disputes arising from these Terms or your use of 
                  our services will be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h3>
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg border border-green-200">
                <p className="text-gray-700 mb-2">
                  <strong>For questions about these Terms and Conditions:</strong>
                </p>
                <p className="text-gray-700 mb-2">Email: iamfaroff@proton.me</p>
                <p className="text-gray-700 mb-2">Address: Voice For Peace Foundation, Mumbai, Maharashtra, India</p>
                <p className="text-gray-700">Last Updated: September 2024</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border border-green-200">
                <div className="flex items-start space-x-3">
                  <FileText className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-green-800 mb-2">Agreement Acknowledgment</h4>
                    <p className="text-green-700 mb-0">
                      By making a donation or continuing to use our website, you acknowledge that you have read, 
                      understood, and agree to be bound by these Terms and Conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-red-400 mr-2" />
            <span className="text-lg font-semibold">Voice For Peace</span>
          </div>
          <p className="text-gray-300 mb-2">
            Committed to transparency and legal compliance
          </p>
          <p className="text-sm text-gray-400">
            Terms effective as of September 2024
          </p>
        </div>
      </footer>
    </div>
  );
}

export default TermsConditions;