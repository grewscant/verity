const hre = require("hardhat");

async function main() {
  const Verinft = await hre.ethers.getContractFactory("Verinft");
  const verinft = await Verinft.deploy();

  await verinft.deployed();

  console.log("Verinft deployed to:", verinft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })