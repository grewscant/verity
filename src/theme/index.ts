import colors from "./foundations/colors";
import typography from "./foundations/typography";

type Theme = typeof theme;

const theme = {
  ...typography,
  colors,
};

export default theme;
export type { Theme };
