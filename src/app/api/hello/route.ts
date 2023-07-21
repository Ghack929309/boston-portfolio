import { NextRequest, NextResponse } from "next/server"
import { createClient, OAuthStrategy } from '@wix/api-client';
import wixData from '@wix/data';
import { items } from '@wix/data'




export async function GET(req: NextRequest, res: NextResponse) {

    const collectionId = 'figmaprojects'

    const wixItemsCollection = createClient({ modules: { items }, auth: OAuthStrategy({ clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID! }) });
    const options = {
        dataCollectionId: collectionId,
        // consistentRead: true,
    }
    const dataItems = await wixItemsCollection.items.queryDataItems({
        dataCollectionId: collectionId,
        consistentRead: true,
    })



    return NextResponse.json({ dataItems })

}