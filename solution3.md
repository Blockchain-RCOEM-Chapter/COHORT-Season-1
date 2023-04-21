Code - 
// SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyERC721 is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("MyERC721", "MYNFT") {}

    function mint(address recipient) public returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        return newItemId;
    }
}

#Contract_Adress - https://mumbai.polygonscan.com/address/0xd9145CCE52D386f254917e481eB44e9943F39138/contracts
Transaction_Adress- https://mumbai.polygonscan.com/tx/0x8537a1d301cb05b26db078d19622b43bb35496a55549f3843ea9e35f4d5c4145

