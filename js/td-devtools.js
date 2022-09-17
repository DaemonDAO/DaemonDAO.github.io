/*     +%%#-                           ##.        =+.    .+#%#+:       *%%#:    .**+-      =+
 *   .%@@*#*:                          @@: *%-   #%*=  .*@@=.  =%.   .%@@*%*   +@@=+=%   .%##
 *  .%@@- -=+                         *@% :@@-  #@=#  -@@*     +@-  :@@@: ==* -%%. ***   #@=*
 *  %@@:  -.*  :.                    +@@-.#@#  =@%#.   :.     -@*  :@@@.  -:# .%. *@#   *@#*
 * *%@-   +++ +@#.-- .*%*. .#@@*@#  %@@%*#@@: .@@=-.         -%-   #%@:   +*-   =*@*   -@%=:
 * @@%   =##  +@@#-..%%:%.-@@=-@@+  ..   +@%  #@#*+@:      .*=     @@%   =#*   -*. +#. %@#+*@
 * @@#  +@*   #@#  +@@. -+@@+#*@% =#:    #@= :@@-.%#      -=.  :   @@# .*@*  =@=  :*@:=@@-:@+
 * -#%+@#-  :@#@@+%++@*@*:=%+..%%#=      *@  *@++##.    =%@%@%%#-  =#%+@#-   :*+**+=: %%++%*
 *
 * @title: td-devtools.js
 * @author: Max Flow O2 -> @MaxFlowO2 on bird app/GitHub
 * @notice: web3.js file for tinydaemons-devtools.html
 */

"use strict"

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

/* testnet contracts
const CAARB = "";
const CAAVAX = "0x72c3ABDaA2CF42eA481517D37e19C6E458631224";
const CABNB = "0x72c3ABDaA2CF42eA481517D37e19C6E458631224";
const CAETH = "0x5c6546A60D52118bC056902683Bfe7EdC9f494f2";
const CAFTM = "0x72c3ABDaA2CF42eA481517D37e19C6E458631224";
const CAMATIC = "0x27746bEfd385661dA4Bb0FfEAa141CfD4E50F616";
const CAOP = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";
const EPARB = "0x4D747149A57923Beb89f22E6B7B97f7D8c087A00";
const EPAVAX = "0x93f54D755A063cE7bB9e6Ac47Eccc8e33411d706";
const EPBNB = "0x6Fcb97553D41516Cb228ac03FdC8B9a0a9df04A1";
const EPETH = "0x79a63d6d8BBD5c6dfc774dA79bCcD948EAcb53FA";
const EPFTM = "0x7dcAD72640F835B0FA36EFD3D6d3ec902C7E5acf";
const EPMATIC = "0xf69186dfBa60DdB133E91E9A4B5673624293d8F8";
const EPOP = "0x72aB53a133b27Fa428ca7Dc263080807AfEc91b5";
const RPCARB = "";
const RPCAVAX = "https://api.avax-test.network/ext/bc/C/rpc";
const RPCBNB = "https://data-seed-prebsc-1-s1.binance.org:8545";
const RPCETH = "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
const RPCFTM = "https://rpc.testnet.fantom.network/";
const RPCMATIC = "https://polygon-mumbai.infura.io/v3/91ee19fa6f024e4ba884937fea7895b7";
//const RPCOPG = "https://opt-goerli.g.alchemy.com/v2/wwG_UeJb1nlI5UlG6ACw00yNhoT2emtT";
const RPCOP = "https://kovan.optimism.io/";
*/

// mainnet contracts
const CAAVAX = "0xB73C7F43DA35B6a678567e88a993a3a553b31858";
const CABNB = "0xB73C7F43DA35B6a678567e88a993a3a553b31858";
const CAETH = "0xB73C7F43DA35B6a678567e88a993a3a553b31858";
const CAFTM = "0xB73C7F43DA35B6a678567e88a993a3a553b31858";
const CAMATIC = "0xB73C7F43DA35B6a678567e88a993a3a553b31858";
const CAOP = "0xB73C7F43DA35B6a678567e88a993a3a553b31858";
//const CAAVAX = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";
//const CABNB = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";
//const CAETH = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";
//const CAFTM = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";
//const CAMATIC = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";
//const CAOP = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";
const EPARB = "0x3c2269811836af69497E5F486A85D7316753cf62";
const EPAVAX = "0x3c2269811836af69497E5F486A85D7316753cf62";
const EPBNB = "0x3c2269811836af69497E5F486A85D7316753cf62";
const EPETH = "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675";
const EPFTM = "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7";
const EPMATIC = "0x3c2269811836af69497E5F486A85D7316753cf62";
const EPOP = "0x3c2269811836af69497E5F486A85D7316753cf62";
const RPCARB = "https://rpc.ankr.com/arbitrum";
const RPCAVAX = "https://api.avax.network/ext/bc/C/rpc";
const RPCBNB = "https://bsc-dataseed.binance.org/";
const RPCETH = "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
const RPCFTM = "https://rpc.ftm.tools/";
const RPCMATIC = "https://polygon-rpc.com/";
const RPCOP = "https://optimism-mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";


// roles
const DEV = "0xca4b208b";
const PEN_DEV = "0xca4b208a";
const OWNER =  "0x8da5cb5b";
const PEN_OWNER = "0x8da5cb5a";
const ADMIN = "0xf851a440";

