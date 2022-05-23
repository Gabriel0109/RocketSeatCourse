import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { SessionProvider as NextAuthProviders } from 'next-auth/react'
import '../styles/global.scss'

function MyApp({ Component, pageProps } : AppProps) {

  return( 
    <NextAuthProviders session={pageProps.session}>
    <Header />
  <Component {...pageProps} />
    </NextAuthProviders>
  )

}

export default MyApp
