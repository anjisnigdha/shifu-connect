'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Stat = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  icon?: string;
};

type StatsDisplayProps = {
  stats: Stat[];
  columns?: 1 | 2 | 3 | 4;
  title?: string;
  description?: string;
};

export default function StatsDisplay({
  stats,
  columns = 4,
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
        staggerChildren: 0.15,
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

  const icons = ['🚀', '📈', '👥', '🌍'];

  return (
    <div ref={ref} className="px-4 py-6 bg-white/80 dark:bg-shifu-dark/80 backdrop-blur-lg rounded-xl shadow-xl dark:shadow-black/30 border border-white/20 dark:border-shifu-table-border/40 hover:shadow-xl transition-all duration-300">
      {(title || description) && (
        <div className="px-4 pb-6 text-center">
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
        className="flex flex-wrap justify-center gap-8 md:gap-12 items-center"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="text-center flex-1 min-w-[110px] max-w-[150px]"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="mb-2 mx-auto flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-shifu-orange/30 to-shifu-accent/20 dark:from-shifu-orange/20 dark:to-shifu-accent/10 shadow-md">
              <span className="text-xl">{stat.icon || icons[idx % icons.length]}</span>
            </div>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-shifu-orange to-shifu-accent drop-shadow-sm">
              {stat.prefix ?? ''}{animatedValues[idx]}{stat.suffix ?? ''}
            </div>
            <div className="mt-1 text-xs font-medium text-gray-700 dark:text-gray-200">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 