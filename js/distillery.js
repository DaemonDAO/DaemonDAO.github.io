//import { RainbowKit } from '@rainbow-me/rainbowkit';
import DigiDistilleryABI from "../abi/digidistillery_contract.js";
import DigiTokenABI from "../abi/digidaemons_token.js";

"use strict";
const DigiDistilleryCA = "0x3B21c992D69Dde32aee0c935A2806743f9EE8C2d";
const DigiTokenCA = "0x6eA48824253f64662945Ae77A790331D7183f8c0";


const rainbowKit = new RainbowKit();

const connectButton = document.getElementById('connect-button');
const rpcSelector = document.getElementById('rpc-selector');

connectButton.addEventListener('click', async () => {
  rainbowKit.setRpcUrl(rpcSelector.value);

  await rainbowKit.connect();
});


