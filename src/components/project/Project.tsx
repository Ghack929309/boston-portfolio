"use client";
import React from "react";
import Card from "../card/Card";
import { useAppContext } from "@/context/AppContext";
import { DataItem } from "@wix/data/build/cjs/src/data-v2-data-item.universal";
import Skeleton from "react-loading-skeleton";

export const Project = () => {
  const { dataItems } = useAppContext() as { dataItems: DataItem[] };

  return (
    <>
      <div className=" bg-zinc-100 w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 px-4 py-3.5 ">
        {!dataItems && (
          <Skeleton
            count={3}
            height={230}
            className="max-w-[80%] rounded-2xl flex mx-auto gap-y-6"
          />
        )}
        {dataItems?.map((item: any, idx: number) => {
          const { title, subTitle, image, show } = item.data;
          if (show) {
            return (
              <div
                key={item._id}
                className="flex flex-col items-center justify-center mb-4">
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
