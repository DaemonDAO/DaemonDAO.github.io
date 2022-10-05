/*     +%%#-                           ##.        =+.    .+#%#+:       *%%#:    .**+-      =+
 *   .%@@*#*:                          @@: *%-   #%*=  .*@@=.  =%.   .%@@*%*   +@@=+=%   .%##
 *  .%@@- -=+                         *@% :@@-  #@=#  -@@*     +@-  :@@@: ==* -%%. ***   #@=*
 *  %@@:  -.*  :.                    +@@-.#@#  =@%#.   :.     -@*  :@@@.  -:# .%. *@#   *@#*
 * *%@-   +++ +@#.-- .*%*. .#@@*@#  %@@%*#@@: .@@=-.         -%-   #%@:   +*-   =*@*   -@%=:
 * @@%   =##  +@@#-..%%:%.-@@=-@@+  ..   +@%  #@#*+@:      .*=     @@%   =#*   -*. +#. %@#+*@
 * @@#  +@*   #@#  +@@. -+@@+#*@% =#:    #@= :@@-.%#      -=.  :   @@# .*@*  =@=  :*@:=@@-:@+
 * -#%+@#-  :@#@@+%++@*@*:=%+..%%#=      *@  *@++##.    =%@%@%%#-  =#%+@#-   :*+**+=: %%++%*
 *
 * @title: tinydaemons.js
 * @author: Max Flow O2 -> @MaxFlowO2 on bird app/GitHub
 * @notice: web3.js file for tinydaemons.html
 */

"use strict";
// Constants used for JS/web3 crap later
const AVAX_M = 43114;
const AVAX_T = 43113;
const BNB_M = 56;
const BNB_T = 97;
const ETH_M = 1;
const ETH_T = 4;
const FTM_M = 250;
const FTM_T = 4002;
const MATIC_M = 137;
const MATIC_T = 80001;
const OP_M = 10;
const OP_T = 69;

// Constants for web3
const AVAX_TESTCA = "0x9CBD8Ea530436bbE6Ef581f2156D619479055D41";
const BNB_TESTCA = "0x9CBD8Ea530436bbE6Ef581f2156D619479055D41";
const ETH_TESTCA = "0xcC0573BB57cf1F789A7c9Be70D81e3Af9DeD1BB8";
const FTM_TESTCA = "0x9CBD8Ea530436bbE6Ef581f2156D619479055D41";
const MATIC_TESTCA = "0x27746bEfd385661dA4Bb0FfEAa141CfD4E50F616";
const OP_TESTCA = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";
const AVAX_MAINCA = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";
const BNB_MAINCA = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";
const ETH_MAINCA = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";
const FTM_MAINCA = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";
const MATIC_MAINCA = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";
const OP_MAINCA = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";

// lz endpoints current as of 27 July 2022
const AVAX_EPMAIN = "0x3c2269811836af69497E5F486A85D7316753cf62";
const AVAX_EPTEST = "0x93f54D755A063cE7bB9e6Ac47Eccc8e33411d706";
const BNB_EPMAIN = "0x3c2269811836af69497E5F486A85D7316753cf62";
const BNB_EPTEST = "0x6Fcb97553D41516Cb228ac03FdC8B9a0a9df04A1";
const ETH_EPMAIN = "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675";
const ETH_EPTEST = "0x79a63d6d8BBD5c6dfc774dA79bCcD948EAcb53FA";
const FTM_EPMAIN = "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7";
const FTM_EPTEST = "0x7dcAD72640F835B0FA36EFD3D6d3ec902C7E5acf";
const MATIC_EPMAIN = "0x3c2269811836af69497E5F486A85D7316753cf62";
const MATIC_EPTEST = "0xf69186dfBa60DdB133E91E9A4B5673624293d8F8";
const OP_EPMAIN = "0x3c2269811836af69497E5F486A85D7316753cf62";
const OP_EPTEST = "0x72aB53a133b27Fa428ca7Dc263080807AfEc91b5"

