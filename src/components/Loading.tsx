import { CircularProgress } from '@mui/material';

export function Loading() {
  return (
    <div className="flex justify-center flex-col text-center text-sm items-center h-[150px] w-full my-10 max-h-screen gap-4">
      <CircularProgress />
      <p>Fetching your NFTs ...</p>
    </div>
  );
}
