import React from 'react';
import { Heart, ArrowLeft, Package, Truck, Clock, Shield } from 'lucide-react';

interface ShippingPolicyProps {
  onBack: () => void;
}

function ShippingPolicy({ onBack }: ShippingPolicyProps) {
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
            Shipping <span className="text-green-700">Policy</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Understanding how your donations and any physical items are handled and delivered
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Important Notice */}
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border border-green-200 mb-8">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-green-800 mb-2">Important Notice</h3>
                  <p className="text-green-700 mb-0">
                    Voice For Peace is primarily a donation platform for humanitarian aid. This shipping policy applies to any 
                    acknowledgment items, certificates, or promotional materials that may be sent to donors.
                  </p>
                </div>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                <div className="flex items-center space-x-3 mb-4">
                  <Package className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">What We Ship</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Donation acknowledgment certificates</li>
                  <li>• Thank you letters</li>
                  <li>• Impact reports and updates</li>
                  <li>• Promotional materials (upon request)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                <div className="flex items-center space-x-3 mb-4">
                  <Truck className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Delivery Methods</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Standard postal service</li>
                  <li>• Email delivery (preferred)</li>
                  <li>• Digital certificates</li>
                  <li>• Courier service (for special items)</li>
                </ul>
              </div>
            </div>

            {/* Detailed Policy */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-6 h-6 text-green-600 mr-2" />
                  Processing and Delivery Times
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Digital Items</h4>
                      <p className="text-gray-700 mb-4">Email confirmations and digital certificates are sent within 24-48 hours of donation.</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">Physical Items</h4>
                      <p className="text-gray-700">Processing time: 5-7 business days<br />
                      Delivery time: 7-14 business days within India</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">International Shipping</h4>
                      <p className="text-gray-700 mb-4">Currently, we primarily serve donors within India. International shipping may be available upon special request.</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">Express Delivery</h4>
                      <p className="text-gray-700">Available for urgent requests at additional cost.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Shipping Costs</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    <strong>Free Shipping:</strong> All acknowledgment materials and certificates are shipped free of charge to our valued donors.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Special Requests:</strong> Any additional items or express shipping may incur charges, which will be communicated beforehand.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Address Requirements</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Complete and accurate shipping address must be provided</li>
                    <li>• Include postal/ZIP code and contact phone number</li>
                    <li>• Address changes must be requested within 24 hours of donation</li>
                    <li>• We are not responsible for packages sent to incorrect addresses provided by donors</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Delivery Issues</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Lost or Damaged Items</h4>
                      <p className="text-gray-700">
                        If your acknowledgment items are lost or damaged during shipping, please contact us within 30 days. 
                        We will resend the items at no additional cost.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Tracking</h4>
                      <p className="text-gray-700">
                        Tracking information will be provided for courier deliveries. Standard postal items may not include tracking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Privacy and Security</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Your shipping information is kept confidential and is only used for delivery purposes. 
                    We do not share your address with third parties except for shipping purposes.
                  </p>
                  <p className="text-gray-700">
                    All packages are sent in plain packaging without revealing the contents or donation amounts.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact for Shipping Issues</h3>
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg border border-green-200">
                  <p className="text-gray-700 mb-2">
                    <strong>For any shipping-related questions or issues:</strong>
                  </p>
                  <p className="text-gray-700 mb-2">Email: iamfaroff@proton.me</p>
                  <p className="text-gray-700 mb-2">Phone: +917695030953</p>
                  <p className="text-gray-700">Response time: 24-48 hours</p>
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
            Ensuring transparent and secure delivery of acknowledgments
          </p>
          <p className="text-sm text-gray-400">
            Last updated: September 2024
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ShippingPolicy;