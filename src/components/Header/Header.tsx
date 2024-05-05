import Link from "next/link";
import React from "react";

import ThemeToggle from "./theme-toggle";

export const Header = () => {
  return (
    <header className="text-center pt-6">
      <nav className="bg-[#6366F1]/50 p-1 rounded">
        <div className="dark:bg-gray-900 bg-white flex px-1.5 items-center justify-between rounded-md">
          <Logo />
          <div className="flex items-center justify-center gap-x-4">
            <Link href="#project">Projects</Link>
            <Link href="#experience">Experience</Link>
          </div>
          <div className="mt-1">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

const Logo = () => {
  return (
    <Link href="/">
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_6_1329)">
          <path
            d="M25.9636 13.9749H21.3196C17.263 13.9749 13.9746 17.2633 13.9746 21.3199V25.9638C20.377 25.4891 25.4888 20.3773 25.9636 13.9749Z"
            fill="#6366F1"
          />
          <path
            d="M12.0261 25.9638V21.3199C12.0261 17.2633 8.73764 13.9749 4.6811 13.9749H0.0371094C0.511826 20.3773 5.62366 25.4891 12.0261 25.9638Z"
            fill="#A5B4FC"
          />
          <path
            d="M25.9636 12.0249C25.4888 5.62244 20.377 0.510606 13.9746 0.0358887V4.67988C13.9746 8.73641 17.263 12.0249 21.3196 12.0249H25.9636Z"
            fill="#A5B4FC"
          />
          <path
            d="M12.0261 0.0358887C5.62366 0.510606 0.511826 5.62244 0.0371094 12.0249H4.6811C8.73764 12.0249 12.0261 8.73641 12.0261 4.67988V0.0358887Z"
            fill="#6366F1"
          />
        </g>
        <defs>
          <clipPath id="clip0_6_1329">
            <rect width="26" height="26" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};
