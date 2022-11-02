import type { AppProps } from "next/app";
import { useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import Scaffold from "../components/Scaffold";
import GlobalStyle from "../styles/global";
import { darkTheme, lightTheme } from "../theme/theme";
import { QuizProvider } from "../state/addQuestion";
import { AnswerProvider } from "../state/answer";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme] = useState("light");

  return (
    <QuizProvider initialState={[]}>
      <AnswerProvider initialState={[]}>
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Scaffold>
            <Component {...pageProps} />
          </Scaffold>
        </ThemeProvider>
      </AnswerProvider>
    </QuizProvider>
  );
}

export default MyApp;
