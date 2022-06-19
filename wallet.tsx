import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonItem, IonLoading, IonPage, IonProgressBar, IonRow, IonText, IonTitle } from '@ionic/react';
import { MainMenu } from '../components/MainMenu';
import { useCallback, useEffect, useState } from 'react';
import { PotionPalace } from '../contracts/PotionPalace';
import { BigNumber, ethers } from 'ethers';
import { config } from '../config';
import { useWallet } from 'use-wallet';
import { MagePunks__factory } from '../contracts/factories/MagePunks__factory';
import { PotionPalace__factory } from '../contracts/factories/PotionPalace__factory';
import { MagePunks } from '../contracts/MagePunks';
import { useAccount } from '../models/cache/account/account-cache';
import LoginButton from '../components/LoginButton';
import create from 'zustand';
import { ERC1155CollectionInventory } from './Adventure';



const EsperCollectionInventory: React.FC<{ nftAddress: string, stakingAddress: string, contractName: string, ipfsImageUrl: string }> = ({ ipfsImageUrl, stakingAddress, nftAddress, contractName }) => {
  const [supply, setSupply] = useState<number | undefined>(600)
  const { ethereum, account, getBlockNumber } = useWallet();
  const [magePunkBrewingStarted, setBrewStartBlock] = useState<Record<string, number>>();
  const [myPunks, setMyPunks] = useState<number[]>([]);
  const [approved, setApproved] = useState<boolean>(false);
  const [potionPerBlock, setPotionPerBlock] = useState<BigNumber | undefined>(BigNumber.from(170000000000));
  const signer = ethereum && (new ethers.providers.Web3Provider(ethereum)).getSigner();
  const [status, setStatus] = useState<"idle" | "transacting">();
  const { addMember } = useAdventureParty();
  const calcPotionEarned = useCallback((id: number) => {
    if (typeof potionPerBlock === "undefined" || typeof getBlockNumber === 'undefined' || typeof magePunkBrewingStarted === 'undefined') {
      return "?";
    }
    const blockNumber = getBlockNumber() || 0
    if (blockNumber === 0 || magePunkBrewingStarted[id] === 0 || typeof magePunkBrewingStarted[id] === 'undefined') {
      return "?";
    }
    return ethers.utils.formatEther(potionPerBlock.mul((blockNumber - magePunkBrewingStarted[id])));

  }, [potionPerBlock, magePunkBrewingStarted, getBlockNumber])


  const calcAllPotionEarned = useCallback((ids: number[]) => {
    return ids.map(x => calcPotionEarned(x)).map(parseFloat).reduce((a, b) => {
      return a + b;
    }, 0);

  }, [potionPerBlock, magePunkBrewingStarted, getBlockNumber])




  useEffect(() => {
    const nftContract: MagePunks | undefined = signer && MagePunks__factory.connect(nftAddress, signer);
    account && nftContract?.isApprovedForAll(account, stakingAddress).then((res) => {
      setApproved(res);
    }).catch(() => {
      console.log(
        "Approval request error"
      )
    })
  }, [account]);


  useEffect(() => {
    const nftContract: PotionPalace | undefined = signer && PotionPalace__factory.connect(stakingAddress, signer);
    account && nftContract!.potionPerBlock().then((res) => {
      setPotionPerBlock(res);
    }).catch((e) => {
      console.log("WTF", e);
    })
  }, [account]);
  useEffect(() => {
    const potionPalace: PotionPalace | undefined = signer && PotionPalace__factory.connect(stakingAddress, signer);
    supply && Array.from(Array(supply)).forEach(async (x, i) => {
      const id = i + 1;
      account && signer && potionPalace?.receipt(id).then(([magePunkId, startedBrewing, owner]) => {

        if (owner === account) {
          setMyPunks(x => {
            if (x.includes(id)) {
              return x;
            }
            return ([...x, id])
          })
        }
        startedBrewing.toNumber() > 0 && setBrewStartBlock(x => ({ [id]: startedBrewing.toNumber(), ...x }));
      }).catch(() => {
        console.log("Error gettings brewed gwei of potion or staking receipt")
      })
    });
  }, [account, supply])
  return (
    <>
      {myPunks.length > 0 && <IonItem lines="none" color="clear">
        {myPunks.length} {contractName} brewing
        <IonButtons slot="end">

          {myPunks && <IonButton color="tertiary" onClick={() => {
            const potionPalace: PotionPalace | undefined = signer && PotionPalace__factory.connect(stakingAddress, signer);
            potionPalace && potionPalace.collectAll(myPunks).then(() => {
              setStatus("idle");
            });
          }}>
            Collect  {calcAllPotionEarned(myPunks).toPrecision(7)} Potion ⚗️
          </IonButton>}
        </IonButtons>

      </IonItem>}
      <IonProgressBar value={calcAllPotionEarned(myPunks)} />
      <IonItem lines="none" color="clear">
        {myPunks.map(x => <>
          <img onClick={() => {
            addMember({ contractAddress: nftAddress, tokenId: x })
          }} height={50} width={50} src={ipfsImageUrl + "/" + x + ".png"} />
        </>)}
      </IonItem>
    </>
  );
};




