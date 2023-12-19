import React from "react";
import Image from "next/image";

export const Skills = () => {
  const logos = [
    "/images/figma.png",
    "/images/ai.png",
    "/images/photoshop.png",
    "/images/webflow.png",
    "/images/wix.png",
    "/images/xd.png",
  ];
  return (
    <div className="self-center flex w-full max-w-[424px] items-stretch justify-between gap-5 px-5 max-md:justify-center">
      {logos.map((logo, index) => (
        <Image
          key={index}
          width={39}
          height={39}
          alt="logo"
          src={logo}
          className="max-w-[39px] aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
      ))}
    </div>
  );
};
