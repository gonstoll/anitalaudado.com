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
    const updatedTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
    document.documentElement.classList.toggle('dark', updatedTheme === 'dark');
  }

  /** Set theme on client to avoid hydration mismatch */
  React.useEffect(() => {
    const persistedTheme = localStorage.getItem('theme') as Theme | null;
    const isDarkTheme = matchMedia('(prefers-color-scheme: dark)');
    if (persistedTheme) {
      setTheme(persistedTheme);
    }
    if (!persistedTheme && isDarkTheme.matches) {
      setTheme('dark');
    }
    if (!persistedTheme && !isDarkTheme.matches) {
      setTheme('light');
    }

    function handleThemeChange(e: MediaQueryListEvent) {
      const theme = e.matches ? 'dark' : 'light';
      setTheme(theme);
    }

    isDarkTheme.addEventListener('change', handleThemeChange);

    return () => {
      isDarkTheme.removeEventListener('change', handleThemeChange);
    };
  }, []);

  return (
    <themeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </themeContext.Provider>
  );
}
