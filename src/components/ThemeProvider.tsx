'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Always start with dark theme on initial page load
    setTheme('dark');
    document.documentElement.classList.add('dark');
    
    // After the initial page load, we can check for saved preferences
    // This will only apply if the user manually toggles the theme
    const savedTheme = localStorage.getItem('theme') as Theme;
    
    if (!isInitialLoad && savedTheme) {
      setTheme(savedTheme);
      
      if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
      }
    }
    
    setIsInitialLoad(false);
  }, [isInitialLoad]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 