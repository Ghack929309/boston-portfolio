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
      <div className=" flex flex-wrap gap-4 items-center justify-center mt-5 px-4 py-3.5 ">
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
              <Card
                key={item._id}
                id={idx}
                image={image}
                title={title}
                subTitle={subTitle}
              />
            );
          }
        })}
      </div>
    </>
  );
};
