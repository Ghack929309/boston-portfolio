'use client'
import React, { useEffect, useMemo } from 'react'
import { useGetCollection } from '../../helpers/useGetCollection'


const ContextWrapper = React.createContext({})
export const useAppContext = () => React.useContext(ContextWrapper)
export function AppContext({ children }: { children: React.ReactNode }) {
    const { dataItems: backenData } = useGetCollection()
    const dataItems = useMemo(() => backenData, [backenData])
    return (
        <ContextWrapper.Provider value={{ dataItems }}>
            {children}
        </ContextWrapper.Provider>
    )
}
