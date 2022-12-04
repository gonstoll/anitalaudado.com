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

      <footer className="p-10 border-t-1 border-black dark:border-white">
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
            {/* <Link
              className="h-8 px-4 flex items-center rounded-4xl border-1 border-black dark:border-white text-black dark:text-white"
              href="https://www.linkedin.com/in/ana-laudado/"
            >
              linkedin
            </Link>
            <Link
              className="h-8 px-4 flex items-center rounded-4xl border-1 border-black dark:border-white text-black dark:text-white"
              href="/docs/Ana_Laudado_2023.pdf"
              target="_blank"
              rel="noreferrer"
            >
              resume ↓
            </Link>
            <Link
              className="h-8 px-4 flex items-center rounded-4xl border-1 border-black dark:border-white text-black dark:text-white"
              href="#"
            >
              top ↑
            </Link> */}
          </div>
        </div>
      </footer>
    </>
  );
}