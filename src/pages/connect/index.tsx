import styled from "styled-components";

import { NextPage } from "next";
import { MainContainer } from "../../components/MainContainer";
import { Navbar } from "../../components/Navbar";
import { Button } from "../../components/Button";
import { useState } from "react";
import { ethers } from "ethers";
import { Card } from "../../components/Card";

declare const window: any;

const Flex = styled.div`
  display: flex;
`;

const Connect: NextPage = () => {
  const [balance, setBalance] = useState("");

  const getDetails = async () => {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(account);

    setBalance(ethers.utils.formatEther(balance));
  };

  return (
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
          style={{
            height: "max-content",
            width: "45%",
            flexDirection: "column",
          }}
        >
          <Card
            backgroundColor="grey-1"
            children={balance ? "Balance: " + balance + " ETH" : "Balance:"}
          />
          <Button children="Show my balance!" onClick={() => getDetails()} />
        </Flex>
      </Flex>
    </MainContainer>
  );
};

export default Connect;
