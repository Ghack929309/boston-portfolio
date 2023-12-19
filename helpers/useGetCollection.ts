"use client";
import { createClient, OAuthStrategy } from "@wix/api-client";
import { files } from "@wix/media";
import { items } from "@wix/data";
import { useEffect, useState } from "react";
import { DataItem } from "@wix/data/build/cjs/src/data-v2-data-item.universal";

type FileOptions = {
  assetKeys: string[];
  downloadFileName: string;
  expirationInMinutes: number;
};
export const useGetCollection = () => {
  const [dataItems, setDataItems] = useState<DataItem[]>();
  const collectionId = "figmaprojects";

  const getDataItems = async () => {
    const wixItemsCollection = createClient({
      modules: { items },
      auth: OAuthStrategy({ clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID! }),
    });
    const options = {
      dataCollectionId: collectionId,
      consistentRead: true,
    };
    const res = await await wixItemsCollection.items
      .queryDataItems(options)
      .find();
    setDataItems(res?.items.reverse());
  };
  const generateFileDownloadUrl = async (
    fileId: string,
    options?: FileOptions
  ) => {
    const wixFileItems = createClient({
      modules: { files },
      auth: OAuthStrategy({ clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID! }),
    });
    const url = await wixFileItems.files.generateFileDownloadUrl(fileId);
    return {
      url,
    };
  };
  useEffect(() => {
    getDataItems();
  }, []);
  return { dataItems, generateFileDownloadUrl };
};
