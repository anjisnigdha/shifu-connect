'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Resource = {
  id: string;
  title: string;
  description: string;
  type: 'playbook' | 'template' | 'course';
  level?: 'beginner' | 'builder' | 'growth';
  duration?: string;
  author?: string;
  popularity: number;
  isFeatured: boolean;
  thumbnail: string;
};

type FilterState = {
  type: string[];
  level: string[];
  searchTerm: string;
};

const resources: Resource[] = [
  {
    id: 'pb1',
    title: 'Validating Your Idea',
    description: 'Learn how to quickly test your business concept before investing time and resources.',
    type: 'playbook',
    level: 'beginner',
    author: 'Sarah Johnson',
    popularity: 4.8,
    isFeatured: true,
    thumbnail: '📊',
  },
  {
    id: 'pb2',
    title: 'Startup Financial Modeling',
    description: 'Create financial projections and understand key metrics to drive growth.',
    type: 'playbook',
    level: 'builder',
    author: 'Alex Wong',
    popularity: 4.5,
    isFeatured: false,
    thumbnail: '💰',
  },
  {
    id: 'pb3',
    title: 'Scaling Sales Strategy',
    description: 'Advanced techniques for scaling your sales operation and growing revenue.',
    type: 'playbook',
    level: 'growth',
    author: 'Miguel Rodriguez',
    popularity: 4.9,
    isFeatured: true,
    thumbnail: '📈',
  },
  {
    id: 'tp1',
    title: 'Lean Canvas Template',
    description: 'One-page business plan template focused on problems, solutions, key metrics, and competitive advantages.',
    type: 'template',
    popularity: 4.7,
    isFeatured: true,
    thumbnail: '📝',
  },
  {
    id: 'tp2',
    title: 'Pitch Deck Framework',
    description: 'Professional slide templates for presenting your business to investors.',
    type: 'template',
    popularity: 4.6,
    isFeatured: false,
    thumbnail: '🎯',
  },
  {
    id: 'tp3',
    title: 'Customer Interview Script',
    description: 'Structure and questions for effective customer discovery interviews.',
    type: 'template',
    popularity: 4.3,
    isFeatured: false,
    thumbnail: '🗣️',
  },
  {
    id: 'cs1',
    title: 'Design Thinking Fundamentals',
    description: 'Apply human-centered design approach to build products people love.',
    type: 'course',
    level: 'beginner',
    duration: '4 hours',
    popularity: 4.5,
    isFeatured: false,
    thumbnail: '🎨',
  },
  {
    id: 'cs2',
    title: 'Growth Marketing Essentials',
    description: 'Data-driven strategies for customer acquisition and retention.',
    type: 'course',
    level: 'builder',
    duration: '6 hours',
    popularity: 4.7,
    isFeatured: true,
    thumbnail: '🚀',
  },
  {
    id: 'cs3',
    title: 'Fundraising Masterclass',
    description: 'Strategies for raising capital from angels, VCs, and alternative sources.',
    type: 'course',
    level: 'growth',
    duration: '8 hours',
    popularity: 4.8,
    isFeatured: false,
    thumbnail: '💼',
  },
];

