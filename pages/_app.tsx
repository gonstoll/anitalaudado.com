import type {AppProps} from 'next/app';
import Script from 'next/script';
import '../styles/globals.css';

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Script id="theme-setter">{`
        if (
          localStorage.getItem('theme') === 'dark' ||
          (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      `}</Script>
      <Component {...pageProps} />
    </>
  );
}
