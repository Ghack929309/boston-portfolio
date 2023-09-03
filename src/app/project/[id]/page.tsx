"use client";
import { useParams } from "next/navigation";
import { DocumentUri, useAppContext } from "@/context/AppContext";
import { PdfViewer } from "@/components/PdfViewer/PdfViewer";

export default function ProjectKey() {
	const { id } = useParams();
	const { documents } = useAppContext(id as string) as {
		documents: DocumentUri;
	};
	return <PdfViewer docs={documents} />;
}
