"use client";
import { useParams } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import { DataItem } from "@wix/data/build/cjs/src/data-v2-data-item.universal";
import Skeleton from "react-loading-skeleton";
import { DocViewerControlOverDisplayedDocument } from "@/components/DocViewerControlOverDisplayedDocument/DocViewerControlOverDisplayedDocument";

type ApiResponseType = { error: boolean | null; image: any };
type FigmaDataType = {
	desktop: ApiResponseType;
	desktopDark: ApiResponseType;
	mobile: ApiResponseType;
	mobileDark: ApiResponseType;
} | null;

export default function ProjectKey() {
	const { dataItems } = useAppContext() as { dataItems: DataItem[] };
	const { id: fileId } = useParams();
	if (!dataItems) return <Skeleton height={100} width={100} />;
	const docs = dataItems[0]?.data?.allDocuments;
	const documents = getFullDocumentURL(docs);
	console.log(documents[0].uri);
	return <DocViewerControlOverDisplayedDocument docs={documents} />;
}

export function getFullDocumentURL(documents: Array<string>) {
	return documents.map((doc) => {
		return {
			uri:
				doc
					.replace(
						"wix:document://v1",
						"https://d92e1f74-dc61-47ec-a731-3f0aa0f957f3.usrfiles.com"
					)
					.split(".pdf")[0] + ".pdf",
			fileType: "pdf",
		};
	});
}
