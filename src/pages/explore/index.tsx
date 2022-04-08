import styled from "styled-components";

import { NextPage } from "next";
import { MainContainer } from "../../components/MainContainer";
import { Navbar } from "../../components/Navbar";
import { Button } from "../../components/Button";

import { ethers } from "ethers";
import { useState, useEffect } from "react";
import Verinfts from "../../../artifacts/contracts/Verinft.sol/Verinft.json";

declare const window: any;

const Flex = styled.div`
  display: flex;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-auto-flow: row;
  grid-gap: 10px;
  padding: 10px;
`;

const Heading = styled.h1(
  ({ theme }) => `
    color: ${theme.colors["grey-1"]}
  `
);

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const provider = new ethers.providers.Web3Provider(window.ethereum);

const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, Verinfts.abi, signer);

const Explore: NextPage = () => {
  const [totalMinted, setTotalMinted] = useState(0);

  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const count = await contract.count();

    setTotalMinted(parseInt(count));
  };

  return (
    <MainContainer>
      <Navbar title="V" />
      <Flex
        style={{
          paddingLeft: "7%",
        }}
      >
        <Grid>
          {Array(totalMinted + 1)
            .fill(0)
            .map((_, i) => (
              <Flex key={i}>
                <NFT tokenId={i + 1} getCount={getCount} />
              </Flex>
            ))}
        </Grid>
      </Flex>
    </MainContainer>
  );
};

function NFT({ tokenId, getCount }: { tokenId: number; getCount: () => void }) {
  const contentId = "QmVWJUKeifmxGdBmFdxZVgF5hy2ZEE1uWeLBZzCMGGBJWU";
  const metadataURI = `${contentId}/${tokenId}.json`;
  //const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.png`;
  const imageURI = `/${tokenId}.png`;

  const [isMinted, setIsMinted] = useState(false);

  useEffect(() => {
    getMintedStatus();
  }, [isMinted]);

  const getMintedStatus = async () => {
    const result = await contract.isContentOwned(metadataURI);
    setIsMinted(result);
  };

  const mintToken = async () => {
    const conn = contract.connect(signer);
    const addr = conn.address;

    const result = await contract.payToMint(addr, metadataURI, {
      value: ethers.utils.parseEther("50"),
    });

    await result.wait();
    getMintedStatus();
    getCount();
  };

  async function getURI() {
    const uri = await contract.tokenURI(tokenId);
    console.log(uri);

    alert(uri);
  }

  return (
    <Flex
      style={{
        flexDirection: "column",
        height: "max-content",
        width: "max-content",
        paddingLeft: "10px",
      }}
    >
      <Flex
        style={{
          flexDirection: "row",
          height: "max-content",
          width: "max-content",
          paddingLeft: "10px",
        }}
      >
        <Heading
          style={{
            paddingTop: "20px",
            paddingRight: "20px",
          }}
        >
          Token ID #{tokenId}
        </Heading>
        {!isMinted ? (
          <Button onClick={mintToken}> ✨ Mint an NFT!</Button>
        ) : (
          <Button onClick={getURI} disabled={true} cursor="not-allowed">
            ✅ NFT Taken!
          </Button>
        )}
      </Flex>
      <img
        style={{ width: "900px" }}
        src={
          isMinted
            ? imageURI
            : //"https://gateway.pinata.cloud/ipfs/QmWFbzxwi9k7ZXGWnrcYYQYamcTUkgjUYi7jZbQoUT4Ybw/placeholder.png"
              "/placeholder.png"
        }
      />
    </Flex>
  );
}

export default Explore;
