import styled from "styled-components";
import type { NextPage } from "next";
import Image from "next/image";

import { MainContainer } from "../components/MainContainer";
import { Navbar } from "../components/Navbar";

const Flex = styled.div`
  display: flex;
`;

const Heading = styled.h1(
  ({ theme }) => `
    margin: 0;
    width: 600px;
    font-weight: ${theme.fontWeights.extrabold};
    font-size: 72px;
    line-height: 72px;
  `
);

const SubHeading = styled.h3(
  ({ theme }) => `
    margin: 0;
    margin-top: 20px;
    width: 800px;
    font-weight: ${theme.fontWeights.semibold};
    font-size: 52px;
    line-height: 55px;
  `
);

const Home: NextPage = () => {
  return (
    <MainContainer>
      <Navbar title="V" />
      <Flex
        style={{
          height: "70%",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "48px",
        }}
      >
        <Flex style={{ height: "max-content", flexDirection: "column" }}>
          <Heading>Sneaker buying Re-invented</Heading>
          <SubHeading>
            Verity allows you to buy sneakers as ERC721 NFT-tokens with $ETH{" "}
          </SubHeading>
        </Flex>
        <Image
          src="/homepage-shoe.png"
          alt="Nike Air Jordan"
          width={1000}
          height={600}
        />
      </Flex>
    </MainContainer>
  );
};

export default Home;
