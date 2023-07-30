"use client";
import React from "react";
import Card from "../card/Card";
import { useAppContext } from "@/context/AppContext";
import { DataItem } from "@wix/data/build/cjs/src/data-v2-data-item.universal";

export const Project = () => {
  const { dataItems } = useAppContext() as { dataItems: DataItem[] };

  return (
    <>
      <p className="text-zinc-800 text-opacity-90 text-base font-normal capitalize">
        Projects
      </p>
      {dataItems?.map((item: any, idx: number) => {
        const { title, subTitle, image, show } = item.data;
        if (show) {
          return (
            <div
              key={item._id}
              className="flex flex-col items-center justifify-center gay-y-4">
              <Card id={idx} image={image} title={title} subTitle={subTitle} />
            </div>
          );
        }
      })}
    </>
  );
};
function ContextWrapper(): { selector: any } {
  throw new Error("Function not implemented.");
}
