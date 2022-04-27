//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

/**  

  _  ___      _           ____               
 | |/ (_) ___| | __ ____ |  _ \ __ _ ___ ___ 
 | ' /| |/ __| |/ /|_  / | |_) / _` / __/ __|
 | . \| | (__|   <  / /  |  __/ (_| \__ \__ \
 |_|\_\_|\___|_|\_\/___| |_|   \__,_|___/___/
                                             

**/

/// @author NFTprest (https://twitter.com/NFTprest)

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/ReentrancyGuard.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/cryptography/MerkleProof.sol";

contract KickzPassGenesis is ERC1155, Ownable, ReentrancyGuard {
    
  string public constant name = "Kickz Pass Genesis";
  string public constant symbol = "KPG";

  uint private constant MAX_SUPPLY = 250;
  uint private constant PASS_ID = 1;

  uint public passCount = 0;
  
  bool public isMintOpen = false;

  //TODO: Update for production 
  bytes32 public merkleRoot = 0xb273f668854fc22a03370abfa36c32b2db9837d8364b79c3b773328809e4bbfa;

  mapping(address => uint) public mintCount;

  constructor() ERC1155("ipfs://QmSvvYeC9rg9eb8iLV2gSuJX5T6YpYAyGnjrS8A4xmufJE/metadata.json") {}


  function whiteListMint(bytes32[] calldata merkleProof) external nonReentrant{
    require(passCount < MAX_SUPPLY, "Sold out");
    require(mintCount[msg.sender] < 1, "At mint limit");
    require(MerkleProof.verify(merkleProof, merkleRoot,keccak256(abi.encodePacked(msg.sender))), "Proof invalid");
    require(isMintOpen, "Mint not open");

    mintCount[msg.sender]++;
    passCount++;
    _mint(msg.sender, PASS_ID, 1, "");
  }
  
  function setMintOpen() external onlyOwner{
    isMintOpen = !isMintOpen;
  }

  function setMerkleRoot(bytes32 _merkleRoot) external onlyOwner{
    merkleRoot = _merkleRoot;
  }

  function ownerMint(address to, uint amount) external onlyOwner {
    require(passCount + amount <= MAX_SUPPLY, "Sold out");
    passCount += amount;
    _mint(to, PASS_ID, amount, "");
  }

  function setURI(string memory uri) external onlyOwner {
    _setURI(uri);
  }

  function totalSupply() external view returns (uint256) {
    return passCount;
  }
}