// the ABI's
const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"reason","type":"string"}],"name":"MaxSplaining","type":"error"},{"inputs":[{"internalType":"string","name":"reason","type":"string"}],"name":"MaxSplaining","type":"error"},{"inputs":[{"internalType":"string","name":"reason","type":"string"}],"name":"MaxSplaining","type":"error"},{"inputs":[{"internalType":"string","name":"reason","type":"string"}],"name":"MaxSplaining","type":"error"},{"inputs":[{"internalType":"uint256","name":"yourTime","type":"uint256"},{"internalType":"uint256","name":"hitTime","type":"uint256"}],"name":"TooLateBoomer","type":"error"},{"inputs":[{"internalType":"uint256","name":"yourTime","type":"uint256"},{"internalType":"uint256","name":"hitTime","type":"uint256"}],"name":"TooSoonJunior","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_old","type":"string"},{"indexed":false,"internalType":"string","name":"_new","type":"string"}],"name":"ContractURIChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"_srcAddress","type":"bytes"},{"indexed":false,"internalType":"uint64","name":"_nonce","type":"uint64"},{"indexed":false,"internalType":"bytes","name":"_payload","type":"bytes"}],"name":"MessageFailed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"PayeeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"PayeeRemoved","type":"event"},{"anonymous":false,"inputs":[],"name":"PayeesReset","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"length","type":"uint256"}],"name":"PresaleSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"numberToMint","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startingID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endingID","type":"uint256"}],"name":"SetStartNumbers","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ThankYou","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"_chainId","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"_trustedRemote","type":"bytes"}],"name":"TrustedRemoteSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_old","type":"string"},{"indexed":false,"internalType":"string","name":"_new","type":"string"}],"name":"UpdatedBaseURI","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"}],"name":"royalatiesSet","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"RevealProvenanceImages","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RevealProvenanceJSON","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RevealStartNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newSplit","type":"address"},{"internalType":"uint256","name":"newShares","type":"uint256"}],"name":"addSplit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearRoyalties","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearSplits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentLZGas","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"declineDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"declineOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"developer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"donate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"failedMessages","outputs":[{"internalType":"uint256","name":"payloadLength","type":"uint256"},{"internalType":"bytes32","name":"payloadHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"internalType":"bytes","name":"_srcAddress","type":"bytes"},{"internalType":"uint64","name":"_nonce","type":"uint64"},{"internalType":"bytes","name":"_payload","type":"bytes"}],"name":"lzReceive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lzStartNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterCurrentMints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterMaximumCapacity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterMaximumTeamMints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterMintsRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterTeamMintsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterTeamMintsRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"internalType":"bytes","name":"_srcAddress","type":"bytes"},{"internalType":"uint64","name":"_nonce","type":"uint64"},{"internalType":"bytes","name":"_payload","type":"bytes"}],"name":"onLzReceive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"payee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"quant","type":"uint256"}],"name":"presaleMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"publicMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newDeveloper","type":"address"}],"name":"pushDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"pushOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"released","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"remSplit","type":"address"}],"name":"removeSplit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"internalType":"bytes","name":"_srcAddress","type":"bytes"},{"internalType":"uint64","name":"_nonce","type":"uint64"},{"internalType":"bytes","name":"_payload","type":"bytes"}],"name":"retryMessage","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"royaltyAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_base","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"URI","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newDisplay","type":"address"}],"name":"setDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newVal","type":"uint256"}],"name":"setGasForDestinationLzReceive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"startNumber","type":"uint256"},{"internalType":"uint256","name":"authMint","type":"uint256"},{"internalType":"uint256","name":"teamMints","type":"uint256"},{"internalType":"string","name":"img","type":"string"},{"internalType":"string","name":"json","type":"string"},{"internalType":"address","name":"newAddress","type":"address"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newDisplay","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"}],"name":"setPresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"},{"internalType":"uint256","name":"permille","type":"uint256"}],"name":"setRoyalties","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"permille","type":"uint256"}],"name":"setRoyaltiesThis","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_chainId","type":"uint16"},{"internalType":"bytes","name":"_trustedRemote","type":"bytes"}],"name":"setTrustedRemote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"shares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"showPresaleStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"showPresaleTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"showStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"teamMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReleased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newDeveloper","type":"address"}],"name":"transferDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_chainId","type":"uint16"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"traverseChains","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"}],"name":"trustedRemoteLookup","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
const ENDPOINT = [{"inputs":[{"internalType":"uint16","name":"_chainId","type":"uint16"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"version","type":"uint16"}],"name":"DefaultReceiveVersionSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"version","type":"uint16"}],"name":"DefaultSendVersionSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"version","type":"uint16"}],"name":"NewLibraryVersionAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"srcChainId","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"srcAddress","type":"bytes"},{"indexed":false,"internalType":"uint64","name":"nonce","type":"uint64"},{"indexed":false,"internalType":"address","name":"dstAddress","type":"address"}],"name":"PayloadCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"srcChainId","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"srcAddress","type":"bytes"},{"indexed":false,"internalType":"address","name":"dstAddress","type":"address"},{"indexed":false,"internalType":"uint64","name":"nonce","type":"uint64"},{"indexed":false,"internalType":"bytes","name":"payload","type":"bytes"},{"indexed":false,"internalType":"bytes","name":"reason","type":"bytes"}],"name":"PayloadStored","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"chainId","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"srcAddress","type":"bytes"}],"name":"UaForceResumeReceive","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"ua","type":"address"},{"indexed":false,"internalType":"uint16","name":"version","type":"uint16"}],"name":"UaReceiveVersionSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"ua","type":"address"},{"indexed":false,"internalType":"uint16","name":"version","type":"uint16"}],"name":"UaSendVersionSet","type":"event"},{"inputs":[],"name":"BLOCK_VERSION","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_VERSION","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"chainId","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defaultReceiveLibraryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defaultReceiveVersion","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defaultSendLibrary","outputs":[{"internalType":"contract ILayerZeroMessagingLibrary","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defaultSendVersion","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_dstChainId","type":"uint16"},{"internalType":"address","name":"_userApplication","type":"address"},{"internalType":"bytes","name":"_payload","type":"bytes"},{"internalType":"bool","name":"_payInZRO","type":"bool"},{"internalType":"bytes","name":"_adapterParams","type":"bytes"}],"name":"estimateFees","outputs":[{"internalType":"uint256","name":"nativeFee","type":"uint256"},{"internalType":"uint256","name":"zroFee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"internalType":"bytes","name":"_srcAddress","type":"bytes"}],"name":"forceResumeReceive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_version","type":"uint16"},{"internalType":"uint16","name":"_chainId","type":"uint16"},{"internalType":"address","name":"_userApplication","type":"address"},{"internalType":"uint256","name":"_configType","type":"uint256"}],"name":"getConfig","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"internalType":"bytes","name":"_srcAddress","type":"bytes"}],"name":"getInboundNonce","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_dstChainId","type":"uint16"},{"internalType":"address","name":"_srcAddress","type":"address"}],"name":"getOutboundNonce","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userApplication","type":"address"}],"name":"getReceiveLibraryAddress","outputs":[{"internalType":"address","name":"receiveLibraryAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userApplication","type":"address"}],"name":"getReceiveVersion","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userApplication","type":"address"}],"name":"getSendLibraryAddress","outputs":[{"internalType":"address","name":"sendLibraryAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userApplication","type":"address"}],"name":"getSendVersion","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"internalType":"bytes","name":"_srcAddress","type":"bytes"}],"name":"hasStoredPayload","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"inboundNonce","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isReceivingPayload","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isSendingPayload","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestVersion","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"}],"name":"libraryLookup","outputs":[{"internalType":"contract ILayerZeroMessagingLibrary","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newLayerZeroLibraryAddress","type":"address"}],"name":"newVersion","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"address","name":"","type":"address"}],"name":"outboundNonce","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"internalType":"bytes","name":"_srcAddress","type":"bytes"},{"internalType":"address","name":"_dstAddress","type":"address"},{"internalType":"uint64","name":"_nonce","type":"uint64"},{"internalType":"uint256","name":"_gasLimit","type":"uint256"},{"internalType":"bytes","name":"_payload","type":"bytes"}],"name":"receivePayload","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"internalType":"bytes","name":"_srcAddress","type":"bytes"},{"internalType":"bytes","name":"_payload","type":"bytes"}],"name":"retryPayload","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_dstChainId","type":"uint16"},{"internalType":"bytes","name":"_destination","type":"bytes"},{"internalType":"bytes","name":"_payload","type":"bytes"},{"internalType":"address payable","name":"_refundAddress","type":"address"},{"internalType":"address","name":"_zroPaymentAddress","type":"address"},{"internalType":"bytes","name":"_adapterParams","type":"bytes"}],"name":"send","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_version","type":"uint16"},{"internalType":"uint16","name":"_chainId","type":"uint16"},{"internalType":"uint256","name":"_configType","type":"uint256"},{"internalType":"bytes","name":"_config","type":"bytes"}],"name":"setConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_newDefaultReceiveVersion","type":"uint16"}],"name":"setDefaultReceiveVersion","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_newDefaultSendVersion","type":"uint16"}],"name":"setDefaultSendVersion","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_newVersion","type":"uint16"}],"name":"setReceiveVersion","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_newVersion","type":"uint16"}],"name":"setSendVersion","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"storedPayload","outputs":[{"internalType":"uint64","name":"payloadLength","type":"uint64"},{"internalType":"address","name":"dstAddress","type":"address"},{"internalType":"bytes32","name":"payloadHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"uaConfigLookup","outputs":[{"internalType":"uint16","name":"sendVersion","type":"uint16"},{"internalType":"uint16","name":"receiveVersion","type":"uint16"},{"internalType":"address","name":"receiveLibraryAddress","type":"address"},{"internalType":"contract ILayerZeroMessagingLibrary","name":"sendLibrary","type":"address"}],"stateMutability":"view","type":"function"}];

// Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider;

// Add's networks to metamask
async function addNetwork(id) {
  let networkData;
  switch (id) {
    // OP Test-G
    case 420:
      networkData = [
        {
          chainId: "0x1A4",
          chainName: "Optimism Goerli",
          rpcUrls: ["https://goerli.optimism.io"],
          nativeCurrency: {
            name: "Optimism ETH",
            symbol: "oETH",
            decimals: 18,
          },
          blockExplorerUrls: ["https://blockscout.com/optimism/goerli"],
        },
      ];
      break;
    // OP Test-K
    case 69:
      networkData = [
        {
          chainId: "0x45",
          chainName: "Optimism Kovan",
          rpcUrls: ["https://kovan.optimism.io"],
          nativeCurrency: {
            name: "Optimism ETH",
            symbol: "oETH",
            decimals: 18,
          },
          blockExplorerUrls: ["https://kovan-optimistic.etherscan.io"],
        },
      ];
      break;
    // OP main
    case 10:
      networkData = [
        {
          chainId: "0xA",
          chainName: "Optimism",
          rpcUrls: ["https://mainnet.optimism.io"],
          nativeCurrency: {
            name: "Optimism ETH",
            symbol: "oETH",
            decimals: 18,
          },
          blockExplorerUrls: ["https://optimistic.etherscan.io/"],
        },
      ];
      break;
    //AVAX-C
    case 43114:
      networkData = [
        {
          chainId: "0xA86A",
          chainName: "Avalanche C-Chain",
          rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
          nativeCurrency: {
            name: "Avalanche",
            symbol: "AVAX",
            decimals: 18,
          },
          blockExplorerUrls: ["https://snowtrace.io"],
        },
      ];
      break;
    //AVAX-C-testnet
    case 43113:
      networkData = [
        {
          chainId: "0xA869",
          chainName: "FUJI (Avalanche)",
          rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
          nativeCurrency: {
            name: "Avalanche",
            symbol: "AVAX",
            decimals: 18,
          },
          blockExplorerUrls: ["https://testnet.snowtrace.io"],
        },
      ];
      break;
    //BNB
    case 56:
      networkData = [
        {
          chainId: "0x38",
          chainName: "Binance Scam Chain",
          rpcUrls: ["https://bsc-dataseed.binance.org/"],
          nativeCurrency: {
            name: "Binance",
            symbol: "BNB",
            decimals: 18,
          },
          blockExplorerUrls: ["https://bscscan.com"],
        },
      ];
      break;
    //BNB Testnet
    case 97:
      networkData = [
        {
          chainId: "0x61",
          chainName: "Binance Scam Chain Testnet",
          rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
          nativeCurrency: {
            name: "Binance",
            symbol: "BNB",
            decimals: 18,
          },
          blockExplorerUrls: ["https://testnet.bscscan.com"],
        },
      ];
      break;
   //Matic Mainnet
    case 137:
      networkData = [
        {
          chainId: "0x89",
          chainName: "Polygon",
          rpcUrls: ["https://polygon-rpc.com/"],
          nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18,
          },
          blockExplorerUrls: ["https://polygonscan.com/"],
        },
      ];
      break;
   //Matic Mumbai
    case 80001:
      networkData = [
        {
          chainId: "0x13881",
          chainName: "Mumbai (Polygon)",
          rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
          nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18,
          },
          blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
        },
      ];
      break;
    //Fantom
    case 250:
      networkData = [
        {
          chainId: "0xfa",
          chainName: "Fantom",
          rpcUrls: ["https://rpc.ftm.tools"],
          nativeCurrency: {
            name: "Fantom",
            symbol: "FTM",
            decimals: 18,
          },
          blockExplorerUrls: ["https://ftmscan.com/"],
        },
      ];
      break;
    //Fantom Testnet
    case 4002:
      networkData = [
        {
          chainId: "0xfa2",
          chainName: "Fantom Testnet",
          rpcUrls: ["https://rpc.testnet.fantom.network/"],
          nativeCurrency: {
            name: "Fantom",
            symbol: "FTM",
            decimals: 18,
          },
          blockExplorerUrls: ["https://testnet.ftmscan.com/"],
        },
      ];
      break;
    default:
      break;
  }

  // add these
  return window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: networkData,
  });
}

