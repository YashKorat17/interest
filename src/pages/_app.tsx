import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return <>
  <QueryClientProvider client={queryClient}>
  <Component {...pageProps} />
  <Analytics/>
  </QueryClientProvider>
  </>
}
