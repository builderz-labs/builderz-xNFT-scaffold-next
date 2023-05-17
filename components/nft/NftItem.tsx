import { Checkbox } from '@mui/material';
import styled from 'styled-components';

const ItemCard = styled.div`
  border-radius: 12px;

  border: 0.5px solid;

  border-image-source: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 138, 87, 0.1) 100%
  );
`;

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const NftItem = ({ nft, isSelected, onClick }: any) => {
  return (
    <ItemCard onClick={onClick} key={nft.id} className="rounded-lg relative pb-4">
      <div className={`w-70 h-70 object-cover rounded-lg border-[#FF5557]`}>
        <div className="absolute top-2 right-2 rounded-md ">
          {/* <Checkbox
            {...label}
            checked={isSelected} readOnly
          // sx={{
          //   color: '#ffaa85',
          //   '&.Mui-checked': {
          //     color: '#FF8A57',
          //   },
          // }}
          /> */}
        </div>
        <img
          src={nft.content.files[0].uri}
          width={150}
          height={150}
          alt="NFT"
          className={`w-full h-40 object-cover rounded-lg   `}
        />
      </div>
      <p className="font-medium my-2 px-2  text-start w-32 text-lg truncate hover:text-[#FF8A57]">
        {nft.content.metadata.name}
      </p>
    </ItemCard>
  );
};