// Address of the selected account
let selectedAccount;

// init() web3modal
function init() {

  console.log("Initializing example");
  console.log("WalletConnectProvider is", WalletConnectProvider);
  console.log("Fortmatic is", Fortmatic);
  console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

  if(location.protocol !== 'https:') {
    const alert = document.querySelector("#alert-error-https");
    alert.style.display = "block";
    document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
    return;
  }
  // Tell Web3modal what providers we have available.
  // Built-in web browser provider (only one can exist as a time)
  // like MetaMask, Brave or Opera is added automatically by Web3modal
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "66e9cad39c594d7d93f5a93104cdf16e", //MaxflowO2 keys might not get milage
      }
    },

    fortmatic: {
      package: Fortmatic,
      options: {
        key: "pk_live_1EBC325C45415739" //MaxflowO2 keys might not get milage
      }
    }
  };

  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
  });

  console.log("Web3Modal instance is", web3Modal);
}

// UI for fetchAccountData()
async function fetchAccountData() {

  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);
  console.log("Web3 instance is", web3);

  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];
  console.log("Selected Account is", selectedAccount);

  // Display fully loaded UI for wallet data
  document.querySelector("#prepare").style.display = "none";
  document.querySelector("#connected").style.display = "block";

  // Display address over Disconnect
  var startString = selectedAccount.substring(0,3);
  var dots ="…";
  var endString = selectedAccount.substring(selectedAccount.length - 3)
  var display = startString+dots+endString;
  document.getElementById("addWallet").innerHTML = display;

  displayTokenName();
  populateTDs(selectedAccount)
}

