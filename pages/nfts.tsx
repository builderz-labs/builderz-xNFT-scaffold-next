import { useWallet } from "../hooks/useWallet";
import { useNfts } from "../hooks/useNfts";

const Nfts = () => {
  const wallet = useWallet()
  console.log(wallet.publicKey?.toBase58());

  const nfts = useNfts();
  console.log(nfts);
  
  return (
    <div>
      nfts
    </div>
  )
}

export default Nfts
