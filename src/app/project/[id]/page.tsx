"use client";
import { useParams } from "next/navigation";
import { DocumentUri, useAppContext } from "@/context/AppContext";
import { DocViewerControlOverDisplayedDocument } from "@/components/DocViewerControlOverDisplayedDocument/DocViewerControlOverDisplayedDocument";

export default function ProjectKey() {
	const { id } = useParams();
	const { documents } = useAppContext(id as string) as {
		documents: DocumentUri;
	};
	return <DocViewerControlOverDisplayedDocument docs={documents} />;
}
