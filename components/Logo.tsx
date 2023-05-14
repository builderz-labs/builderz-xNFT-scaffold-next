import Image from "next/image";
import Link from "next/link";
import React from "react";
import BrandW from "../public/builderz-black.svg";
import Brand from "../public/builderz-white.svg";

import { useTheme } from "@mui/material";

export const Logo = () => {
  const theme = useTheme();

  return (
    <Link href="/" passHref>
      <Image
        src={theme.palette.mode === "light" ? Brand : BrandW}
        alt=""
        className="min-w-[30px] w-32 max-w-[200px] cursor-pointer"
      />
    </Link>
  );
};