/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */

async function refreshAccountData() {

  // If any current data is displayed when
  // the user is switching acounts in the wallet
  // immediate hide this data
  document.querySelector("#connected").style.display = "none";
  document.querySelector("#prepare").style.display = "block";

  // Disable button while UI is loading.
  // fetchAccountData() will take a while as it communicates
  // with Ethereum node via JSON-RPC and loads chain data
  // over an API call.
  document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
  await fetchAccountData(provider);
  document.querySelector("#btn-connect").removeAttribute("disabled")
}

// "connect button"
async function onConnect() {

  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
  } catch(e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  fetchAccountData();

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });
}

// "disconnect button"
async function onDisconnect() {

  console.log("Killing the wallet connection", provider);

  // TODO: Which providers have close method?
  if(provider.close) {
    await provider.close();

    // If the cached provider is not cleared,
    // WalletConnect will default to the existing session
    // and does not allow to re-scan the QR code with a new wallet.
    // Depending on your use case you may want or want not his behavir.
    await web3Modal.clearCachedProvider();
    provider = null;
  }

  selectedAccount = null;

  // Set the UI back to the initial state
  document.querySelector("#prepare").style.display = "block";
  document.querySelector("#connected").style.display = "none";
}

// These set/swap chains immediately... useful later in this plethora of wtf
async function swapChain(network, hex) {
  try {
    // check if the chain to connect to is installed
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: hex }], // chainId must be in hexadecimal numbers
    });
  } catch (error) {
    // This error code indicates that the chain has not been added to MetaMask
    // if it is not, then install it into the user MetaMask
    if (error.code === 4902) {
      try {
        addNetwork(network);
      } catch (addError) {
        console.error(addError);
      }
    }
    console.error(error);
  }
}

async function swapToEth(hex) {
  try {
    // check if the chain to connect to is installed
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: hex }], // chainId must be in hexadecimal numbers
    });
  } catch (error) {
    // This error code indicates that the chain has not been added to MetaMask
    // It's Ethereum... it should be there.
   if (error.code === 4902) {
      try {
        console.log("ETH not installed??");
      } catch (addError) {
        console.error(addError);
      }
    }
    console.error(error);
  }
}

//after window is loaded completely
window.onload = function(){
  //hide the preloader
  $(".preloader").fadeOut(1000);
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);
}

// fetch times from contract
async function fetchWeb3PSTime() {
  const web3 = new Web3("https://rpc.ftm.tools");
  //const web3 = new Web3("https://rpc.testnet.fantom.network/");
  let tokenContract = await new web3.eth.Contract(ABI, FTM_MAINCA);
  //let tokenContract = await new web3.eth.Contract(ABI, FTM_TESTCA);
  let timeOne = await tokenContract.methods.showPresaleStart().call();
  if(timeOne == 0) return countDownDate;
  return timeOne;
}

// fetch times from contract
async function fetchWeb3STime() {
  const web3 = new Web3("https://rpc.ftm.tools");
  //const web3 = new Web3("https://rpc.testnet.fantom.network/");
  let tokenContract = await new web3.eth.Contract(ABI, FTM_MAINCA);
  //let tokenContract = await new web3.eth.Contract(ABI, FTM_TESTCA);
  let timeOne = await tokenContract.methods.showStart().call();
  if(timeOne == 0) return countDownDate;
  return timeOne;
}

// Useful for later you'll see
let presaleStart;
let presaleEnd;

// Update the count down every 1 second
// rewritten to web2 => web3 via contract abi... using FTM for the web3
// all contracts will have same datum
/*
window.setInterval(async () => {

  presaleStart = await fetchWeb3PSTime();
  presaleEnd = await fetchWeb3STime();

  // Get today's date and time in seconds
  var timeMeow = new Date().getTime();
  timeMeow = parseInt(timeMeow/1000);

  // 3 html id's to replace
  var showTime;
  var showText;
  var buttonText;

  // set the variables
  if (presaleStart > timeMeow) {
    showTime = presaleStart;
    showText = "Presale Mint live in: ";
    buttonText = "Not Active";
  } else if (presaleEnd > timeMeow && timeMeow > presaleStart) {
    showTime = presaleEnd;
    showText = "WL Mint active, Mint live in: ";
    buttonText = "Mint 2";
  }

  // Find the distance between now and the count down date
  var distance = showTime - timeMeow;

  if (distance > 0) {
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (60 * 60 * 24));
    var hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
    var minutes = Math.floor((distance % (60 * 60)) / (60));
    var seconds = Math.floor(distance % 60);

    // Display the results in the elements
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    document.getElementById("clockText").innerHTML = showText;
    document.getElementById("buttonText").innerHTML = buttonText;
  } else {
    // Display the "null" results in the elements
    document.getElementById("demo").innerHTML = " ";
    document.getElementById("clockText").innerHTML = " ";
    document.getElementById("buttonText").innerHTML = "Mint 1";
  }
}, 1000);
*/