const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"reason","type":"string"}],"name":"MaxSplaining","type":"error"},{"inputs":[{"internalType":"string","name":"reason","type":"string"}],"name":"MaxSplaining","type":"error"},{"inputs":[{"internalType":"string","name":"reason","type":"string"}],"name":"MaxSplaining","type":"error"},{"inputs":[{"internalType":"string","name":"reason","type":"string"}],"name":"MaxSplaining","type":"error"},{"inputs":[{"internalType":"uint256","name":"yourTime","type":"uint256"},{"internalType":"uint256","name":"hitTime","type":"uint256"}],"name":"TooLateBoomer","type":"error"},{"inputs":[{"internalType":"uint256","name":"yourTime","type":"uint256"},{"internalType":"uint256","name":"hitTime","type":"uint256"}],"name":"TooSoonJunior","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_old","type":"string"},{"indexed":false,"internalType":"string","name":"_new","type":"string"}],"name":"ContractURIChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"_srcAddress","type":"bytes"},{"indexed":false,"internalType":"uint64","name":"_nonce","type":"uint64"},{"indexed":false,"internalType":"bytes","name":"_payload","type":"bytes"}],"name":"MessageFailed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"PayeeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"PayeeRemoved","type":"event"},{"anonymous":false,"inputs":[],"name":"PayeesReset","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"length","type":"uint256"}],"name":"PresaleSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"numberToMint","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startingID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endingID","type":"uint256"}],"name":"SetStartNumbers","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ThankYou","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"_chainId","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"_trustedRemote","type":"bytes"}],"name":"TrustedRemoteSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_old","type":"string"},{"indexed":false,"internalType":"string","name":"_new","type":"string"}],"name":"UpdatedBaseURI","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"}],"name":"royalatiesSet","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"RevealProvenanceImages","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RevealProvenanceJSON","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RevealStartNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newSplit","type":"address"},{"internalType":"uint256","name":"newShares","type":"uint256"}],"name":"addSplit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearRoyalties","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearSplits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentLZGas","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"declineDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"declineOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"developer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"donate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"failedMessages","outputs":[{"internalType":"uint256","name":"payloadLength","type":"uint256"},{"internalType":"bytes32","name":"payloadHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"internalType":"bytes","name":"_srcAddress","type":"bytes"},{"internalType":"uint64","name":"_nonce","type":"uint64"},{"internalType":"bytes","name":"_payload","type":"bytes"}],"name":"lzReceive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lzStartNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterCurrentMints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterMaximumCapacity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterMaximumTeamMints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterMintsRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterTeamMintsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterTeamMintsRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"internalType":"bytes","name":"_srcAddress","type":"bytes"},{"internalType":"uint64","name":"_nonce","type":"uint64"},{"internalType":"bytes","name":"_payload","type":"bytes"}],"name":"onLzReceive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"payee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"quant","type":"uint256"}],"name":"presaleMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"publicMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newDeveloper","type":"address"}],"name":"pushDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"pushOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"released","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"remSplit","type":"address"}],"name":"removeSplit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"internalType":"bytes","name":"_srcAddress","type":"bytes"},{"internalType":"uint64","name":"_nonce","type":"uint64"},{"internalType":"bytes","name":"_payload","type":"bytes"}],"name":"retryMessage","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"royaltyAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_base","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"URI","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newDisplay","type":"address"}],"name":"setDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newVal","type":"uint256"}],"name":"setGasForDestinationLzReceive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"startNumber","type":"uint256"},{"internalType":"uint256","name":"authMint","type":"uint256"},{"internalType":"uint256","name":"teamMints","type":"uint256"},{"internalType":"string","name":"img","type":"string"},{"internalType":"string","name":"json","type":"string"},{"internalType":"address","name":"newAddress","type":"address"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newDisplay","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"}],"name":"setPresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"},{"internalType":"uint256","name":"permille","type":"uint256"}],"name":"setRoyalties","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"permille","type":"uint256"}],"name":"setRoyaltiesThis","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_chainId","type":"uint16"},{"internalType":"bytes","name":"_trustedRemote","type":"bytes"}],"name":"setTrustedRemote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"shares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"showPresaleStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"showPresaleTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"showStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"teamMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReleased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newDeveloper","type":"address"}],"name":"transferDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_chainId","type":"uint16"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"traverseChains","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"}],"name":"trustedRemoteLookup","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];

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
          chainName: "Avalanche FUJI C-Chain",
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
          chainName: "Polygon Testnet",
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
          chainName: "Fantom Opera",
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
          chainName: "Fantom Opera Testnet",
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
  document.getElementById("addWallet").innerText = display;

  await loadTokenName();
  await loadBodyGetters();
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
  if (chainId == 1 || chainId == 4) {
    contractAddress = CAETH;
  } else if (chainId == 56 || chainId == 97) {
    contractAddress = CABNB;
  } else if (chainId == 43114 || chainId == 43113) {
    contractAddress = CAAVAX;
  } else if (chainId ==  137 || chainId == 80001) {
    contractAddress = CAMATIC;
  } else if (chainId == 250 || chainId == 4002) {
    contractAddress = CAFTM;
  } else if (chainId == 10 || chainId == 69) {
    contractAddress = CAOP;
  }  else {
    console.log("The chainID", chainId, "has no CA set");
  }

  // return the address
  return contractAddress;
}

// async to pull EP's
async function getEP() {

  // set locals
  let endpointAddress;

  // web3
  const web3 = new Web3(provider);

  // Get account of the connected wallet (refresh)
  let accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];

  // chainId
  const chainId = await web3.eth.getChainId();

  // if-else if for chainID's aka to for Addresses
  if (chainId == 1 || chainId == 4) {
    endpointAddress = EPETH;
  } else if (chainId == 56 || chainId == 97) {
    endpointAddress = EPBNB;
  } else if (chainId == 43114 || chainId == 43113) {
    endpointAddress = EPAVAX;
  } else if (chainId ==  137 || chainId == 80001) {
    endpointAddress = EPMATIC;
  } else if (chainId == 250 || chainId == 4002) {
    endpointAddress = EPFTM;
  } else if (chainId == 10 || chainId == 69) {
    endpointAddress = EPOP;
  }  else {
    console.log("The chainID", chainId, "has no EP set");
  }

  // return the address
  return endpointAddress;
}

async function getChainID() {
  // web3
  const web3 = new Web3(provider);

  // chainId
  const chainId = await web3.eth.getChainId();

  return chainId;
}

// those buttons
async function hitAVAX() {
  await swapChain(AVAX_M, "0xA86A");
  //await swapChain(AVAX_T, "0xA869");
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
}

async function hitBNB() {
  await swapChain(BNB_M, "0x38");
  //await swapChain(BNB_T, "0x61");
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
}

async function hitETH() {
  await swapToEth("0x1");
  //await swapToEth("0x4");
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
}

async function hitFTM() {
  await swapChain(FTM_M, "0xfa");
  //await swapChain(FTM_T, "0xfa2");
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
}

async function hitMATIC() {
  await swapChain(MATIC_M, "0x89");
  //await swapChain(MATIC_T, "0x13881");
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
}

async function hitOP() {
  await swapChain(MATIC_M, "0xA");
  //await swapChain(MATIC_T, "0x45");
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
}

