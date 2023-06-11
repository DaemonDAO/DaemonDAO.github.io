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

const ryeToggle = document.querySelector('#rye-toggle input[type="checkbox"]');
const ryeHeld = document.querySelector('#rye-held');
const ryeStaked = document.querySelector('#rye-staked');

// For later
let approvedForAll;
let selectedIds;
let selectedStakedIds;
let pendingRewards;

setInterval(setRyeNumbers, 6000); //repeat every 6 seconds


ryeToggle.addEventListener('change', () => {
  if (ryeToggle.checked) {
    ryeHeld.classList.add('show');
    ryeStaked.classList.remove('show');
  } else {
    ryeHeld.classList.remove('show');
    ryeStaked.classList.add('show');
  }
const divs = document.querySelectorAll('.info-selected');
console.log(`number of selected divs: ${divs.length}`);
divs.forEach(div => {
div.classList.toggle('info-selector');
});
});


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
    // & does not allow to re-scan the QR code with a new wallet.
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
    ryeHeld.classList.add('show'); //temp position
  }, 1000);
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

// web3 call() for how many Digis have been staked in a contract
async function getTotalStakedBalance() {
  const web3 = new Web3(rpc);
  let ryeContract = await new web3.eth.Contract(DigiDistilleryABI, DigiDistilleryCA);
  let value = await ryeContract.methods.totalStaked().call();
  //console.log(value, " total DigiDaemons staked");
  //document.getElementById("rye-digi-balance").innerHTML = `<p>Staked: ${value} 👹</p>`;
  return value;
}


async function getRewardsPerBlock() {
  const web3 = new Web3(rpc);
  let ryeContract = await new web3.eth.Contract(DigiDistilleryABI, DigiDistilleryCA);
  let value = await ryeContract.methods.tokensPerBlock().call();
  //value = value / 1e18;
  console.log(value);
  value = Number(value) / 1e18;
  console.log(value);
  //console.log(value, " tokens per block");
  return value;
}

async function getPendingRewards() {
  const web3 = new Web3(rpc);
  let ryeContract = await new web3.eth.Contract(DigiDistilleryABI, DigiDistilleryCA);
  let value = await ryeContract.methods.getRewardsEarnedForWallet(selectedAccount).call();
  value = Number(value) / 1e18;
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

async function setRyeNumbers() {
  const totalStaked = await getTotalStakedBalance();
  document.getElementById("rye-digi-balance").innerHTML = `<p>Staked: ${totalStaked} 👹</p>`;

  const block = await getCurrentBlock();
  document.getElementById("rye-block").innerHTML = `<p>Block: ${block}</p>`;

  const rpb = await getRewardsPerBlock();
  document.getElementById("rye-APR").innerHTML = `<p>Emission rate: ⋐${rpb}/block</p>`

}

async function refreshNFTs() {
  const web3 = new Web3(provider);
  const accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];
  await checkApprovalStatus();
  await populateNFTs(selectedAccount);
}



// DigiDaemon Approve/Revoke button

async function checkApprovalStatus() {
  const web3 = new Web3(rpc);
  let tokenContract = await new web3.eth.Contract(DigiTokenABI, DigiTokenCA);
  approvedForAll = await tokenContract.methods.isApprovedForAll(selectedAccount, DigiDistilleryCA).call();
  console.log("Are DigiDaemons approved for all", selectedAccount,"? Answer is",approvedForAll);
  if(approvedForAll) {
    document.getElementById("approval-status").innerHTML = "Approval status: ✅";
    document.getElementById("approval-action").innerHTML = `<button id="btn-revoke" class="button-2 traverse button w-button">REVOKE</button>`;
    $("#btn-revoke").on("click", revoke);
  } else {
    document.getElementById("approval-status").innerHTML = "Approval status: ❌";
    document.getElementById("approval-action").innerHTML = `<button id="btn-approve" class="button-2 traverse button w-button">APPROVE</button>`;
    $("#btn-approve").on("click", approve);
  }
}

async function revoke() {
  const web3 = new Web3(provider);
  let tokenContract = await new web3.eth.Contract(DigiTokenABI, DigiTokenCA);
  console.log("revoke attempt");
  if (approvedForAll) {
    let value = await tokenContract
                        .methods
                        .setApprovalForAll(CA, false)
                        .send({ from: selectedAccount })
                        .on(
                          'transactionHash',
                          function(hash) {
                            console.log(`setApprovalForAll(${DigiDistilleryCA}, false)`, hash);
                          }
                        );
    if (!value) {
      console.log("setApprovalForAll(${CA}, false) failed");
    }
    await refreshNFTs();
  }
}

async function approve() {
  const web3 = new Web3(provider);
  let tokenContract = await new web3.eth.Contract(DigiTokenABI, DigiTokenCA);
  console.log("approve attempt");
  if (approvedForAll == false) {
    let value = await tokenContract
                        .methods
                        .setApprovalForAll(DigiDistilleryCA, true)
                        .send({ from: selectedAccount })
                        .on(
                          'transactionHash',
                          function(hash) {
                            console.log(`setApprovalForAll(${DigiDistilleryCA}, true)`, hash);
                          }
                        );
    if (!value) {
      console.log(`setApprovalForAll(${DigiDistilleryCA}, true) failed`);
    }
    await refreshNFTs();
  }
}


async function ryeStake(){
  const web3 = new Web3(provider);
  let ryeContract = await new web3.eth.Contract(DigiDistilleryABI, DigiDistilleryCA);
  if (approvedForAll) {
    let value = await ryeContract
                        .methods
                        .stakeNFTS(selectedIds)
                        .send({ from: selectedAccount })
                        .on(
                          'transactionHash',
                          function(hash) {
                            console.log(`stakeNFTs(${selectedIds})`, hash);
                          }
                        );
    if (!value) {
      console.log(`stakeNFTs(${selectedIds}) failed`);
    }
  await refreshNFTs();
  }
}

async function ryeUnstake(){
  const web3 = new Web3(provider);
  let ryeContract = await new web3.eth.Contract(DigiDistilleryABI, DigiDistilleryCA);
  if (approvedForAll) {
    let value = await ryeContract
                        .methods
                        .unStakeNFTS(selectedStakedIds)
                        .send({ from: selectedAccount })
                        .on(
                          'transactionHash',
                          function(hash) {
                            console.log(`unStakeNFTs(${selectedStakedIds})`, hash);
                          }
                        );
    if (!value) {
      console.log(`unStakeNFTs(${selectedStakedIds}) failed`);
    }
    await refreshNFTs();
  }
}

async function ryeHarvest(){
  const web3 = new Web3(provider);
  console.log('Attempting harvest');
  let ryeContract = await new web3.eth.Contract(DigiDistilleryABI, DigiDistilleryCA);
  let stakedList = await getMyStakedIds(DigiDistilleryCA, DigiDistilleryABI);
  if (pendingRewards > 0) {
    let value = await ryeContract
                        .methods
                        .harvestMultiple(stakedList)
                        .send({ from: selectedAccount })
                        .on(
                          'transactionHash',
                          function(hash) {
                            console.log(`harvestMultiple(${stakedList})`, hash);
                          }
                        );
    if (!value) {
      console.log(`harvestMultiple(${stakedList}) failed`);
    }
    await refreshNFTs();
  }
  else {
    console.log('no pending rewards available to harvest');
  }
}

