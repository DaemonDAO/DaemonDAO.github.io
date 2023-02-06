/*     +%%#-                           ##.        =+.    .+#%#+:       *%%#:    .**+-      =+
 *   .%@@*#*:                          @@: *%-   #%*=  .*@@=.  =%.   .%@@*%*   +@@=+=%   .%##
 *  .%@@- -=+                         *@% :@@-  #@=#  -@@*     +@-  :@@@: ==* -%%. ***   #@=*
 *  %@@:  -.*  :.                    +@@-.#@#  =@%#.   :.     -@*  :@@@.  -:# .%. *@#   *@#*
 * *%@-   +++ +@#.-- .*%*. .#@@*@#  %@@%*#@@: .@@=-.         -%-   #%@:   +*-   =*@*   -@%=:
 * @@%   =##  +@@#-..%%:%.-@@=-@@+  ..   +@%  #@#*+@:      .*=     @@%   =#*   -*. +#. %@#+*@
 * @@#  +@*   #@#  +@@. -+@@+#*@% =#:    #@= :@@-.%#      -=.  :   @@# .*@*  =@=  :*@:=@@-:@+
 * -#%+@#-  :@#@@+%++@*@*:=%+..%%#=      *@  *@++##.    =%@%@%%#-  =#%+@#-   :*+**+=: %%++%*
 *
 * @title: wavedaemons.js
 * @author: Max Flow O2 -> @MaxFlowO2 on bird app/GitHub
 * @notice: web3.js file for wavedaemons.html
 */