// swaps background image depending on chain
function changeBG(param) {
  $("body").css("background-image", "url(./images/"+param+"_tbg.png)");
}

// web3 call() for how many have minted on that contract
async function queryMinted(contractAddress) {
  const web3 = new Web3(provider);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract.methods.minterCurrentMints().call();
  console.log(value, "has been minted");
  return value;
}

// web3 call() for how many allowed to mint on that contract
async function queryAlloted(contractAddress) {
  const web3 = new Web3(provider);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract.methods.minterMaximumCapacity().call();
  console.log(value, "to mint on this chain");
  return value;
}

// async to pull CA's
async function getCA() {

  // set locals
  let contractAddress;

  // web3
  const web3 = new Web3(provider);

  // Get account of the connected wallet (refresh)
  let accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];

  // chainId
  const chainId = await web3.eth.getChainId();

  // if-else if for chainID's aka to for Addresses
  if (chainId == 1) {
    contractAddress = ETH_MAINCA;
  } else if (chainId == 56) {
    contractAddress = BNB_MAINCA;
  } else if (chainId == 43114) {
    contractAddress = AVAX_MAINCA;
  } else if (chainId ==  137) {
    contractAddress = MATIC_MAINCA;
  } else if (chainId == 250) {
    contractAddress = FTM_MAINCA;
  } else if (chainId == 4) {
    contractAddress = ETH_TESTCA;
  } else if (chainId == 97) {
    contractAddress = BNB_TESTCA;
  } else if (chainId == 43113) {
    contractAddress = AVAX_TESTCA;
  } else if (chainId == 80001) {
    contractAddress = MATIC_TESTCA;
  } else if (chainId == 4002) {
    contractAddress = FTM_TESTCA;
  } else if (chainId == 10) {
    contractAddress = OP_MAINCA;
  } else if (chainId == 69) {
    contractAddress = OP_TESTCA;
  } else {
    console.log("The chainID", chainId, "has no CA set");
  }

  // return the address
  return contractAddress;
}

// puts the above together with innerHTML rewrite could go innerTEXT as well
async function setNumbers() {
  let contractAddress = await getCA();
  let theCount = await queryMinted(contractAddress);
  let theTotal = await queryAlloted(contractAddress);
  document.getElementById("count").innerHTML = theCount;
  document.getElementById("total").innerHTML = theTotal;
}

// async to pull EP's
async function getEP() {

  // set locals
  let endpointAddress;

  // web3
  const web3 = new Web3(provider);

  // chainId
  const chainId = await web3.eth.getChainId();

  // if-else if for chainID's aka to for Addresses
  if (chainId == 1) {
    endpointAddress = ETH_EPMAIN;
  } else if (chainId == 56) {
    endpointAddress = BNB_EPMAIN;
  } else if (chainId == 43114) {
    endpointAddress = AVAX_EPMAIN;
  } else if (chainId ==  137) {
    endpointAddress = MATIC_EPMAIN;
  } else if (chainId == 250) {
    endpointAddress = FTM_EPMAIN;
  } else if (chainId == 4) {
    endpointAddress = ETH_EPTEST;
  } else if (chainId == 97) {
    endpointAddress = BNB_EPTEST;
  } else if (chainId == 43113) {
    endpointAddress = AVAX_EPTEST;
  } else if (chainId == 80001) {
    endpointAddress = MATIC_EPTEST;
  } else if (chainId == 4002) {
    endpointAddress = FTM_EPTEST;
  } else if (chainId == 10) {
    endpointAddress = OP_EPMAIN;
  } else if (chainId == 69) {
    endpointAddress = OP_EPTEST;
  } else {
    console.log("The chainID", chainId, "has no endpoint or CA set");
  }

  // return the address
  return endpointAddress;
}

// web3 send() of both mint functions based off time, yes time
async function spawnTinyDaemon() {

  // set locals
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);

  // Get account of the connected wallet (refresh)
  let accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];

  // define tokenContract because why twice?
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);

  // current time -> seconds
  let timeMeow = new Date().getTime();
  timeMeow = parseInt(timeMeow/1000);

  // set the variables via if/else if/else
  if (presaleStart > timeMeow) {
    console.log("Can't mint broski time is", timeMeow, "and WL starts at", presaleStart);
  } else if (presaleEnd > timeMeow && timeMeow >= presaleStart) {
    let number = 2;
    let value = await tokenContract.methods.presaleMint(number).send({ from: selectedAccount });
    if (!value) {
      console.log("presaleMint(2) from", selectedAccount, "failed");
    }
  } else {
    let value = await tokenContract.methods.publicMint().send({ from: selectedAccount });
    if (!value) {
      console.log("publicMint() from", selectedAccount, "failed");
    }
  }
}


