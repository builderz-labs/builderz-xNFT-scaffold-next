import Image from "next/image";
import Link from "next/link";

import { useTheme } from "@mui/material";

export const Logo = () => {
  const theme = useTheme();

  return (
    <Link href="/" passHref>
      <Image
        src='/builderz-black.svg'
        alt=""
        className="min-w-[30px] w-32 max-w-[200px] cursor-pointer"
        width={100}
        height={100}
      />
    </Link>
  );
};
