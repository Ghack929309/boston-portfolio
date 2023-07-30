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
  const [darkMode, setDarkMode] = React.useState(false);
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

  const toggleMode = useCallback(() => {
    setDarkMode(!darkMode);
  }, [darkMode]);

  useEffect(() => {
    getFigmaData();
  }, [dataItems, getFigmaData]);

  if (!figmaData) return <div className="min-h-screen"></div>;
  return (
    <div className=" relative flex flex-col items-center bg-accent/10 justify-center min-h-screen">
      <div className="absolute left-10 top-0">
        <label
          onClick={toggleMode}
          className="relative inline-flex items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            defaultChecked={darkMode}
            onChange={toggleMode}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Dark mode
          </span>
        </label>
      </div>
      <div className="flex flex-col gap-y-2 mt-8">
        {figmaData?.map((item, index) => {
          console.log(item.images);
          if (!item.error) {
            return (
              //   <div key={item.images} className="mockup-phone">
              //     <div className="camera"></div>
              //     <div className="display">
              //       <div className="artboard artboard-demo phone-2 h-full">
              //         <Image
              //           priority
              //           quality={100}
              //           src={item.images}
              //           placeholder="blur"
              //           blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              //           alt="Picture of the author"
              //           width={500}
              //           height={500}
              //           className="object-cover h-auto"
              //         />
              //       </div>
              //     </div>
              //   </div>
              <div
                key={item.images}
                className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-auto w-[272px] h-[572px] bg-white dark:bg-gray-800">
                  <Image
                    priority
                    quality={100}
                    src={item.images}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    alt="Picture of the author"
                    width={272}
                    height={500}
                    className="object-cover h-[99.99%]"
                  />
                  {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" className="dark:hidden w-[272px] h-[572px]" alt="">
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" className="hidden dark:block w-[272px] h-[572px]" alt=""> */}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
