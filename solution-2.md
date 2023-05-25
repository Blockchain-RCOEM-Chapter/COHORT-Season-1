# CODE Of Solidity
```js
SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract MyDApp {
    mapping(address => uint256) public balances;

    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor() {
        balances[msg.sender] = 1000;
    }

    function transfer(address to, uint256 value) external {
        require(balances[msg.sender] >= value, "Insufficient balance");
        balances[msg.sender] -= value;
        balances[to] += value;
        emit Transfer(msg.sender, to, value);
    }
}
```

# The Necessary Information For The Submission

| Transaction Hash |  0xf2d26f198cea3094aa4ca75963d576c8f080ac5a982ad3f1942e2f8d635d5fca |
| --- | --- |
|Contact Address | 0xc4c7f08aa19b57405770832fd6b8306df20d245c |
