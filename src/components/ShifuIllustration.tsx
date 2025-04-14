'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type CharacterType = 'redPanda' | 'crane' | 'panda';

type ShifuIllustrationProps = {
  character: CharacterType;
  size?: 'sm' | 'md' | 'lg';
  animation?: 'bounce' | 'pulse' | 'float' | 'none';
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
    bounce: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    float: {
      y: [0, -10, 0],
      rotate: [0, 2, 0, -2, 0],
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        },
        rotate: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    none: {}
  };

  // Character components
  const characters: Record<CharacterType, ReactNode> = {
    redPanda: (
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-shifu-brown/30 dark:bg-shifu-table-header/40" style={{ filter: 'blur(20px)' }}></div>
        <div className="relative bg-gradient-to-b from-orange-500 to-red-600 rounded-full overflow-hidden flex items-center justify-center">
          <div className="text-4xl transform -rotate-12">🦊</div>
        </div>
      </div>
    ),
    crane: (
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-blue-500/20 dark:bg-blue-900/30" style={{ filter: 'blur(20px)' }}></div>
        <div className="relative bg-gradient-to-b from-blue-400 to-blue-600 rounded-full overflow-hidden flex items-center justify-center">
          <div className="text-4xl transform rotate-12">🐦</div>
        </div>
      </div>
    ),
    panda: (
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gray-500/20 dark:bg-gray-700/30" style={{ filter: 'blur(20px)' }}></div>
        <div className="relative bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-600 dark:to-gray-900 rounded-full overflow-hidden flex items-center justify-center">
          <div className="text-4xl">🐼</div>
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
      {characters[character]}
    </motion.div>
  );
} 