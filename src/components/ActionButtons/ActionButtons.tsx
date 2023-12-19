"use client";
import React from "react";

type ActionButtonsType = {
  className?: string;
};

export const ActionButtons = ({ className }: ActionButtonsType) => {
  const openMailApp = () => {
    const email = "clementchris9293@gmail.com";
    const subject = "Job Opportunity";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoUrl;
  };
  return (
    <div className={className}>
      <a
        href="/christopher_Clement.pdf"
        download="christopher_Clement.pdf"
        className="text-zinc-800 text-opacity-90 hover:text-indigo-500  text-sm capitalize grow whitespace-nowrap ">
        my resume
      </a>
      <button
        onClick={openMailApp}
        className="text-white text-sm capitalize whitespace-nowrap justify-center items-stretch bg-indigo-500 self-stretch aspect-[1.8] py-2.5 px-4 rounded-xl">
        hire me
      </button>
    </div>
  );
};
