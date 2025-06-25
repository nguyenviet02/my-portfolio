import { useEffect, useState } from 'react';
import ThemeContext from './ThemeContext';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Check if theme is stored in localStorage
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      // Check if user has system preference for dark mode
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Return stored theme if exists, otherwise use system preference
      return storedTheme || (prefersDark ? 'dark' : 'light');
    }
    return 'light'; // Default for SSR
  });

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  // Update document when theme changes
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
} 