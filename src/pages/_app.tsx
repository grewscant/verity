import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "../components/ThemeProvider";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans';
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
