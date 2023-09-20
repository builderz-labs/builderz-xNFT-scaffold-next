import axios from "axios";

export const getAssetsByOwner = async (owner: string) => {
  const sortBy = {
    sortBy: "created",
    sortDirection: "asc",
  };
  const limit = 1000;
  const page = 1;
  const before = "";
  const after = "";
  const { data } = await axios.post(process.env.NEXT_PUBLIC_HELIUS_URL!, {
    jsonrpc: "2.0",
    id: "my-id",
    method: "getAssetsByOwner",
    params: [
      owner, // "5AsKgxeYRaHRcZivZDXoCK6PmVCbc7Nnc4LURpBV7tPv",
      sortBy,
      limit,
      page,
      before,
      after,
    ],
  });

  return data.result.items;
};

export const getAssets = async (assetId: string) => {
  const { data } = await axios.post(process.env.NEXT_PUBLIC_HELIUS_URL!, {
    jsonrpc: "2.0",
    id: "my-id",
    method: "getAsset",
    params: [assetId],
  });
  return data.result;
};