async function loadTokenName() {
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

  let changeMe = document.getElementsByClassName("chain");
  for (var x = 0; x < changeMe.length; x++) {
    changeMe[x].innerText = displayName;
  }
}

// Pulls address
async function getAddress() {
  // web3
  const web3 = new Web3(provider);

  // Get account of the connected wallet (refresh)
  let accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];
}

// Pulls role bool from contract
async function isDeveloper(contractAddress, rpc) {

  await getAddress();

  // web3
  const web3 = new Web3(rpc);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);

  let value = await tokenContract
                      .methods
                      .hasRole(DEV, selectedAccount)
                      .call();
  if (!value) {
    console.log("isDeveloper(", selectedAccount, ") failed");
  }

  return value;
}

// Pulls role bool from contract
async function isOwner(contractAddress, rpc) {

  await getAddress();

  // web3
  const web3 = new Web3(rpc);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);

  let value = await tokenContract
                      .methods
                      .hasRole(OWNER, selectedAccount)
                      .call();
  if (!value) {
    console.log("isOwner(", selectedAccount, ") failed");
  }

  return value;
}

// Pulls lz start number
async function getLZStartNumber() {

  // locals
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .lzStartNumber()
                      .call();
  if (!value) {
    console.log(".lzStartNumber() failed");
  }

  return value;
}

// Pulls Max Minted
async function getMaxMints() {

  // locals
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .minterMaximumCapacity()
                      .call();
  if (!value) {
    console.log(".minterMaximumCapacity() failed");
  }

  return value;
}

// Pulls Team Mints
async function getTeamMints() {

  // locals
  let contractAddress = await getCA();
  console.log(contractAddress);
  // web3
  const web3 = new Web3(provider);
  console.log(web3);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  console.log(tokenContract);
  let value = await tokenContract
                      .methods
                      .minterMaximumTeamMints()
                      .call();
  if (!value) {
    console.log(".minterMaximumTeamMints() failed");
  }

  return value;
}

// Pulls Image Provenance
async function getImgProv() {

  // locals
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .RevealProvenanceImages()
                      .call();
  if (!value) {
    console.log(".RevealProvenanceImages() failed");
  }

  return value;
}

// Pulls JSON Provenance
async function getJsonProv() {

  // locals
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .RevealProvenanceJSON()
                      .call();
  if (!value) {
    console.log(".RevealProvenanceJSON() failed");
  }

  return value;
}

// Pulls presale start time
async function getPresaleStart() {

  // locals
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .showPresaleStart()
                      .call();
  if (!value) {
    console.log(".showPresaleStart() failed");
  }

  return value;
}

// Pulls the Trusted Remote of a network
async function getTR(code) {

  // locals
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .trustedRemoteLookup(code)
                      .call();
  if (!value) {
    console.log(`.trustedRemoteLookup(${code}) failed`);
  }

  return value;
}

// Pulls the Trusted Remote of a network
async function getContractURI() {

  // locals
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .contractURI()
                      .call();
  if (!value) {
    console.log(".contractURI() failed");
  }

  return value;
}

// Pulls the Split of an address
async function getSplit(address) {

  // locals
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .shares(address)
                      .call();
  if (!value) {
    console.log(`.shares(${address}) failed`);
  }

  return value;
}

// Pulls the Trusted Remote of a network
async function getLZGas() {

  // locals
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .currentLZGas()
                      .call();
  if (!value) {
    console.log(".currentLZGas() failed");
  }

  return value;
}

// Pulls isDeveloper bool from contract
async function devCheck(address) {

  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .hasRole("0xca4b208b", address)
                      .call();
  if (!value) {
    console.log(`isDeveloper(${address}) failed`);
  }

  return value;
}

// Pulls isOwner bool from contract
async function ownerCheck(address) {

  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .hasRole("0x8da5cb5b", address)
                      .call();
  if (!value) {
    console.log(`isOwner(${address}) failed`);
  }

  return value;
}

// Sending the setMinter()
async function sendSetMinter() {

  // first off get the address
  await getAddress();

  // now pull the text boxes
  let startNumber = $("#startNumber").val();
  let authMint = $("#authMint").val();
  let teamMints = $("#teamMints").val();
  let imgHash = $("#imgHash").val();
  let jsonHash = $("#jsonHash").val();

  // last two values to await-pull
  let contractAddress = await getCA();
  let endpointAddress = await getEP();

  // web3
  const web3 = new Web3(provider);
  console.log(`sending .setMinter(${startNumber}, ${authMint}, ${teamMints}, ${imgHash}, ${jsonHash}, ${endpointAddress})`);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .setMinter(
                        startNumber,
                        authMint,
                        teamMints,
                        imgHash,
                        jsonHash,
                        endpointAddress)
                      .send(
                        { from: selectedAccount }
                      );
  if (!value) {
    console.log(`.setMinter(${startNumber}, ${authMint}, ${teamMints}, ${imgHash}, ${jsonHash}, ${endpointAddress}) failed`);
  }
}

// Sending the setMinter()
async function sendSetPresale() {

  // first off get the address
  await getAddress();

  // now pull the text boxes
  let startTime = $("#startTime").val();
  let duration = $("#duration").val();

  // last value to await-pull
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  console.log(`sending .setPresale(${startTime}, ${duration})`);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .setPresale(
                        startTime,
                        duration)
                      .send(
                        { from: selectedAccount }
                      );
  if (!value) {
    console.log(`.setPresale(${startTime}, ${duration}) failed`);
  }
}

// Sending the setTrustedRemote() for Avax
async function sendSetAvax() {

  // first off get the address
  await getAddress();

  // chain ID's
  let ID = 6;
  //let ID = 10006;

  // now pull the text boxes
  let chainAvax = $("#chainAvax").val();

  // last value to await-pull
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  console.log(`sending .setTrustedRemote(${ID}, ${chainAvax})`);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .setTrustedRemote(
                        ID,
                        chainAvax)
                      .send(
                        { from: selectedAccount }
                      );
  if (!value) {
    console.log(`.setTrustedRemote(${ID}, ${chainAvax}) failed`);
  }
}

