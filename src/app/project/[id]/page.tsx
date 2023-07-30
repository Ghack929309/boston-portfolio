"use client";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useMemo } from "react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import { DataItem } from "@wix/data/build/cjs/src/data-v2-data-item.universal";
import Toggle from "@/components/toggle/Toggle";
import { headers } from "next/dist/client/components/headers";

type ApiResponseType = { error: boolean | null; image: any };
type FigmaDataType = {
  desktop: ApiResponseType;
  desktopDark: ApiResponseType;
  mobile: ApiResponseType;
  mobileDark: ApiResponseType;
} | null;

export default function ProjectKey() {
  const { dataItems } = useAppContext() as { dataItems: DataItem[] };
  const [figmaData, setFigmaData] = React.useState<FigmaDataType>(null);
  const { id: fileId } = useParams();
  const [designMode, setDesignMode] = React.useState({
    desktop: true,
    mobile: false,
    darkMode: false,
  });
  const id = Number(fileId);
  const data = dataItems && dataItems[id]?.data;
  const fileKey = data?.fileKey;
  const ImageIds = useMemo(() => {
    if (!data) return null;
    return {
      desktopIds: data.desktopIds,
      mobileIds: data.mobileIds,
      mobileDarkIds: data.mobileDarkIds,
      desktopDarkIds: data.desktopDarkIds,
    };
  }, [data]);

  const getFigmaData = useCallback(async () => {
    if (!ImageIds) return;
    const res = await fetch(`/api/figma`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fileKey: fileKey,
        ids: ImageIds,
      }),
    });
    const { mobile, desktop, desktopDark, mobileDark } = await res.json();
    setFigmaData({ mobile, desktop, desktopDark, mobileDark });
  }, [fileKey, ImageIds]);

  const toggleThemeMode = useCallback(() => {
    setDesignMode((prev) => ({
      ...prev,
      darkMode: !prev.darkMode,
    }));
  }, []);
  const toggleDeviceMode = useCallback(() => {
    setDesignMode((prev) => ({
      ...prev,
      mobile: !prev.mobile,
      desktop: !prev.desktop,
    }));
  }, []);

  const showData = useMemo(() => {
    if (!figmaData) return null;
    if (figmaData.desktop.image && designMode.desktop && !designMode.darkMode) {
      return figmaData.desktop.image;
    }
    if (
      figmaData.desktopDark.image &&
      designMode.desktop &&
      designMode.darkMode
    ) {
      return figmaData.desktopDark.image;
    }
    if (figmaData.mobile.image && designMode.mobile && !designMode.darkMode) {
      return figmaData.mobile.image;
    }
    if (
      figmaData.mobileDark.image &&
      designMode.mobile &&
      designMode.darkMode
    ) {
      return figmaData.mobileDark.image;
    }
  }, [designMode, figmaData]);

  useEffect(() => {
    if (!data) return;
    if (data.deskTopIds) {
      setDesignMode((prev) => ({
        ...prev,
        mobile: false,
        desktop: true,
      }));
    }
    if (data.mobileIds) {
      setDesignMode((prev) => ({
        ...prev,
        mobile: true,
        desktop: false,
      }));
    }
    if (data.mobileDarkIds || data.desktopDarkIds) {
      setDesignMode((prev) => ({
        ...prev,
        darkMode: false,
      }));
    }
  }, [data]);

  useEffect(() => {
    getFigmaData();
  }, [dataItems, getFigmaData]);

  if (!showData) return <div className="min-h-screen"></div>;
  console.log(designMode);
  console.table("condition", data?.deskTopIds && designMode.desktop);
  return (
    <div className="relative flex flex-col items-center bg-accent/10 justify-center min-h-screen">
      {(data?.mobileDarkIds || data?.desktopDarkIds) && (
        <Toggle
          label={{ on: "dark", off: "light" }}
          mode={designMode.darkMode}
          toggleMode={toggleThemeMode}
        />
      )}

      {data?.desktopIds && data?.mobileIds && (
        <Toggle
          className="absolute right-40 top-0"
          label={{ on: "desktop", off: "mobile" }}
          mode={designMode.desktop}
          toggleMode={toggleDeviceMode}
        />
      )}

      <div className="flex flex-col gap-y-2 md:gap-y-4 mt-8">
        {showData?.map((images: string) => {
          return data?.deskTopIds || designMode.desktop ? (
            <div key={images} className="mx-0">
              <Image
                priority
                quality={100}
                src={images}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                alt="Picture of the author"
                width={500}
                height={500}
                className="object-cover h-auto"
              />
            </div>
          ) : (
            <div
              key={images}
              className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
              <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <div className="overflow-y-auto max-h-[572px]">
                  <Image
                    priority
                    quality={100}
                    src={images}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    alt="Picture of the author"
                    width={272}
                    height={500}
                    className="object-cover h-full"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
