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
  if (!image) return;
  const imageMedia = media.getImageUrl(image);
  return (
    <Link
      prefetch
      href={`/project/${id}`}
      className="flex flex-col items-center w-auto overflow-hidden rounded-[40px] hover:shadow-lg hover:shadow-indigo-300 py-2 ">
      <Image
        className="object-cover max-w-[320px] h-auto "
        quality={100}
        sizes="100vw"
        priority
        src={imageMedia.url}
        alt={title}
        width={320}
        height={300}
      />

      <h3 className="max-w-xs px-4 text-zinc-800 text-center text-sm font-medium capitalize my-2 ">
        {title}
      </h3>
    </Link>
  );
}
