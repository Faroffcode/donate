import React from 'react';
import { Heart, RefreshCw, XCircle, AlertTriangle, CheckCircle } from 'lucide-react';

function CancellationsRefunds() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cancellations and <span className="text-green-700">Refunds</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Understanding our policy on donation cancellations and refund procedures
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Important Notice */}
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-xl border border-amber-200 mb-8">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-amber-800 mb-2">Important Policy Information</h3>
                <p className="text-amber-700 mb-0">
                  As a humanitarian organization, donations are generally considered final. However, we understand that 
                  exceptional circumstances may arise, and we handle each case with care and consideration.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <XCircle className="w-6 h-6 text-red-600 mr-3" />
                Cancellation Policy
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Before Processing</h4>
                  <p className="text-gray-700 mb-3">
                    Donations can be cancelled within <strong>30 minutes</strong> of submission if the payment has not yet been processed.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Immediate cancellation available</li>
                    <li>• Full refund processed automatically</li>
                    <li>• No questions asked</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">After Processing</h4>
                  <p className="text-gray-700 mb-3">
                    Once processed, cancellations require a formal request and valid reason due to the nature of humanitarian aid.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Written request required</li>
                    <li>• Case-by-case evaluation</li>
                    <li>• Processing time: 5-10 business days</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">How to Cancel</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Contact us immediately at: <strong>iamfaroff@proton.me</strong></li>
                  <li>Include your donation transaction ID and reason for cancellation</li>
                  <li>Provide the email address used for the donation</li>
                  <li>Allow 24-48 hours for initial response</li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <RefreshCw className="w-6 h-6 text-blue-600 mr-3" />
                Refund Policy
              </h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Eligible Refund Situations</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Automatic Refunds
                      </h5>
                      <ul className="text-sm text-gray-700 space-y-1 ml-6">
                        <li>• Technical payment errors</li>
                        <li>• Duplicate transactions</li>
                        <li>• Unauthorized transactions</li>
                        <li>• System malfunctions</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-orange-700 mb-2 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Case-by-Case Review
                      </h5>
                      <ul className="text-sm text-gray-700 space-y-1 ml-6">
                        <li>• Personal financial hardship</li>
                        <li>• Medical emergencies</li>
                        <li>• Family emergencies</li>
                        <li>• Fraudulent use of payment method</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Refund Timeline</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-700 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Request Submission</h5>
                        <p className="text-gray-700 text-sm">Submit refund request with required documentation</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-700 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Review Process (3-5 business days)</h5>
                        <p className="text-gray-700 text-sm">Our team reviews the request and verifies information</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-700 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Decision Communication</h5>
                        <p className="text-gray-700 text-sm">You'll receive an email with our decision and next steps</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-700 font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Refund Processing (5-10 business days)</h5>
                        <p className="text-gray-700 text-sm">If approved, refund is processed to original payment method</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Required Documentation</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">For refund requests, please provide:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Transaction ID:</strong> Donation confirmation number</li>
                  <li>• <strong>Email Address:</strong> Used for the original donation</li>
                  <li>• <strong>Donation Amount:</strong> Exact amount donated</li>
                  <li>• <strong>Date of Donation:</strong> When the donation was made</li>
                  <li>• <strong>Reason for Refund:</strong> Detailed explanation</li>
                  <li>• <strong>Supporting Documents:</strong> If applicable (medical bills, legal documents, etc.)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Alternative Options</h3>
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg border border-green-200">
                <h4 className="text-lg font-bold text-green-800 mb-3">Consider These Alternatives</h4>
                <div className="space-y-3 text-green-700">
                  <p>• <strong>Donation Transfer:</strong> Redirect your contribution to a specific urgent need</p>
                  <p>• <strong>Future Credit:</strong> Keep the donation as credit for future giving</p>
                  <p>• <strong>Partial Refund:</strong> Refund a portion while maintaining support for the cause</p>
                  <p>• <strong>Payment Plan:</strong> If facing financial hardship, we can discuss options</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact for Refunds</h3>
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-lg border border-blue-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Refund Department</h4>
                    <p className="text-gray-700 mb-1">Email: iamfaroff@proton.me</p>
                    <p className="text-gray-700 mb-1">Phone: +917695030953</p>
                    <p className="text-gray-700">Hours: 9 AM - 6 PM IST (Mon-Fri)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Response Times</h4>
                    <p className="text-gray-700 mb-1">Initial Response: 24-48 hours</p>
                    <p className="text-gray-700 mb-1">Review Process: 3-5 business days</p>
                    <p className="text-gray-700">Refund Processing: 5-10 business days</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <div className="bg-gradient-to-r from-red-100 to-pink-100 p-6 rounded-xl border border-red-200">
                <h4 className="text-lg font-bold text-red-800 mb-2">Important Reminder</h4>
                <p className="text-red-700">
                  Every donation helps save lives and provide essential aid to families in need. We encourage donors to 
                  consider the humanitarian impact before requesting refunds. However, we understand that circumstances 
                  change, and we're committed to handling each situation with compassion and fairness.
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
            Fair and transparent refund policy
          </p>
          <p className="text-sm text-gray-400">
            Last updated: September 2024
          </p>
        </div>
      </footer>
    </div>
  );
}

export default CancellationsRefunds;