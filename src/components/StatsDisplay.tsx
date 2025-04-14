'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Stat = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

type StatsDisplayProps = {
  stats: Stat[];
  columns?: 1 | 2 | 3 | 4;
  title?: string;
  description?: string;
};

export default function StatsDisplay({
  stats,
  columns = 3,
  title,
  description,
}: StatsDisplayProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [animatedValues, setAnimatedValues] = useState<number[]>(
    stats.map(() => 0)
  );

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, idx) => {
        const duration = stat.duration || 1.5;
        const steps = 20;
        const increment = stat.value / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[idx] = Math.round(current);
            return newValues;
          });
        }, (duration * 1000) / steps);
        
        return () => clearInterval(timer);
      });
    }
  }, [isInView, stats]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut" 
      } 
    },
  };

  return (
    <div ref={ref} className="py-12 bg-white dark:bg-shifu-dark rounded-xl shadow-lg border border-gray-200 dark:border-shifu-table-border">
      {(title || description) && (
        <div className="px-6 pb-8 text-center">
          {title && (
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {description}
            </p>
          )}
        </div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`grid grid-cols-1 md:grid-cols-${columns} gap-6 px-6`}
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="text-center"
          >
            <div className="text-4xl font-bold text-shifu-orange dark:text-shifu-accent">
              {stat.prefix ?? ''}{animatedValues[idx]}{stat.suffix ?? ''}
            </div>
            <div className="mt-2 text-gray-600 dark:text-gray-300">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 