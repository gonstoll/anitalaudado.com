import * as React from 'react';

export default function Layout({children}: React.PropsWithChildren<object>) {
  return (
    <div className="h-full bg-white dark:bg-black transition-colors duration-500">
      {children}
    </div>
  );
}
