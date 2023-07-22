"use client";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect } from "react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import { DataItem } from "@wix/data/build/cjs/src/data-v2-data-item.universal";

type FigmaDataType = {
	error: boolean | null;
	images: string;
};

export default function ProjectKey() {
	const { dataItems } = useAppContext() as { dataItems: DataItem[] };
	const [figmaData, setFigmaData] = React.useState<FigmaDataType[]>();
	const { id: fileId } = useParams();
	const id = Number(fileId);
	const data = dataItems && dataItems[id]?.data;
	const fileKey = data?.fileKey;
	const ids = data?.desktopIds || data?.mobileIds;
	const getFigmaData = useCallback(async () => {
		if (!ids) return;
		const data = await Promise.all(
			ids.map(async (id: string) => {
				const res = await fetch(`/api/figma?fileKey=${fileKey}&id=${id}`);
				return res.json();
			})
		);
		setFigmaData(data);
	}, [fileKey, id]);
	useEffect(() => {
		getFigmaData();
	}, [dataItems, getFigmaData]);
	if (!figmaData) return <></>;
	return (
		<div className="flex flex-col items-center justify-center">
			{figmaData?.map((item, index) => {
				console.log(item.images);
				if (!item.error) {
					return (
						<div key={item.images}>
							<Image
								priority
								quality={100}
								src={item.images}
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
								alt="Picture of the author"
								width={500}
								height={500}
								className="object-cover"
							/>
						</div>
					);
				}
			})}
		</div>
	);
}
