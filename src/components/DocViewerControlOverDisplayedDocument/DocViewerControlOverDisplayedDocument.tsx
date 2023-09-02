import DocViewer, { IDocument, DocViewerRenderers } from "react-doc-viewer";

import { useEffect, useState } from "react";

type DocViewerControlOverDisplayedDocumentProps = {
	docs: IDocument[];
};

export const DocViewerControlOverDisplayedDocument = ({
	docs,
}: DocViewerControlOverDisplayedDocumentProps) => {
	if (!docs) return null;
	return (
		<div className="w-full h-full">
			<DocViewer
				documents={docs}
				pluginRenderers={DocViewerRenderers}
				// style={{ height: 1000, width: "100%" }}
			/>
		</div>
	);
};
