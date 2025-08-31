import React from 'react';
import { Heart, Users, Globe, Shield, ArrowLeft } from 'lucide-react';

interface AboutUsProps {
  onBack: () => void;
}

function AboutUs({ onBack }: AboutUsProps) {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We believe in the power of human compassion to heal wounds and build bridges across divides.'
    },
    {
      icon: Users,
      title: 'Unity',
      description: 'We unite people from all backgrounds in support of humanitarian causes and human dignity.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our reach extends across borders to provide aid where it is needed most urgently.'
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'We maintain complete transparency in our operations and ensure every donation reaches those in need.'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Foundation',
      description: 'Voice For Peace was established with a mission to provide humanitarian aid to Palestine.'
    },
    {
      year: '2023',
      title: 'First Campaign',
      description: 'Launched our first major fundraising campaign, raising over ₹10 lakhs for Gaza relief.'
    },
    {
      year: '2024',
      title: 'Expanded Reach',
      description: 'Extended our support network and partnered with local organizations in Gaza.'
    },
    {
      year: '2024',
      title: 'Ongoing Mission',
      description: 'Continuing our commitment to provide essential aid and support to Palestinian families.'
    }
  ];

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
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-green-700">Voice For Peace</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Voice for Peace is a humanitarian initiative committed to fostering compassion, equity, 
            and support for those in need. We are dedicated to providing essential aid and support 
            to the people of Palestine, particularly those affected by the ongoing crisis in Gaza.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">About Voice for Peace</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Voice for Peace is a humanitarian initiative committed to fostering compassion, equity, 
                and support for those in need. Established and personally managed by Imtiaz Haque, 
                the platform serves as a transparent and trustworthy channel for individuals who wish 
                to make a meaningful contribution to society.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our mission is to promote peace and well-being by mobilizing resources to assist 
                vulnerable communities. Through donations and collective goodwill, we aim to provide 
                relief, support essential causes, and contribute to the betterment of lives impacted 
                by hardship.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Unlike large institutions, Voice for Peace is driven by the dedication of an individual 
                who believes that change begins with a single step. Every contribution made through this 
                platform is carefully directed toward initiatives that embody integrity, accountability, 
                and lasting impact.
              </p>
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border border-green-200">
                <p className="text-green-800 font-semibold text-lg">
                  "We believe that peace is not merely the absence of conflict, but the presence of compassion, justice, and opportunity."
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Provide emergency food supplies to families in Gaza</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Support medical aid and healthcare initiatives</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Assist with temporary shelter and housing needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Raise awareness about the humanitarian crisis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-lg text-gray-700">
              The principles that guide our work and define our commitment to the cause
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-green-100 text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-green-700 group-hover:to-emerald-700 transition-colors">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h3>
            <p className="text-lg text-gray-700">
              Key milestones in our mission to support Palestine
            </p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Join Our Movement</h3>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            By joining hands with us, you become part of a movement dedicated to creating a more 
            humane and peaceful world. Together, we can make a difference in the lives of Palestinian families.
          </p>
          <button
            onClick={onBack}
            className="bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
          >
            Make a Donation
          </button>
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
            Dedicated to humanitarian aid and support for Palestine
          </p>
          <p className="text-sm text-gray-400">
            Transparency • Compassion • Unity • Global Impact
          </p>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;