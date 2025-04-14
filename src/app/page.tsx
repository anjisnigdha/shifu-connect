'use client';

import { useRouter } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ShifuIllustration from '@/components/ShifuIllustration';
import ComparisonChart from '@/components/ComparisonChart';
import WorkflowSteps from '@/components/WorkflowSteps';
import StatsDisplay from '@/components/StatsDisplay';

export default function HomePage() {
  const router = useRouter();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const comparisonItems = [
    { 
      label: 'Engagement Duration', 
      shifuValue: 'Multi-year', 
      otherValue: '3 months (cohort-based)'
    },
    { 
      label: 'No. of startups in lifetime', 
      shifuValue: '~100', 
      otherValue: '~10,000'
    },
    { 
      label: 'Cohort Size', 
      shifuValue: 'No cohorts', 
      otherValue: '~100 per cohort'
    },
    { 
      label: 'Type', 
      shifuValue: 'Very niche\nIndia + AI-driven + B2B + Early Revenue', 
      otherValue: 'All kinds of startups\nFrom hardware to e-commerce'
    },
    { 
      label: 'Northstar', 
      shifuValue: 'First milestone: Get to $10M profitably', 
      otherValue: 'Unicorn Hunting: Go big or go home'
    },
    { 
      label: 'Engagement Level', 
      shifuValue: 'Co-build your AI application\nActively help with hiring for key positions\nCo-execute your first few email campaigns', 
      otherValue: '"Try ABM"\n"Hire the VP of sales"\nGive high-level product feedback'
    },
  ];

  const workflowSteps = [
    {
      title: 'Ideate',
      description: 'Submit your ideas and get AI-powered feedback',
      icon: <span className="text-2xl">💡</span>,
    },
    {
      title: 'Validate',
      description: 'Test your ideas with real users and mentors',
      icon: <span className="text-2xl">✅</span>,
    },
    {
      title: 'Build',
      description: 'Connect with the talent you need to build your MVP',
      icon: <span className="text-2xl">🛠️</span>,
    },
    {
      title: 'Launch',
      description: 'Get guidance for a successful product launch',
      icon: <span className="text-2xl">🚀</span>,
    },
    {
      title: 'Scale',
      description: 'Connect with investors and mentors to scale up',
      icon: <span className="text-2xl">📈</span>,
    },
  ];

  const stats = [
    { label: 'Startups', value: 100, suffix: '+' },
    { label: 'Success Rate', value: 65, suffix: '%' },
    { label: 'Mentors', value: 50, suffix: '+' },
    { label: 'Countries', value: 12 },
  ];

  return (
    <div ref={ref} className="relative">
      {/* Hero section with parallax effect */}
      <div className="relative overflow-hidden bg-gradient-to-b from-shifu-darker to-shifu-dark">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y, opacity }}
        >
          <div className="absolute right-20 top-20">
            <ShifuIllustration character="redPanda" size="lg" animation="float" />
          </div>
          <div className="absolute left-20 bottom-40">
            <ShifuIllustration character="panda" size="md" animation="bounce" />
          </div>
          <div className="absolute right-40 bottom-20">
            <ShifuIllustration character="crane" size="md" animation="pulse" />
          </div>
        </motion.div>
      
        <div className="mx-auto max-w-7xl relative z-10 px-4 py-32 sm:px-6 sm:py-40 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-display"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="block text-shifu-orange">Shifu Connect</span>
              <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl">Turning ideas from the margins into movements</span>
            </motion.h1>
            
            <motion.p 
              className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              An interactive, action-oriented platform for entrepreneurs and dreamers looking to make a difference.
            </motion.p>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button
                onClick={() => router.push('/onboarding')}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-shifu-orange px-8 py-3 text-base font-medium text-white hover:bg-shifu-orange/90 focus:outline-none focus:ring-2 focus:ring-shifu-accent focus:ring-offset-2"
              >
                Get Started
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="relative -mt-16 z-20 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <StatsDisplay stats={stats} columns={4} />
      </div>

      {/* Features section */}
      <div className="py-24 bg-white dark:bg-shifu-darker">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              How We Help You Succeed
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              From ideation to scaling, Shifu Connect provides the tools, resources, and connections you need.
            </p>
          </div>
          
          <motion.div
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="rounded-xl border border-gray-200 dark:border-shifu-table-border bg-white dark:bg-shifu-dark p-8 shadow-lg transition-all hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-shifu-orange/10 dark:bg-shifu-orange/20">
                <span className="text-xl text-shifu-orange">💡</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Smart Discovery</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Personalized resources based on your location, experience, and goals.
              </p>
            </div>
            
            <div className="rounded-xl border border-gray-200 dark:border-shifu-table-border bg-white dark:bg-shifu-dark p-8 shadow-lg transition-all hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-shifu-orange/10 dark:bg-shifu-orange/20">
                <span className="text-xl text-shifu-orange">🚀</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Ideas to Outcomes</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Evaluate your ideas, build a roadmap, and track your progress with visual milestones.
              </p>
            </div>
            
            <div className="rounded-xl border border-gray-200 dark:border-shifu-table-border bg-white dark:bg-shifu-dark p-8 shadow-lg transition-all hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-shifu-orange/10 dark:bg-shifu-orange/20">
                <span className="text-xl text-shifu-orange">🤝</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Connect & Resources</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Access mentors, talent, investors, and resources tailored to your needs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Workflow section */}
      <div className="py-24 bg-gray-50 dark:bg-shifu-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Your Journey with Shifu Connect
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              A clear path from idea to successful business
            </p>
          </div>
          
          <WorkflowSteps steps={workflowSteps} />
        </div>
      </div>

      {/* Comparison section */}
      <div className="py-24 bg-white dark:bg-shifu-darker">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Why Choose Shifu Connect
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              See how our hands-on approach differs from traditional accelerators
            </p>
          </div>
          
          <ComparisonChart 
            items={comparisonItems} 
            shifuLabel="Shifu Connect" 
            otherLabel="Traditional Accelerator"
          />
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-shifu-dark py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready to build something amazing?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Join Shifu Connect today and turn your ideas into reality.
          </p>
          <div className="mt-8">
            <button
              onClick={() => router.push('/onboarding')}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-shifu-orange px-8 py-3 text-base font-medium text-white hover:bg-shifu-orange/90 focus:outline-none focus:ring-2 focus:ring-shifu-accent focus:ring-offset-2"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 