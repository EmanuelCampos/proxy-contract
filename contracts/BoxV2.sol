// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./BoxV1.sol";

contract BoxV2 is BoxV1 {

    function sub(uint256 x_) public {
       x -= x_;
    }
}
