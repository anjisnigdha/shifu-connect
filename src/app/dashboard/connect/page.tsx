'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type Person = {
  id: string;
  name: string;
  role: string;
  organization: string;
  location: string;
  expertise: string[];
  availability: string;
  bio: string;
  profileImage: string;
  isFeatured: boolean;
  type: 'mentor' | 'talent' | 'investor';
};

type SpotlightStory = {
  id: string;
  founderName: string;
  companyName: string;
  description: string;
  achievement: string;
  image: string;
};

const people: Person[] = [
  // Mentors
  {
    id: 'm1',
    name: 'Maya Johnson',
    role: 'Product Strategy Mentor',
    organization: 'Former CPO at TechGrowth',
    location: 'San Francisco, CA',
    expertise: ['Product Development', 'Go-to-Market', 'User Research'],
    availability: 'Weekly Office Hours',
    bio: 'Helped 50+ startups develop their product strategy and go-to-market plans. Former CPO at TechGrowth and advisor to multiple YC startups.',
    profileImage: '👩🏽‍💼',
    isFeatured: true,
    type: 'mentor',
  },
  {
    id: 'm2',
    name: 'James Chen',
    role: 'Technical Mentor',
    organization: 'CTO at CloudScale',
    location: 'Seattle, WA',
    expertise: ['Technical Architecture', 'Cloud Infrastructure', 'Engineering Management'],
    availability: 'Bi-weekly Sessions',
    bio: 'Engineering leader with experience scaling teams from 5 to 150. Expert in cloud architecture and technical debt management.',
    profileImage: '👨‍💻',
    isFeatured: false,
    type: 'mentor',
  },
  {
    id: 'm3',
    name: 'Aisha Williams',
    role: 'Marketing & Growth Mentor',
    organization: 'Founder of GrowthLabs',
    location: 'New York, NY',
    expertise: ['Growth Marketing', 'Brand Strategy', 'Customer Acquisition'],
    availability: 'Monthly Workshops',
    bio: 'Built marketing strategies for Series A and B startups. Expertise in reducing CAC and optimizing conversion funnels.',
    profileImage: '👩🏾‍💼',
    isFeatured: true,
    type: 'mentor',
  },
  
  // Talent
  {
    id: 't1',
    name: 'Carlos Rodriguez',
    role: 'Full Stack Developer',
    organization: 'Computer Science Student',
    location: 'Austin, TX',
    expertise: ['React', 'Node.js', 'MongoDB'],
    availability: 'Part-time (20hrs/week)',
    bio: 'Final year CS student looking to join innovative startups. Developed multiple web applications and contributed to open source projects.',
    profileImage: '👨🏽‍💻',
    isFeatured: true,
    type: 'talent',
  },
  {
    id: 't2',
    name: 'Priya Patel',
    role: 'UX/UI Designer',
    organization: 'Freelancer',
    location: 'Toronto, Canada',
    expertise: ['UI Design', 'User Research', 'Design Systems'],
    availability: 'Contract Projects',
    bio: '5 years experience designing digital products. Passionate about creating accessible and intuitive user experiences.',
    profileImage: '👩🏻‍🎨',
    isFeatured: false,
    type: 'talent',
  },
  {
    id: 't3',
    name: 'Daniel Kim',
    role: 'Mobile Developer',
    organization: 'Recent Bootcamp Graduate',
    location: 'Chicago, IL',
    expertise: ['React Native', 'iOS', 'Android'],
    availability: 'Full-time opportunities',
    bio: 'Career switcher with passion for mobile app development. Built 3 apps during bootcamp and looking to join an early stage startup.',
    profileImage: '👨🏻‍💻',
    isFeatured: false,
    type: 'talent',
  },
  
  // Investors
  {
    id: 'i1',
    name: 'Rachel Greene',
    role: 'Angel Investor',
    organization: 'Seed Stage Focus',
    location: 'Boston, MA',
    expertise: ['SaaS', 'FinTech', 'E-commerce'],
    availability: 'Open to Pitches',
    bio: 'Made 30+ investments in early stage startups. Looking for mission-driven founders tackling large markets.',
    profileImage: '👩‍💼',
    isFeatured: true,
    type: 'investor',
  },
  {
    id: 'i2',
    name: 'Michael Thompson',
    role: 'VC Partner',
    organization: 'Horizon Ventures',
    location: 'Miami, FL',
    expertise: ['Health Tech', 'Clean Energy', 'B2B Software'],
    availability: 'Monthly Pitch Events',
    bio: 'Partner at Horizon Ventures with $150M fund focused on impact-driven startups. Particularly interested in solutions for underserved communities.',
    profileImage: '👨🏿‍💼',
    isFeatured: true,
    type: 'investor',
  },
  {
    id: 'i3',
    name: 'Sofia Garcia',
    role: 'Micro VC',
    organization: 'First Check Fund',
    location: 'Los Angeles, CA',
    expertise: ['Consumer Apps', 'Marketplaces', 'Creator Economy'],
    availability: 'By Referral',
    bio: 'First check investor for pre-seed startups. Provides hands-on support and strategic connections to portfolio companies.',
    profileImage: '👩🏽‍💼',
    isFeatured: false,
    type: 'investor',
  },
];

