import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Head from "next/head";
import "../styles/styles.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Naufal Syarif</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
