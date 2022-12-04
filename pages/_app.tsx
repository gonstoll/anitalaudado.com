import localFont from '@next/font/local';
import type {AppProps} from 'next/app';
import '../styles/globals.css';

const SctoGroteskFont = localFont({
  src: [
    {
      path: '../public/fonts/Scto_Grotesk_A.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Scto_Grotesk_A_Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--scto-grotesk-a',
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <div
      className={`flex flex-col h-max min-h-full bg-white dark:bg-black transition-colors duration-500 ${SctoGroteskFont.className}`}
    >
      <Component {...pageProps} />
    </div>
  );
}
