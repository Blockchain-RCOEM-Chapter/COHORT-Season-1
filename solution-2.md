
# Contract Address
0xE711045A6496ddA84f2929771F536E977c9590E7

# Transaction Address
0xbb58a762c33836fbbdb43c0c0d71cf4e1137fd7f8763e123b36b4f0ed7eca2ad
# Smart contrct
pragma solidity ^0.8.7;
// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract FeeCollector { // 
    address public owner;
    uint256 public balance;
    
    constructor() {
        owner = msg.sender; // store information who deployed contract
    }
    
    receive() payable external {
        balance += msg.value; // keep track of balance (in WEI)
    }
    
    
    function withdraw(uint amount, address payable destAddr) public {
        require(msg.sender == owner, "Only owner can withdraw");
        require(amount <= balance, "Insufficient funds");
        
        destAddr.transfer(amount); // send funds to given address
        balance -= amount;
    }
}