// Sending the setTrustedRemote() for Binance
async function sendSetBinance() {

  // first off get the address
  await getAddress();

  // chain ID's
  let ID = 2;
  //let ID = 10002;

  // now pull the text boxes
  let chainBinance = $("#chainBinance").val();

  // last value to await-pull
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  console.log(`sending .setTrustedRemote(${ID}, ${chainBinance})`);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .setTrustedRemote(
                        ID,
                        chainBinance)
                      .send(
                        { from: selectedAccount }
                      );
  if (!value) {
    console.log(`.setTrustedRemote(${ID}, ${chainBinance}) failed`);
  }
}

// Sending the setTrustedRemote() for Ether
async function sendSetEther() {

  // first off get the address
  await getAddress();

  // chain ID's
  let ID = 1;
  //let ID = 10001;

  // now pull the text boxes
  let chainEther = $("#chainEther").val();

  // last value to await-pull
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  console.log(`sending .setTrustedRemote(${ID}, ${chainEther})`);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .setTrustedRemote(
                        ID,
                        chainEther)
                      .send(
                        { from: selectedAccount }
                      );
  if (!value) {
    console.log(`.setTrustedRemote(${ID}, ${chainEther}) failed`);
  }
}

// Sending the setTrustedRemote() for Fantom
async function sendSetFantom() {

  // first off get the address
  await getAddress();

  // chain ID's
  let ID = 12;
  //let ID = 10012;

  // now pull the text boxes
  let chainFantom = $("#chainFantom").val();

  // last value to await-pull
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  console.log(`sending .setTrustedRemote(${ID}, ${chainFantom})`);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .setTrustedRemote(
                        ID,
                        chainFantom)
                      .send(
                        { from: selectedAccount }
                      );
  if (!value) {
    console.log(`.setTrustedRemote(${ID}, ${chainFantom}) failed`);
  }
}

// Sending the setTrustedRemote() for Matic
async function sendSetMatic() {

  // first off get the address
  await getAddress();

  // chain ID's
  let ID = 9;
  //let ID = 10009;

  // now pull the text boxes
  let chainMatic = $("#chainMatic").val();

  // last value to await-pull
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  console.log(`sending .setTrustedRemote(${ID}, ${chainMatic})`);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .setTrustedRemote(
                        ID,
                        chainMatic)
                      .send(
                        { from: selectedAccount }
                      );
  if (!value) {
    console.log(`.setTrustedRemote(${ID}, ${chainMatic}) failed`);
  }
}

// Sending the setTrustedRemote() for Op
async function sendSetOp() {

  // first off get the address
  await getAddress();

  // chain ID's
  let ID = 11;
  //let ID = 10011;

  // now pull the text boxes
  let chainOp = $("#chainOp").val();

  // last value to await-pull
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  console.log(`sending .setTrustedRemote(${ID}, ${chainOp})`);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .setTrustedRemote(
                        ID,
                        chainOp)
                      .send(
                        { from: selectedAccount }
                      );
  if (!value) {
    console.log(`.setTrustedRemote(${ID}, ${chainOp}) failed`);
  }
}

// Sending the setContractURI()
async function sendSetContractURI() {

  // first off get the address
  await getAddress();

  // now pull the text boxes
  let contractURI = $("#contractURI").val();

  // last value to await-pull
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  console.log(`sending .setContractURI(${contractURI})`);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .setContractURI(contractURI)
                      .send(
                        { from: selectedAccount }
                      );
  if (!value) {
    console.log(`.setContractURI(${contractURI}) failed`);
  }
}

// Sending the setBaseURI()
async function sendSetBaseURI() {

  // first off get the address
  await getAddress();

  // now pull the text boxes
  let baseURI = $("#baseURI").val();

  // last value to await-pull
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  console.log(`sending .setBaseURI(${contractURI})`);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .setBaseURI(baseURI)
                      .send(
                        { from: selectedAccount }
                      ).on('transactionHash', function(hash){
        console.log(hash);
})
  if (!value) {
    console.log(`.setBaseURI(${baseURI}) failed`);
  }
}

// Getting the shares of an address
async function getShares() {

  // now pull the text boxes
  let splitAddress = $("#splitAddress").val();

  // last value to await-pull
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  console.log(`sending .shares(${splitAddress})`);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .shares(splitAddress)
                      .call()
  if (!value) {
    console.log(`.shares(${splitAddress}) failed`);
  }

  // Display it
  document.getElementById("splitSharesCurrent").innerText = value;
}

// Sending the addSplit()
async function sendAddSplit() {

  // first off get the address
  await getAddress();

  // now pull the text boxes
  let splitAddress = $("#splitAddress").val();
  let splitShares = $("#splitShares").val();

  // last value to await-pull
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  console.log(`sending .addSplit(${splitAddress}, ${splitShares})`);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .addSplit(
                        splitAddress,
                        splitShares)
                      .send(
                        { from: selectedAccount }
                      );
  if (!value) {
    console.log(`.addSplit(${splitAddress}, ${splitShares}) failed`);
  }
}

// Sending the setERC2981This()
async function sendSetERC2981This() {

  // first off get the address
  await getAddress();

  // now pull the text boxes
  let erc2981ThisPermille = $("#erc2981ThisPermille").val();

  // last value to await-pull
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  console.log(`sending .erc2981This(${erc2981ThisPermille})`);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .setRoyaltiesThis(erc2981ThisPermille)
                      .send(
                        { from: selectedAccount }
                      );
  if (!value) {
    console.log(`.erc2981This(${erc2981ThisPermille}) failed`);
  }
}

// Sending the setRoyalties()
async function sendSetRoyalties() {

  // first off get the address
  await getAddress();

  // now pull the text boxes
  let setRoyaltiesAddress = $("#setRoyaltiesAddress").val();
  let setRoyaltiesPermille = $("#setRoyaltiesPermille").val();

  // last value to await-pull
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  console.log(`sending .setRoyalties(${setRoyaltiesAddress}, ${setRoyaltiesPermille})`);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .setRoyalties(
                        setRoyaltiesAddress,
                        setRoyaltiesPermille)
                      .send(
                        { from: selectedAccount }
                      );
  if (!value) {
    console.log(`.setRoyalties(${setRoyaltiesAddress}, ${setRoyaltiesPermille}) failed`);
  }
}

