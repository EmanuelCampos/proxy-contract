// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./Box.sol";

contract BoxV1 is Box {

    function inc(uint256 x_) public {
       x += x_;
    }
}
