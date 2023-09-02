"use client";
import React, { useEffect, useMemo } from "react";
import { useGetCollection } from "../../helpers/useGetCollection";
import { getFullDocumentURL } from "../../utils/getFullDocumentURL";
import { DataItem } from "@wix/data/build/cjs/src/data-v2-data-item.universal";

export type DocumentUri = {
	uri: string;
	fileType: string;
}[];

type useAppContextType = {
	dataItems: DataItem[];
	documents: DocumentUri | null;
};

const ContextWrapper = React.createContext({});

export const useAppContext = (id?: string): useAppContextType => {
	const [documents, setDocuments] = React.useState<DocumentUri | null>(null);
	const { dataItems } = React.useContext(ContextWrapper) as {
		dataItems: DataItem[];
	};
	useEffect(() => {
		if (dataItems && id) {
			const docs = dataItems[id as any]?.data?.allDocuments;
			const documentUri = getFullDocumentURL(docs);
			setDocuments(documentUri);
		}
	}, [dataItems, id]);

	return { dataItems, documents };
};

export function AppContext({ children }: { children: React.ReactNode }) {
	const { dataItems: backEndData } = useGetCollection();
	const dataItems = useMemo(() => backEndData, [backEndData]);
	return (
		<ContextWrapper.Provider value={{ dataItems }}>
			{children}
		</ContextWrapper.Provider>
	);
}
