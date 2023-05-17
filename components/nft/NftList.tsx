import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { NftItem } from "./NftItem";
import { Loading } from "../Loading";
import { useNfts } from "../../hooks/useNfts";

export const NftList = () => {
  const nfts = useNfts();

  // Filtered NFT states
  const [filteredNfts, setFilteredNfts] = useState<any[]>([]);
  const [currentNfts, setCurrentNfts] = useState<any[]>([]);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  const handleCheck = (nftId: string) => {
    setSelectedItems((currentItems) => {
      if (currentItems.includes(nftId)) {
        return currentItems.filter((id: string) => id !== nftId);
      } else {
        return [...currentItems, nftId];
      }
    });
  };

  // Populate state as soon as checkedNfts is available
  useEffect(() => {
    if (nfts.nfts.length) {
      setCurrentNfts(nfts.nfts.slice(startIndex, endIndex));
      setFilteredNfts(nfts.nfts);
    }
  }, [nfts.nfts.length]);

  // Pagination
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // number of items to display per page

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  useEffect(() => {
    if (filteredNfts) {
      const pageCount = Math.ceil(filteredNfts.length / pageSize);
      setPageCount(pageCount);
    }
  }, [filteredNfts]);

  const handlePageChange = (newPage: { selected: number }) => {
    setCurrentPage(newPage.selected + 1);
  };

  // While loading return Loader
  if (nfts.loading) {
    return <Loading />;
  }

  // If no NFTs of collection return message
  if (nfts.nfts && nfts.nfts.length === 0) {
    return (
      <div>
        <h2 className="text-xs">You do not own any NFTs</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 ">
        {currentNfts?.map((nft: any) => {
          return (
            <NftItem
              key={nft.id}
              nft={nft}
            // isSelected={selectedItems.includes(nft.id)}
            // onClick={() => handleCheck(nft.id)}
            />
          );
        })}
      </div>
      <div>
        {nfts.nfts && nfts.nfts.length > pageSize && (
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageChange}
            containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-previous-item"
            nextClassName="page-next-item"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            activeClassName="active"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="<"
          />
        )}
      </div>
    </div>
  );
};
