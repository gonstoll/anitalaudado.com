import Link from 'next/link';
import * as React from 'react';
import LinkButton from './LinkButton';

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

  return {theme, toggleTheme};
}

function useStickyHeader() {
  const [isVisible, setIsVisible] = React.useState(false);
  const position = React.useRef(0);

  React.useEffect(() => {
    function handleScroll() {
      const current = window.scrollY;
      const delta = current - position.current;
      position.current = current;
      setIsVisible(delta < 0);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {isVisible};
}

export default function Header() {
  const {theme, toggleTheme} = useTheme();
  const {isVisible} = useStickyHeader();

  const visibleClass = isVisible ? 'top-0' : '-top-20';

  return (
    <header
      className={`flex items-center justify-between py-4 px-10 border-b-1 border-black dark:border-white bg-white dark:bg-black sticky transition-all duration-200 ${visibleClass}`}
    >
      <Link href="/" className="text-3.5xl text-black dark:text-white">
        ✦
      </Link>
      <div className="flex items-center">
        <nav className="flex items-center gap-8">
          <LinkButton href="/" title="Work" type="secondary" />
          <LinkButton href="/about" title="About" type="secondary" />
        </nav>
        <label className="flex items-center ml-20">
          <input
            type="checkbox"
            className="sr-only peer"
            onClick={toggleTheme}
            defaultChecked={theme === 'dark'}
          />
          <div className="cursor-pointer w-10 h-6 relative border rounded-2xl border-solid border-black dark:border-white after:absolute after:top-1/2 after:left-1 after:-translate-y-1/2 after:w-4 after:h-4 after:rounded-full after:bg-black dark:after:bg-white peer-checked:after:translate-x-5 peer-checked:after:left-auto after:transition-transform after:duration-500" />
        </label>
      </div>
    </header>
  );
}
