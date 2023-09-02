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
