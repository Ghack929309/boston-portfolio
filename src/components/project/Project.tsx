"use client";
import React from "react";
import Card from "../card/Card";
import Skeleton from "react-loading-skeleton";
import { useWixDocuments } from "../../../helpers/useWixDocuments";

export const Project = () => {
  const { loading, dataItems: projects } = useWixDocuments();

  {
    loading && (
      <Skeleton
        count={3}
        height={230}
        className="max-w-[80%] rounded-2xl flex mx-auto gap-y-6"
      />
    );
  }
  return (
    <div id="project" className="group flex justify-center gap-4 mb-6">
      {projects?.map((item: any, idx: number) => {
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
  );
};
