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