// Sending the setGasForDestinationLzReceive()
async function sendSetGas() {

  // first off get the address
  await getAddress();

  // now pull the text boxes
  let setGasValue = $("#setGasValue").val();

  // last value to await-pull
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  console.log(`sending .setGasForDestinationLzReceive(${setGasValue})`);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .setGasForDestinationLzReceive(setGasValue)
                      .send(
                        { from: selectedAccount }
                      );
  if (!value) {
    console.log(`.setGasForDestinationLzReceive(${setGasValue}) failed`);
  }
}

// Sending the teamMint()
async function sendTeamMint() {

  // first off get the address
  await getAddress();

  // last value to await-pull
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  console.log(`sending .teamMint()`);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .teamMint()
                      .send(
                        { from: selectedAccount }
                      );
  if (!value) {
    console.log(`.teamMint() failed`);
  }
}

// Sending the push for onlyDev()
async function sendPushDev() {

  // first off get the address
  await getAddress();

  // now pull the text boxes
  let pushDevAddress = $("#pushDevAddress").val();

  // last value to await-pull
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  console.log(`sending .pushDeveloper(${pushDevAddress})`);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .pushDeveloper(pushDevAddress)
                      .send(
                        { from: selectedAccount }
                      );
  if (!value) {
    console.log(`.pushDeveloper(${pushDevAddress}) failed`);
  }
}

// Check onlyDev()
async function checkDev() {

  // now pull the text boxes
  let pushDevAddress = $("#pushDevAddress").val();

  // use dev check
  let display = await devCheck(pushDevAddress);

  // display it
  document.getElementById("checkDev").innerHTML = display;
}

// Sending the push-pull for onlyDev()
async function sendTransferDev() {

  // first off get the address
  await getAddress();

  // now pull the text boxes
  let transferDevAddress = $("#transferDevAddress").val();

  // last value to await-pull
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  console.log(`sending .transferDeveloper(${transferDevAddress})`);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .pushDeveloper(transferDevAddress)
                      .send(
                        { from: selectedAccount }
                      );
  if (!value) {
    console.log(`.transferDeveloper(${transferDevAddress}) failed`);
  }
}

// Check onlyDev()
async function checkDev2() {

  // now pull the text boxes
  let transferDevAddress = $("#transferDevAddress").val();

  // use dev check
  let display = await devCheck(transferDevAddress);

  // display it
  document.getElementById("checkDev2").innerHTML = display;
}

// Sending the push for onlyOwner()
async function sendPushOwner() {

  // first off get the address
  await getAddress();

  // now pull the text boxes
  let pushOwnerAddress = $("#pushOwnerAddress").val();

  // last value to await-pull
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  console.log(`sending .pushOwner(${pushOwnerAddress})`);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .transferOwnership(pushOwnerAddress)
                      .send(
                        { from: selectedAccount }
                      );
  if (!value) {
    console.log(`.pushOwner(${pushOwnerAddress}) failed`);
  }
}

// Check onlyOwner()
async function checkOwner() {

  // now pull the text boxes
  let pushOwnerAddress = $("#pushOwnerAddress").val();

  // use Owner check
  let display = await ownerCheck(pushOwnerAddress);

  // display it
  document.getElementById("checkOwner").innerHTML = display;
}

// Sending the push-pull for onlyOwner()
async function sendTransferOwner() {

  // first off get the address
  await getAddress();

  // now pull the text boxes
  let transferOwnerAddress = $("#transferOwnerAddress").val();

  // last value to await-pull
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  console.log(`sending .transferOwner(${transferOwnerAddress})`);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .pushOwnership(transferOwnerAddress)
                      .send(
                        { from: selectedAccount }
                      );
  if (!value) {
    console.log(`.transferOwner(${transferOwnerAddress}) failed`);
  }
}

// Check onlyOwner()
async function checkOwner2() {

  // now pull the text boxes
  let transferOwnerAddress = $("#transferOwnerAddress").val();

  // use Owner check
  let display = await ownerCheck(transferOwnerAddress);

  // display it
  document.getElementById("checkOwner2").innerHTML = display;
}

// Pulls the Split of an address
async function canClaim(address, rpc) {

  // first off get the address
  await getAddress();

  // web3
  const web3 = new Web3(rpc);
  let tokenContract = await new web3.eth.Contract(ABI, address);
  let value = await tokenContract
                      .methods
                      .shares(selectedAccount)
                      .call();
  if (!value) {
    console.log(`.shares(${selectedAccount}) failed`);
  }

  if (value == 0) {
    return false;
  } else {
    return true;
  }
}

// Sending the claim()
async function sendClaim(address) {

  // first off get the address
  await getAddress();

  // last value to await-pull
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);
  console.log(`sending .claim()`);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract
                      .methods
                      .claim()
                      .send(
                        { from: selectedAccount }
                      );
  if (!value) {
    console.log(`.claim() failed`);
  }
}

// claim getters
// Pulls released "eth" to you
async function fetchReleased(address, rpc) {

  // first off get the address
  await getAddress();

  // web3
  const web3 = new Web3(rpc);
  let tokenContract = await new web3.eth.Contract(ABI, address);
  let value = await tokenContract.methods.released(selectedAccount).call();
  if(!value){
    console.error(`Can not fetch released(${selectedAccount})`);
    return null;
  }
  return value;
}

// Fetches your shares
async function fetchShares(address, rpc) {

  // first off get the address
  await getAddress();

  // web3
  const web3 = new Web3(rpc);
  let tokenContract = await new web3.eth.Contract(ABI, address);
  let value = await tokenContract.methods.shares(selectedAccount).call();
  if(!value){
    console.error(`Can not fetch shares(${selectedAccount})`);
    return null;
  }
  return value;
}

// Fetches total shares
async function fetchTotalShares(address, rpc) {

  // web3
  const web3 = new Web3(rpc);
  let tokenContract = await new web3.eth.Contract(ABI, address);
  let value = await tokenContract.methods.totalShares().call();
  if(!value){
    console.error(`Can not fetch totalShares()`);
    return null;
  }
  return value;
}

// Fetches total "eth" released
async function fetchTotalReleased(address, rpc) {

  // web3
  const web3 = new Web3(rpc);
  let tokenContract = await new web3.eth.Contract(ABI, address);
  let value = await tokenContract.methods.totalReleased().call();
  if(!value){
    console.error(`Can not fetch totalReleased()`);
    return null;
  }
  return value;
}