// web3 send() of traversing chains
async function traverseThis(tokenID, to) {

  // set locals
  let contractAddress = await getCA();
  let endpointAddress = await getEP();
  let tokenContract;
  let endpointContract;

  // web3
  const web3 = new Web3(provider);

  // Get account of the connected wallet (refresh)
  let accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];

  // set contracts
  endpointContract = await new web3.eth.Contract(ENDPOINT, endpointAddress);
  tokenContract = await new web3.eth.Contract(ABI, contractAddress);

  // bytes to send
  let payload = web3.eth.abi.encodeParameters(
                  ['address', 'uint16'],
                  [selectedAccount, tokenID]
                );
  console.log("The payload is", payload);
  let version = 1;
  let number = await tokenContract.methods.currentLZGas().call();
  if (!number) {
    console.log("currentLZGas().call() from", contractAddress, "failed");
  }
  console.log("Current LZ Gas from contract is", number);
  let adapterParams = web3.utils.encodePacked(
                        {value: version, type: 'uint16'},
                        {value: number, type: 'uint256'}
                      );
  console.log("Adapter Params is", adapterParams);

  // gas estimate call
  let amountToSend = await endpointContract
                             .methods
                             .estimateFees(
                                to,
                                contractAddress,
                                payload,
                                false,
                                adapterParams)
                             .call();
  if (!amountToSend) {
    console.log("estimateFees().call() from", endpointAddress, "failed");
  }
  console.log("Estimates fees are", amountToSend);

  // the transaction
  let value = await tokenContract
                  .methods
                  .traverseChains(
                     to,
                     tokenID
                  )
                  .send({
                     from: selectedAccount,
                     value: amountToSend[0]
                  })
                  .on(
                    'transactionHash',
                    function(hash) {
                      console.log(hash);
                    }
                  );
  if (!value) {
    console.log("traverseChains().send() from", selectedAccount, "failed");
  }
}

async function getChainID() {
  // web3
  const web3 = new Web3(provider);

  // chainId
  const chainId = await web3.eth.getChainId();

  return chainId;
}

// these are the primary swappers comment out main or test nets...
async function hitETH() {
  let value = "ETH";
  await swapToEth("0x1");
  //await swapToEth("0x4");
  displayTokenName();
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
  changeBG(value);
  //await setNumbers();
}

async function hitFTM() {
  let value = "FTM";
  await swapChain(FTM_M, "0xfa");
  //await swapChain(FTM_T, "0xfa2");
  displayTokenName();
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
  changeBG(value);
  //await setNumbers();
}

async function hitAVAX() {
  let value = "AVAX";
  await swapChain(AVAX_M, "0xA86A");
  //await swapChain(AVAX_T, "0xA869");
  displayTokenName();
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
  changeBG(value);
  //await setNumbers();
}

async function hitMATIC() {
  let value = "MATIC";
  await swapChain(MATIC_M, "0x89");
  //await swapChain(MATIC_T, "0x13881");
  displayTokenName();
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
  changeBG(value);
  //await setNumbers();
}

async function hitBNB() {
  let value = "BSC";
  await swapChain(BNB_M, "0x38");
  //await swapChain(BNB_T, "0x61");
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
  changeBG(value);
  //await setNumbers();
}

async function hitOP() {
  let value = "OP";
  await swapChain(BNB_M, "0xA");
  //await swapChain(BNB_T, "0x45");
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
  changeBG(value);
  //await setNumbers();
}

// JQuery function for #traversefrom
$(document).ready(async function() {
  $('#traversefrom').change(async function() {
     var value = $(this).val();
     // if-else if for swapping chains
     if (value == "ETH") {
       hitETH();
     } else if (value == "FTM") {
       hitFTM();
     } else if (value == "AVAX") {
       hitAVAX();
     } else if (value == "MATIC") {
       hitMATIC();
     } else if (value == "BSC") {
       hitBNB();
     } else if (value == "OP") {
       hitOP();
     }
  });
});

// the traverse function
async function traverseTinyDaemon() {
  // let's grab the values...
  let to = $('#traverseto').val();
  let tokenID = $('#tinydaemonid').val();

  //what to send
  traverseThis(tokenID, to);
}

// display proper token names for donate button
async function displayTokenName() {
  // locals
  let chainId = await getChainID();
  let displayName;

  // display names for the donate span
  if (chainId == 1 || chainId == 4) {
    displayName = "ETH";
  } else if (chainId == 43114 || chainId == 43113) {
    displayName = "AVAX";
  } else if (chainId == 56 || chainId == 97) {
    displayName = "BNB";
  } else if (chainId == 137 || chainId == 80001) {
    displayName = "MATIC";
  } else if (chainId == 250 || chainId == 4002) {
    displayName = "FTM";
  } else if (chainId == 10 || chainId == 69) {
    displayName = "OP";
  } else {
    displayName = "";
    console.log("We're not in Kansas anymore, Toto. You be on chain", chainId);
  }
  //document.getElementById("token").innerHTML = displayName;
}

