// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
//import dependencies
import "@openzeppelin/contracts@4.4.2/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts@4.4.2/access/Ownable.sol";
//Contract implements the ERC1155 NFT standard
contract KickzPassGenesis is ERC1155, Ownable {
//Initializes the URI for the NFT
constructor() ERC1155("") {

}
//initializing state variables
uint256 public mintRate = 0.0 ether;
uint256 public minted = 0;
uint256 public supplies = 250;
address dev_account = 0x84aE2f756110352B432977d424beD9E22313fbA3;
//Setting the URI for IPFS integration
function setURI(string memory newuri) public onlyOwner {
_setURI(newuri);
}
//to mint an NFT
function mint(uint256 id, uint256 amount) payable public {
uint256 pastmint;
pastmint = balanceOf(msg.sender, 1);
if(msg.sender == dev_account) {
    //security requirements for dev address
    require(amount == 5);
    require(pastmint == 0, "You've maxed out the amount of tokens you can mint");
    require(id == 1, "Token doesn't exist");
    require(msg.value >= (amount * mintRate), "Not enough ether sent");
    require(minted + amount <= supplies, "not enough supply left");
    _mint(msg.sender, id, amount, "");
    minted = minted + amount;

}
if(msg.sender != dev_account) {
    //security requirements for other addresses
    require(amount == 1);
    require(pastmint == 0, "You've maxed out the amount of tokens you can mint");
    require(id == 1, "Token doesn't exist");
    require(msg.value >= (amount * mintRate), "Not enough ether sent");
    require(minted + amount <= supplies, "not enough supply left");
    _mint(msg.sender, id, amount, "");
    minted = minted + amount;
}

}
}
