"use client";
import React, { useEffect } from "react";
import Card from "../card/Card";
import { DataItem } from "@wix/data/build/cjs/src/data-v2-data-item.universal";
import Skeleton from "react-loading-skeleton";
import { items } from "@wix/data";
import { OAuthStrategy, createClient } from "@wix/api-client";

export const Project = () => {
  const [projects, setProjects] = React.useState<DataItem[]>();
  const [loading, setLoading] = React.useState(false);
  const collectionId = "figmaprojects";

  const getWixProjects = async () => {
    setLoading(true);
    const wixItemsCollection = createClient({
      modules: { items },
      auth: OAuthStrategy({ clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID! }),
    });
    const options = {
      dataCollectionId: collectionId,
      consistentRead: true,
    };
    const res = await wixItemsCollection.items.queryDataItems(options).find();
    setLoading(false);
    setProjects(res?.items.reverse());
  };

  useEffect(() => {
    getWixProjects();
  }, []);

  return (
    <div id="project" className="group flex justify-center gap-4 mb-6">
      {loading && (
        <Skeleton
          count={3}
          height={230}
          className="max-w-[80%] rounded-2xl flex mx-auto gap-y-6"
        />
      )}
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
