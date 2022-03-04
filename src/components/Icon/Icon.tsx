import React, { HTMLAttributes } from "react";
import theme from "../../theme";

import { Info } from "./AllIcons";
import { Container } from "./Icon.style";

const { colors } = theme;
export const IconNames = ["info"] as const;

export type IconName = typeof IconNames[number];
declare type Color = keyof typeof colors;

export interface IconProps {
  /** The name of the icon */
  name: IconName;

  /** Size of the icon */
  size: "extra-small" | "small" | "medium" | "large" | "extra-large";

  /** Color of the icon */
  color?: Color;

  /** Class name to be applied to SVG container */
  className?: string;
}

const Icon = React.forwardRef<
  HTMLDivElement,
  IconProps & HTMLAttributes<HTMLDivElement>
>(({ name, color, size = "medium", ...other }, ref) => {
  const renderIcon = (name: IconName) => {
    switch (name) {
      case "info":
        return <Info />;
      default:
        break;
    }
  };
  return (
    <Container ref={ref} name={name} size={size} color={color} {...other}>
      {renderIcon(name)}
    </Container>
  );
});

export default Icon;
