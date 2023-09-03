import { DocumentUri } from "@/context/AppContext";

type PdfViewerType = {
	docs: DocumentUri;
};

export const PdfViewer = ({ docs }: PdfViewerType) => {
	if (!docs) return null;
	return (
		<div className="w-full h-full">
			<iframe
				src={docs[0].uri}
				width="100%"
				height="100vh"
				allow="autoplay"
				allowFullScreen
				style={{ border: "none" }}
			></iframe>
		</div>
	);
};
