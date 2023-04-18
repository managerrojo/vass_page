import '@/styles/globals.css';
import '@/components/header/Header.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
