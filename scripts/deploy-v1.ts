import { ethers, upgrades } from 'hardhat';

const PROXY = "0x8f4a1D57EBa05B0763419A881055F462B1C15711"

async function main() {

  const BoxV1 = await ethers.getContractFactory("BoxV1");

  const box = await upgrades.upgradeProxy(PROXY, BoxV1);

  await box.deployed();

  console.log("Boxv1 deployed to:" + box.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });