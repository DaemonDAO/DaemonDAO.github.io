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

import TurnABI from "../abi/turnstile_token.js"
import DigiABI from "../abi/digidaemons_token.js"
const CA_digi = "0x6eA48824253f64662945Ae77A790331D7183f8c0";
const CA_turn = "0xEcf044C5B4b867CFda001101c617eCd347095B44";
"use strict";
// the wave daemons


// Useful for later you'll see
let saleStart;
let mintFees;
const rpc = 'https://canto.slingshot.finance/';

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
  const web3 = new Web3(rpc);
  let tokenContract = await new web3.eth.Contract(DigiABI, CA_digi);
  let value = await tokenContract.methods.minterMinted().call();
  console.log(value, "has been minted");
  return value;
}

// web3 call() for how many allowed to mint on that contract
async function queryAlloted() {
  const web3 = new Web3(rpc);
  let tokenContract = await new web3.eth.Contract(DigiABI, CA_digi);
  let value = await tokenContract.methods.minterCapacity().call();
  console.log(value, "to mint on this chain");
  return value;
}

// cost per mint in ETH
async function fetchMintFee(){
  const web3 = new Web3(rpc);
  let NFTContract = await new web3.eth.Contract(DigiABI, CA_digi);
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


async function mintNFT() {
  let quant = $('#quantNFT').val();
  mintFees = await fetchMintFee();
  let value = quant * mintFees;
  var timeMeow = new Date().getTime();
  timeMeow = parseInt(timeMeow/1000);

  if (timeMeow >= saleStart) {
    const web3 = new Web3(provider);
    let tdContract = await new web3.eth.Contract(DigiABI, CA_digi);
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

async function claimCSR() {
    let tokenID = $('#CSR_ID').val()
    const web3 = new Web3(provider);
    let turnContract = await new web3.eth.Contract(TurnABI, CA_turn);
    let claimIt = tdContract
                   .methods
                   .withdraw(tokenId, selectedAccount, 1e30)
                   .send({ from: selectedAccount,
                      gas: 500000})
                   .on(
                     'transactionHash',
                     function(hash) {
                       console.log(`claimCSR(${tokenId})`, hash);
                     }
                   );
    if (!claimIt) {
      console.log(`Failed claimCSR(${tokenId})`);
    }

}

async function populateNFTs(address) {
  //if the div already exists, remove it (for wallet switching)
  if (document.contains(document.getElementById("galleryBD"))) {
            document.getElementById("galleryBD").remove();}

  const token_address = CA_turn
  const FTMSCAN_API_KEY = 'J75A2G6SIAQ8FUBXN4D7ECIWGQTPCPU2KE'
  // TODO: in the future, to see all NFTs, modify contractCreation and use 0
  let startBlock = 25639393 //just before minting
  //https://tuber.build/api?module=account&action=tokentx&contractaddress=0xEcf044C5B4b867CFda001101c617eCd347095B44&address=0x450f8F4096C05c5B2CEf13dbC4bB963a95247589&sort=asc
  const ftmscan_query = `https://tuber.build/api?module=account&action=tokentx`
  + `&contractaddress=${token_address}&address=${address}&startblock=${startBlock}&endblock=999999999&sort=asc`
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
  console.log(`${address} owns ${tokenList.length} BitDaemons`)
  if (tokenList.length > 0) {
    var bdgallery = document.createElement('div')
    bdgallery.classList.add("mac-window", "centered")
    bdgallery.id = "galleryBD";
    document.getElementById('content-wrapper').appendChild(bdgallery)

    var galleryCode = `<div class="mac-window-title"><span>BitDaemons</span></div>`;
    galleryCode += `  <h3>You own the following Turnstile NFTs: ${tokenList} BitDaemons</h3>`;
    galleryCode += `<div class='content' id="bdboxes">`;
    //galleryCode += `<p class="example-left">👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹</p>`;
    galleryCode +=  `<p>👹 The OG interstellar interlopers 👹</p>`
    //let i = 0;
     }
     bdgallery.innerHTML = galleryCode
  }
}



// master event listener... combines all the shit above.
window.addEventListener('load', async () => {
  init();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
  document.querySelector("#btn-buyNFT").addEventListener("click", mintNFT);
  document.querySelector("#btn-claimCSR").addEventListener("click", claimCSR);
});