// ready your breakfast and eat hardy, for tonight we eat ramen...
async function ramenIsOnTheMenu() {
  // locals
  let amount = $("#donationamount").val(); // in Tokens
  amount = amount * 10**18; // in Wei
  console.log("You are sending", amount);
  const web3 = new Web3(provider);
  let contractAddress = await getCA();
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);

  // the transaction
  let value = await tokenContract
                      .methods
                      .donate()
                      .send(
                         { from: selectedAccount,
                           value: amount });
  if (!value) {
    console.log("traverseChains().send() from", selectedAccount, "failed");
  }
}
//TinyDaemon Viewer for burn
async function populateTDs(address) {
  const token_address = '0x8bb765ae3e2320fd9447889d10b9dc7ce4970da5'
  const FTMSCAN_API_KEY = 'J75A2G6SIAQ8FUBXN4D7ECIWGQTPCPU2KE'
  // TODO: in the future, to see all NFTs, modify contractCreation and use 0
  let startBlock = 25639393 //just before minting
  //https://api.ftmscan.com/api?module=account&action=tokennfttx&contractaddress=0xBEa7c3F2D91a9c6fD7F5aA9c803d4C31C1dB8db9&address=0x27e9531d81E0D89CE04394E233d406256d66d36a&startblock=0&endblock=99999999&page=1&offset=100&sort=asc&apikey=J75A2G6SIAQ8FUBXN4D7ECIWGQTPCPU2KE
  const ftmscan_query = `https://api.ftmscan.com/api?module=account&action=tokennfttx`
  + `&contractaddress=${token_address}&address=${address}&startblock=${startBlock}&endblock=999999999&sort=asc&apikey=${FTMSCAN_API_KEY}`
  // console.log(ftmscan_query)
  const result = await axios.get(ftmscan_query)
  .then(response => {
    // console.log('Axios got a response...');console.log(response);
    return response.data.result
  })
  .catch(error => {
    console.log(error)
  })

  // console.log(result)
  console.log(result) //need to check!
  //let dictionary = {}
  let tokenList = []
  for (let t of result) {
    // Only filter where t.to is this address (t.from sends it away)
    if (t.to.toLowerCase() == address.toLowerCase()) {
      tokenList.push(t.tokenID)} //add token ID if incoming
    if (t.from.toLowerCase() == address.toLowerCase()) {
      const index = tokenList.indexOf(t.tokenID);
      if (index > -1) {tokenList.splice(index, 1)}}} //remove token ID if outgoing


  //const token_trx = Object.values(dictionary)
  console.log(tokenList)
  console.log(`${address} owns ${tokenList.length} TinyDaemons`)
  let boxNFT = 'info-selector'
  //trouble below

  if (tokenList.length > 0) {

    var tinyDiv = document.getElementById('tinydiv')

    var galleryCode = ``
    //let i = 0;
    for(let i = 0; i < tokenList.length; i++){
      galleryCode += `
      <div id="td-${tokenList[i]}" class="${boxNFT}">
        <p><img alt="TINYDMN_${tokenList[i]}" src="./images/TinyDaemons/TDMN_${tokenList[i]}.jpg" /></p>
        <h3>TinyDaemon #${tokenList[i]}</h3>
      </div>
      `;
     }
     tinyDiv.innerHTML = galleryCode
  }

  //select Tinys
  $(".info-selector").on("click", function() {
    $(this).toggleClass('info-selected');
    var selectedIds = $('.info-selected').map(function() {
      return this.id;
    }).get();
    console.log(selectedIds);
    document.getElementById("tinycount").innerHTML = `1) Select 5 TinyDaemons (${selectedIds.length}/5)`

    if (selectedIds.length == 5){
      document.getElementById("burn2mint").disabled = true;
    }
    else{
      document.getElementById("burn2mint").disabled = false;
    }
  });


}


// master event listener... combines all the shit above.
window.addEventListener('load', async () => {
  init();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
  document.querySelector("#ETH").addEventListener("click", hitETH);
  document.querySelector("#FTM").addEventListener("click", hitFTM);
  document.querySelector("#AVAX").addEventListener("click", hitAVAX);
  document.querySelector("#MATIC").addEventListener("click", hitMATIC);
  document.querySelector("#BSC").addEventListener("click", hitBNB);
  document.querySelector("#OP").addEventListener("click", hitOP);
  //document.querySelector("#btn-buyNFT").addEventListener("click", spawnTinyDaemon);
  document.querySelector("#btn-traverseNFT").addEventListener("click", traverseTinyDaemon);
  document.querySelector("#btn-Donate").addEventListener("click", ramenIsOnTheMenu);
});
