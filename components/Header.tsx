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

const links = [
  {href: '/', title: 'Work'},
  {href: '/about', title: 'About'},
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const {theme, toggleTheme} = useTheme();
  const {isVisible} = useStickyHeader();

  const visibleClass = isVisible ? 'top-0' : 'top-0 -top-20';
  const menuBtnClass = isMenuOpen
    ? 'before:rotate-45 after:-rotate-45'
    : 'before:-translate-y-1 after:translate-y-1';
  const mobileMenuClass = isMenuOpen ? 'top-0' : '-top-full';

  return (
    <header
      className={`flex items-center justify-between py-4 px-10 border-b-1 border-black dark:border-white bg-white dark:bg-black sticky transition-top duration-500 ${visibleClass}`}
    >
      <div className="flex items-center">
        <Link href="/" className="text-3-1/2xl text-black dark:text-white z-10">
          ✦
        </Link>
      </div>

      <div className="flex items-center z-10">
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({href, title}) => (
            <LinkButton key={href} href={href} title={title} type="secondary" />
          ))}
        </nav>
        <label className="flex items-center md:ml-20">
          <input
            type="checkbox"
            className="sr-only peer"
            onClick={toggleTheme}
            defaultChecked={theme === 'dark'}
            aria-label={theme === 'dark' ? 'Dark mode' : 'Light mode'}
          />
          <div className="cursor-pointer w-10 h-6 relative border rounded-2xl border-solid border-black dark:border-white after:absolute after:top-1/2 after:left-1 after:-translate-y-1/2 after:w-4 after:h-4 after:rounded-full after:bg-black dark:after:bg-white peer-checked:after:translate-x-5 peer-checked:after:left-auto after:transition-transform after:duration-500" />
        </label>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden ml-6 h-6 w-6 flex items-center before:bg-black after:bg-black before:rounded-sm after:rounded-sm dark:before:bg-white dark:after:bg-white before:w-6 after:w-6 before:h-3/16 after:h-3/16 before:absolute after:absolute  before:transition-toggle after:transition-toggle before:duration-500 after:duration-500 ${menuBtnClass}`}
        />
      </div>

      <nav
        className={`md:hidden w-full max-h-full fixed top-0 bottom-0 left-0 right-0 bg-white dark:bg-black transition-top duration-500 ${mobileMenuClass}`}
      >
        <div className="flex flex-col mt-40 px-6">
          {links.map(({href, title}) => (
            <Link
              key={href}
              href={href}
              className="font-bold text-5xl mb-6 text-black dark:text-white"
            >
              {title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
