import React from "react";
import styled, { css } from "styled-components";

interface StyledStackProps {
  direction?: "row" | "column";
  spacing?: number;
  grow?: number;
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  wrap?: "nowrap" | "wrap" | "wrap-reverse" | "initial" | "inherit";
}

const StyledStack = styled.div<StyledStackProps>(
  ({ direction, spacing, grow, justify, align, wrap }) => css`
    display: flex;
    flex-direction: ${direction};
    flex-grow: ${grow};
    flex-wrap: ${wrap};
    justify-content: ${justify};
    align-items: ${align};

    ${direction === "row" &&
    css`
      & > *:not(:first-child) {
        margin-left: ${spacing}px;
      }
    `}

    ${direction === "column" &&
    css`
      & > * {
        margin-top: ${spacing}px;
      }
    `}
  `
);

interface StackProps extends StyledStackProps {
  children?: React.ReactNode | React.ReactNode[];
}

/** A component that helps lay out elements in the specified direction.
 *
 * @author Danyl Fernandes
 *
 * @experimental
 * This component is a WIP and as such doesn't guarantee a stable API.
 */
const Stack = ({
  direction,
  spacing,
  grow,
  justify,
  align,
  wrap,
  children,
}: StackProps): JSX.Element => {
  return (
    <StyledStack
      direction={direction}
      spacing={spacing}
      grow={grow}
      justify={justify}
      align={align}
      wrap={wrap}
    >
      {children}
    </StyledStack>
  );
};

export { Stack };
export type { StackProps };
