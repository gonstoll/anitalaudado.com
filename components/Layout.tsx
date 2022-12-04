import * as React from 'react';
import Header from './Header';

export default function Layout({children}: React.PropsWithChildren<object>) {
  return (
    <>
      <Header />
      <main className="mb-auto">{children}</main>
      <footer className="p-10 border-t-1 border-black dark:border-white"></footer>
    </>
  );
}
