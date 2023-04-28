import '@/styles/globals.css'
import createEmotionCache from '@/utils/createEmotionCache'
import { CacheProvider } from '@emotion/react'
import type { AppProps } from 'next/app'

const clientSideEmotionCache = createEmotionCache()

export default function App({ 
  Component, 
  emotionCache = clientSideEmotionCache, 
  pageProps
 }: AppProps & { emotionCache?: any }) {
  return (
    <CacheProvider value={emotionCache}>
      <Component {...pageProps} />
    </CacheProvider>
  )
}
