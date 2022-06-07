import { expect } from "chai";
import { ethers, network, upgrades } from "hardhat";
// @ts-ignore
import { 
  Box,
  Box__factory,
  BoxV1,
  BoxV1__factory
} from "../types/index";

import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("Proxy Contract", function () {
  let instance: any;
  let upgraded: any;
  let owner: SignerWithAddress;
  let bob: SignerWithAddress;

  beforeEach(async () => {
    // Get the list of accounts
    [owner, bob] = await ethers.getSigners();

    const Box = await ethers.getContractFactory("Box");
    const BoxV1 = await ethers.getContractFactory("BoxV1");

    instance = await upgrades.deployProxy(Box, [42]);
    upgraded = await upgrades.upgradeProxy(instance.address, BoxV1);
  });

  context("Proxy", async () => {
    it("Should be able to inc upgraded contract", async function () {
      await upgraded.inc(5);

      expect(await upgraded.x()).to.be.equal(47);
    });
  })

});