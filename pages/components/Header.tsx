import * as React from 'react';

type Theme = 'light' | 'dark';

const THEME =
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
    <header className="flex align-middle justify-between py-4 px-16 border-b-2 border-black"> {/* TODO: px should be 15 (3.75rem) and border-b should be 1 (1px)*/}
      <p className="text-4xl text-black dark:text-white">✦</p>
      <label className="flex items-center relative">
        <input
          type="checkbox"
          className="sr-only peer"
          onClick={toggleTheme}
          defaultChecked={theme === 'dark'}
        />
        <div className="cursor-pointer w-10 h-6 relative border rounded-2xl border-solid border-black dark:border-white after:absolute after:top-1/2 after:left-1 after:-translate-y-1/2 after:w-4 after:h-4 after:rounded-full after:bg-black dark:after:bg-white peer-checked:after:translate-x-5 peer-checked:after:left-auto after:transition-transform after:duration-500" />
      </label>
    </header>
  );
}
