// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import"@openzeppelin/contracts/token/ERC20/ERC20.sol" ;


contract MyToken is ERC20 {
  constructor(uint initialSupply) ERC20("MyToken", "TokenID") {
    _mint(msg.sender, initialSupply);
  }
}







Contract Address: https://mumbai.polygonscan.com/address/0x44d149B58b500a3F1fb97a9E080A77111D6A0871/contracts
Transaction Hash: 0x3736e69153a054ab54b66616e43060f678e8c0b19d92ca51a7552259c6228285
