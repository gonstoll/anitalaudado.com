import Link from 'next/link';
import * as React from 'react';
import Header from './Header';
import LinkButton from './LinkButton';
import Tile from './Tile';

export default function Layout({children}: React.PropsWithChildren<object>) {
  return (
    <>
      <Header />

      <main className="mb-auto">{children}</main>

      <footer className="border-t-1 border-black dark:border-white">
        <div className="p-10">
          <div className="md:flex items-center justify-between mb-8">
            <Link
              href="/"
              className="block text-3.5xl text-black dark:text-white"
            >
              ✦
            </Link>
            <Link
              href="mailto:anitalaudado@gmail.com"
              className="block text-2xl md:text-3.5xl font-bold text-black dark:text-white"
            >
              anitalaudado@gmail.com
            </Link>
          </div>
          <div className="md:flex items-end justify-between">
            <div className="mb-8 md:mb-0">
              <Tile size="small" title="Work" link="/work" />
              <Tile size="small" title="Personal Projects" />
              <Tile size="small" title="About" link="/about" />
            </div>
            <div className="flex flex-wrap gap-4">
              <LinkButton
                href="https://www.linkedin.com/in/ana-laudado/"
                type="primary"
                size="small"
                title="linkedin"
              />
              <LinkButton
                href="/docs/Ana_Laudado_2023.pdf"
                type="primary"
                size="small"
                title="resume ↓"
                target="_blank"
                rel="noreferrer"
              />
              <LinkButton href="#" type="primary" size="small" title="top ↑" />
            </div>
          </div>
        </div>

        <div className="copyright-bar px-10 py-6 md:flex items-center justify-between bg-black dark:bg-white">
          <p className="text-base mb-6 md:mb-0 text-white dark:text-black">
            Ana Laudado - {new Date().getFullYear()}
          </p>
          <p className="text-base uppercase text-white dark:text-black">
            Made with love ✦ <br className="md:hidden" />
            From the end of the world
          </p>
        </div>
      </footer>
    </>
  );
}
