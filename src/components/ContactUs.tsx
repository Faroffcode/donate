import React from 'react';
import { Heart, Mail, Phone, MapPin, Send } from 'lucide-react';

function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-green-700">Us</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Get in touch with us for any questions, support, or to learn more about our humanitarian efforts.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">iamfaroff@proton.me</p>
                    <p className="text-gray-600">iamfaroff@proton.me</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+917695030953</p>
                    <p className="text-sm text-gray-500">Available 9 AM - 6 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">Voice For Peace Foundation</p>
                    <p className="text-gray-600">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Message subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    rows={5}
                    placeholder="Your message..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg font-bold text-lg transition-all duration-200 flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
            <p className="text-lg text-gray-700">Quick answers to common questions</p>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">How can I trust that my donation reaches the right people?</h4>
              <p className="text-gray-700">We maintain complete transparency in our operations and provide regular updates on fund utilization. All donations are tracked and reports are shared with our community.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Is my donation tax-deductible?</h4>
              <p className="text-gray-700">Please consult with your tax advisor regarding the deductibility of donations. We provide donation receipts for all contributions.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Can I volunteer with Voice For Peace?</h4>
              <p className="text-gray-700">Yes! We welcome volunteers who share our mission. Please contact us through this form or join our community group to learn about volunteer opportunities.</p>
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
            We're here to help and answer any questions you might have
          </p>
          <p className="text-sm text-gray-400">
            Response time: 24-48 hours • All inquiries are confidential
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;