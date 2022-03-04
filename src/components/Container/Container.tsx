import React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";

interface ContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

const StyledContainer = styled.div(
  () => css`
    font-family: ${theme.fonts.primary};
    margin: 18px;
    display: grid;
    justify-content: center;
    align-items: center;
  `
);

const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <React.Fragment>
      <StyledContainer>{children}</StyledContainer>
    </React.Fragment>
  );
};

export { Container };
export type { ContainerProps };
