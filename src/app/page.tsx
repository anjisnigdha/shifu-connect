'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl font-display"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="block text-primary-600 dark:text-primary-400">Shifu Founders Playbook</span>
            <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl">Turning ideas from the margins into movements</span>
          </motion.h1>
          
          <motion.p 
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            An interactive, action-oriented playbook for entrepreneurs and dreamers looking to make a difference.
          </motion.p>
          
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={() => router.push('/onboarding')}
              className="btn btn-primary text-base px-8 py-3"
            >
              Get Started
            </button>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="card">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Smart Discovery</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Personalized resources based on your location, experience, and goals.
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Ideas to Outcomes</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Evaluate your ideas, build a roadmap, and track your progress with visual milestones.
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Connect & Resources</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Access mentors, talent, investors, and resources tailored to your needs.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 