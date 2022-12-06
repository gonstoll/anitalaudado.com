import * as React from 'react';

type Theme = 'light' | 'dark';

interface ThemeContext {
  theme: Theme | undefined;
  toggleTheme: () => void;
}

const themeContext = React.createContext<ThemeContext | undefined>(undefined);

export function useThemeContext() {
  const context = React.useContext(themeContext);

  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }

  return context;
}

export default function ThemeProvider({
  children,
}: React.PropsWithChildren<object>) {
  const [theme, setTheme] = React.useState<Theme | undefined>(undefined);

  function toggleTheme() {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  }

  /** Set theme on client to avoid hydration mismatch */
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;

    function handleThemeChange(e: MediaQueryListEvent) {
      const theme = e.matches ? 'dark' : 'light';
      setTheme(theme);
    }

    const isDarkTheme = matchMedia('(prefers-color-scheme: dark)');

    if (!savedTheme && isDarkTheme.matches) {
      setTheme('dark');
    }
    if (!savedTheme && !isDarkTheme.matches) {
      setTheme('light');
    }
    if (savedTheme) {
      setTheme(savedTheme);
    }

    isDarkTheme.addEventListener('change', handleThemeChange);

    return () => {
      isDarkTheme.removeEventListener('change', handleThemeChange);
    };
  }, []);

  React.useEffect(() => {
    if (!theme) return;
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <themeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </themeContext.Provider>
  );
}
