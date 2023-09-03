import { DocumentUri } from "@/context/AppContext";

type PdfViewerType = {
	docs: DocumentUri;
};

export const PdfViewer = ({ docs }: PdfViewerType) => {
	if (!docs) return null;
	return (
		<div className="w-full h-screen flex justify-center">
			<iframe
				src={docs[0].uri}
				allow="autoplay"
				allowFullScreen
				style={{ border: "none", height: "100vh", width: "100vw" }}
			></iframe>
		</div>
	);
};
