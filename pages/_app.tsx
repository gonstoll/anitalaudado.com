import type {AppProps} from 'next/app';
import '../styles/globals.css';
import localFont from '@next/font/local';

const SctoGroteskFont = localFont({
  src: [
    {
      path: './fonts/Scto_Grotesk_A.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Scto_Grotesk_A_Bold.otf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--scto-grotesk-a',
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <main className={SctoGroteskFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
