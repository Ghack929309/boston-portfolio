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
  const imageMedia = media.getImageUrl(image);
  return (
    <Link prefetch href={`/project/${id}`} className="w-full">
      <CardDetails title={title} subTitle={subTitle}>
        <Image
          className="object-cover w-full "
          quality={100}
          sizes="100vw"
          priority
          src={imageMedia.url}
          alt={title}
          width={470}
          height={300}
        />

        <h3 className="block md:hidden bg-opacity-40 w-full text-zinc-800 text-center text-base font-medium capitalize shadow-sm pt-2 pb-8 px-11 ">
          {title}
        </h3>
      </CardDetails>
    </Link>
  );
}

const CardDetails = ({
  title,
  subTitle,
  children,
}: {
  title: string;
  subTitle: string;
  children: ReactNode;
}) => {
  return (
    <section className="relative shadow-sm bg-opacity-70  min-h-[200px] flex flex-col items-center mt-5  space-y-4 rounded-3xl">
      <div className="z-[1] gap-0 my-auto px-px opacity-0 md:hover:opacity-100 absolute inset-0 bg-white bg-opacity-60 rounded-3xl flex items-center justify-center">
        <div className="flex flex-col items-center justify-center px-4 space-y-2 z-[2]">
          <h2 className="text-zinc-800 text-center text-base font-medium capitalize">
            {title}
          </h2>
          <p className="text-zinc-600 text-center text-base font-base capitalize">
            {subTitle}
          </p>
        </div>
      </div>
      {children}
    </section>
  );
};
