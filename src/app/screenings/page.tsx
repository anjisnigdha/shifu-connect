import { MOCK_SCREENINGS } from '@/lib/data';

export default function ScreeningsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Join a Screening Event
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                Experience the documentary with others and be part of a movement to inspire the next generation of AI innovators.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#student-registration" className="px-8 py-3 text-lg font-medium text-indigo-600 bg-white rounded-md hover:bg-indigo-50 transition duration-300 text-center">
                  Register as Student
                </a>
                <a href="#supporter-tiers" className="px-8 py-3 text-lg font-medium text-white border-2 border-white rounded-md hover:bg-indigo-700 transition duration-300 text-center">
                  Support as Donor
                </a>
                <a href="#host-screening" className="px-8 py-3 text-lg font-medium text-indigo-600 bg-white rounded-md hover:bg-indigo-50 transition duration-300 text-center">
                  Become a Screening Host
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-indigo-900/50 rounded-lg shadow-2xl overflow-hidden">
                {/* Placeholder for screening event image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xl text-indigo-200 font-light">Screening Event Image</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 opacity-60 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leaderboard + Upcoming Screenings (Moved to top) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Leaderboard */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Screening Leaderboard</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Top colleges, cities, and hosts making the biggest impact
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-6">Top Colleges</h3>
                <ul className="space-y-4">
                  {[
                    {name: "Delhi Technical University", count: 450},
                    {name: "IIT Madras", count: 350},
                    {name: "Kochi Engineering College", count: 300},
                    {name: "VIT Vellore", count: 280},
                    {name: "Manipal Institute of Technology", count: 250}
                  ].map((item, index) => (
                    <li key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                          index === 0 ? 'bg-yellow-100 text-yellow-800' :
                          index === 1 ? 'bg-gray-200 text-gray-800' :
                          index === 2 ? 'bg-amber-100 text-amber-800' :
                          'bg-indigo-100 text-indigo-800'
                        }`}>
                          {index + 1}
                        </div>
                        <span className="ml-3 text-gray-800">{item.name}</span>
                      </div>
                      <span className="font-semibold text-indigo-600">{item.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-6">Top Cities</h3>
                <ul className="space-y-4">
                  {[
                    {name: "Delhi", count: 12},
                    {name: "Bangalore", count: 10},
                    {name: "Mumbai", count: 8},
                    {name: "Hyderabad", count: 7},
                    {name: "Chennai", count: 6}
                  ].map((item, index) => (
                    <li key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                          index === 0 ? 'bg-yellow-100 text-yellow-800' :
                          index === 1 ? 'bg-gray-200 text-gray-800' :
                          index === 2 ? 'bg-amber-100 text-amber-800' :
                          'bg-indigo-100 text-indigo-800'
                        }`}>
                          {index + 1}
                        </div>
                        <span className="ml-3 text-gray-800">{item.name}</span>
                      </div>
                      <span className="font-semibold text-indigo-600">{item.count} events</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-6">Global Hosts</h3>
                <ul className="space-y-4">
                  {[
                    {name: "FUNDA USA", count: 5},
                    {name: "Singapore Indian Chamber", count: 4},
                    {name: "TANA", count: 3},
                    {name: "Indian Association of UK", count: 2},
                    {name: "Australian Indian Society", count: 2}
                  ].map((item, index) => (
                    <li key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                          index === 0 ? 'bg-yellow-100 text-yellow-800' :
                          index === 1 ? 'bg-gray-200 text-gray-800' :
                          index === 2 ? 'bg-amber-100 text-amber-800' :
                          'bg-indigo-100 text-indigo-800'
                        }`}>
                          {index + 1}
                        </div>
                        <span className="ml-3 text-gray-800">{item.name}</span>
                      </div>
                      <span className="font-semibold text-indigo-600">{item.count} events</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Upcoming Screenings (Map) */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Screenings</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find a screening near you or see our global impact
              </p>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="h-[500px] relative">
                {/* This would be replaced with an actual map in production */}
                <div className="absolute inset-0 bg-indigo-100 flex items-center justify-center">
                  <p className="text-2xl text-indigo-300 font-light">
                    Interactive Map of Screenings
                  </p>
                </div>
                
                {/* Sample map points */}
                {MOCK_SCREENINGS.map((screening, index) => (
                  <div
                    key={screening.id}
                    className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{
                      // Random positions for prototype - would use actual coordinates in production
                      left: `${10 + (index * 15)}%`,
                      top: `${20 + (index * 10)}%`,
                    }}
                  >
                    <div className={`w-4 h-4 rounded-full ${
                      screening.hostType === 'college' ? 'bg-blue-500' :
                      screening.hostType === 'company' ? 'bg-green-500' :
                      screening.hostType === 'accelerator' ? 'bg-yellow-500' :
                      'bg-purple-500'
                    }`}>
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-md shadow-md p-2 text-xs w-32 text-center">
                        <div className="font-semibold">{screening.location}</div>
                        <div className="text-gray-600">{screening.date}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Live ticker */}
              <div className="bg-gray-800 p-3 overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                  {MOCK_SCREENINGS.map((screening) => (
                    <div key={screening.id} className="flex items-center mx-4">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-white text-sm">
                        {screening.host} ({screening.location}) - {screening.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Student Registration Form */}
      <section id="student-registration" className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Register for FREE Screening</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Students can register for free to attend a screening near them
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your name" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">College/Institution</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your college" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your city" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Screening Location</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Select a location</option>
                    {MOCK_SCREENINGS.map(screening => (
                      <option key={screening.id}>{screening.location} - {screening.host}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    <span className="ml-2 text-sm text-gray-600">I agree to receive updates about BSY screenings and events</span>
                  </label>
                </div>
                
                <div>
                  <button type="submit" className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md font-medium hover:from-indigo-700 hover:to-purple-700 transition duration-300">
                    Register Now
                  </button>
                </div>
              </form>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                After registration, you'll receive a confirmation email with details about your selected screening.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Crowdfunding Tiers */}
      <section id="supporter-tiers" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Support as a Donor</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our crowdfunding tiers to support the documentary and its mission
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Supporter",
                price: "₹1,000",
                features: [
                  "Digital ticket to any screening",
                  "Name in the credits",
                  "Digital poster download",
                  "Early access to online premiere"
                ]
              },
              {
                name: "Patron",
                price: "₹5,000",
                features: [
                  "Everything in Supporter tier",
                  "Exclusive Q&A session with directors",
                  "Behind-the-scenes digital booklet",
                  "Special mention in credits",
                  "Invitation to virtual meet with founders"
                ]
              },
              {
                name: "Champion",
                price: "₹25,000",
                features: [
                  "Everything in Patron tier",
                  "Private screening for up to 10 people",
                  "Personalized thank you video",
                  "Featured sponsor logo on website",
                  "Mentorship session with featured entrepreneurs"
                ]
              }
            ].map((tier, index) => (
              <div
                key={tier.name}
                className={`bg-white rounded-xl shadow-md overflow-hidden ${
                  index === 1 ? 'border-2 border-indigo-500 transform md:-translate-y-4' : ''
                }`}
              >
                {index === 1 && (
                  <div className="bg-indigo-500 text-white py-2 text-center text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-indigo-600 mb-6">{tier.price}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full px-4 py-3 rounded-md font-medium transition duration-300 ${
                    index === 1 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700' 
                      : 'bg-white text-indigo-600 border border-indigo-500 hover:bg-indigo-50'
                  }`}>
                    Select {tier.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Start a Screening Toolkit */}
      <section id="host-screening" className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Start a Screening</h2>
              <p className="text-xl text-gray-600 mb-6">
                Host your own screening event and help spread the message to your community
              </p>
              
              <div className="bg-white p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Toolkit Includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Customizable poster templates</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Social media caption templates</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Invitation text for email/messaging</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Mini-site generator for your event</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Host guide with tips and best practices</span>
                  </li>
                </ul>
              </div>
              
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md font-medium hover:from-indigo-700 hover:to-purple-700 transition duration-300">
                Download Toolkit
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Register as a Screening Host</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your organization" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="Full name" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="contact@organization.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Organization Type</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Select type</option>
                    <option>College/University</option>
                    <option>Company</option>
                    <option>Accelerator/Incubator</option>
                    <option>Community Organization</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Attendees</label>
                  <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="Number of attendees" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="Tell us about your venue and audience&apos;s interests"></textarea>
                </div>
                
                <button type="submit" className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md font-medium hover:from-indigo-700 hover:to-purple-700 transition duration-300">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 