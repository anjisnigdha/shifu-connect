'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type WorkflowStepsProps = {
  steps: Step[];
  title?: string;
  direction?: 'horizontal' | 'vertical';
};

export default function WorkflowSteps({
  steps,
  title,
  direction = 'horizontal',
}: WorkflowStepsProps) {
  const [activeStep, setActiveStep] = useState(0);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="py-8">
      {title && (
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          {title}
        </h3>
      )}

      {direction === 'horizontal' ? (
        <div className="hidden md:block">
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Progress line */}
            <div className="absolute top-8 left-0 w-full h-1 bg-gray-200 dark:bg-shifu-table-row"></div>
            
            {/* Progress filled */}
            <motion.div
              className="absolute top-8 left-0 h-1 bg-shifu-orange"
              style={{
                width: `${(100 * (activeStep + 0.5)) / steps.length}%`,
              }}
              initial={{ width: '0%' }}
              animate={{ width: `${(100 * (activeStep + 0.5)) / steps.length}%` }}
              transition={{ duration: 0.5 }}
            ></motion.div>

            {/* Steps */}
            <div className="flex justify-between">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  className="relative flex flex-col items-center"
                  variants={childVariants}
                  onMouseEnter={() => setActiveStep(idx)}
                  onClick={() => setActiveStep(idx)}
                >
                  <div
                    className={`z-10 flex h-16 w-16 items-center justify-center rounded-full ${
                      idx <= activeStep
                        ? 'bg-shifu-orange text-white'
                        : 'bg-gray-200 dark:bg-shifu-table-row text-gray-500 dark:text-gray-400'
                    } transition-colors duration-300`}
                  >
                    {step.icon}
                  </div>
                  <h4
                    className={`mt-4 text-center font-medium ${
                      idx <= activeStep
                        ? 'text-shifu-orange'
                        : 'text-gray-500 dark:text-gray-400'
                    } transition-colors duration-300`}
                  >
                    {step.title}
                  </h4>
                  <p className="mt-2 max-w-xs text-center text-sm text-gray-500 dark:text-gray-400">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="block md:hidden">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className={`relative pl-10 ${
                  idx !== steps.length - 1 ? 'pb-8' : ''
                }`}
                variants={childVariants}
              >
                {idx !== steps.length - 1 && (
                  <div className="absolute left-4 top-8 -ml-px h-full w-0.5 bg-gray-200 dark:bg-shifu-table-row"></div>
                )}
                <div
                  className={`absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full ${
                    idx <= activeStep
                      ? 'bg-shifu-orange text-white'
                      : 'bg-gray-200 dark:bg-shifu-table-row text-gray-500 dark:text-gray-400'
                  } transition-colors duration-300`}
                >
                  {idx + 1}
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => setActiveStep(idx)}
                >
                  <h4
                    className={`text-lg font-medium ${
                      idx <= activeStep
                        ? 'text-shifu-orange'
                        : 'text-gray-900 dark:text-white'
                    } transition-colors duration-300`}
                  >
                    {step.title}
                  </h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
} 