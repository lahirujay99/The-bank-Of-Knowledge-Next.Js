import Link from "next/link";
import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/The Bank Logo.png" alt="logo" height={64} width={247} />
    </Link>
  );
};

export default Logo;
