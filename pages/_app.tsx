import { AppProps } from 'next/app'
// 全局樣式
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
