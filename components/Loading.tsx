import { CircularProgress } from '@mui/material';

export function Loading() {
  return (
    <div className="flex justify-center flex-col text-center text-sm items-center h-[150px] w-full my-10 max-h-screen gap-4">
      {/*       <div className="spinner-border animate-spin w-8 h-8 border-4 rounded-full text-orange-500"></div> */}
      <CircularProgress />
      <p>Fetching and Filtering your NFTs ...</p>
    </div>
  );
}
