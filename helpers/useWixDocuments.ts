import React, { useEffect } from "react";
import { useGetCollection } from "./useGetCollection";
import { getFullDocumentURL } from "../utils/getFullDocumentURL";
import { DataItem } from "@wix/data/build/cjs/src/data-v2-data-item.universal";

type useAppContextType = {
  dataItems: DataItem[] | undefined;
  documents: DocumentUri | null;
  loading: boolean;
};
export type DocumentUri = {
  uri: string;
  fileType: string;
}[];

export const useWixDocuments = (id?: string): useAppContextType => {
  const [mounted, setMounted] = React.useState(false);
  const [documents, setDocuments] = React.useState<DocumentUri | null>(null);
  const [loading, setLoading] = React.useState(false);
  const { dataItems } = useGetCollection();

  useEffect(() => {
    setLoading(true);
    setMounted(true);
  }, []);
  useEffect(() => {
    if (dataItems && id && mounted) {
      const data = dataItems[id as any]?.data;
      const docs = data?.desktopDoc;
      const documentUri = getFullDocumentURL(docs);
      setDocuments(documentUri);
      setLoading(false);
    }
  }, [dataItems, id, mounted]);

  return { dataItems, documents, loading };
};
