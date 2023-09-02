import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
	try {
		const { ids, fileKey } = await req.json();
		if (!ids || !fileKey)
			return NextResponse.json(
				{ error: "missing id or fileKey" },
				{ status: 400 }
			);
		const idTypes = [
			{ id: ids?.mobileIds, type: "mobile" },
			{ id: ids?.mobileDarkIds, type: "mobileDark" },
			{ id: ids?.desktopIds, type: "desktop" },
			{ id: ids?.desktopDarkIds, type: "desktopDark" },
		];
		const imageResponses = await Promise.all(
			idTypes.map(({ id }) => {
				if (id) {
					console.log();
					return fetch(
						`https://api.figma.com/v1/images/${fileKey}?ids=${id.join(
							","
						)}&format=svg`,
						{
							method: "GET",
							headers: {
								"X-Figma-Token": process.env.NEXT_PUBLIC_FIGMA_TOKEN!,
								"Content-Type": "application/json",
							},
						}
					).then((res) => res.json());
				}
			})
		);
		console.log(imageResponses);
		const images = idTypes.reduce((acc: any, { type }, index) => {
			const item = imageResponses[index]?.images;
			acc[type] = {
				image: item ? Object.values(item) : null,
				error: imageResponses[index]?.err || null,
			};
			return acc;
		}, {});

		return NextResponse.json(images, { status: 200 });
	} catch (error) {
		console.log("there is an error", error);
		return NextResponse.json(error, { status: 500 });
	}
}
