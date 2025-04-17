import Link from 'next/link';

export default function Sponsors() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sponsor BSY</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
            Join leading organizations in supporting India&apos;s AI entrepreneurship movement
          </p>
          <Link 
            href="#contact-us"
            className="inline-block bg-white text-indigo-900 font-medium px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Become a Sponsor
          </Link>
        </div>
      </section>

      {/* Why Sponsor BSY */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Sponsor BSY</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Massive Reach</h3>
              <p className="text-gray-600 text-center">
                Connect with 100K+ students offline and 1M+ online across India&apos;s tech ecosystem.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Brand Association</h3>
              <p className="text-gray-600 text-center">
                Align your brand with India&apos;s AI revolution and support the next generation of entrepreneurs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Talent Pipeline</h3>
              <p className="text-gray-600 text-center">
                Connect with AI-focused students and potential future employees across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Sponsorship Packages</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Flexible sponsorship options to match your goals and budget
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gray-50 py-6 text-center border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">Silver</h3>
                <div className="mt-4 text-gray-600">Starting at</div>
                <div className="text-3xl font-bold text-indigo-600">₹1,00,000</div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Logo on website</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mention in promotional materials</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>5 screening tickets</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <Link 
                    href="#contact-us"
                    className="inline-block bg-white border border-indigo-600 text-indigo-600 font-medium px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="border-2 border-indigo-600 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="bg-indigo-50 py-6 text-center border-b border-indigo-100">
                <h3 className="text-2xl font-bold text-gray-900">Gold</h3>
                <div className="mt-4 text-gray-600">Starting at</div>
                <div className="text-3xl font-bold text-indigo-600">₹3,00,000</div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>All Silver benefits</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Logo placement in documentary credits</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Social media recognition</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>20 screening tickets</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <Link 
                    href="#contact-us"
                    className="inline-block bg-indigo-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gray-50 py-6 text-center border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">Platinum</h3>
                <div className="mt-4 text-gray-600">Starting at</div>
                <div className="text-3xl font-bold text-indigo-600">₹10,00,000</div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>All Gold benefits</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Featured speaking opportunity</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Exclusive screening at your location</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Premium branding throughout campaign</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <Link 
                    href="#contact-us"
                    className="inline-block bg-white border border-indigo-600 text-indigo-600 font-medium px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Sponsors</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Join these visionary organizations supporting BSY
          </p>
          
          <div className="space-y-10">
            {/* Government Sponsors */}
            <div>
              <h3 className="text-xl font-semibold text-center text-gray-700 mb-8">Government Partners</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="h-32 bg-white rounded-xl shadow-sm flex items-center justify-center p-6">
                  <span className="text-lg font-medium text-gray-500">Kerala Startup Mission</span>
                </div>
                <div className="h-32 bg-white rounded-xl shadow-sm flex items-center justify-center p-6">
                  <span className="text-lg font-medium text-gray-500">Government Sponsor 2</span>
                </div>
                <div className="h-32 bg-white rounded-xl shadow-sm flex items-center justify-center p-6">
                  <span className="text-lg font-medium text-gray-500">Government Sponsor 3</span>
                </div>
              </div>
            </div>
            
            {/* Corporate Sponsors */}
            <div>
              <h3 className="text-xl font-semibold text-center text-gray-700 mb-8">Corporate Sponsors</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                {['Sprinto', 'Passright', 'Microsoft', 'Google', 'Amazon', 'Perplexity'].map((sponsor, index) => (
                  <div key={index} className="h-24 bg-white rounded-xl shadow-sm flex items-center justify-center p-4">
                    <span className="text-base font-medium text-gray-500">{sponsor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-us" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Become a Sponsor</h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Get in touch with our team to discuss sponsorship opportunities
          </p>
          
          <form className="bg-white shadow-lg rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input 
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your full name"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input 
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your phone number"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="sponsorship" className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
              <select 
                id="sponsorship"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select sponsorship tier</option>
                <option value="silver">Silver Sponsorship</option>
                <option value="gold">Gold Sponsorship</option>
                <option value="platinum">Platinum Sponsorship</option>
                <option value="custom">Custom Package</option>
              </select>
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Tell us about your sponsorship goals and any questions you have"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-medium py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Your Sponsorship Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-xl bg-indigo-800 hover:bg-indigo-700 transition-colors duration-300">
              <div className="text-4xl font-bold mb-2">100,000+</div>
              <div className="text-indigo-200">Students Reached Offline</div>
            </div>
            <div className="p-6 rounded-xl bg-indigo-800 hover:bg-indigo-700 transition-colors duration-300">
              <div className="text-4xl font-bold mb-2">1,000,000+</div>
              <div className="text-indigo-200">Online Audience</div>
            </div>
            <div className="p-6 rounded-xl bg-indigo-800 hover:bg-indigo-700 transition-colors duration-300">
              <div className="text-4xl font-bold mb-2">1,000+</div>
              <div className="text-indigo-200">Screening Events</div>
            </div>
            <div className="p-6 rounded-xl bg-indigo-800 hover:bg-indigo-700 transition-colors duration-300">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-indigo-200">Cities Across India</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 