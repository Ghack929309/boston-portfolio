"use client";
import { DocumentUri, useAppContext } from "@/context/AppContext";
import { useState } from "react";

type PdfViewerType = {
  id: string;
};

export const PdfViewer = ({ id }: PdfViewerType) => {
  const { documents: docs, loading } = useAppContext(id as string) as {
    documents: DocumentUri;
  } & ReturnType<typeof useAppContext>;
  const [pdfIndex, setPdfIndex] = useState(0);

  function handlePrevClick() {
    setPdfIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }

  function handleNextClick() {
    setPdfIndex((prevIndex) => Math.min(prevIndex + 1, docs.length - 1));
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <p className="text-xl text-gray-400 animate-pulse ">Loading...</p>
      </div>
    );
  }
  if (docs?.length === 0 || !docs)
    return (
      <p className=" w-full lowercase text-center text-gray text-md italic">
        there is no file
      </p>
    );
  return (
    <div className="w-full h-screen flex flex-col items-center px-2">
      {docs.length > 1 ? (
        <div className="flex justify-center gap-x-4 p-2 text-black/90">
          <button disabled={pdfIndex === 0} onClick={handlePrevClick}>
            prev
          </button>
          <button
            disabled={pdfIndex === docs.length - 1}
            onClick={handleNextClick}>
            next
          </button>
        </div>
      ) : null}

      <iframe
        src={docs[pdfIndex].uri}
        allow="autoplay"
        allowFullScreen
        className="flex items-center justify-center"
        style={{ border: "none", height: "100vh", width: "100%" }}></iframe>
    </div>
  );
};
