import styled from "styled-components";

import { NextPage } from "next";
import { MainContainer } from "../../components/MainContainer";
import { Navbar } from "../../components/Navbar";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

const Flex = styled.div`
  display: flex;
`;

const Create: NextPage = () => (
  <MainContainer>
    <Navbar title="V" />
    <Flex
      style={{
        height: "70%",
        justifyContent: "center",
        alignItems: "center",
        padding: "48px",
      }}
    >
      <Flex
        style={{ height: "max-content", width: "45%", flexDirection: "column" }}
      >
        <Input title="Brand" />
        <Input title="Sneaker Model" />
        <Input title="Serial Number" />
        <Button children="Create my NFT!" />
      </Flex>
    </Flex>
  </MainContainer>
);

export default Create;
