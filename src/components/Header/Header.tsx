import Link from "next/link";
import React from "react";
import { ActionButtons } from "../ActionButtons/ActionButtons";
import { portfolioData } from "../../../utils/constant";

export const Header = () => {
  return (
    <div className="text-zinc-800 sticky top-0 z-40 text-accent/90 flex md:justify-between mt-4 rounded-lg  w-[90%] mx-auto text-base font-medium capitalize whitespace-nowrap  bg-zinc-100/40  px-4 py-7  ">
      <Link href="/">
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
          {portfolioData.header.name}
        </h1>
      </Link>
      <ActionButtons className="hidden lg:flex flex-row-reverse text-white justify-between items-center gap-x-8 " />
    </div>
  );
};
