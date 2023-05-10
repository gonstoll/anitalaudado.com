import localFont from '@next/font/local'
import {Hydrate, QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {Analytics} from '@vercel/analytics/react'
import type {AppProps} from 'next/app'
import * as React from 'react'
import ThemeProvider from '~/context/theme'
import '../styles/globals.css'

const SctoGroteskFont = localFont({
  src: [
    {
      path: '../../public/fonts/Scto_Grotesk_A.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Scto_Grotesk_A_Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--scto-grotesk-a',
  display: 'fallback',
})

export default function App({Component, pageProps}: AppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
          },
        },
      })
  )

  // Prevents the page from scrolling when the user lands on a new page
  // due to <main> animation
  React.useEffect(() => {
    if (typeof window === 'undefined') return
    window.scrollTo({top: 0})
  }, [])

  return (
    <div
      className={`flex flex-col h-max min-h-full bg-white dark:bg-black transition-colors duration-500 ${SctoGroteskFont.className}`}
    >
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
            <Analytics />
          </Hydrate>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  )
}