//Token loader
async function populateNFTs(address) {
  await checkApprovalStatus();
  // TODO: in the future, to see all NFTs, modify contractCreation and use 0
  let startBlock = 3039938 //just before minting
  const query = `https://tuber.build/api?module=account&action=tokentx`
  + `&contractaddress=${DigiTokenCA}&address=${address}&startblock=${startBlock}&endblock=999999999&sort=asc`
  const result = await axios.get(query)
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

  document.getElementById("rye-hold-statement").innerHTML = `You hold ${tokenList.length} DigiDaemons`
  //const token_trx = Object.values(dictionary)
  console.log(tokenList);
  console.log(`${address} owns ${tokenList.length} DigiDaemons`);
  let boxNFT = 'info-selector';
  let boxStakedNFT = 'info-staked-selector';
  //trouble below

  if (tokenList.length > 0) {
    var ryeHeldContainer = document.getElementById('rye-held-container');
    var galleryCode = `<h3 id='held-count'>0 Selected</h3>`;
    if(approvedForAll) {
      galleryCode += `<h3 id="allow-stake"><button id="btn-stake" class="button-2 traverse button w-button">STAKE</button></h3>`;
    } else {
      galleryCode += `<h3 id="allow-stake">Approve to stake</button></h3>`;
    }
    //let i = 0;
    for(let i = 0; i < tokenList.length; i++){

      let tokenMetadataURI = `https://gateway.maxflowo2.com/ipfs/QmNdDwKB6kfUo33i4dvDZEi2QzdFPEozMRxzG8sVVuq1k6/${tokenList[i]}.json`;
      const tokenMetadata = await fetch(tokenMetadataURI).then((response) => response.json());

      galleryCode += `
      <div id="${tokenList[i]}" class="${boxNFT}">
        <p><img alt="DIGIDMN_${tokenList[i]}" src=${tokenMetadata["image"]} /></p>
        <h3>DIGIDMN #${tokenList[i]}</h3>
        <h3>${tokenMetadata["name"]}</h3>
      </div>
      `;
     }
     ryeHeldContainer.innerHTML = galleryCode
  }

  let stakedList = await getMyStakedIds(DigiDistilleryCA, DigiDistilleryABI);

  document.getElementById("rye-staked-statement").innerHTML = `You have ${stakedList.length} staked DigiDaemons`

 let totalStaked = await getTotalStakedBalance();
 // let poolWeight = (100 * stakedList.length / totalStaked).toFixed(2);
 // console.log(`your Rye pool share is ${poolWeight}`);
 let poolWeight = (100 * stakedList.length / Number(totalStaked));
 poolWeight = Number(poolWeight).toFixed(2); // Convert back to number for simplicity and practicality
 console.log(`your Rye pool share is ${poolWeight}`);
  document.getElementById("rye-coin-balance").innerHTML = `<p>Your pool share: ${poolWeight}%</p>`;

  if (stakedList.length > 0) {
    var ryeStakedContainer = document.getElementById('rye-staked-container')
    var galleryCode = `<h3 id='held-staked-count'>0 Selected</h3>`;
    galleryCode += `<h3 id="allow-unstake"><button id="btn-unstake" class="button-2 traverse button w-button">UNSTAKE</button></h3>`;
    galleryCode += `<h3 id=harvest-statement><button id="btn-harvest" class="button-2 traverse button w-button">HARVEST ALL</button> pending: ⋐0.000</h3>`

    //let i = 0;
    for(let i = 0; i < stakedList.length; i++){

      let tokenMetadataURI = `https://gateway.maxflowo2.com/ipfs/QmNdDwKB6kfUo33i4dvDZEi2QzdFPEozMRxzG8sVVuq1k6/${stakedList[i]}.json`;
      const tokenMetadata = await fetch(tokenMetadataURI).then((response) => response.json());

      galleryCode += `
      <div id="${stakedList[i]}" class="${boxStakedNFT}">
        <p><img alt="DIGIDMN_${stakedList[i]}" src=${tokenMetadata["image"]} /></p>
        <h3>DIGIDMN #${stakedList[i]}</h3>
        <h3>${tokenMetadata["name"]}</h3>
      </div>
      `;
     }
     ryeStakedContainer.innerHTML = galleryCode
     
     await getPendingRewards();
     //document.querySelector("#btn-harvest").addEventListener("click", ryeHarvest); //alt
    }

  //await getPendingRewards();

  //select to stake
  $(".info-selector").on("click", function() {
    $(this).toggleClass('info-selected');
    selectedIds = $('.info-selected').map(function() {
      return this.id;
    }).get();
    //console.log(selectedIds);
    document.getElementById("held-count").innerHTML = `${selectedIds.length} Selected`
  });

  $(".info-staked-selector").on("click", function() {
    $(this).toggleClass('info-staked-selected');
    selectedStakedIds = $('.info-staked-selected').map(function() {
      return this.id;
    }).get();
    //console.log(selectedStakedIds);
    document.getElementById("held-staked-count").innerHTML = `${selectedStakedIds.length} Selected`
  });

  //STAKE/UNSTAKE
  $("#btn-stake").on("click", ryeStake);
  $("#btn-unstake").on("click", ryeUnstake);
  $("#btn-harvest").on("click", ryeHarvest);
}

// master event listener... combines all the shit above.
window.addEventListener('load', async () => {
  init();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
});
