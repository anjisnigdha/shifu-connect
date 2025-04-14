'use client';

import { motion } from 'framer-motion';

type ComparisonItem = {
  label: string;
  shifuValue: string | number;
  otherValue: string | number;
};

type ComparisonChartProps = {
  title?: string;
  items: ComparisonItem[];
  shifuLabel?: string;
  otherLabel?: string;
};

export default function ComparisonChart({
  title = 'How We Compare',
  items,
  shifuLabel = 'Shifu Connect',
  otherLabel = 'Traditional Accelerator',
}: ComparisonChartProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-shifu-table-border bg-shifu-table-row/20 dark:bg-shifu-darker shadow-lg">
      {title && (
        <div className="px-6 py-4 bg-shifu-table-header text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      )}
      
      <div className="overflow-hidden">
        <div className="grid grid-cols-3 text-center border-b border-shifu-table-border">
          <div className="py-3 px-4 bg-shifu-table-header/80 text-white font-medium">Criteria</div>
          <div className="py-3 px-4 bg-shifu-orange/80 text-white font-medium">{shifuLabel}</div>
          <div className="py-3 px-4 bg-shifu-table-header/40 text-white font-medium">{otherLabel}</div>
        </div>
        
        <div>
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-3 text-sm md:text-base ${
                index % 2 === 0 ? 'bg-shifu-table-row/20' : 'bg-shifu-darker/30'
              } border-b border-shifu-table-border last:border-0`}
            >
              <div className="py-4 px-4 font-medium text-shifu-accent dark:text-shifu-accent border-r border-shifu-table-border">
                {item.label}
              </div>
              <div className="py-4 px-4 text-center text-gray-800 dark:text-white">
                {item.shifuValue}
              </div>
              <div className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">
                {item.otherValue}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 