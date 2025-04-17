import React from 'react';
import { PROJECT_DATA } from '@/lib/data';
import Link from 'next/link';
import { FaGraduationCap, FaHandshake, FaBuilding, FaGlobe, FaNetworkWired, FaAward } from 'react-icons/fa';

const iconMap = {
  'Students': <FaGraduationCap className="h-8 w-8 text-indigo-500" />,
  'Supporters': <FaHandshake className="h-8 w-8 text-purple-500" />,
  'Hosting Partner - India': <FaBuilding className="h-8 w-8 text-pink-500" />,
  'Hosting Partner - Global': <FaGlobe className="h-8 w-8 text-blue-500" />,
  'Outreach Partners': <FaNetworkWired className="h-8 w-8 text-green-500" />,
  'Sponsors': <FaAward className="h-8 w-8 text-yellow-500" />
};

const pathMap = {
  'Students': '/screenings#student-registration',
  'Supporters': '/screenings#supporter-tiers',
  'Hosting Partner - India': '/partners#host-screening',
  'Hosting Partner - Global': '/partners#host-screening',
  'Outreach Partners': '/partners#outreach',
  'Sponsors': '/sponsors'
};

const StakeholdersSection = () => {
  const { stakeholders } = PROJECT_DATA;

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join the Movement</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of India&apos;s largest AI documentary initiative connecting entrepreneurs, students, and supporters across the globe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stakeholders.map((stakeholder) => (
            <div
              key={stakeholder.persona}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {iconMap[stakeholder.persona as keyof typeof iconMap]}
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">{stakeholder.persona}</h3>
                </div>
                <p className="text-gray-600 mb-4">{stakeholder.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Examples</h4>
                  <div className="flex flex-wrap gap-2">
                    {stakeholder.examples.map((example) => (
                      <span key={example} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Impact</h4>
                  <div className="text-lg font-bold text-indigo-600">{stakeholder.reach}</div>
                </div>
                
                <Link
                  href={pathMap[stakeholder.persona as keyof typeof pathMap]}
                  className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-lg mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Together, We Aim to Reach</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">100,000+</div>
              <div className="text-gray-600">Students Offline</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">1,000,000+</div>
              <div className="text-gray-600">Students Online</div>
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us in our mission to inspire the next generation of AI innovators across India and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StakeholdersSection; 