import localFont from '@next/font/local';
import type {AppProps} from 'next/app';
import ThemeProvider from "~/context/theme";
import '../styles/globals.css';

const SctoGroteskFont = localFont({
  src: [
    {
      path: '../public/fonts/Scto_Grotesk_A.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Scto_Grotesk_A_Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--scto-grotesk-a',
  display: 'fallback',
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <div
      className={`flex flex-col h-max min-h-full bg-white dark:bg-black transition-colors duration-500 ${SctoGroteskFont.className}`}
    >
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
