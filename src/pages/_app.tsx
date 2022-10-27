import type { AppProps } from "next/app";

import theme from "@config/theme";

import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
