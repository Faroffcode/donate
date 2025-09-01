import React from 'react';
import { Heart, Shield, Eye, Lock, Database, UserCheck, AlertCircle } from 'lucide-react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy <span className="text-green-700">Policy</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Commitment Statement */}
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border border-green-200 mb-8">
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-green-800 mb-2">Our Privacy Commitment</h3>
                <p className="text-green-700 mb-0">
                  Voice For Peace is committed to protecting your privacy and personal information. This policy explains 
                  how we collect, use, and safeguard your data when you use our donation platform.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Database className="w-6 h-6 text-blue-600 mr-3" />
                Information We Collect
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Personal Information</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Name:</strong> Full name for donation acknowledgment</li>
                    <li>• <strong>Email:</strong> For receipts and updates</li>
                    <li>• <strong>Phone:</strong> Optional contact information</li>
                    <li>• <strong>Address:</strong> For shipping acknowledgments (optional)</li>
                    <li>• <strong>Payment Info:</strong> Processed securely by third parties</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Automatic Information</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>IP Address:</strong> For security and analytics</li>
                    <li>• <strong>Browser Type:</strong> To optimize user experience</li>
                    <li>• <strong>Device Info:</strong> For responsive design</li>
                    <li>• <strong>Usage Data:</strong> How you interact with our site</li>
                    <li>• <strong>Cookies:</strong> For functionality and preferences</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="w-6 h-6 text-green-600 mr-3" />
                How We Use Your Information
              </h3>
              
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Primary Uses</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Process Donations:</strong> To complete your charitable contributions securely</li>
                    <li>• <strong>Send Receipts:</strong> For tax purposes and donation confirmation</li>
                    <li>• <strong>Provide Updates:</strong> About the impact of your donations (optional)</li>
                    <li>• <strong>Customer Support:</strong> To respond to your inquiries and provide assistance</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Secondary Uses</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Improve Services:</strong> Analyze usage to enhance user experience</li>
                    <li>• <strong>Security:</strong> Detect and prevent fraud or unauthorized access</li>
                    <li>• <strong>Legal Compliance:</strong> Meet regulatory requirements and legal obligations</li>
                    <li>• <strong>Communications:</strong> Send important updates about our humanitarian efforts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Lock className="w-6 h-6 text-red-600 mr-3" />
                Information Sharing and Disclosure
              </h3>
              
              <div className="space-y-4">
                <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                  <h4 className="text-lg font-bold text-red-800 mb-3">We DO NOT sell your personal information</h4>
                  <p className="text-red-700">
                    Voice For Peace never sells, rents, or trades your personal information to third parties for marketing purposes.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Limited Sharing for Operations</h4>
                  <div className="space-y-3 text-gray-700">
                    <p>• <strong>Payment Processors:</strong> Razorpay and other secure payment gateways for transaction processing</p>
                    <p>• <strong>Service Providers:</strong> Trusted partners who help operate our website (hosting, analytics)</p>
                    <p>• <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</p>
                    <p>• <strong>Consent:</strong> Any other sharing only with your explicit consent</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Security Measures</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Technical Safeguards</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• SSL encryption for all data transmission</li>
                    <li>• Secure hosting with regular security updates</li>
                    <li>• Limited access to personal information</li>
                    <li>• Regular security audits and monitoring</li>
                    <li>• Secure payment processing (PCI compliance)</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Administrative Safeguards</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Staff training on privacy protection</li>
                    <li>• Background checks for team members</li>
                    <li>• Access controls and user authentication</li>
                    <li>• Regular privacy policy reviews</li>
                    <li>• Incident response procedures</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <UserCheck className="w-6 h-6 text-purple-600 mr-3" />
                Your Rights and Choices
              </h3>
              
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Access and Control</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Access:</strong> Request copies of your personal information</li>
                    <li>• <strong>Correction:</strong> Update or correct inaccurate information</li>
                    <li>• <strong>Deletion:</strong> Request deletion of your personal data (with limitations)</li>
                    <li>• <strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Communication Preferences</h4>
                  <p className="text-gray-700 mb-2">You can control what communications you receive:</p>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• Donation receipts (required for tax purposes)</li>
                    <li>• Impact updates and newsletters (optional)</li>
                    <li>• Emergency appeals (optional)</li>
                    <li>• Administrative notices (required for account security)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h3>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cookie Usage</h4>
                  <p className="text-gray-700 mb-3">We use cookies to improve your experience on our website:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Essential Cookies:</strong> Required for website functionality</li>
                    <li>• <strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                    <li>• <strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Managing Cookies</h4>
                  <p className="text-gray-700">
                    You can control cookies through your browser settings. However, disabling certain cookies 
                    may affect website functionality.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  We retain your personal information only as long as necessary for the purposes outlined in this policy:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Donation Records:</strong> 7 years for tax and legal compliance</li>
                  <li>• <strong>Contact Information:</strong> Until you request removal or opt-out</li>
                  <li>• <strong>Website Usage Data:</strong> 2 years for analytics and improvement</li>
                  <li>• <strong>Security Logs:</strong> 1 year for fraud prevention and security</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h3>
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-lg border border-yellow-200">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-yellow-800 mb-2">Age Restriction</h4>
                    <p className="text-yellow-700">
                      Our services are not intended for children under 18. We do not knowingly collect personal 
                      information from children. If you believe a child has provided information, please contact us immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Your information is primarily stored and processed in India. If we transfer data internationally, 
                  we ensure appropriate safeguards are in place to protect your privacy rights.
                </p>
                <p className="text-gray-700">
                  We comply with applicable data protection laws including India's Personal Data Protection Act 
                  and international privacy frameworks.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Policy to reflect changes in our practices or legal requirements. 
                  We will notify you of significant changes by:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Posting the updated policy on our website</li>
                  <li>• Sending email notifications to registered users</li>
                  <li>• Displaying a notice on our homepage</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us About Privacy</h3>
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg border border-green-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Privacy Officer</h4>
                    <p className="text-gray-700 mb-1">Email: iamfaroff@proton.me</p>
                    <p className="text-gray-700 mb-1">Phone: +917695030953</p>
                    <p className="text-gray-700">Response time: 48-72 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Mailing Address</h4>
                    <p className="text-gray-700 mb-1">Voice For Peace Foundation</p>
                    <p className="text-gray-700 mb-1">Privacy Department</p>
                    <p className="text-gray-700">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl border border-blue-200">
                <h4 className="text-lg font-bold text-blue-800 mb-2">Effective Date</h4>
                <p className="text-blue-700">
                  This Privacy Policy is effective as of September 2024 and applies to all information collected 
                  on or after this date. By using our services, you acknowledge that you have read and understand this policy.
                </p>
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
            Your privacy is our priority
          </p>
          <p className="text-sm text-gray-400">
            Privacy Policy effective September 2024
          </p>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;