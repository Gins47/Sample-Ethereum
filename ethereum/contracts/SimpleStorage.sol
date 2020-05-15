pragma solidity >=0.4.16 <0.7.0;

contract SimpleStorage {
    
    mapping(bytes32 => bytes32) public files;

    function set(bytes32 file_name,string memory text) public {
         files[file_name] = keccak256(abi.encodePacked(text));
    }

    function get(bytes32 file_name) public view returns (bytes32) {
        return files[file_name];
    }
}