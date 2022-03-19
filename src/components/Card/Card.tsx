import React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";

const { colors } = theme;
declare type Color = keyof typeof colors;

interface StyledCardProps {
  backgroundColor?: Color;
  spacing?: number;
}

const StyledCard = styled.div<StyledCardProps>(
  ({ backgroundColor, spacing }) => css`
    background-color: ${backgroundColor ? colors[backgroundColor] : "white"};
    border-radius: 12px;
    box-sizing: border-box;
    padding: 22px;
    margin: 2px;
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights.semibold};
    font-size: 32px;
    color: ${theme.colors["grey-0"]};

    & > *:not(:last-child) {
      ${spacing
        ? css`
            margin-bottom: ${spacing}px;
          `
        : css`
            margin-bottom: 22px;
          `}
    }
  `
);

interface CardProps {
  /** The background color of the Card */
  backgroundColor?: Color;

  /** The spacing between children (in px) */
  spacing?: number;

  /** The children inside the Card */
  children?: React.ReactNode | React.ReactNode[];
}

const Card = ({
  backgroundColor,
  spacing,
  children,
}: CardProps): JSX.Element => {
  return (
    <React.Fragment>
      <StyledCard backgroundColor={backgroundColor} spacing={spacing}>
        {children}
      </StyledCard>
    </React.Fragment>
  );
};

export { Card };
export type { CardProps };
