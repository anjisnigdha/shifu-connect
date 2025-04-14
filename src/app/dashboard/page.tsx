'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Mock data
const userProgress = {
  readinessScore: 65,
  nextMilestone: 'MVP Badge',
  stepsToGo: 2,
  completedTasks: 7,
  totalTasks: 12,
};

const recentActivities = [
  { id: 1, type: 'idea', title: 'Added new idea: Mobile App for Local Artisans', timestamp: '2 hours ago' },
  { id: 2, type: 'task', title: 'Completed customer interview #3', timestamp: '1 day ago' },
  { id: 3, type: 'resource', title: 'Accessed "Pitch Deck Template"', timestamp: '2 days ago' },
  { id: 4, type: 'mentor', title: 'Scheduled call with Alex Chen', timestamp: '3 days ago' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-white font-display">
            Welcome back, John!
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Track your founder's journey and make progress toward your goals.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Progress Card */}
        <motion.div 
          className="card col-span-1 lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Your Progress</h3>
          
          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 dark:bg-gray-700">
              <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-300">Readiness Score</dt>
              <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-primary-600 dark:text-primary-400">
                  {userProgress.readinessScore}%
                </div>
                <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0 dark:bg-green-900 dark:text-green-200">
                  <svg className="-ml-1 mr-0.5 h-4 w-4 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  <span>5%</span>
                </div>
              </dd>
            </div>
            
            <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 dark:bg-gray-700">
              <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-300">Next Milestone</dt>
              <dd className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                {userProgress.nextMilestone}
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {userProgress.stepsToGo} steps away
                </p>
              </dd>
            </div>
            
            <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 dark:bg-gray-700">
              <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-300">Task Completion</dt>
              <dd className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                {userProgress.completedTasks}/{userProgress.totalTasks}
                <div className="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden dark:bg-gray-600">
                  <div 
                    className="h-full bg-primary-600 rounded-full" 
                    style={{ width: `${(userProgress.completedTasks / userProgress.totalTasks) * 100}%` }}
                  ></div>
                </div>
              </dd>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Recent Activity</h4>
            <ul className="mt-2 divide-y divide-gray-200 dark:divide-gray-700">
              {recentActivities.map((activity) => (
                <li key={activity.id} className="py-3">
                  <div className="flex items-start space-x-3">
                    <div className={`rounded-full p-1 ${
                      activity.type === 'idea' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' : 
                      activity.type === 'task' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300' :
                      activity.type === 'resource' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300' :
                      'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300'
                    }`}>
                      {activity.type === 'idea' && (
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      )}
                      {activity.type === 'task' && (
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      {activity.type === 'resource' && (
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      )}
                      {activity.type === 'mentor' && (
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {activity.title}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {activity.timestamp}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Quick Actions Card */}
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Quick Actions</h3>
          <div className="mt-6 space-y-4">
            <Link
              href="/dashboard/ideaboard"
              className="group block rounded-lg bg-white p-4 shadow transition-all hover:bg-primary-50 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-lg bg-primary-100 p-3 dark:bg-primary-900">
                  <svg className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900 dark:text-white">Add New Idea</p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Post a new investable idea to your ideaboard</p>
                </div>
              </div>
            </Link>

            <Link
              href="/dashboard/roadmap"
              className="group block rounded-lg bg-white p-4 shadow transition-all hover:bg-primary-50 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-lg bg-primary-100 p-3 dark:bg-primary-900">
                  <svg className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900 dark:text-white">Update Roadmap</p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Track progress on your build journey</p>
                </div>
              </div>
            </Link>

            <Link
              href="/dashboard/connect"
              className="group block rounded-lg bg-white p-4 shadow transition-all hover:bg-primary-50 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-lg bg-primary-100 p-3 dark:bg-primary-900">
                  <svg className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900 dark:text-white">Find Mentors</p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Connect with experienced mentors</p>
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Features Overview */}
      <motion.div 
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Link href="/dashboard/ideaboard" className="card hover:shadow-md transition-shadow">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Ideaboard</h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Evaluate and refine your business ideas with AI analysis and market insights.
          </p>
        </Link>
        
        <Link href="/dashboard/roadmap" className="card hover:shadow-md transition-shadow">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Roadmap</h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Visualize your journey from idea to launch with customized milestones.
          </p>
        </Link>
        
        <Link href="/dashboard/resources" className="card hover:shadow-md transition-shadow">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Resources</h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Access playbooks, templates, and courses tailored to your needs.
          </p>
        </Link>
        
        <Link href="/dashboard/connect" className="card hover:shadow-md transition-shadow">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Connect</h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Find mentors, talent, and investors to help bring your idea to life.
          </p>
        </Link>
      </motion.div>
    </div>
  );
} 