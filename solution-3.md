## Solution Code
#### // SPDX-License-Identifier: MIT
#### pragma solidity  ^0.8.0;

#### import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

#### contract ShivMoney is ERC20 {
####    constructor( ) ERC20("ShivMoney","SM"){
####        _mint(msg.sender,20*10**decimals());
####    }
#### } 