const ERC721CollectionInventory: React.FC<{ nftAddress: string, contractName: string, ipfsImageUrl: string, supply: number, action: string }> = ({ ipfsImageUrl, nftAddress, contractName, supply, action }) => {

  const { ethereum, account, } = useWallet();
  const [myPunks, setMyPunks] = useState<number[]>([]);
  const signer = ethereum && (new ethers.providers.Web3Provider(ethereum)).getSigner();
  useEffect(() => {
    const nftContract: MagePunks | undefined = signer && MagePunks__factory.connect(nftAddress, signer);
    supply && Array.from(Array(supply)).forEach(async (x, i) => {
      const id = i + 1;
      account && signer && nftContract?.ownerOf(id).then((owner) => {
        if (owner === account) {
          setMyPunks(x => {
            if (x.includes(id)) {
              return x;
            }
            return ([...x, id])
          })
        }
      }).catch(() => {
        console.log("Error gettings brewed gwei of potion or staking receipt")
      })
    });
  }, [account, supply])


  return (
    myPunks ? <>
      <IonItem lines="none" color="clear">
        {myPunks.length || "?"} {contractName} {action}
      </IonItem>
      <IonItem lines="none" color="clear">
        {myPunks.map(x => <>
          <img height={50} width={50} src={ipfsImageUrl + "/" + x + ".png"} />
        </>)}
      </IonItem>
      {/* <IonItem color="clear" lines="none" href={config.explorerUrl + "/address/" + nftAddress} >
        <IonText color="medium">
          {contractName} Potion Palace Contract {stakingAddress}
        </IonText>
      </IonItem> */}
    </> : <></>
  );
};



