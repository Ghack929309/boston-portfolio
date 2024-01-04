"uae client";
import Link from "next/link";
import { media } from "@wix/api-client";
import Image from "next/image";
import React, { ReactNode } from "react";

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
      className="flex flex-col items-center max-w-[420px] overflow-hidden rounded-[40px] hover:shadow-lg hover:shadow-indigo-300 py-2 ">
      <Image
        className="object-cover w-auto h-auto "
        quality={100}
        sizes="100vw"
        priority
        src={imageMedia.url}
        alt={title}
        width={420}
        height={300}
      />

      <h3 className="max-w-xs truncate px-4 text-zinc-800 text-center text-sm font-medium capitalize pt-2 ">
        {title}
      </h3>
    </Link>
  );
}
