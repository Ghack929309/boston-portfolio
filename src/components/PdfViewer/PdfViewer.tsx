"use client";
import { DocumentUri, useWixDocuments } from "../../../helpers/useWixDocuments";

type PdfViewerType = {
  id: string;
};

export const PdfViewer = ({ id }: PdfViewerType) => {
  const { documents: docs, loading } = useWixDocuments(id as string) as {
    documents: DocumentUri;
    loading: boolean;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <p className="text-xl text-gray-400 animate-pulse ">Loading...</p>
      </div>
    );
  }
  if (docs?.length === 0 || !docs)
    return (
      <div className="h-screen flex items-center justify-center ">
        <p className=" w-full lowercase text-center text-gray text-md italic">
          there is no file
        </p>
      </div>
    );
  return (
    <div className="w-full h-screen flex flex-col items-center -mt-8">
      <iframe
        src={docs[0].uri}
        allow="autoplay"
        allowFullScreen
        className="flex items-center justify-center"
        style={{ border: "none", height: "100vh", width: "100%" }}
      ></iframe>
    </div>
  );
};