"use strict";
// the wave daemons
const CA = "0x8073a39bc8f89d9def372fABc20C5E4b200684ba";
const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"reason","type":"string"}],"name":"MaxSplaining","type":"error"},{"inputs":[{"internalType":"string","name":"reason","type":"string"}],"name":"MaxSplaining","type":"error"},{"inputs":[{"internalType":"string","name":"reason","type":"string"}],"name":"MaxSplaining","type":"error"},{"inputs":[{"internalType":"uint256","name":"yourTime","type":"uint256"},{"internalType":"uint256","name":"hitTime","type":"uint256"}],"name":"TooLateBoomer","type":"error"},{"inputs":[{"internalType":"uint256","name":"yourTime","type":"uint256"},{"internalType":"uint256","name":"hitTime","type":"uint256"}],"name":"TooSoonJunior","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"PayeeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"PayeeRemoved","type":"event"},{"anonymous":false,"inputs":[],"name":"PayeesReset","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"}],"name":"SaleSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"numberToMint","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"teamMints","type":"uint256"}],"name":"SetStartNumbers","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ThankYou","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_old","type":"string"},{"indexed":false,"internalType":"string","name":"_new","type":"string"}],"name":"UpdatedBaseURI","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"value","type":"uint16"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"}],"name":"royalatiesSet","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"RevealProvenanceImages","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RevealProvenanceJSON","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RevealStartID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newSplit","type":"address"},{"internalType":"uint256","name":"newShares","type":"uint256"}],"name":"addSplit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"burnToMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearRoyalties","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearSplits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"declineDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"declineOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"developer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"donate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterCapacity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterTeamMintsCapacity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterTeamMintsMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paySplits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"payee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"quant","type":"uint256"}],"name":"publicMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newDeveloper","type":"address"}],"name":"pushDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"pushOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"releasable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"released","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"remove","type":"address"}],"name":"removeSplit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"royaltyAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_base","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newDisplay","type":"address"}],"name":"setDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"mintingCap","type":"uint256"},{"internalType":"uint256","name":"teamMints","type":"uint256"}],"name":"setLlamasEngine","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"number","type":"uint256"}],"name":"setMintFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newDisplay","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"img","type":"string"},{"internalType":"string","name":"json","type":"string"}],"name":"setProvenance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"},{"internalType":"uint16","name":"permille","type":"uint16"}],"name":"setRoyalties","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"permille","type":"uint16"}],"name":"setRoyaltiesThis","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"toggle","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"CA","type":"address"}],"name":"setTinys","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"shares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"showStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"quant","type":"uint256"}],"name":"teamMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReleased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newDeveloper","type":"address"}],"name":"transferDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
// the tiny daemons
const TD_CA = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";
const TD_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"reason","type":"string"}],"name":"MaxSplaining","type":"error"},{"inputs":[{"internalType":"string","name":"reason","type":"string"}],"name":"MaxSplaining","type":"error"},{"inputs":[{"internalType":"string","name":"reason","type":"string"}],"name":"MaxSplaining","type":"error"},{"inputs":[{"internalType":"string","name":"reason","type":"string"}],"name":"MaxSplaining","type":"error"},{"inputs":[{"internalType":"uint256","name":"yourTime","type":"uint256"},{"internalType":"uint256","name":"hitTime","type":"uint256"}],"name":"TooLateBoomer","type":"error"},{"inputs":[{"internalType":"uint256","name":"yourTime","type":"uint256"},{"internalType":"uint256","name":"hitTime","type":"uint256"}],"name":"TooSoonJunior","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_old","type":"string"},{"indexed":false,"internalType":"string","name":"_new","type":"string"}],"name":"ContractURIChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"_srcAddress","type":"bytes"},{"indexed":false,"internalType":"uint64","name":"_nonce","type":"uint64"},{"indexed":false,"internalType":"bytes","name":"_payload","type":"bytes"}],"name":"MessageFailed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"PayeeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"PayeeRemoved","type":"event"},{"anonymous":false,"inputs":[],"name":"PayeesReset","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"length","type":"uint256"}],"name":"PresaleSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"numberToMint","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startingID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endingID","type":"uint256"}],"name":"SetStartNumbers","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ThankYou","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"_chainId","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"_trustedRemote","type":"bytes"}],"name":"TrustedRemoteSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_old","type":"string"},{"indexed":false,"internalType":"string","name":"_new","type":"string"}],"name":"UpdatedBaseURI","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"}],"name":"royalatiesSet","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"RevealProvenanceImages","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RevealProvenanceJSON","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RevealStartNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newSplit","type":"address"},{"internalType":"uint256","name":"newShares","type":"uint256"}],"name":"addSplit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearRoyalties","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearSplits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentLZGas","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"declineDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"declineOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"developer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"donate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"failedMessages","outputs":[{"internalType":"uint256","name":"payloadLength","type":"uint256"},{"internalType":"bytes32","name":"payloadHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"internalType":"bytes","name":"_srcAddress","type":"bytes"},{"internalType":"uint64","name":"_nonce","type":"uint64"},{"internalType":"bytes","name":"_payload","type":"bytes"}],"name":"lzReceive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lzStartNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterCurrentMints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterMaximumCapacity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterMaximumTeamMints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterMintsRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterTeamMintsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterTeamMintsRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"internalType":"bytes","name":"_srcAddress","type":"bytes"},{"internalType":"uint64","name":"_nonce","type":"uint64"},{"internalType":"bytes","name":"_payload","type":"bytes"}],"name":"onLzReceive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"payee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"quant","type":"uint256"}],"name":"presaleMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"publicMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newDeveloper","type":"address"}],"name":"pushDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"pushOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"released","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"remSplit","type":"address"}],"name":"removeSplit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"internalType":"bytes","name":"_srcAddress","type":"bytes"},{"internalType":"uint64","name":"_nonce","type":"uint64"},{"internalType":"bytes","name":"_payload","type":"bytes"}],"name":"retryMessage","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"royaltyAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_base","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"URI","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newDisplay","type":"address"}],"name":"setDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newVal","type":"uint256"}],"name":"setGasForDestinationLzReceive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"startNumber","type":"uint256"},{"internalType":"uint256","name":"authMint","type":"uint256"},{"internalType":"uint256","name":"teamMints","type":"uint256"},{"internalType":"string","name":"img","type":"string"},{"internalType":"string","name":"json","type":"string"},{"internalType":"address","name":"newAddress","type":"address"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newDisplay","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"}],"name":"setPresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"},{"internalType":"uint256","name":"permille","type":"uint256"}],"name":"setRoyalties","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"permille","type":"uint256"}],"name":"setRoyaltiesThis","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_chainId","type":"uint16"},{"internalType":"bytes","name":"_trustedRemote","type":"bytes"}],"name":"setTrustedRemote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"shares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"showPresaleStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"showPresaleTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"showStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"teamMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReleased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newDeveloper","type":"address"}],"name":"transferDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_chainId","type":"uint16"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"traverseChains","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"}],"name":"trustedRemoteLookup","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];

