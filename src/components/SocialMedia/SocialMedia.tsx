import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SocialMedia = () => {
  return (
    <div className="border bg-zinc-300 bg-opacity-40 flex justify-center items-center gap-x-6 px-16 py-5 border-solid border-zinc-800 border-opacity-30 max-md:px-5 mt-[60px]">
      <Link href="https://dribbble.com/zakaro" target="_blank">
        <Image width={36} height={36} src="/images/dribble.png" alt="dribble" />
      </Link>
      <Link href="https://www.behance.net/christclement" target="_blank">
        <Image width={36} height={36} src="/images/behance.png" alt="dribble" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/christopher-clement-478222222/"
        target="_blank">
        <Image
          width={36}
          height={36}
          src="/images/linkedin.png"
          alt="dribble"
        />
      </Link>
    </div>
  );
};
