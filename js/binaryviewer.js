"use strict";

const NFT_ADDRESS = "0xd5eb80f437c318b3bf8b3af985224966a3054f76";
const contractCreation = 19746001;
const mintAddress = '0x0000000000000000000000000000000000000000'
// Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider;

// Address of the selected account
let selectedAccount;

function init() {

  console.log("WalletConnectProvider is", WalletConnectProvider);
  console.log("Fortmatic is", Fortmatic);
  console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

  if(location.protocol !== 'https:' && location.hostname !== 'localhost') {
    const alert = document.querySelector("#alert-error-https");
    // alert.style.display = "block";
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

  // Get connected chain id from Ethereum node
  const chainId = await web3.eth.getChainId();

  // Load chain information over an HTTP API
  const chainData = evmChains.getChain(chainId);

  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();

  // MetaMask does not give you all accounts, only the selected account
  console.log("Got accounts", accounts);
  selectedAccount = accounts[0];

  // Display fully loaded UI for wallet data
  document.querySelector("#prepare").style.display = "none";
  document.querySelector("#connected").style.display = "block";

  document.querySelector("#refresh-container").style.display = "block";
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

  await refreshAccountData();
  await refreshNFTs();
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
  document.querySelector("#refresh-container").style.display = "none";
}

let nftsViewModel = null

// Overall viewmodel for this screen, along with initial state
function NftsViewModel(nfts) {
  var self = this;

  // Editable data
  self.nfts = ko.observableArray(nfts);
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

async function refreshNFTs() {
  const web3 = new Web3(provider);
  const accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];
  await populateNFTs(selectedAccount);
}

async function populateNFTs(address) {
  const token_address = NFT_ADDRESS
  const FTMSCAN_API_KEY = 'J75A2G6SIAQ8FUBXN4D7ECIWGQTPCPU2KE'
  // TODO: in the future, to see all NFTs, modify contractCreation and use 0
  let startBlock = contractCreation
  const ftmscan_query = `https://api.ftmscan.com/api?module=account&action=tokennfttx`
  + `&address=${address}&startblock=${startBlock}&endblock=999999999&sort=asc&apikey=${FTMSCAN_API_KEY}`
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

  let dictionary = {}
  for (let t of result) {
    // Only filter where t.to is this address (t.from sends it away)
    if (t.contractAddress == token_address) {
      const key = `${t.contractAddress}_${t.tokenID}`
      let data = {}
      data.owned = (t.to.toLowerCase() == address.toLowerCase()) // t.from is the address = transferred out
      data.token_id = t.tokenID
      data.collection_name = t.tokenName
      data.collection_symbol = t.tokenSymbol
      data.collection_address = t.contractAddress
      data.hash = `https://ftmscan.com/tx/${t.hash}`
      if (!(key in dictionary) && data.owned) {
        // Only the 1st incoming transfer is kept (in most cases: the initial purchase)
        dictionary[key] = data
      }
      if (key in dictionary) {
        // If the NFT was purchased, then transferred out/sold, owned is set to false
        dictionary[key].owned = data.owned
      }
    }
  }

  const token_trx = Object.values(dictionary)
  // console.log(token_trx)
  const token_ids = token_trx.filter(t => t.owned).map(t => t.token_id)
  if (token_ids.length > 0) {
    // console.log(token_ids)
    const ids = token_ids.join(',')
    // console.log(ids)
    const punks_by_id_query = `${document.location.origin}/punks-by-id.php?ids=${ids}`
    // console.log(punks_by_id_query)
    const nfts = await axios.get(punks_by_id_query)
    .then(response => {
      // console.log('Axios got a response...');console.log(response);
      return response.data
    })
    .catch(error => {
      console.log(error)
    })

    // console.log(nfts)

    nftsViewModel = new NftsViewModel(nfts)
    document.querySelector("#nftsGallery").classList.remove('d-none')
    ko.applyBindings(nftsViewModel)
  }
  // console.log(`\nThere are ${result.length} past transfers of ERC721 tokens for ${address}`)
  console.log(`${address} owns ${Object.keys(dictionary).length} binary punks`)
}

let timeRequested = 0;

window.addEventListener('load', async () => {
  init();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
  document.querySelector("#btn-refreshNFTs").addEventListener("click", refreshNFTs);
});

var wishedAddress = getParameterByName('address');
if (wishedAddress !== undefined) {
  console.log(`Fetching Binary Punks owned by ${wishedAddress}`);
  populateNFTs(wishedAddress);
}
