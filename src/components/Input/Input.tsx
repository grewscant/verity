import React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import Icon from "../Icon/Icon";
import { Stack } from "../Stack/Stack";

const StyledInputTitle = styled.p(
  () => css`
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights.extrabold};
    font-size: 12px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${theme.colors["grey-2"]};
  `
);

const StyledInputInfo = styled.p`
  font-family: ${theme.fonts.primary};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors["grey-0"]};
  font-size: 12px;
  margin-top: 0;
`;

const StyledInputField = styled.input(
  () => css`
    border-style: solid;
    border-radius: 8px;
    border-width: 2px;
    min-width: 400px;
    padding: 12px;
    box-sizing: border-box;
    border-color: ${theme.colors["grey-1"]};
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights.semibold};
    font-size: 18px;
    color: ${theme.colors["grey-2"]};

    &[type="file"] {
      cursor: pointer;
    }

    &[type="file"]::file-selector-button {
      display: none;
    }

    &:focus {
      outline: none;
      border-color: ${theme.colors["blue-2"]};
    }
  `
);

interface InputProps {
  title: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  info?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  title,
  type,
  placeholder,
  info,
  required,
  onChange,
}: InputProps): JSX.Element => {
  return (
    <Stack direction="column" spacing={-2}>
      <StyledInputTitle>{title}</StyledInputTitle>
      {info && (
        <Stack direction="row" spacing={8}>
          <Icon name="info" color="grey-0" size="extra-small" />
          <StyledInputInfo>{info}</StyledInputInfo>
        </Stack>
      )}
      <StyledInputField
        type={type}
        placeholder={placeholder}
        spellCheck={false}
        autoComplete="off"
        required={required}
        onChange={onChange}
      ></StyledInputField>
    </Stack>
  );
};

export { Input };
export type { InputProps };