// Useful for later you'll see
let saleStart;
let selectedIds;
let approvedForAll;
let mintFees;

// after window is loaded completely (load screen)
window.onload = function(){
  //hide the preloader
  $(".preloader").fadeOut(1000);
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);

  fetchStartTime();
  setTheNumbers();
}

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
    //Fantom
    case 7700:
      networkData = [
        {
          chainId: "0x1e14",
          chainName: "Canto",
          rpcUrls: ["https://canto.slingshot.finance"],
          nativeCurrency: {
            name: "Canto",
            symbol: "CANTO",
            decimals: 18,
          },
          blockExplorerUrls: ["https://tuber.build/"],
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

  //if(location.protocol !== 'https:') {
    //const alert = document.querySelector("#alert-error-https");
    //alert.style.display = "block";
    //document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
    //return;
  //}
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

  // for this goat rope
  populateTDs(selectedAccount);

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

  await swapChain("0x1e14", 7700);

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
async function swapChain(network, number) {
  try {
    // check if the chain to connect to is installed
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: network }], // chainId must be in hexadecimal numbers
    });
  } catch (error) {
    // This error code indicates that the chain has not been added to MetaMask
    // if it is not, then install it into the user MetaMask
    if (error.code === 4902) {
      try {
        addNetwork(number);
      } catch (addError) {
        console.error(addError);
      }
    }
    console.error(error);
  }
}

// fetch times from contract
async function fetchStartTime() {
  const web3 = new Web3("https://rpc.ftm.tools");
  let tokenContract = await new web3.eth.Contract(ABI, CA);
  saleStart = await tokenContract.methods.showStart().call();
}

// Update the count down every 1 second
// rewritten to web2 => web3 via contract abi... using FTM for the web3
// all contracts will have same datum
window.setInterval(async () => {

  // Get today's date and time in seconds
  var timeMeow = new Date().getTime();
  timeMeow = parseInt(timeMeow/1000);

  // 2 html id's to replace
  var showText;
  var buttonText;

  // set the variables
  if (saleStart > timeMeow) {
    showText = "Mint live in: ";
    buttonText = "Not Active";
  } else {
    showText = "Mint active: ";
    buttonText = "Mint";
  }

  // Find the distance between now and the count down date
  var distance = saleStart - timeMeow;

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
    document.getElementById("buttonText").innerHTML = "Mint";
  }
}, 1000);

// web3 call() for how many have minted on that contract
async function queryMinted() {
  const web3 = new Web3("https://rpc.ftm.tools");
  let tokenContract = await new web3.eth.Contract(ABI, CA);
  let value = await tokenContract.methods.minterMinted().call();
  console.log(value, "has been minted");
  return value;
}

// web3 call() for how many allowed to mint on that contract
async function queryAlloted() {
  const web3 = new Web3("https://rpc.ftm.tools");
  let tokenContract = await new web3.eth.Contract(ABI, CA);
  let value = await tokenContract.methods.minterCapacity().call();
  console.log(value, "to mint on this chain");
  return value;
}

// cost per mint in ETH
async function fetchMintFee(){
  const web3 = new Web3("https://rpc.ftm.tools/");
  let NFTContract = await new web3.eth.Contract(ABI, CA);
  let value = await NFTContract.methods.minterFees().call();
  if(!value){
    console.error("Can not fetch minterFees() on contract");
    return 0;
  }
  return value;
}

// puts the above together with innerHTML rewrite could go innerTEXT as well
async function setTheNumbers() {
  let theCount = await queryMinted();
  let theTotal = await queryAlloted();
  mintFees = await fetchMintFee();
  document.getElementById("price").innerHTML = (mintFees / Math.pow(10,18)).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("count").innerHTML = theCount;
  document.getElementById("total").innerHTML = theTotal;
}


