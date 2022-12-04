import Link from 'next/link';
import * as React from 'react';
import Button from './Button';
import Header from './Header';
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
          <div>
            <Tile size="small" title="Work" link="/work" />
            <Tile size="small" title="Personal Projects" />
            <Tile size="small" title="About" link="/about" />
          </div>
          <div className="flex flex-wrap">
            <Link href="https://www.linkedin.com/in/ana-laudado/">
              linkedin
            </Link>
            <Link href="/docs/Ana_Laudado_2023.pdf" download target="_blank" rel="noreferrer">
              resume ↓
            </Link>
            <Link href="#">top ↑</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