const EnumerableERC721CollectionInventory: React.FC<{ nftAddress: string, contractName: string, ipfsImageUrl: string, supply: number, action: string }> = ({ ipfsImageUrl, nftAddress, contractName, supply, action }) => {

  const { ethereum, account, } = useWallet();
  const [myNFTs, setMyNFTS] = useState<number[]>([]);
  const [balance, setBalance] = useState<number | undefined>();
  const signer = ethereum && (new ethers.providers.Web3Provider(ethereum)).getSigner();
  const { addMember, members } = useAdventureParty();

  useEffect(() => {
    const nftContract: MagePunks | undefined = signer && MagePunks__factory.connect(nftAddress, signer);
    account && nftContract?.balanceOf(account).then((nftBalance) => {
      setBalance(nftBalance.toNumber());
    });
  }, [account]);

  useEffect(() => {
    const nftContract: MagePunks | undefined = signer && MagePunks__factory.connect(nftAddress, signer);
    typeof balance === "number" && balance > 0 && Array.from(Array(balance)).forEach(async (x, i) => {
      console.log(i, "index")
      signer && account && nftContract?.tokenOfOwnerByIndex(account, BigNumber.from(i)).then((token) => {
        const myTokenId = token.toNumber();
        setMyNFTS(x => {
          if (x.includes(myTokenId)) {
            return x;
          }
          return ([...x, myTokenId])
        })
      }).catch(() => {
        console.log("Error gettings brewed gwei of potion or staking receipt")
      })
    });
  }, [account, supply, balance])
  if (balance && balance > 20) {
    return <IonItem>
      <img height="50" width="60" src="/assets/images/whale.png" />
      {balance} {contractName} {action}
    </IonItem>
  } return (<>
    {typeof balance === "number" && balance > 0 && <>
      <IonItem lines="none" color="clear">
        {myNFTs.length || "?"} {contractName} {action}
      </IonItem>
      <IonItem lines="none" color="clear">
        {myNFTs.map(x => <a onClick={(() => {
          addMember({ contractAddress: nftAddress, tokenId: x });
        })} target="_blank">
          <img height={50} width={50} src={ipfsImageUrl + "/" + x + ".png"} />
        </a>)}
      </IonItem>
      {/* <IonItem color="clear" lines="none" href={config.explorerUrl + "/address/" + nftAddress} >
        <IonText color="medium">
          {contractName} Potion Palace Contract {stakingAddress}
        </IonText>
      </IonItem> */}
    </>}
  </>
  );
};
export interface PartyMember {
  contractAddress: string,
  tokenId: number
}

// You can use `type`
type RegistedAdventurParty = {
  stats: Record<string, number>
  members: PartyMember[]
  registered: string,
  name: string,
  registerPartyName: (name: string) => void
  addMember: (member: PartyMember) => void
  removeMember: (member: PartyMember) => void
}

// And it is going to work for both
export const useAdventureParty = create<RegistedAdventurParty>((set, get) => ({
  stats: {},
  members: [],
  registered: "",
  name: "",
  registerPartyName: (name) => {
    set({ name });
  },
  addMember: (member) => {
    set({ members: Array.from(new Set([...get().members, member])) });
  }, removeMember: (member) => {
    console.log("remove member")
    set({ members: Array.from(new Set([...get().members.filter(x => x.contractAddress + x.tokenId.toString() !== member.contractAddress + member.tokenId.toString())])) });
  }
}));






export const AsyncNFTImage: React.FC<{ contractAddress: string, tokenId: number, onClick?: () => void }> = ({ contractAddress, tokenId, onClick }) => {
  const [img, setImg] = useState<string | undefined>()
  const { ethereum, account } = useWallet();
  const signer = ethereum && (new ethers.providers.Web3Provider(ethereum)).getSigner();
  useEffect(() => {
    const nftContract: MagePunks = MagePunks__factory.connect(contractAddress, signer);
    nftContract.tokenURI(tokenId).then((uri) => {
      const jsonURI = uri.replace("ipfs://", "https://smol.mypinata.cloud/ipfs/");
      fetch(jsonURI).then((res) => {
        res.json().then((metadata) => {
          setImg(metadata.image.replace("ipfs://", "https://smol.mypinata.cloud/ipfs/"));
        });
      })
    })
  }, [account])
  return <div>
    <img height="64px" width="64px" src={img} />
  </div>
}

export const AddToPartyImage: React.FC<{ contractAddress: string, tokenId: number }> = ({ contractAddress, tokenId }) => {
  const [img, setImg] = useState<string | undefined>()
  const { ethereum, account } = useWallet();
  const signer = ethereum && (new ethers.providers.Web3Provider(ethereum)).getSigner();
  const { addMember } = useAdventureParty();
  useEffect(() => {
    const nftContract: MagePunks = MagePunks__factory.connect(contractAddress, signer);
    nftContract.tokenURI(tokenId).then((uri) => {
      const jsonURI = uri.replace("ipfs://", "https://smol.mypinata.cloud/ipfs/");
      fetch(jsonURI).then((res) => {
        res.json().then((metadata) => {
          setImg(metadata.image.replace("ipfs://", "https://smol.mypinata.cloud/ipfs/"));
        });
      })
    })
  }, [account])
  return <div onClick={(() => {
    addMember({ contractAddress, tokenId });
  })}>
    <img height="64px" width="64px" src={img} />
  </div>
}

