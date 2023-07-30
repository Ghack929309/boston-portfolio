import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="navbar flex justify-between items-center ">
      <Link href="/" className="btn btn-ghost text-accent normal-case text-xl">
        Boston
      </Link>
      <button className="btn text-whtie font-normal btn-primary">
        contact
      </button>
    </div>
  );
};
