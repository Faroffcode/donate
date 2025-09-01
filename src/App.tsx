import React, { useState } from 'react';
import { Heart, Users, Home, Utensils, Plus } from 'lucide-react';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ShippingPolicy from './components/ShippingPolicy';
import TermsConditions from './components/TermsConditions';
import CancellationsRefunds from './components/CancellationsRefunds';
import PrivacyPolicy from './components/PrivacyPolicy';
import Menu from './components/Menu';

interface DonorInfo {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type PageType = 'home' | 'about' | 'contact' | 'shipping' | 'terms' | 'refunds' | 'privacy';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [donorInfo, setDonorInfo] = useState<DonorInfo>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleDonorInfoChange = (field: keyof DonorInfo, value: string) => {
    setDonorInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleDonation = () => {
    window.open('https://razorpay.me/@Voiceofpeace', '_blank');
  };

  if (currentPage === 'about') {
    return <AboutUs onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'contact') {
    return <ContactUs onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'shipping') {
    return <ShippingPolicy onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'terms') {
    return <TermsConditions onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'refunds') {
    return <CancellationsRefunds onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentPage('home')} />;
  }

  const stats = [
    { icon: Users, label: 'People Helped', value: '50,000+' },
    { icon: Home, label: 'Families Supported', value: '8,500+' },
    { icon: Utensils, label: 'Meals Provided', value: '200,000+' },
    { icon: Heart, label: 'Medical Aid', value: '15,000+' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Menu onNavigate={(page) => setCurrentPage(page as PageType)} />
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
                Voice For Peace
              </h1>
            </div>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stand with <span className="text-green-700">Palestine</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Your donation provides essential aid to families in Gaza - food, medical supplies, 
            shelter, and hope for a better tomorrow. Every contribution makes a difference.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100 inline-block">
            <p className="text-sm font-semibold text-green-800 mb-2">URGENT NEED</p>
            <p className="text-gray-700">
              Families in Gaza need immediate humanitarian assistance
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-green-200 group-hover:to-emerald-200 transition-colors">
                  <stat.icon className="w-8 h-8 text-green-700" />
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6">
              <h3 className="text-2xl font-bold text-white text-center">Make a Donation</h3>
              <p className="text-green-100 text-center mt-2">Choose your contribution amount</p>
            </div>
            
            <div className="p-8">
              {/* QR Code Section */}
              <div className="mb-8 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Scan QR Code to Donate
                </h3>
                <div className="flex justify-center mb-4">
                  <img 
                    src="/QrCode (1).jpeg" 
                    alt="Donation QR Code" 
                    className="w-64 h-64 object-contain border border-gray-200 rounded-lg shadow-sm"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Scan with any UPI app to make a donation
                </p>
              </div>

              {/* Donor Information */}
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={donorInfo.name}
                    onChange={(e) => handleDonorInfoChange('name', e.target.value)}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={donorInfo.email}
                    onChange={(e) => handleDonorInfoChange('email', e.target.value)}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={donorInfo.phone}
                    onChange={(e) => handleDonorInfoChange('phone', e.target.value)}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    value={donorInfo.message}
                    onChange={(e) => handleDonorInfoChange('message', e.target.value)}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    rows={3}
                    placeholder="Leave a message of support..."
                  />
                </div>
              </div>

              {/* Donation Button */}
              <button
                onClick={handleDonation}
                className="w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-200 flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                <Heart className="w-5 h-5" />
                <span>Donate Now</span>
              </button>

              {/* Join Now Button */}
              <button
                onClick={() => window.open('https://forms.gle/syK3HTr8Lk9y1MwJ6', '_blank')}
                className="w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-200 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-[1.02] mt-4"
              >
                <Users className="w-5 h-5" />
                <span>Join Now</span>
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                🔒 Secured by Razorpay • Your donation is safe and secure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Your Impact</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">₹500</h4>
              <p className="text-gray-700">Provides meals for a family of 5 for one day</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">₹1000</h4>
              <p className="text-gray-700">Covers medical supplies for emergency care</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">₹2500</h4>
              <p className="text-gray-700">Helps provide temporary shelter materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-red-400 mr-2" />
            <span className="text-lg font-semibold">Thank you for your support</span>
          </div>
          <p className="text-gray-300 mb-2">
            Every donation helps bring hope and relief to families in Palestine
          </p>
          <p className="text-sm text-gray-400">
            This is a humanitarian aid initiative • All donations go directly to relief efforts
            The Donors information are private but available in our whatsapp group
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
