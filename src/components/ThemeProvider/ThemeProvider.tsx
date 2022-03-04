import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import defaultTheme from "../../theme";
import type { Theme } from "../../theme";

interface ThemeProviderProps {
  children: React.ReactNode | React.ReactNode[];
  theme?: Theme;
}

const ThemeProvider = ({
  children,
  theme = defaultTheme,
}: ThemeProviderProps): JSX.Element => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
export type { Theme, ThemeProviderProps };
