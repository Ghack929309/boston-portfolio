"uae client";
import Link from "next/link";
import { media } from "@wix/api-client";
import Image from "next/image";
import React from "react";

type CardProps = {
	image: string;
	title: string;
	subTitle: string;
	id: number;
};
export default function Card({ image, title, subTitle, id }: CardProps) {
	const imageMedia = media.getImageUrl(image);
	return (
		<div
			className="flex max-w-md md:max-w-[80%] flex-col 
	overflow-hidden bg-white items-center justify-center md:flex-row gap-y-2 
	md:p-0 rounded-2xl py-4 px-6"
		>
			<div className="max-h-[20rem] md:min-h-[10rem] sm:h-fit min-w-[20rem] bg-green-50 overflow-hidden rounded-2xl">
				<Image
					className="object-cover h-auto w-full "
					quality={100}
					sizes="100vw"
					priority
					src={imageMedia.url}
					alt={title}
					width={300}
					height={300}
				/>
			</div>
			<div className="flex flex-col gap-y-2 max-h-32 items-center justify-center md:items-start md:px-6 md:py-4 ">
				<p className="text-base capitalize opacity-80 font-medium text-zinc-800 ">
					{title}
				</p>
				<p className="md:pr-4 text-zinc-800 text-opacity-70 overflow-hidden text-ellipsis w-full h-full text-center text-sm font-normal">
					{subTitle}
				</p>
				<button className="text-indigo-500 hover:opacity-60 md:self-end text-sm font-normal capitalize">
					<Link prefetch href={`/project/${id}`}>
						see Project
					</Link>
				</button>
			</div>
		</div>
	);
}
