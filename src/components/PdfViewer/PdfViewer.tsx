"use client";
import { DocumentUri } from "@/context/AppContext";
import { useState } from "react";

type PdfViewerType = {
	docs: DocumentUri;
};

export const PdfViewer = ({ docs }: PdfViewerType) => {
	const [pdfIndex, setPdfIndex] = useState(0);

	function handlePrevClick() {
		setPdfIndex((prevIndex) => Math.max(prevIndex - 1, 0));
	}

	function handleNextClick() {
		setPdfIndex((prevIndex) => Math.min(prevIndex + 1, docs.length - 1));
	}

	if (!docs)
		return (
			<p className=" w-full lowercase text-center text-gray text-md italic">
				there is no file
			</p>
		);
	return (
		<div className="w-full h-screen flex flex-col justify-center">
			<div className="flex justify-center gap-x-4 p-2 text-black/90">
				<button disabled={pdfIndex === 0} onClick={handlePrevClick}>
					prev
				</button>
				<button
					disabled={pdfIndex === docs.length - 1}
					onClick={handleNextClick}
				>
					next
				</button>
			</div>
			<iframe
				src={docs[pdfIndex].uri}
				allow="autoplay"
				allowFullScreen
				style={{ border: "none", height: "100vh", width: "100vw" }}
			></iframe>
		</div>
	);
};
