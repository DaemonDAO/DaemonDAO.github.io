/*__      __  __  ______  __  __   __  __
* /\ \    /\ \/\ \/\  ___\/\ \/ /  /\ \_\ \   
* \ \ \___\ \ \_\ \ \ \___\ \  _"-.\ \____ \  
*  \ \_____\ \_____\ \_____\ \_\ \_\\/\_____\ 
*   \/_____/\/_____/\/_____/\/_/\/_/ \/_____/ 
*
* @title: digidistillery.js
* @author: Lucky -> @Luciano_NFT on bird app/GitHub
* @notice: web3.js file for digidistillery.html
*/

import DigiDistilleryABI from "../abi/digidistillery_contract.js";
import DigiTokenABI from "../abi/digidaemons_token.js";

"use strict";
const DigiDistilleryCA = "0x3B21c992D69Dde32aee0c935A2806743f9EE8C2d";
const DigiTokenCA = "0x6eA48824253f64662945Ae77A790331D7183f8c0";

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



// Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider;

// Add networks to metamask
async function addNetwork(id) {
  let networkData;
  switch (id) {
    //CANTO
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
  //populate NFTs
  await populateNFTs(selectedAccount);
  await checkApprovalStatus();
  //collapsible divs
  var coll = document.getElementsByClassName("collapsible");
  console.log(coll);
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
  //end collapsible
}


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

// "connect button"
async function onConnect() {

  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
  } catch(e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  await swapChain(7700, "0x1e14");

  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
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
  //const element = document.getElementById('helloplsconnect');
  //element.remove();
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

//after window is loaded completely
window.onload = function(){
  //hide the preloader
  $(".preloader").fadeOut(1000);
  
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);
}

let block;
let end;
let rpb;
let blockCountdown;
let dateCountdown;
let totalBalance;

setInterval(setBlockStats, 6000); //repeat every 6 seconds
setInterval(setBalanceStats, 10000); //repeat every 60 seconds

async function setBalanceStats(){
  totalBalance = await getBalance();
  document.getElementById("balance").innerHTML = `Contract balance: ${totalBalance}`;

}

async function setBlockStats() {
  block = await getCurrentBlock();
  end = await getEndBlock();
  rpb = await getRewardsPerBlock();
  blockCountdown = end-block;
  dateCountdown = formatDuration(blockCountdown*6);

  document.getElementById("block-now-last").innerHTML = `Block now: ${block} | Block end: ${end}`;
  document.getElementById("block-countdown").innerHTML = `Countdown: ${blockCountdown} | In time: ${dateCountdown}`;
}

function formatDuration(seconds) {
  let days = Math.floor(seconds / (24 * 60 * 60));
  let hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
  let minutes = Math.floor((seconds % (60 * 60)) / 60);
  let remainingSeconds = seconds % 60;

  let result = "";
  if (days > 0) {
    result += days + "D:";
  }
  if (hours < 10) {
    result += "0";
  }
  result += hours + "H:";
  if (minutes < 10) {
    result += "0";
  }
  result += minutes + "M:";
  if (remainingSeconds < 10) {
    result += "0";
  }
  result += (remainingSeconds+"S");

  return result;
}



async function getCurrentBlock() {

  const query = 'https://tuber.build/api?module=block&action=eth_block_number';

  const result = await axios.get(query)
    .then(response => {
      // console.log('Axios got a response...');console.log(response);
      return response.data.result
    })
    .catch(error => {
      console.log(error)
    })
  
    const num = parseInt(result);

    return num
}

//getStakeContractBalance

async function getBalance() {
  const web3 = new Web3(rpc);
  let ryeContract = await new web3.eth.Contract(DigiDistilleryABI, DigiDistilleryCA);
  let value = await ryeContract.methods.getStakeContractBalance().call();
  value = value / 1e18;
  console.log(`stake contract balance: ${value}`);
  return value;
}


async function getRewardsPerBlock() {
  const web3 = new Web3(rpc);
  let ryeContract = await new web3.eth.Contract(DigiDistilleryABI, DigiDistilleryCA);
  let value = await ryeContract.methods.tokensPerBlock().call();
  value = value / 1e18;
  //console.log(value, " tokens per block");
  return value;
}

async function getEndBlock() {
  const web3 = new Web3(rpc);
  let ryeContract = await new web3.eth.Contract(DigiDistilleryABI, DigiDistilleryCA);
  let value = await ryeContract.methods.rewardsEndBlock().call();
  //console.log(value, " tokens per block");
  return value;
}


async function getPendingRewards(address) {
  const web3 = new Web3(rpc);
  let ryeContract = await new web3.eth.Contract(DigiDistilleryABI, DigiDistilleryCA);
  let value = await ryeContract.methods.getRewardsEarnedForWallet(address).call();
  value = value / 1e18;
  pendingRewards = value.toFixed(3);
  document.getElementById("harvest-statement").innerHTML = `<button id="btn-harvest" class="button-2 traverse button w-button">HARVEST ALL</button> pending: ⋐${pendingRewards}`
  console.log(pendingRewards, " pendng rewards");
  //document.getElementById("rye-digi-balance").innerHTML = `<p>Staked: ${value} 👹</p>`;
}


// get selectedAccount's staked balance
async function getMyStakedIds(contractAddress, ABI) {
  const web3 = new Web3(provider);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let value = await tokenContract.methods.getOwnedTokenIds(selectedAccount).call();
  console.log('my staked tokens: ', value);
  return value;
}

async function getChainID() {
  // web3
  const web3 = new Web3(provider);

  // chainId
  const chainId = await web3.eth.getChainId();
  console.log(`chain ID is: ${chainId}`);

  return chainId;
}

/*
async function getContractTransactions() {
  const web3 = new Web3(rpc);
  const fromBlock = 3638333; // Start block number
  const toBlock = block; // End block number (or 'latest' for most recent block)
  
  // Create filter options to search for contract events
  const filterOptions = {
    fromBlock: fromBlock,
    toBlock: toBlock,
    address: DigiDistilleryCA,
  };
  
  // Get contract events matching the filter options
  const contractEvents = await web3.eth.getPastLogs(filterOptions);
  
  // Extract all unique addresses that have transacted with the contract
  const addresses = [...new Set(contractEvents.map(event => event.address))];
  
  return addresses;
}*/



async function getTotalPendingHarvest() {

  let addresses = getContractTransactions();

  console.log(addresses);

  let total = 0;
  var i;
  for (i = 0; i < addresses.length; i++) {

    let harvest = getPendingRewards(addresses[i]);
    total = total + harvest
  }

  return total;

}


// master event listener... combines all the shit above.
window.addEventListener('load', async () => {
  init();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
});
