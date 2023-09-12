import { WalletContextState } from "@solana/wallet-adapter-react";
import { Connection, Transaction, VersionedTransaction } from "@solana/web3.js";
import { useEffect, useMemo, useState } from "react";

const initialWalletState: WalletContextState = {
  autoConnect: false,
  wallets: [],
  wallet: null,
  publicKey: null,
  connecting: false,
  connected: false,
  disconnecting: false,
  select: (walletName: null) => {},
  connect: () => new Promise((resolve, reject) => {}),
  disconnect: () => new Promise((resolve, reject) => {}),
  sendTransaction(
    _transaction: VersionedTransaction | Transaction,
    _connection: Connection,
    _options?: any
  ) {
    return Promise.reject();
  },
  signTransaction: undefined,
  signAllTransactions: undefined,
  signMessage: undefined,
};

export const useWallet = () => {
  const [wallet, setWallet] = useState<WalletContextState>(initialWalletState);

  useEffect(() => {
    // This code will only run in the browser after the component has mounted
    const wallet = window.xnft.solana;
    setWallet(wallet);
  }, []);

  return wallet;
};
