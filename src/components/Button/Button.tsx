import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const StyledButton = styled.button`
  background-color: ${theme.colors["purple-1"]};
  font-family: ${theme.fonts.primary};
  font-weight: ${theme.fontWeights.extrabold};
  font-size: 18px;
  box-sizing: border-box;
  color: white;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 14px;
  outline: none;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 7%;

  &:active {
    transform: scale(0.98);
  }
`;

interface ButtonProps {
  /** The text to display on the button */
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps): JSX.Element => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export { Button };
export type { ButtonProps };