//TinyDaemon Viewer for burn
async function populateTDs(address) {
  const token_address = '0xC0C73CcFEE66eb400acCee23Fe70369186e4D3C9' //Longnecks
  // TODO: in the future, to see all NFTs, modify contractCreation and use 0
  let startBlock = 2837826 //just before minting
  const block_query = `https://tuber.build/api?module=account&action=tokentx`
  + `&contractaddress=${token_address}&address=${address}&startblock=${startBlock}&endblock=999999999&sort=asc`
  // console.log(ftmscan_query)
  const result = await axios.get(block_query)
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
  console.log(`${address} owns ${tokenList.length} DigiDaemons`)
  let boxNFT = 'info-selector'
  //trouble below

  if (tokenList.length > 0) {
    var tinyDiv = document.getElementById('digidiv')
    var galleryCode = ``
    //let i = 0;
    for(let i = 0; i < tokenList.length; i++){
      galleryCode += `
      <div id="${tokenList[i]}" class="${boxNFT}">
        <p><img alt="DIGIDMN_${tokenList[i]}" src="./images/TinyDaemons/TDMN_${tokenList[i]}.jpg" /></p>
        <h3>TinyDaemon #${tokenList[i]}</h3>
      </div>
      `;
     }
     tinyDiv.innerHTML = galleryCode
  }

  //select Tinys
  $(".info-selector").on("click", function() {
    $(this).toggleClass('info-selected');
    selectedIds = $('.info-selected').map(function() {
      return this.id;
    }).get();
    console.log(selectedIds);
    document.getElementById("tinycount").innerHTML = `${selectedIds.length} Selected`

  });
}

async function burn2mint() {
  const web3 = new Web3(provider);
  let tdContract = await new web3.eth.Contract(TD_ABI, TD_CA);
  let wdContract = await new web3.eth.Contract(ABI, CA);

  if (!approvedForAll && selectedIds.length >= 5){
    let value = await tdContract
                        .methods
                        .setApprovalForAll(CA, true)
                        .send({ from: selectedAccount })
                        .on(
                          'transactionHash',
                          function(hash) {
                            console.log(`setApprovalForAll(${CA}, true)`, hash);
                          }
                        )
                        .then(async function(recipt) {
                          await wdContract
                                  .methods
                                  .burnToMint(selectedIds)
                                  .send({ from: selectedAccount })
                                  .on(
                                    'transactionHash',
                                    function(hash) {
                                      console.log(`burnToMint(${selectedIds})`, hash);
                                    }
                                  );
                        });
    if (!value) {
      console.log("(!approvedForAll) failed in burn2mint()");
    }
  } else if (approvedForAll && selectedIds.length >= 5){
    let value = await wdContract
                        .methods
                        .burnToMint(selectedIds)
                        .send({ from: selectedAccount })
                        .on(
                           'transactionHash',
                           function(hash) {
                             console.log(`burnToMint(${selectedIds})`, hash);
                           }
                         );
    if (!value) {
      console.log("(approvedForAll) failed in burn2mint()");
    }
  }
}

async function revoke() {
  const web3 = new Web3(provider);
  let tdContract = await new web3.eth.Contract(TD_ABI, TD_CA);

  if (approvedForAll) {
    let value = await tdContract
                        .methods
                        .setApprovalForAll(CA, false)
                        .send({ from: selectedAccount })
                        .on(
                          'transactionHash',
                          function(hash) {
                            console.log(`setApprovalForAll(${CA}, false)`, hash);
                          }
                        );
    if (!value) {
      console.log("setApprovalForAll(${CA}, false) failed");
    }
    await checkStatus();
  }
}

async function mintNFT() {
  let quant = $('#quantNFT').val();
  mintFees = await fetchMintFee();
  let value = quant * mintFees;
  var timeMeow = new Date().getTime();
  timeMeow = parseInt(timeMeow/1000);

  if (timeMeow >= saleStart) {
    const web3 = new Web3(provider);
    let tdContract = await new web3.eth.Contract(ABI, CA);
    let mintIt = tdContract
                   .methods
                   .publicMint(quant)
                   .send({ from: selectedAccount, value: value})
                   .on(
                     'transactionHash',
                     function(hash) {
                       console.log(`publicMint(${quant})`, hash);
                     }
                   );
    if (!mintIt) {
      console.log(`Failed publicMint(${quant})`);
    }
  } else {
    console.log('Too soon junior, is it now',timeMeow,'and the mint is at',saleStart);
  }
}

// master event listener... combines all the shit above.
window.addEventListener('load', async () => {
  init();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
  document.querySelector("#btn-buyNFT").addEventListener("click", mintNFT);
  document.querySelector("#btn-revoke").addEventListener("click", revoke);
});
