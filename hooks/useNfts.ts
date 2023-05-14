import { useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { getAssetsByOwner } from "../utils/nfts";
import { useWallet } from "./useWallet";
import axios from "axios";

export const useNfts = (reload?: number) => {
  const [nfts, setNfts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { publicKey } = useWallet();
  const { connection } = useConnection();

  useEffect(() => {
    const fetchNFTs = async () => {
      setLoading(true);
      setError(false);

      try {
        let filtered = (await getAssetsByOwner(publicKey!.toBase58())).filter(
          (nft: any) => nft
          // nft.grouping[0]?.group_value ===
          // "Et9ckpQCXFN5PsiYN781AczSVuQYyGEdDEPDJ7jrxz4c" // Filter by collection
        );

        console.log("filtered: ", filtered);

        filtered = await Promise.all(
          filtered.map(async (nft: any) => {
            if (!nft.content.metadata.attributes) {
              console.log("fetching separate");
              const { data } = await axios.get(nft.content.json_uri);

              return {
                ...nft,
                content: {
                  ...nft.content,
                  metadata: {
                    ...nft.content.metadata,
                    attributes: data.attributes,
                  },
                  files: [...nft.content.files, { uri: data.image }],
                },
              };
            }

            return nft;
          })
        );
        setNfts(filtered);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    };

    if (publicKey) {
      console.log("fetching nfts");
      fetchNFTs();
    }
  }, [connection, publicKey, reload]);

  return { nfts, loading, error };
};
