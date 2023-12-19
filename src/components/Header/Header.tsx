import Link from "next/link";
import React from "react";
import { ActionButtons } from "../ActionButtons/ActionButtons";
import { portfolioData } from "../../../utils/constant";

export const Header = () => {
  return (
    <div className="text-zinc-800 sticky top-0 z-40 text-accent/90 flex md:justify-between  w-[90%] mx-auto text-base font-medium capitalize whitespace-nowrap shadow-lg bg-zinc-100  px-4 py-7  ">
      <Link href="/">
        <h1>{portfolioData.header.name}</h1>
      </Link>
      <ActionButtons className="hidden lg:flex flex-row-reverse text-white justify-between items-center gap-x-8 " />
    </div>
  );
};
