import styled from "styled-components";

import { IconProps } from "./Icon";

export const Container = styled.div`
  display: inline-block;
  height: ${(props: IconProps) => getSize(props.size)};
  width: ${(props: IconProps) => getSize(props.size)};

  svg {
    height: ${(props: IconProps) => getSize(props.size)};
    width: ${(props: IconProps) => getSize(props.size)};

    ${({ theme, color }) => color && `color: ${theme.colors[color]}`};
  }
`;

const getSize = (size: string) => {
  switch (size) {
    case "extra-small":
      return "16px";
    case "small":
      return "20px";
    case "medium":
      return "24px";
    case "large":
      return "40px";
    case "extra-large":
      return "64px";
    default:
      return "20px";
  }
};