// fetched balance of "eth" on contract
async function fetchBalance(address, rpc) {

  // web3
  const web3 = new Web3(rpc);
  let tokenContract = await new web3.eth.Contract(ABI, address);
  let value = await tokenContract.methods.getBalance().call();
  if(!value){
    console.error(`Can not fetch getBalance()`);
    return 0;
  }
  return value;
}

// math part of claim tables
// Avax
async function avaxRow() {
  let sharesAvax = await fetchShares(CAAVAX, RPCAVAX);
  let totalSharesAvax = await fetchTotalShares(CAAVAX, RPCAVAX);
  let releasedAvax = await  fetchReleased(CAAVAX, RPCAVAX);
  let totalReleasedAvax = await  fetchTotalReleased(CAAVAX, RPCAVAX);
  let balanceAvax = await fetchBalance(CAAVAX, RPCAVAX);
  releasedAvax = releasedAvax / 10**18;
  totalReleasedAvax = totalReleasedAvax / 10**18;
  balanceAvax = balanceAvax / 10**18;
  let paymentDueAvax = (((balanceAvax + totalReleasedAvax) * sharesAvax) / totalSharesAvax) - releasedAvax;
  let percentageAvax = sharesAvax * 100 / totalSharesAvax;
  document.getElementById("avaxClaimed").innerText = releasedAvax.toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " AVAX";
  document.getElementById("avaxCanClaim").innerText = paymentDueAvax.toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " AVAX";
  document.getElementById("avaxPercentage").innerText = percentageAvax.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "%";
}

// Binance
async function binanceRow() {
  let sharesBinance = await fetchShares(CABNB, RPCBNB);
  let totalSharesBinance = await fetchTotalShares(CABNB, RPCBNB);
  let releasedBinance = await  fetchReleased(CABNB, RPCBNB);
  let totalReleasedBinance = await  fetchTotalReleased(CABNB, RPCBNB);
  let balanceBinance = await fetchBalance(CABNB, RPCBNB);
  releasedBinance = releasedBinance / 10**18;
  totalReleasedBinance = totalReleasedBinance / 10**18;
  balanceBinance = balanceBinance / 10**18;
  let paymentDueBinance = (((balanceBinance + totalReleasedBinance) * sharesBinance) / totalSharesBinance) - releasedBinance;
  let percentageBinance = sharesBinance * 100 / totalSharesBinance;
  document.getElementById("binanceClaimed").innerText = releasedBinance.toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " BNB";
  document.getElementById("binanceCanClaim").innerText = paymentDueBinance.toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " BNB";
  document.getElementById("binancePercentage").innerText = percentageBinance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "%";
}

// Ethereum
async function etherRow() {
  let sharesEther = await fetchShares(CAETH, RPCETH);
  let totalSharesEther = await fetchTotalShares(CAETH, RPCETH);
  let releasedEther = await  fetchReleased(CAETH, RPCETH);
  let totalReleasedEther = await  fetchTotalReleased(CAETH, RPCETH);
  let balanceEther = await fetchBalance(CAETH, RPCETH);
  releasedEther = releasedEther / 10**18;
  totalReleasedEther = totalReleasedEther / 10**18;
  balanceEther = balanceEther / 10**18;
  let paymentDueEther = (((balanceEther + totalReleasedEther) * sharesEther) / totalSharesEther) - releasedEther;
  let percentageEther = sharesEther * 100 / totalSharesEther;
  document.getElementById("etherClaimed").innerText = releasedEther.toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " ETH";
  document.getElementById("etherCanClaim").innerText = paymentDueEther.toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " ETH";
  document.getElementById("etherPercentage").innerText = percentageEther.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "%";
}

// Fantom
async function fantomRow() {
  let sharesFantom = await fetchShares(CAFTM, RPCFTM);
  let totalSharesFantom = await fetchTotalShares(CAFTM, RPCFTM);
  let releasedFantom = await  fetchReleased(CAFTM, RPCFTM);
  let totalReleasedFantom = await  fetchTotalReleased(CAFTM, RPCFTM);
  let balanceFantom = await fetchBalance(CAFTM, RPCFTM);
  releasedFantom = releasedFantom / 10**18;
  totalReleasedFantom = totalReleasedFantom / 10**18;
  balanceFantom = balanceFantom / 10**18;
  let paymentDueFantom = (((balanceFantom + totalReleasedFantom) * sharesFantom) / totalSharesFantom) - releasedFantom;
  let percentageFantom = sharesFantom * 100 / totalSharesFantom;
  document.getElementById("fantomClaimed").innerText = releasedFantom.toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " FTM";
  document.getElementById("fantomCanClaim").innerText = paymentDueFantom.toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " FTM";
  document.getElementById("fantomPercentage").innerText = percentageFantom.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "%";
}

// Matic
async function maticRow() {
  let sharesMatic = await fetchShares(CAMATIC, RPCMATIC);
  let totalSharesMatic = await fetchTotalShares(CAMATIC, RPCMATIC);
  let releasedMatic = await  fetchReleased(CAMATIC, RPCMATIC);
  let totalReleasedMatic = await  fetchTotalReleased(CAMATIC, RPCMATIC);
  let balanceMatic = await fetchBalance(CAMATIC, RPCMATIC);
  releasedMatic = releasedMatic / 10**18;
  totalReleasedMatic = totalReleasedMatic / 10**18;
  balanceMatic = balanceMatic / 10**18;
  let paymentDueMatic = (((balanceMatic + totalReleasedMatic) * sharesMatic) / totalSharesMatic) - releasedMatic;
  let percentageMatic = sharesMatic * 100 / totalSharesMatic;
  document.getElementById("maticClaimed").innerText = releasedMatic.toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " MATIC";
  document.getElementById("maticCanClaim").innerText = paymentDueMatic.toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " MATIC";
  document.getElementById("maticPercentage").innerText = percentageMatic.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "%";
}

