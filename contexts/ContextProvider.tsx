import {
  ConnectionProvider,
} from "@solana/wallet-adapter-react";

import { FC, ReactNode } from "react";


export const WalletContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <ConnectionProvider endpoint={process.env.NEXT_PUBLIC_HELIUS_URL!}>
      {children}
    </ConnectionProvider>
  );
};

export default WalletContextProvider;
