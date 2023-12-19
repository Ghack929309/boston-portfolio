import { PdfViewer } from "@/components/PdfViewer/PdfViewer";

export default function ProjectKey({ params }: { params: any }) {
  const id = params.id;

  return <PdfViewer id={id} />;
}