// Op
async function opRow() {
  let sharesOp = await fetchShares(CAOP, RPCOP);
  let totalSharesOp = await fetchTotalShares(CAOP, RPCOP);
  let releasedOp = await  fetchReleased(CAOP, RPCOP);
  let totalReleasedOp = await  fetchTotalReleased(CAOP, RPCOP);
  let balanceOp = await fetchBalance(CAOP, RPCOP);
  releasedOp = releasedOp / 10**18;
  totalReleasedOp = totalReleasedOp / 10**18;
  balanceOp = balanceOp / 10**18;
  let paymentDueOp = (((balanceOp + totalReleasedOp) * sharesOp) / totalSharesOp) - releasedOp;
  let percentageOp = sharesOp * 100 / totalSharesOp;
  document.getElementById("opClaimed").innerText = releasedOp.toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " OP";
  document.getElementById("opCanClaim").innerText = paymentDueOp.toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " OP";
  document.getElementById("opPercentage").innerText = percentageOp.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "%";
}

// Now do the table
async function loadClaimTable() {
  await avaxRow();
  await binanceRow();
  await etherRow();
  await fantomRow();
  await maticRow();
  await opRow();
}

// Fills the dev/owner/claimable table
async function loadRoleTable() {

  // now the onlyDev()'s
  let devAvax = await isDeveloper(CAAVAX, RPCAVAX);
  let devBinance = await isDeveloper(CABNB, RPCBNB);
  let devEther = await isDeveloper(CAETH, RPCETH);
  let devFantom = await isDeveloper(CAFTM, RPCFTM);
  let devMatic = await isDeveloper(CAMATIC, RPCMATIC);
  let devOp = await isDeveloper(CAOP, RPCOP);
  // if-else for display
  if (devAvax) {
    document.getElementById("od6").innerText = "onlyDev()";
    document.getElementById("od6").style = 'color: green';
  } else {
    document.getElementById("od6").innerText = "No";
    document.getElementById("od6").style = 'color: red';
  }
  if (devBinance) {
    document.getElementById("od2").innerText = "onlyDev()";
    document.getElementById("od2").style = 'color: green';
  } else {
    document.getElementById("od2").innerText = "No";
    document.getElementById("od2").style = 'color: red';
  }
  if (devEther) {
    document.getElementById("od1").innerText = "onlyDev()";
    document.getElementById("od1").style = 'color: green';
  } else {
    document.getElementById("od1").innerText = "No";
    document.getElementById("od1").style = 'color: red';
  }
  if (devFantom) {
    document.getElementById("od12").innerText = "onlyDev()";
    document.getElementById("od12").style = 'color: green';
  } else {
    document.getElementById("od12").innerText = "No";
    document.getElementById("od12").style = 'color: red';
  }
  if (devMatic) {
    document.getElementById("od9").innerText = "onlyDev()";
    document.getElementById("od9").style = 'color: green';
  } else {
    document.getElementById("od9").innerText = "No";
    document.getElementById("od9").style = 'color: red';
  }
  if (devOp) {
    document.getElementById("od10").innerText = "onlyDev()";
    document.getElementById("od10").style = 'color: green';
  } else {
    document.getElementById("od10").innerText = "No";
    document.getElementById("od10").style = 'color: red';
  }

  // now the onlyOwner()'s
  let ownerAvax = await isOwner(CAAVAX, RPCAVAX);
  let ownerBinance = await isOwner(CABNB, RPCBNB);
  let ownerEther = await isOwner(CAETH, RPCETH);
  let ownerFantom = await isOwner(CAFTM, RPCFTM);
  let ownerMatic = await isOwner(CAMATIC, RPCMATIC);
  let ownerOp = await isOwner(CAOP, RPCOP);
  // if-else for display
  if (ownerAvax) {
    document.getElementById("oo6").innerText = "onlyOwner()";
    document.getElementById("oo6").style = 'color: green';
  } else {
    document.getElementById("oo6").innerText = "No";
    document.getElementById("oo6").style = 'color: red';
  }
  if (ownerBinance) {
    document.getElementById("oo2").innerText = "onlyOwner()";
    document.getElementById("oo2").style = 'color: green';
  } else {
    document.getElementById("oo2").innerText = "No";
    document.getElementById("oo2").style = 'color: red';
  }
  if (ownerEther) {
    document.getElementById("oo1").innerText = "onlyOwner()";
    document.getElementById("oo1").style = 'color: green';
  } else {
    document.getElementById("oo1").innerText = "No";
    document.getElementById("oo1").style = 'color: red';
  }
  if (ownerFantom) {
    document.getElementById("oo12").innerText = "onlyOwner()";
    document.getElementById("oo12").style = 'color: green';
  } else {
    document.getElementById("oo12").innerText = "No";
    document.getElementById("oo12").style = 'color: red';
  }
  if (ownerMatic) {
    document.getElementById("oo9").innerText = "onlyOwner()";
    document.getElementById("oo9").style = 'color: green';
  } else {
    document.getElementById("oo9").innerText = "No";
    document.getElementById("oo9").style = 'color: red';
  }
  if (ownerOp) {
    document.getElementById("oo10").innerText = "onlyOwner()";
    document.getElementById("oo10").style = 'color: green';
  } else {
    document.getElementById("oo10").innerText = "No";
    document.getElementById("oo10").style = 'color: red';
  }

  // now the can claims's
  let canClaimAvax = await canClaim(CAAVAX, RPCAVAX);
  let canClaimBinance = await canClaim(CABNB, RPCBNB);
  let canClaimEther = await canClaim(CAETH, RPCETH);
  let canClaimFantom = await canClaim(CAFTM, RPCFTM);
  let canClaimMatic = await canClaim(CAMATIC, RPCMATIC);
  let canClaimOp = await canClaim(CAOP, RPCOP);
  // if-else for display
  if (canClaimAvax) {
    document.getElementById("cc6").innerText = "Yes";
    document.getElementById("cc6").style = 'color: green';
  } else {
    document.getElementById("cc6").innerText = "No";
    document.getElementById("cc6").style = 'color: red';
  }
  if (canClaimBinance) {
    document.getElementById("cc2").innerText = "Yes";
    document.getElementById("cc2").style = 'color: green';
  } else {
    document.getElementById("cc2").innerText = "No";
    document.getElementById("cc2").style = 'color: red';
  }
  if (canClaimEther) {
    document.getElementById("cc1").innerText = "Yes";
    document.getElementById("cc1").style = 'color: green';
  } else {
    document.getElementById("cc1").innerText = "No";
    document.getElementById("cc1").style = 'color: red';
  }
  if (canClaimFantom) {
    document.getElementById("cc12").innerText = "Yes";
    document.getElementById("cc12").style = 'color: green';
  } else {
    document.getElementById("cc12").innerText = "No";
    document.getElementById("cc12").style = 'color: red';
  }
  if (canClaimMatic) {
    document.getElementById("cc9").innerText = "Yes";
    document.getElementById("cc9").style = 'color: green';
  } else {
    document.getElementById("cc9").innerText = "No";
    document.getElementById("cc9").style = 'color: red';
  }
  if (canClaimOp) {
    document.getElementById("cc10").innerText = "Yes";
    document.getElementById("cc10").style = 'color: green';
  } else {
    document.getElementById("cc10").innerText = "No";
    document.getElementById("cc10").style = 'color: red';
  }

}

