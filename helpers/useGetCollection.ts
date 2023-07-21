'use client'
import { createClient, OAuthStrategy } from '@wix/api-client';
import { collections } from '@wix/data';
import { DataCollection } from '@wix/data/build/cjs/src/data-v2-data-collection.universal';
import { items } from '@wix/data'
import { use, useEffect, useState } from 'react';
import { DataItem } from '@wix/data/build/cjs/src/data-v2-data-item.universal';


type CollectionProps = {
  data: DataCollection[]
  _id: string
}
export const useGetCollection = () => {
  const [dataItems, setDataItems] = useState<DataItem[]>()
  const collectionId = 'figmaprojects'


  const getDataItems = async () => {
    const wixItemsCollection = createClient({ modules: { items }, auth: OAuthStrategy({ clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID! }) });
    const options = {
      dataCollectionId: collectionId,
      // consistentRead: true,
    }
    const res = await wixItemsCollection.items.queryDataItems({
      dataCollectionId: collectionId,
      consistentRead: true,
    }).find()

    setDataItems(res?.items)

  }
  useEffect(() => {
    getDataItems()
  }
    , [])
  return { dataItems }
}

