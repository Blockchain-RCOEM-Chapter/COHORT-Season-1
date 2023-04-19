// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// ERC -Ethereum Request for Comment
// ERC721 Tokens
// - balanceOf
// - ownerOf
// - safeTransferFrom
// - safeTransferFrom (with data parameter)
// - transferFrom
// - approve

contract JD_NFT is ERC721 {
    constructor() ERC721("JD_NFT", "JNFT") {}


    function mint(address to, uint256 tokenid) public {
        _mint(to, tokenid);
    }

    function burn(uint256 tokenid) public {
        _burn(tokenid);
    }
}