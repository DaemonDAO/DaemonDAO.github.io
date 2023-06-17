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
const CA = "0x6eA48824253f64662945Ae77A790331D7183f8c0";
const ABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[]},{"type":"error","name":"MaxSplaining","inputs":[{"type":"string","name":"reason","internalType":"string"}]},{"type":"error","name":"MaxSplaining","inputs":[{"type":"string","name":"reason","internalType":"string"}]},{"type":"error","name":"MaxSplaining","inputs":[{"type":"string","name":"reason","internalType":"string"}]},{"type":"error","name":"TooLateBoomer","inputs":[{"type":"uint256","name":"yourTime","internalType":"uint256"},{"type":"uint256","name":"hitTime","internalType":"uint256"}]},{"type":"error","name":"TooSoonJunior","inputs":[{"type":"uint256","name":"yourTime","internalType":"uint256"},{"type":"uint256","name":"hitTime","internalType":"uint256"}]},{"type":"error","name":"Unauthorized","inputs":[]},{"type":"error","name":"Unauthorized","inputs":[]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"approved","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"event","name":"ApprovalForAll","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"operator","internalType":"address","indexed":true},{"type":"bool","name":"approved","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"PayeeAdded","inputs":[{"type":"address","name":"account","internalType":"address","indexed":false},{"type":"uint256","name":"shares","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"PayeeRemoved","inputs":[{"type":"address","name":"account","internalType":"address","indexed":false},{"type":"uint256","name":"shares","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"PayeesReset","inputs":[],"anonymous":false},{"type":"event","name":"PaymentReceived","inputs":[{"type":"address","name":"from","internalType":"address","indexed":false},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"PaymentReleased","inputs":[{"type":"address","name":"to","internalType":"address","indexed":false},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"SaleSet","inputs":[{"type":"uint256","name":"start","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"SetStartNumbers","inputs":[{"type":"uint256","name":"numberToMint","internalType":"uint256","indexed":false},{"type":"uint256","name":"teamMints","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"ThankYou","inputs":[{"type":"address","name":"user","internalType":"address","indexed":false},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"event","name":"UpdatedBaseURI","inputs":[{"type":"string","name":"_old","internalType":"string","indexed":false},{"type":"string","name":"_new","internalType":"string","indexed":false}],"anonymous":false},{"type":"event","name":"royalatiesSet","inputs":[{"type":"uint16","name":"value","internalType":"uint16","indexed":false},{"type":"address","name":"recipient","internalType":"address","indexed":false}],"anonymous":false},{"type":"fallback","stateMutability":"payable"},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"RevealProvenanceImages","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"RevealProvenanceJSON","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"RevealStartID","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"acceptDeveloper","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"acceptOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"addSplit","inputs":[{"type":"address","name":"newSplit","internalType":"address"},{"type":"uint256","name":"newShares","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"approve","inputs":[{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"owner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"burn","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"claim","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"clearRoyalties","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"clearSplits","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"declineDeveloper","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"declineOwnership","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"developer","inputs":[]},{"type":"function","stateMutability":"payable","outputs":[],"name":"donate","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"getApproved","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getBalance","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bytes4","name":"","internalType":"bytes4"}],"name":"getRoleAdmin","inputs":[{"type":"bytes4","name":"role","internalType":"bytes4"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"grantRole","inputs":[{"type":"bytes4","name":"role","internalType":"bytes4"},{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"hasRole","inputs":[{"type":"bytes4","name":"role","internalType":"bytes4"},{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isApprovedForAll","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"operator","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"minterCapacity","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"minterFees","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"minterMinted","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"minterPresaleFees","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"minterStatus","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"minterTeamMintsCapacity","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"minterTeamMintsMinted","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"ownerOf","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"paySplits","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"payee","inputs":[{"type":"uint256","name":"index","internalType":"uint256"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"publicMint","inputs":[{"type":"uint256","name":"quant","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"pushDeveloper","inputs":[{"type":"address","name":"newDeveloper","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"pushOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"releasable","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"released","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"removeSplit","inputs":[{"type":"address","name":"remove","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceDeveloper","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceRole","inputs":[{"type":"bytes4","name":"role","internalType":"bytes4"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"revokeRole","inputs":[{"type":"bytes4","name":"role","internalType":"bytes4"},{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"receiver","internalType":"address"},{"type":"uint256","name":"royaltyAmount","internalType":"uint256"}],"name":"royaltyInfo","inputs":[{"type":"uint256","name":"_tokenId","internalType":"uint256"},{"type":"uint256","name":"_salePrice","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"safeTransferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"safeTransferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"},{"type":"bytes","name":"data","internalType":"bytes"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setApprovalForAll","inputs":[{"type":"address","name":"operator","internalType":"address"},{"type":"bool","name":"approved","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setBaseURI","inputs":[{"type":"string","name":"_base","internalType":"string"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setDeveloper","inputs":[{"type":"address","name":"newDisplay","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setLlamasEngine","inputs":[{"type":"uint256","name":"mintingCap","internalType":"uint256"},{"type":"uint256","name":"teamMints","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setMintFees","inputs":[{"type":"uint256","name":"number","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setOwner","inputs":[{"type":"address","name":"newDisplay","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setPresaleFees","inputs":[{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setProvenance","inputs":[{"type":"string","name":"img","internalType":"string"},{"type":"string","name":"json","internalType":"string"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setRoyalties","inputs":[{"type":"address","name":"newAddress","internalType":"address"},{"type":"uint16","name":"permille","internalType":"uint16"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setRoyaltiesThis","inputs":[{"type":"uint16","name":"permille","internalType":"uint16"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setStartTime","inputs":[{"type":"uint256","name":"time","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setStatus","inputs":[{"type":"bool","name":"toggle","internalType":"bool"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"shares","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"showStart","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"supportsInterface","inputs":[{"type":"bytes4","name":"interfaceId","internalType":"bytes4"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"teamMint","inputs":[{"type":"address[]","name":"theList","internalType":"address[]"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"tokenURI","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalReleased","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalShares","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferDeveloper","inputs":[{"type":"address","name":"newDeveloper","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"receive","stateMutability":"payable"}]


// Useful for later you'll see
let saleStart;
let mintFees;
//const rpc = 'https://canto.slingshot.finance/';

let rpc = null;

const rpcEndpoints = [
  'https://canto.slingshot.finance/',
  'https://mainnode.plexnode.org:8545',
  'https://canto.neobase.one'
];

const testRPC = async (endpoint) => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'eth_blockNumber',
        params: [],
        id: 1
      })
    });
    if (response.status >= 200 && response.status < 300) {
      const data = await response.json();
      if (data.result) {
        return true;
      }
    }
  } catch (error) {
    console.error(`Error testing RPC ${endpoint}`, error);
  }
  return false;
}

(async () => {
  for (const endpoint of rpcEndpoints) {
    if (await testRPC(endpoint)) {
      rpc = endpoint;
      break;
    }
  }
  console.log(`Selected RPC endpoint: ${rpc}`);
})();

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
  const web3 = new Web3(rpc);
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
  var distance = Number(saleStart) - Number(timeMeow);

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
  const web3 = new Web3(rpc);
  let tokenContract = await new web3.eth.Contract(ABI, CA);
  let value = await tokenContract.methods.minterMinted().call();
  console.log(value, "has been minted");
  return value;
}

// web3 call() for how many allowed to mint on that contract
async function queryAlloted() {
  const web3 = new Web3(rpc);
  let tokenContract = await new web3.eth.Contract(ABI, CA);
  let value = await tokenContract.methods.minterCapacity().call();
  console.log(value, "to mint on this chain");
  return value;
}

// cost per mint in ETH
async function fetchMintFee(){
  const web3 = new Web3(rpc);
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
  document.getElementById("price").innerHTML = Number(mintFees / BigInt('1000000000000000000')).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("count").innerHTML = theCount;
  document.getElementById("total").innerHTML = theTotal;
}


async function mintNFT() {
  let quant = $('#quantNFT').val();
  mintFees = await fetchMintFee();
  let value = quant * Number(mintFees);
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
});
