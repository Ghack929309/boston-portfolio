"use client";
import React from "react";
import Image from "next/image";
import { ActionButtons } from "../ActionButtons/ActionButtons";

export const About = () => {
  return (
    <div>
      <div className="mb-10 text-center pt-6">
        <Image
          className="inline-flex rounded-full shadow-lg mb-4"
          src="/images/boston.png"
          width={50}
          height={50}
          alt="Clement Christopher"
          priority
        />
        <div className="mb-5">
          <h1 className="font-inter-tight font-bold text-gray-800 dark:text-gray-100 text-2xl mb-1">
            Clement Christopher
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            UI/UX Designer focus on UX Research
          </p>
        </div>
        <ActionButtons />
      </div>
    </div>
  );
};
