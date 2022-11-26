import type { AppProps } from "next/app";

import seo from "@config/seo";
import theme from "@config/theme";

import { DefaultSeo } from "next-seo";

import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager
} from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  const colorModeManager =
    typeof pageProps.cookies === "string"
      ? cookieStorageManagerSSR(pageProps.cookies)
      : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme} resetCSS>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
