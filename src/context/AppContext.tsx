"use client";
import React, { use, useEffect, useMemo } from "react";
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
	const [mounted, setMounted] = React.useState(false);
	const [documents, setDocuments] = React.useState<DocumentUri | null>(null);
	const { dataItems } = React.useContext(ContextWrapper) as {
		dataItems: DataItem[];
	};
	useEffect(() => {
		setMounted(true);
	}, []);
	useEffect(() => {
		if (dataItems && id && mounted) {
			const isMobile = window?.innerWidth < 768 || true;
			const data = dataItems[id as any]?.data;
			const docs = isMobile ? data?.mobileDoc : data?.desktopDoc;
			console.log(docs);
			const documentUri = getFullDocumentURL(docs);
			setDocuments(documentUri);
		}
	}, [dataItems, id, mounted]);

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
