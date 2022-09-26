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


var ContractAddress = "0xbea7c3f2d91a9c6fd7f5aa9c803d4c31c1db8db9";
var ContractObject;
var ContractState;

window.onload = function(){
  //hide the preloader
  $(".preloader").fadeOut(1000);
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);
}

function checkWallet(){
 if(window.zilPay){
  return true;
 }else{
  return false;
 }
}
async function connectWallet(){
 return (await window.zilPay.wallet.connect());
}
function loadContract(contractAddr){
 try{
  return window.zilPay.contracts.at(contractAddr);
 }catch(err){
  console.log(err.message);
  return false;
 }
}

async function onloadInit(){
 check1 = checkWallet();
 check2 = await connectWallet();
 if(check1 && check2){
  ContractObject = loadContract(ContractAddress);
  if(ContractObject){
   ContractObject.getState().then(function(stateData){
    ContractState = stateData;
    //alert("Contract State Loaded Successfully!")
    loadGallery();
   });
  }
 }
}

function loadGallery(flag){
 var gallery = document.querySelector("#gallery-container");
 gallery.innerHTML = "Loading Gallery....";
 tokenOwners = ContractState.token_owners;
 tokenUris = ContractState.token_uris;
 galleryCode = "";
for(i in tokenOwners){
  galleryCode += `
  <div id="bd-${i}" class="infobox">
    <p><img alt="" src="https://media-nft.paintswap.finance/250_0xbea7c3f2d91a9c6fd7f5aa9c803d4c31c1db8db9_${i}.png" /></p>
    <h3>BitDaemon #${i}</h3>
    <p><a href="walletviewer.html" class="mac-button">TRNSFR</a>
    <a href="https://paintswap.finance/marketplace/assets/0xbea7c3f2d91a9c6fd7f5aa9c803d4c31c1db8db9/${i}" target="_blank" class="mac-button">MRKT</a></p>
    </div>
  `;
 }
 gallery.innerHTML = galleryCode;
}
