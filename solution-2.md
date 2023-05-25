smart contract code:--

// SPDX-License-Identifier: MIT

pragma solidity ^0.7.0;

contract currency
{
    int coins;

 constructor(){
    coins = 1;
    }

function showCoins() view public returns(int)
{
    return coins ;
}

function addCoins(int noc) public 
{
    coins = coins + noc;
}

function subtractCoins(int noc) public 
{
    coins = coins - noc;
}

}


|Transaction hash| 0x2c92831faa5d5fd708fc1e04470850b07a733782c7cbc72a68bb55bce63cf3db |
|-------|--------|
|Contract address| 0x169C02FaFEF5322d78498c64e5832A28888003C4 | 
