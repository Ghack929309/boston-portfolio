import { NextRequest, NextResponse } from "next/server";
import { files } from "@wix/media";
import { createClient, ApiKeyStrategy } from "@wix/api-client";

export async function GET(req: NextRequest, res: NextResponse) {
	try {
		const { fileId } = await req.json();

		const wixFileItems = createClient({
			modules: { files },
			auth: ApiKeyStrategy({
				siteId: process.env.NEXT_PUBLIC_WIX_SITE_ID!,
				apiKey: process.env.NEXT_PUBLIC_WIX_API_KEY!,
			}),
		});
		const url = await wixFileItems.files.generateFileDownloadUrl(
			"o4mi8FW1TusYaxflzRW6Um"
		);
		console.log(url);
		return NextResponse.json(url, { status: 200 });
	} catch (error) {
		console.log("there is an error", error);
		return NextResponse.json(error, { status: 500 });
	}
}
