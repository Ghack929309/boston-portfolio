"use client";
import DocViewer, { IDocument, DocViewerRenderers } from "react-doc-viewer";

import { useEffect, useState } from "react";

type DocViewerControlOverDisplayedDocumentProps = {
	docs: IDocument[];
};

export const DocViewerControlOverDisplayedDocument = ({
	docs,
}: DocViewerControlOverDisplayedDocumentProps) => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className="w-full h-full">
			{mounted && (
				<DocViewer
					documents={docs}
					pluginRenderers={DocViewerRenderers}
					// style={{ height: 1000, width: "100%" }}
				/>
			)}
		</div>
	);
};
