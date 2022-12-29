import {Head, Html, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Gonzalo Stoll" />
        <meta
          name="description"
          content="Ana Laudado is a Product Designer and illustration artist based in Copenhagen."
        />
        <meta
          name="keywords"
          content="Ana Laudado, portfolio, product design, ux design, ui/ux design"
        />

        {/* OG (Open Graph protocol, for social media) Meta tags */}
        <meta property="og:title" content="Ana Laudado ✦ Portfolio" />
        <meta property="og:image" content="/images/AnitaLaudado.jpeg" />
        <meta
          property="og:description"
          content="Ana Laudado is a Product Designer and illustration artist based in Copenhagen."
        />
        <meta property="og:url" content="https://anitalaudado.com" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (
              localStorage.theme === 'dark' ||
              (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