export const EnumerableERC721CollectionInventoryWithUniqueUri: React.FC<{ nftAddress: string, contractName: string, action: string }> = ({ nftAddress, contractName, action }) => {
  const { ethereum, account } = useWallet();
  const [myNFTs, setMyNFTS] = useState<number[]>([]);
  const [balance, setBalance] = useState<number | undefined>();
  const [plzLoad, setPlzLoad] = useState<boolean>(true);
  const signer = ethereum && (new ethers.providers.Web3Provider(ethereum)).getSigner();
  useEffect(() => {
    const nftContract: MagePunks | undefined = signer && MagePunks__factory.connect(nftAddress, signer);
    account && nftContract?.balanceOf(account).then((nftBalance) => {
      setBalance(nftBalance.toNumber());
    });
  }, [account]);

  useEffect(() => {
    const nftContract: MagePunks | undefined = signer && MagePunks__factory.connect(nftAddress, signer);
    if (!plzLoad) {
      return;
    }
    typeof balance === "number" && balance > 0 && Array.from(Array(balance)).forEach(async (x, i) => {
      signer && account && nftContract?.tokenOfOwnerByIndex(account, BigNumber.from(i)).then((token) => {
        const myTokenId = token.toNumber();
        setMyNFTS(x => {
          if (x.includes(myTokenId)) {
            return x;
          }
          return ([...x, myTokenId])
        })
      }).catch(() => {
        console.log("Error gettings brewed gwei of potion or staking receipt")
      })
    });
  }, [account, balance, plzLoad])
  if (balance && balance > 20) {
    return <IonItem>
      <img height="50" width="60" src="/assets/images/whale.png" />
      {balance} {contractName} {action}
    </IonItem>
  }
  return (<>
    {!plzLoad && <IonButton onClick={() => {
      setPlzLoad(true);
    }}>
      Load {contractName}
    </IonButton>}
    {plzLoad && typeof balance === "number" && balance > 0 && <>
      <IonItem lines="none" color="clear">
        {myNFTs.length || "?"} {contractName} {action}
      </IonItem>
      <IonItem lines="none" color="clear">
        {myNFTs.map((x, i) => <AddToPartyImage key={i} contractAddress={nftAddress} tokenId={x} />)}
      </IonItem>
      {/* <IonItem color="clear" lines="none" href={config.explorerUrl + "/address/" + nftAddress} >
        <IonText color="medium">
          {contractName} Potion Palace Contract {stakingAddress}
        </IonText>
      </IonItem> */}
    </>}
  </>
  );
};


