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
  flexdirection: column;
`;

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
      {Array(totalMinted + 1)
        .fill(0)
        .map((_, i) => (
          <Flex key={i}>
            <NFT tokenId={i} getCount={getCount} />
          </Flex>
        ))}
    </MainContainer>
  );
};

function NFT({ tokenId, getCount }: { tokenId: number; getCount: () => void }) {
  const contentId = "QmVWJUKeifmxGdBmFdxZVgF5hy2ZEE1uWeLBZzCMGGBJWU";
  const metadataURI = `${contentId}/${tokenId}.json`;
  const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.png`;
  //const imageURI = `../../../out/${tokenId}.png`;

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
      value: ethers.utils.parseEther("0.05"),
    });

    await result.wait();
    getMintedStatus();
    getCount();
  };

  async function getURI() {
    const uri = await contract.tokenURI(tokenId);
    alert(uri);
  }

  return (
    <Flex>
      <img src={isMinted ? imageURI : "img/placeholder.png"}></img>
      <Flex>
        <h5>ID #{tokenId}</h5>
        {!isMinted ? (
          <Button onClick={mintToken}>Mint</Button>
        ) : (
          <Button onClick={getURI}>Taken! Show URI</Button>
        )}
      </Flex>
    </Flex>
  );
}

export default Explore;
