pragma solidity >=0.4.16 <0.7.0;

contract SimpleStorage {
    
    mapping(uint => bytes32) public files;

    function set(uint file_name,string memory text) public {
         files[file_name] = keccak256(abi.encodePacked(text));
    }

    function get(uint file_name) public view returns (bytes32) {
        return files[file_name];
    }
}