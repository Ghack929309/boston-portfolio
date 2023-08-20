"use client";
import React, { useMemo } from "react";
import { useGetCollection } from "../../helpers/useGetCollection";

const ContextWrapper = React.createContext({});
export const useAppContext = () => React.useContext(ContextWrapper);

export function AppContext({ children }: { children: React.ReactNode }) {
	const { dataItems: backEndData } = useGetCollection();
	const dataItems = useMemo(() => backEndData, [backEndData]);
	return (
		<ContextWrapper.Provider value={{ dataItems }}>
			{children}
		</ContextWrapper.Provider>
	);
}
