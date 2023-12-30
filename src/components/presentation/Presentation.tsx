"use client";
import React from "react";
import { ActionButtons } from "../ActionButtons/ActionButtons";

export const Presentation = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex text-accent/90 flex-col items-center px-4 ">
      <h2 className="text-zinc-800 text-center text-base md:text-lg font-medium capitalize self-center  mt-6">
        {title}
      </h2>

      <p className="text-zinc-800 text-center text-base md:text-lg font-medium capitalize self-center max-w-[1122px] mt-4">
        {description}
      </p>
      <ActionButtons className="lg:hidden w-[70%]  sm:w-[40%] flex mx-auto justify-center items-center gap-5 mt-8 px-5" />
    </div>
  );
};
