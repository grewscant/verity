const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Verinft", function () {
  it("Should return the new verinft once it's changed", async function () {
    const Verinft = await ethers.getContractFactory("Verinft");
    const verinft = await Verinft.deploy();
    await verinft.deployed();

    const recipient = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
    const metadataURI = "cid/test.png";

    let balance = await verinft.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newlyMintedToken = await verinft.payToMint(recipient, metadataURI, {
      value: ethers.utils.parseEther("0.05"),
    });

    await newlyMintedToken.wait();

    balance = await verinft.balanceOf(recipient);
    expect(balance).to.equal(1);

    expect(await verinft.isContentOwned(metadataURI)).to.equal(true);
  });
});