const spotlightStories: SpotlightStory[] = [
  {
    id: 's1',
    founderName: 'Tunde Olaniran',
    companyName: 'EcoMarket',
    description: 'Created a platform connecting small-scale farmers directly with urban consumers, reducing food waste by 40% and increasing farmer income by 30%.',
    achievement: 'Raised $2M seed round after 6 months in Shifu Connect',
    image: '🌱',
  },
  {
    id: 's2',
    founderName: 'Leila Hernandez',
    companyName: 'AccessEd',
    description: 'Developed adaptive learning technology making quality education accessible to students in rural communities with limited internet access.',
    achievement: 'Reached 50,000 students across 5 countries',
    image: '📚',
  },
  {
    id: 's3',
    founderName: 'Ahmed Hassan',
    companyName: 'MediConnect',
    description: 'Built telemedicine platform specialized in connecting refugee communities with healthcare providers speaking their native language.',
    achievement: 'Partnered with 3 international NGOs for implementation',
    image: '🏥',
  },
];

export default function ConnectPage() {
  const [activeTab, setActiveTab] = useState('mentors');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const handleFilterToggle = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const filteredPeople = people.filter(person => {
    // Filter by tab
    if (person.type !== activeTab) {
      return false;
    }
    
    // Filter by search term
    if (searchTerm && !person.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !person.role.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !person.organization.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Filter by expertise
    if (selectedFilters.length > 0 && !person.expertise.some(exp => selectedFilters.includes(exp))) {
      return false;
    }
    
    return true;
  });

  // Get all unique expertise areas for the current tab
  const expertiseAreas = Array.from(
    new Set(
      people
        .filter(person => person.type === activeTab)
        .flatMap(person => person.expertise)
    )
  ).sort();

  return (
    <div className="space-y-6">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-white font-display">
            Connect
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Find mentors, talent, and investors to help bring your idea to life.
          </p>
        </div>
      </div>

      {/* Spotlight Stories */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Spotlight Stories</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {spotlightStories.map((story) => (
            <motion.div
              key={story.id}
              className="bg-white shadow rounded-lg overflow-hidden dark:bg-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center items-center h-24 bg-primary-100 dark:bg-primary-900">
                <span className="text-4xl">{story.image}</span>
              </div>
              <div className="p-4">
                <h4 className="text-md font-medium text-gray-900 dark:text-white">{story.founderName}</h4>
                <p className="text-sm text-primary-600 font-medium dark:text-primary-400">{story.companyName}</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {story.description}
                </p>
                <div className="mt-3 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                  {story.achievement}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => {
              setActiveTab('mentors');
              setSelectedFilters([]);
              setSearchTerm('');
              setSelectedPerson(null);
            }}
            className={`${
              activeTab === 'mentors'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Mentors
          </button>
          <button
            onClick={() => {
              setActiveTab('talent');
              setSelectedFilters([]);
              setSearchTerm('');
              setSelectedPerson(null);
            }}
            className={`${
              activeTab === 'talent'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Talent
          </button>
          <button
            onClick={() => {
              setActiveTab('investor');
              setSelectedFilters([]);
              setSearchTerm('');
              setSelectedPerson(null);
            }}
            className={`${
              activeTab === 'investor'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Investors
          </button>
        </nav>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Search */}
          <div className="card">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Search</h4>
            <div className="relative rounded-md">
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                className="input py-2 pr-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Expertise Filters */}
          <div className="card">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
              {activeTab === 'mentor' ? 'Expertise Areas' : 
               activeTab === 'talent' ? 'Skills' : 'Investment Focus'}
            </h4>
            <div className="space-y-2">
              {expertiseAreas.map((expertise) => (
                <div key={expertise} className="flex items-center">
                  <input
                    id={`filter-${expertise}`}
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    checked={selectedFilters.includes(expertise)}
                    onChange={() => handleFilterToggle(expertise)}
                  />
                  <label
                    htmlFor={`filter-${expertise}`}
                    className="ml-3 text-sm text-gray-600 dark:text-gray-300"
                  >
                    {expertise}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* View Toggle */}
          <div className="card">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">View</h4>
            <div className="flex space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 text-sm rounded-md ${
                  viewMode === 'grid'
                    ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
                    : 'bg-white text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                }`}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`px-3 py-2 text-sm rounded-md ${
                  viewMode === 'map'
                    ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
                    : 'bg-white text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                }`}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="space-y-4">
            {viewMode === 'grid' ? (
              filteredPeople.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredPeople.map((person) => (
                    <motion.div
                      key={person.id}
                      className={`bg-white shadow rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow dark:bg-gray-800 ${
                        selectedPerson?.id === person.id ? 'ring-2 ring-primary-500' : ''
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setSelectedPerson(person)}
                    >
                      <div className="flex justify-center items-center h-16 bg-primary-100 dark:bg-primary-900">
                        <span className="text-3xl">{person.profileImage}</span>
                      </div>
                      <div className="p-4">
                        <h4 className="text-md font-medium text-gray-900 dark:text-white">{person.name}</h4>
                        <p className="text-sm text-primary-600 dark:text-primary-400">{person.role}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{person.organization}</p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {person.expertise.slice(0, 2).map((exp, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                            >
                              {exp}
                            </span>
                          ))}
                          {person.expertise.length > 2 && (
                            <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                              +{person.expertise.length - 2}
                            </span>
                          )}
                        </div>
                        <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                          <span className="flex items-center">
                            <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {person.location}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg dark:bg-gray-800">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No results found</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Try adjusting your filters or search term.
                  </p>
                </div>
              )
            ) : (
              // Map View
              <div className="bg-white shadow rounded-lg overflow-hidden dark:bg-gray-800">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-3xl mb-2">🗺️</span>
                    <p className="text-gray-500 dark:text-gray-400">
                      Map view is coming soon! This will show the global distribution of {activeTab}.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Person Details */}
            {selectedPerson && (
              <motion.div
                className="card mt-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-primary-100 rounded-lg dark:bg-primary-900">
                    <span className="text-4xl">{selectedPerson.profileImage}</span>
                  </div>
                  <div className="ml-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{selectedPerson.name}</h3>
                        <p className="text-sm text-primary-600 dark:text-primary-400">{selectedPerson.role}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{selectedPerson.organization}</p>
                      </div>
                      <button
                        onClick={() => setSelectedPerson(null)}
                        className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center mb-1">
                        <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {selectedPerson.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {selectedPerson.availability}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {selectedPerson.expertise.map((exp, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                      {selectedPerson.bio}
                    </p>
                    <div className="mt-4 flex space-x-3">
                      <button
                        type="button"
                        className="btn btn-primary"
                      >
                        {selectedPerson.type === 'mentor' ? 'Schedule Meeting' : 
                         selectedPerson.type === 'talent' ? 'Contact' : 'Request Intro'}
                      </button>
                      <button
                        type="button"
                        className="btn bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 