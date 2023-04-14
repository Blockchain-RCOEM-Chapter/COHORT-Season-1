## Solution Code
#### // SPDX-License-Identifier: MIT
#### pragma solidity  ^0.8.0;

#### import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

#### contract ShivMoney is ERC20 {
####    constructor( ) ERC20("ShivMoney","SM"){
####        _mint(msg.sender,20*10**decimals());
####    }
#### } 

## Contract Details
![image](https://user-images.githubusercontent.com/102198997/232037710-a8bc62f2-b44d-4a51-8ab3-41742fcafbc9.png)


##### | transaction hash  | "0x0647f54688ca34de9b97a20cbd14aa9cddaf865b54e8c87194b5b5e78e58156f"  |
##### | contract          | "0x69Fe027c70231796965993a6b3B9fad99Fdf8222"                          |
