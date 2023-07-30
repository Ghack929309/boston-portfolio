"use client";
import React from "react";
import Card from "../card/Card";
import { useAppContext } from "@/context/AppContext";
import { DataItem } from "@wix/data/build/cjs/src/data-v2-data-item.universal";

export const Project = () => {
  const { dataItems } = useAppContext() as { dataItems: DataItem[] };

  return (
    <>
      <p className=" text-center text-accent text-base font-medium capitalize md:text-lg xl:text-xl">
        Projects
      </p>
      <div className="px-4 flex flex-col gap-y-6 ">
        {dataItems?.map((item: any, idx: number) => {
          const { title, subTitle, image, show } = item.data;
          if (show) {
            return (
              <div
                key={item._id}
                className="flex flex-col items-center justifify-center gay-y-4">
                <Card
                  id={idx}
                  image={image}
                  title={title}
                  subTitle={subTitle}
                />
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
