# Tiny Daemons website
Built by Lucky<br>
Web3'd by MaxFlowO2<br>
## Breakdowns
Web3 the mint site
[ ] WC/web3?
  [x] init() WC
  [ ] web3 Connect
    [ ] New Graphics
    [x] Prepare block
    [x] Connected block
    [x] Address shows
  [ ] (NEW) evm-chain@0.2.0 errors, tossing selectedAccount[0] errors, critical
    [ ] getChain(number) - fail x3
    [ ] getChainByChainId(number) - fail x3
    [ ] getChainByKeyValue("key", "value") - untested
    [ ] getChainByNetworkId(number) - fail x3
    [ ] 0xA369 - Fuji
    [ ] 0xA36A - Avalanche
    [ ] 0xFA2 - Fantom Test
[ ] Chain swap on button/drop down
  [x] Set Cases
  [x] Change chainId()
  [x] Add Network
  [x] Background changes
  [x] Select Chain Event Listener
  [x] "Select Chain" Buttons
  [ ] Traversing Dropdown
[x] Some sort of time hack for the no mint/pre mint/main mint
  [x] Getters on TimeCop.sol
  [x] Combine with unix.timestamp();
  [x] Pre-Presale test
    [x] Clock script
    [x] Clock test
    [x] Mint Button test
  [x] Presale test
    [x] Clock script
    [x] Clock test
    [x] Mint Button test
  [x] Main test
    [x] Clock script
    [x] Clock test
    [x] Mint Button test
[x] Mint status
  [x] Show minted on chain
  [x] Show total you can mint on that chain
[ ] Mint capabilities
  [ ] Avax Mint
  [ ] BSC Mint
  [ ] Eth Mint
  [ ] FTM Mint
  [ ] Matic Mint
[ ] Traverse button via selectors
  [ ] Avax To:
    [ ] BSC 
    [ ] Eth 
    [ ] FTM 
    [ ] Matic 
  [ ] BSC To:
    [ ] Eth 
    [ ] FTM 
    [ ] Matic 
    [ ] Avax 
  [ ] Eth To:
    [ ] FTM 
    [ ] Matic 
    [ ] Avax 
    [ ] BSC 
  [ ] FTM To:
    [ ] Matic 
    [ ] Avax 
    [ ] BSC 
    [ ] Eth 
  [ ] Matic To:
    [ ] Avax 
    [ ] BSC 
    [ ] Eth 
    [ ] FTM 
