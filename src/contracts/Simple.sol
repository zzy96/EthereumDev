// solc --bin --abi Simple.sol
pragma solidity ^0.5.4;

contract Simple {
  uint256 storedData;

  event valueSet(uint256 _value);

  constructor(uint256 _initVal) public {
    storedData = _initVal;
  }

  function set(uint256 _x) public {
    storedData = _x;
    emit valueSet(_x);
  }

  function get() public view returns (uint256) {
    return storedData;
  }
}