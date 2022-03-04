import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const StyledButton = styled.button`
  background-color: ${theme.colors["blue-2"]};
  font-family: ${theme.fonts.primary};
  font-weight: ${theme.fontWeights.extrabold};
  font-size: 16px;
  box-sizing: border-box;
  color: white;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 14px;
  outline: none;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
`;

interface ButtonProps {
  /** The text to display on the button */
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps): JSX.Element => {
  return <StyledButton>{children}</StyledButton>;
};

export { Button };
export type { ButtonProps };
