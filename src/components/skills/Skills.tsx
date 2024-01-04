import React from "react";
import {
  AILogo,
  FigmaLogo,
  FramerLogo,
  PhotoshopLogo,
  WebflowLogo,
  WixLogo,
  XDLogo,
} from "../icons";

export const Skills = () => {
  return (
    <div className="self-center flex w-full max-w-[424px] md:max-w-[650px] items-stretch justify-between gap-5 md:gap-x-6 px-5 max-md:justify-center">
      <div className="bg-black   p-2 rounded-xl">
        <FigmaLogo
          className="max-w-[39px] flex-1 shrink-0  "
          width={25}
          height={25}
        />
      </div>
      <AILogo
        className="max-w-[39px] flex-1 shrink-0 "
        width={40}
        height={40}
      />
      <PhotoshopLogo
        className="max-w-[39px] flex-1 shrink-0 "
        width={40}
        height={40}
      />
      <WebflowLogo
        className="max-w-[39px] flex-1 shrink-0 "
        width={40}
        height={40}
      />
      <WixLogo
        className="max-w-[39px] flex-1 shrink-0 "
        width={40}
        height={40}
      />
      <XDLogo
        className="max-w-[39px] flex-1 shrink-0 "
        width={40}
        height={40}
      />
      <FramerLogo
        className="max-w-[39px] flex-1 shrink-0 "
        width={40}
        height={40}
      />
    </div>
  );
};
