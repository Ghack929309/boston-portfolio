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
	loading: boolean;
};

const ContextWrapper = React.createContext({});

export const useAppContext = (id?: string): useAppContextType => {
	const [mounted, setMounted] = React.useState(false);
	const [documents, setDocuments] = React.useState<DocumentUri | null>(null);
	const [loading, setLoading] = React.useState(false);
	const { dataItems } = React.useContext(ContextWrapper) as {
		dataItems: DataItem[];
	};
	useEffect(() => {
		setLoading(true);
		setMounted(true);
	}, []);
	useEffect(() => {
		if (dataItems && id && mounted) {
			const isMobile = window?.innerWidth < 768;
			const data = dataItems[id as any]?.data;
			const docs = isMobile ? data?.mobileDoc : data?.desktopDoc;
			const documentUri = getFullDocumentURL(docs);
			setDocuments(documentUri);
			setLoading(false);
		}
	}, [dataItems, id, mounted]);

	return { dataItems, documents, loading };
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
