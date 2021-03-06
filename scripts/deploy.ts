import { ethers, upgrades } from 'hardhat';

async function main() {
  const Box = await ethers.getContractFactory("Box");
  const BoxV1 = await ethers.getContractFactory("BoxV1");

  const box = await upgrades.deployProxy(Box, [42], {
    initializer: "initialize"
  });

  await box.deployed();

  console.log("Box deployed to:" + box.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });