'use client'

import dynamic from 'next/dynamic';

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export default function MyMultiButton() {

  return (
    <div className="md:mr-4 md:ml-4 relative z-[999]">
      <WalletMultiButtonDynamic />
    </div>
  );
}
