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
    <Link prefetch href={`/project/${id}`}>
      <Image
        className={`rounded-xl hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] ${
          id % 2 === 0 ? "rotate-2" : "-rotate-2"
        } `}
        src={imageMedia.url}
        width={270}
        height={160}
        alt={title}
        priority
      />
    </Link>
  );
}