// Loads body information
async function loadBodyGetters() {

  // first off get the address
  await getAddress();
  // display it
  document.getElementById("addy").innerText = selectedAccount;

  // next get chainID
  let chainID = await getChainID()
  // display it
  document.getElementById("chainID").innerText = chainID;

  // Set Minter()
  //let startingNumber = await pendingProgramming{};
  let authMint = await getMaxMints();
  let teamMint = await getTeamMints();
  let imgHash = await getImgProv();
  let jsonHash = await getJsonProv();
  let lzStart = await getLZStartNumber();
  document.getElementById("startNumberCurrent").innerText = lzStart;
  document.getElementById("authMintCurrent").innerText = authMint;
  document.getElementById("teamMintCurrent").innerText = teamMint;
  document.getElementById("imgHashCurrent").innerText = imgHash;
  document.getElementById("jsonHashCurrent").innerText = jsonHash;

  // Set Presale()
  let startTime = await getPresaleStart();
  document.getElementById("startTimeCurrent").innerText = startTime;
  let readable = new Date(parseInt(startTime)*1000).toTimeString();
  let readable2 = new Date(parseInt(startTime)*1000).toDateString();
  document.getElementById("startTimeReadable").innerText = readable2 + ", " + readable;

  // Set Trusted Remote()
  let chainAvax = await getTR(6);
  let chainBinance = await getTR(2);
  let chainEther = await getTR(1);
  let chainFantom = await getTR(12);
  let chainMatic = await getTR(9);
  let chainOP = await getTR(11);
  document.getElementById("chainAvaxCurrent").innerText = chainAvax;
  document.getElementById("chainBinanceCurrent").innerText = chainBinance;
  document.getElementById("chainEtherCurrent").innerText = chainEther;
  document.getElementById("chainFantomCurrent").innerText = chainFantom;
  document.getElementById("chainMaticCurrent").innerText = chainMatic;
  document.getElementById("chainOPCurrent").innerText = chainOP;

  // Set Contract URI()
  let contractURI = await getContractURI();
  document.getElementById("contractURICurrent").innerText = contractURI;

  // Set Gas For Destination LZ Receive()
  let setGasValue = await getLZGas();
  document.getElementById("setGasValueCurrent").innerText = setGasValue;
}

// master event listener... combines all the shit above.
window.addEventListener('load', async () => {
  init();

  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
  document.querySelector("#btn-setMinter").addEventListener("click", sendSetMinter);
  document.querySelector("#btn-setPresale").addEventListener("click", sendSetPresale);
  document.querySelector("#btn-setAvax").addEventListener("click", sendSetAvax);
  document.querySelector("#btn-setBinance").addEventListener("click", sendSetBinance);
  document.querySelector("#btn-setEther").addEventListener("click", sendSetEther);
  document.querySelector("#btn-setFantom").addEventListener("click", sendSetFantom);
  document.querySelector("#btn-setMatic").addEventListener("click", sendSetMatic);
  document.querySelector("#btn-setOp").addEventListener("click", sendSetOp);
  document.querySelector("#btn-setContractURI").addEventListener("click", sendSetContractURI);
  document.querySelector("#btn-setBaseURI").addEventListener("click", sendSetBaseURI);
  document.querySelector("#btn-checkSplitAddress").addEventListener("click", getShares);
  document.querySelector("#btn-setAddSplit").addEventListener("click", sendAddSplit);
  document.querySelector("#btn-setERC2981This").addEventListener("click", sendSetERC2981This);
  document.querySelector("#btn-setRoyalties").addEventListener("click", sendSetRoyalties);
  document.querySelector("#btn-setGas").addEventListener("click", sendSetGas);
  document.querySelector("#btn-claim").addEventListener("click", sendClaim);
  document.querySelector("#btn-refreshClaims").addEventListener("click", loadClaimTable);
  document.querySelector("#btn-refreshRoles").addEventListener("click", loadRoleTable);
  document.querySelector("#btn-teamMint").addEventListener("click", sendTeamMint);
  document.querySelector("#btn-pushDev").addEventListener("click", sendPushDev);
  document.querySelector("#btn-checkDev").addEventListener("click", checkDev);
  document.querySelector("#btn-transferDev").addEventListener("click", sendTransferDev);
  document.querySelector("#btn-checkDev2").addEventListener("click", checkDev2);
  document.querySelector("#btn-pushOwner").addEventListener("click", sendPushOwner);
  document.querySelector("#btn-checkOwner").addEventListener("click", checkOwner);
  document.querySelector("#btn-transferOwner").addEventListener("click", sendTransferOwner);
  document.querySelector("#btn-checkOwner2").addEventListener("click", checkOwner2);


  let QSAvax = document.querySelectorAll("#swapAvax");
  QSAvax.forEach(button => {
    button.addEventListener("click", hitAVAX);
  });

  let QSBinance = document.querySelectorAll("#swapBinance");
  QSBinance.forEach(button => {
    button.addEventListener("click", hitBNB);
  });

  let QSEther = document.querySelectorAll("#swapEther");
  QSEther.forEach(button => {
    button.addEventListener("click", hitETH);
  });

  let QSFantom =document.querySelectorAll("#swapFantom");
  QSFantom.forEach(button => {
    button.addEventListener("click", hitFTM);
  });

  let QSMatic =document.querySelectorAll("#swapMatic");
  QSMatic.forEach(button => {
    button.addEventListener("click", hitMATIC);
  });

  let QSOp =document.querySelectorAll("#swapOp");
  QSOp.forEach(button => {
    button.addEventListener("click", hitOP);
  });
});
