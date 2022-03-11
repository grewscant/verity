import styled from "styled-components";

const MainContainer = styled.div(
  ({ theme }) => `
    width: 100vw;
    height: 100vh;
    background-color: ${theme.colors["purple-0"]};
  `
);

export { MainContainer };