const Home: React.FC = () => {
  const { account, ethereum, chainId } = useWallet();
  const signer = ethereum && (new ethers.providers.Web3Provider(ethereum)).getSigner();
  const { members, removeMember } = useAdventureParty();
  const [staked, setPercentStaked] = useState<number | undefined>();
  useEffect(() => {
    const nftContract: MagePunks | undefined = signer && MagePunks__factory.connect(config.magePunksAddress, signer);
    account && nftContract?.balanceOf(config.magepunkPotionPalaceAddress).then((res) => {
      console.log(res.toNumber());
      setPercentStaked(res.toNumber() / 5.80);
    }).catch(() => {
      console.log(
        "Approval request error"
      )
    })
  }, [account]);
  const [loading, setLoading] = useState<boolean>(true)
  if (chainId !== 250) {
    return <><IonPage>
      <IonCard>
        Switch to FTM
        chain id == {chainId}
        <LoginButton />
      </IonCard>
    </IonPage></>
  }
  return (
    <IonPage>
      <MainMenu />
      <IonContent >
        <img style={{ position: "fixed", width: "100%", height: "100%" }}
          src="/assets/images/potion-palace-bg.jpg" height={"100%"} />
        <IonRow>
          <IonCol size="3" >
          </IonCol>
          <IonCol size="6">
            <IonCard>
              <IonCardHeader>
                <IonButton color="clear">

                </IonButton>
              </IonCardHeader>
              {account && <EnumerableERC721CollectionInventoryWithUniqueUri contractName='BitVoyagers' nftAddress='0xe786aab7b220c1f9184ad406406806034785fc5c' action="Preparing for a voyage" />}
              {account && <EsperCollectionInventory ipfsImageUrl={"https://magepunks.xyz/assets/images/"} contractName='Mages' stakingAddress={config.magepunkPotionPalaceAddress} nftAddress={config.magePunksAddress} />}
              {account && <EsperCollectionInventory ipfsImageUrl={"https://arcturians.cc/assets/images/"} contractName={"Arcturians"} stakingAddress={config.arcturianPotionPalaceAddress} nftAddress={config.arcturiansAddress} />}
              {account && <EnumerableERC721CollectionInventory action='protecting the ftm chain' supply={999} ipfsImageUrl={"https://ipfs.io/ipfs/QmVmnzDzVQGKzLooZgi4Qd12xnvnup2CepKCm51Uac9UVD"} contractName={"Bit Shadows"} nftAddress={"0xe92752C25111DB288665766aD8aDB624CCf91045"} />}
              {account && <EnumerableERC721CollectionInventory action='protecting the riot goools' supply={1991} ipfsImageUrl={"https://infura-ipfs.io/ipfs/QmZiYNrBa73kjeR2DRwvS7pC7PMZpzfPV342KTnDa53fAH"} contractName={"Magical Gools"} nftAddress={"0x673Ce61e0Ec7fAD6c6Fe689193a0AdEF38567965"} />}
              {account && <EnumerableERC721CollectionInventory action='Making zines and jamming' supply={500} ipfsImageUrl={"https://ipfs.io/ipfs/QmUYKrRYu7rEjF9vvqyaptbEPV22EUG5me229rDsdXVCrC"} contractName={"Riot Gools"} nftAddress={"0x4f504ab2e7b196a4165ab3db71e75cb2b37070e0"} />}
              {account && <EnumerableERC721CollectionInventoryWithUniqueUri contractName='Skully' nftAddress='0x25ff0d27395A7AAD578569f83E30C82a07b4ee7d' action="Performing summoning rituals" />}
              {account && <EnumerableERC721CollectionInventoryWithUniqueUri contractName='Astrokids' nftAddress='0x3d7E7157459A352ada13ed8dA1Ba54a08A883965' action="tripping on acid" />}
              {account && <EnumerableERC721CollectionInventoryWithUniqueUri contractName='Pop Pussies' nftAddress='0x5BA5168A88b4F1C41fE71F59DdfA2305E0dbDa8c' action="Popping off" />}
              {account && <EnumerableERC721CollectionInventoryWithUniqueUri contractName='Witches' nftAddress='0x0fb9d7cc9a3fbfc62a71182552a576859ae0c758' action="finding mystic herbs" />}
              {account && <EnumerableERC721CollectionInventory contractName='ftm frog fam' nftAddress='0xa70aa1f9da387b815facd5b823f284f15ec73884' action="happily ribiting" supply={120} ipfsImageUrl={"https://operahouse.mypinata.cloud/ipfs/QmQkM6rp9x9XdBYyf93AYy64cWTKUFq4scpZkhVnnGvX4x"} />}
              {account && <EnumerableERC721CollectionInventory action="searching for new spells" supply={10} ipfsImageUrl={"https://ipfs.io/ipfs/QmUeoWLHWSNVj7mALwRWLXoV4APuJsvWva2GeNFZvCwnVT"} nftAddress={"0x670E10a852196773FfeE9F04fc4ec722993886DA"} contractName={'Wiked Witches'} />}
              {account && <EnumerableERC721CollectionInventory action="Helping the riot goools" supply={10} ipfsImageUrl={"https://ipfs.io/ipfs/QmQqemd32AByaY9cz2cFmiBttScwedzqgW1Dtuybpg5kEV"} nftAddress={"0x29a8bebedb437c6611fd33bc8b85b126024a8a9c"} contractName={'Gooolmon'} />}
              {account && <EnumerableERC721CollectionInventoryWithUniqueUri action="Powering up" nftAddress={"0x98ABB0Aa746a1e35FE54b522a12164ea1E034e96"} contractName={'Power goools'} />}
              {account && <EnumerableERC721CollectionInventoryWithUniqueUri action=" Haunting the fantom chain" nftAddress={"0x4eab37d5c62fa3bff8f7a5ffce6a88cfc098749c"} contractName={'Ghostly'} />}
              {account && <EnumerableERC721CollectionInventoryWithUniqueUri action="meditating" nftAddress={"0x5dbc2a8b01b7e37dfd7850237a3330c9939d6457"} contractName={'Ancestral Umans'} />}
              {account && <EnumerableERC721CollectionInventoryWithUniqueUri action="vibing" nftAddress={"0x8c2fcd5d857ee9aa19d1a27ae81ab1129385e3ac"} contractName={'bit Umans'} />}
              {account && <EnumerableERC721CollectionInventoryWithUniqueUri action="" nftAddress={"0xaB496610a72e96794A47146c809902DF339978a9"} contractName={'Cult Pussies'} />}
              {account && <EnumerableERC721CollectionInventoryWithUniqueUri action="quacking it up" nftAddress={"0xa732854253100331EebEf1d3a2aCe0430cD7b0CC"} contractName={'duck punks'} />}
              {account && <EnumerableERC721CollectionInventoryWithUniqueUri action="Immersed in Nature" nftAddress={"0x600ea64f353085a0df6fba7335086951ee90f36f"} contractName={'Nature Oracles'} />}
              {account && <EnumerableERC721CollectionInventoryWithUniqueUri action="Tripping on acid" nftAddress={"0xa81c9d00d29afdc83b7e788a29ec96a5bd81a8ea"} contractName={'Acid Cats'} />}
              {account && <EnumerableERC721CollectionInventoryWithUniqueUri action="going mainstream" nftAddress={"0x1b60b6daa371f5066bd8c1dc032627bf1f4e95df"} contractName={'Pop Skullys'} />}
              {account && <EnumerableERC721CollectionInventoryWithUniqueUri action="portalling between dimensions" nftAddress={"0x97FE96BdC8521AC774dAD8af04149e715680Faeb"} contractName={'Sasquatches'} />}
              {account && <EnumerableERC721CollectionInventoryWithUniqueUri action="hunting for tasty yeilds" nftAddress={"0x2aB5C606a5AA2352f8072B9e2E8A213033e2c4c9"} contractName={'Magicats'} />}
              {account && <EnumerableERC721CollectionInventoryWithUniqueUri action="" nftAddress={"0xDb8F58Ab15e967B7Dcc82D8907C2ed59d2ea9686"} contractName={'baby punks'} />}
              {account && <EnumerableERC721CollectionInventoryWithUniqueUri action="" nftAddress={"0xf0CF8D5f45B9B09645c88ee9147eF72c633AC744"} contractName={'alien chonky cats'} />}
              {account && <EnumerableERC721CollectionInventoryWithUniqueUri action="" nftAddress={"0x245c236Ce2bE6f7E92254Bb7C55b9Ad3ee563df4"} contractName={'hamsteria hammies'} />}
              {account && <EnumerableERC721CollectionInventoryWithUniqueUri action="slaying" nftAddress={"0xE06E5b820aF3F147B1B4e526f17323062c8282Dc"} contractName={'bit reapers'} />}
              {/* {account && <EnumerableERC721CollectionInventoryWithUniqueUri action="vibing" nftAddress={"0xb7545c2b59893B0A0b58aadD1e578964EeB99E22"} contractName={'Menagerie masks'} />} */}
              {/* {account && <ERC1155CollectionInventory contract_address='0xb7545c2b59893B0A0b58aadD1e578964EeB99E22' name={'Menagerie masks'} supply={10} />} */}
            </IonCard>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage >
  );
};

export default Home;
