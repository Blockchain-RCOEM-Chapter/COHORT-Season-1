// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract SimpleSmartContract {
    address public owner;
    uint256 public value;

    constructor() {
        owner = msg.sender;
        value = 0;
    }

    function deposit() public payable {
        require(msg.sender == owner, "Only the owner can deposit.");
        value += msg.value;
    }

    function withdraw(uint256 amount) public {
        require(msg.sender == owner, "Only the owner can withdraw.");
        require(amount <= value, "Insufficient balance.");
        value -= amount;
        payable(msg.sender).transfer(amount);
    }
}

# Contract Address
https://mumbai.polygonscan.com/address/0x3eF6FcE293fBD374Ce336042F66D3E6820E9702E

# Transaction Address
https://mumbai.polygonscan.com/tx/0x2ac4975695e1ac73968be9fc6afa43ac74a7bf85dca888d6b01c12d06ab17908

