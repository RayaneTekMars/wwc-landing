import "@/styles/globals.css";
import createEmotionCache from "@/utils/createEmotionCache";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import styles from "@/styles/Home.module.scss";

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppProps & { emotionCache?: any }) {
  return (
      <ParallaxProvider>
        <CacheProvider value={emotionCache}>
          <Component {...pageProps} />
        </CacheProvider>
      </ParallaxProvider>
  );
}
