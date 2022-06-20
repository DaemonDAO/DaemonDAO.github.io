import DaemonPunksTokenABI from "./daemonpunks_token.js"

document.addEventListener("DOMContentLoaded", () => {
  const web3 = new Web3(window.ethereum)

  document.getElementById("load_button").addEventListener("click", async () => {
    const contract = new web3.eth.Contract(DaemonPunksTokenABI, "0x22DEa64A0e9ecbB13d2B0dD2d95a91A06DACb23B")
    const walletAddress = document.getElementById("wallet_address").value
    contract.defaultAccount = walletAddress
    const DaemonBalance = await contract.methods.balanceOf(walletAddress).call()

    document.getElementById("nfts").innerHTML = ""

    for(let i = 0; i < DaemonBalance; i++) {
      const tokenId = await contract.methods.tokenOfOwnerByIndex(walletAddress, i).call()

      let tokenMetadataURI = await contract.methods.tokenURI(tokenId).call()

      if (tokenMetadataURI.startsWith("ipfs://")) {
        tokenMetadataURI = `https://operahouse.mypinata.cloud/ipfs/${tokenMetadataURI.split("ipfs://")[1]}`
      }

      const tokenMetadata = await fetch(tokenMetadataURI).then((response) => response.json())

      const DaemonPunkTokenElement = document.getElementById("nft_template").content.cloneNode(true)
      DaemonPunkTokenElement.querySelector("h1").innerText = tokenMetadata["name"]
      DaemonPunkTokenElement.querySelector("a").href = `https://nftkey.app/collections/daemonpunks/token-details/?tokenId=${tokenId}`
      DaemonPunkTokenElement.querySelector("img").src = tokenMetadata["image"]
      DaemonPunkTokenElement.querySelector("img").alt = tokenMetadata["description"]

      document.getElementById("nfts").append(DaemonPunkTokenElement)
    }
  })
})
