'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type IllustrationType = 'primary' | 'secondary' | 'tertiary';

type ShifuIllustrationProps = {
  character: IllustrationType;
  size?: 'sm' | 'md' | 'lg';
  animation?: 'subtle' | 'reveal' | 'float' | 'none';
  className?: string;
};

export default function ShifuIllustration({ 
  character, 
  size = 'md', 
  animation = 'float',
  className = ''
}: ShifuIllustrationProps) {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
  };

  const animationVariants = {
    subtle: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    reveal: {
      opacity: [0.7, 1, 0.7],
      scale: [0.98, 1, 0.98],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    float: {
      y: [0, -5, 0],
      x: [0, 2, 0, -2, 0],
      transition: {
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        },
        x: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    none: {}
  };

  // Abstract professional illustrations
  const illustrations: Record<IllustrationType, ReactNode> = {
    primary: (
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-shifu-orange/20 dark:bg-shifu-orange/10" style={{ filter: 'blur(15px)' }}></div>
        <div className="relative w-full h-full bg-gradient-to-br from-shifu-orange to-amber-500 rounded-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-amber-400/80 to-transparent"></div>
          <div className="absolute w-1/2 h-1/2 left-[30%] top-[25%] bg-white/30 rounded-full"></div>
        </div>
      </div>
    ),
    secondary: (
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-blue-500/15 dark:bg-blue-700/20" style={{ filter: 'blur(15px)' }}></div>
        <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_60%)]"></div>
          <div className="absolute bottom-[15%] right-[15%] w-1/3 h-1/3 bg-white/20 rounded-full"></div>
        </div>
      </div>
    ),
    tertiary: (
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gray-400/15 dark:bg-gray-600/20" style={{ filter: 'blur(15px)' }}></div>
        <div className="relative w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-500 dark:to-gray-700 rounded-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.25),transparent_70%)]"></div>
          <motion.div 
            className="absolute w-3/5 h-3/5 rounded-full"
            style={{ 
              backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 100%)",
              top: "20%",
              left: "20%"
            }}
          ></motion.div>
        </div>
      </div>
    )
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className}`}
      variants={animationVariants}
      animate={animation}
    >
      {illustrations[character]}
    </motion.div>
  );
} 