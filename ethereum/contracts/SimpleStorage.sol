pragma solidity >=0.4.16 <0.7.0;

contract SimpleStorage {
    
    mapping(bytes32 => string) public files;

    function set(bytes32 file_name,string memory text) public {
         files[file_name] = text;
    }

    function get(bytes32 file_name) public view returns ( string memory) {
        return files[file_name];
    }
}