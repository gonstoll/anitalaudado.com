import * as React from 'react';

type Theme = 'light' | 'dark';

const THEME: Theme =
  typeof window !== 'undefined'
    ? (localStorage.getItem('theme') as Theme | null) || 'light'
    : 'light';

function useTheme() {
  const [theme, setTheme] = React.useState(THEME);

  function toggleTheme() {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  }

  React.useEffect(() => {
    function handleThemeChange(e: MediaQueryListEvent) {
      const theme = e.matches ? 'dark' : 'light';
      setTheme(theme);
    }

    const isDarkTheme = matchMedia('(prefers-color-scheme: dark)');
    isDarkTheme.addEventListener('change', handleThemeChange);
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return [theme, toggleTheme] as const;
}

export default function Header() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="h-full bg-white dark:bg-black">
      <h1 className="text-3xl font-bold underline dark:text-white text-black">
        Ana Laudado
      </h1>
      <div
        onClick={() => toggleTheme()}
        className="w-10 h-10 bg-black dark:bg-white"
      />
    </div>
  );
}
