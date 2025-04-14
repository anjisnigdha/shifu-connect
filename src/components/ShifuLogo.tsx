import { useTheme } from './ThemeProvider';

export default function ShifuLogo({ className = 'h-10' }: { className?: string }) {
  const { theme } = useTheme();
  
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-full"
      >
        <path 
          d="M0 24L24 0L48 24L24 48L0 24Z" 
          fill="#1C1C1C" 
          className="dark:fill-shifu-dark fill-gray-100"
        />
        <path 
          d="M14 14L24 4L34 14L24 44L14 14Z" 
          fill="#F97316" 
          className="fill-shifu-orange"
        />
      </svg>
      <div className="ml-2 flex flex-col">
        <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">SHIFU</span>
        <span className="text-xs text-gray-600 dark:text-gray-400">VENTURES</span>
      </div>
    </div>
  );
} 