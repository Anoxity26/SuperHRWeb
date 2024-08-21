import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const PoppinsFont = Poppins({ weight: '500' ,subsets:['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={PoppinsFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