export default function ResourcesPage() {
  const [filters, setFilters] = useState<FilterState>({
    type: [],
    level: [],
    searchTerm: '',
  });

  const [activeTab, setActiveTab] = useState('all');

  const handleFilterChange = (filterType: keyof FilterState, value: string) => {
    setFilters(prev => {
      const currentValues = prev[filterType];
      
      if (filterType === 'searchTerm') {
        return { ...prev, [filterType]: value };
      }
      
      if (Array.isArray(currentValues)) {
        return {
          ...prev,
          [filterType]: currentValues.includes(value)
            ? currentValues.filter(v => v !== value)
            : [...currentValues, value]
        };
      }
      
      return prev;
    });
  };

  const filteredResources = resources.filter(resource => {
    // Filter by tab
    if (activeTab !== 'all' && resource.type !== activeTab) {
      return false;
    }
    
    // Filter by type
    if (filters.type.length > 0 && !filters.type.includes(resource.type)) {
      return false;
    }
    
    // Filter by level (if resource has level)
    if (filters.level.length > 0 && resource.level && !filters.level.includes(resource.level)) {
      return false;
    }
    
    // Filter by search term
    if (filters.searchTerm && !resource.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) && 
        !resource.description.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const featuredResources = resources.filter(resource => resource.isFeatured);

  return (
    <div className="space-y-6">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-white font-display">
            Resources
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Access playbooks, templates, and courses tailored to your needs.
          </p>
        </div>
      </div>

      {/* Featured Resources */}
      {activeTab === 'all' && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Featured Resources</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredResources.map((resource) => (
              <motion.div
                key={resource.id}
                className="card hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-3xl">{resource.thumbnail}</div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium text-gray-900 dark:text-white">{resource.title}</h4>
                    <div className="mt-1 flex items-center">
                      <span className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                        {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                      </span>
                      {resource.level && (
                        <span className="ml-2 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                          {resource.level.charAt(0).toUpperCase() + resource.level.slice(1)}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                      {resource.description}
                    </p>
                    <div className="mt-2 flex justify-between items-center">
                      <div className="flex items-center">
                        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">{resource.popularity}</span>
                      </div>
                      <button className="text-xs text-primary-600 hover:text-primary-700 flex items-center dark:text-primary-400 dark:hover:text-primary-300">
                        Access
                        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Tabs and Filters */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('all')}
              className={`${
                activeTab === 'all'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              All Resources
            </button>
            <button
              onClick={() => setActiveTab('playbook')}
              className={`${
                activeTab === 'playbook'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Playbooks
            </button>
            <button
              onClick={() => setActiveTab('template')}
              className={`${
                activeTab === 'template'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Templates
            </button>
            <button
              onClick={() => setActiveTab('course')}
              className={`${
                activeTab === 'course'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Courses
            </button>
          </nav>

          <div className="mt-4 sm:mt-0">
            <div className="relative rounded-md">
              <input
                type="text"
                placeholder="Search resources..."
                className="input py-1 pr-10"
                value={filters.searchTerm}
                onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
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
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="card space-y-6">
            {activeTab === 'playbook' || activeTab === 'course' || activeTab === 'all' ? (
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Experience Level</h4>
                <div className="space-y-2">
                  {['beginner', 'builder', 'growth'].map((level) => (
                    <div key={level} className="flex items-center">
                      <input
                        id={`level-${level}`}
                        type="checkbox"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        checked={filters.level.includes(level)}
                        onChange={() => handleFilterChange('level', level)}
                      />
                      <label
                        htmlFor={`level-${level}`}
                        className="ml-3 text-sm text-gray-600 dark:text-gray-300"
                      >
                        {level.charAt(0).toUpperCase() + level.slice(1)} Mode
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Resource Type</h4>
              <div className="space-y-2">
                {['playbook', 'template', 'course'].map((type) => (
                  <div key={type} className="flex items-center">
                    <input
                      id={`type-${type}`}
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      checked={filters.type.includes(type)}
                      onChange={() => handleFilterChange('type', type)}
                    />
                    <label
                      htmlFor={`type-${type}`}
                      className="ml-3 text-sm text-gray-600 dark:text-gray-300"
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}s
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resources List */}
        <div className="lg:col-span-3">
          <div className="space-y-4">
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {filteredResources.map((resource) => (
                  <motion.div
                    key={resource.id}
                    className="card hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 text-3xl">{resource.thumbnail}</div>
                      <div className="ml-4">
                        <h4 className="text-md font-medium text-gray-900 dark:text-white">{resource.title}</h4>
                        <div className="mt-1 flex items-center">
                          <span className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                            {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                          </span>
                          {resource.level && (
                            <span className="ml-2 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                              {resource.level.charAt(0).toUpperCase() + resource.level.slice(1)}
                            </span>
                          )}
                          {resource.duration && (
                            <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                              {resource.duration}
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                          {resource.description}
                        </p>
                        <div className="mt-2 flex justify-between items-center">
                          <div className="flex items-center">
                            {resource.author ? (
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                By {resource.author}
                              </span>
                            ) : (
                              <div className="flex items-center">
                                <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">{resource.popularity}</span>
                              </div>
                            )}
                          </div>
                          <button className="text-xs text-primary-600 hover:text-primary-700 flex items-center dark:text-primary-400 dark:hover:text-primary-300">
                            Access
                            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </button>
                        </div>
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No resources found</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Try adjusting your filters or search term.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 