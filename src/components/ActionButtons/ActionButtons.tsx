"use client";
import React from "react";

type ActionButtonsType = {
	className?: string;
};

export const ActionButtons = ({ className }: ActionButtonsType) => {
	const openMailApp = () => {
		const email = "clementchris9293@gmail.com";
		const subject = "Job Opportunity";
		const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
		window.location.href = mailtoUrl;
	};
	return (
		<div className={className}>
			<a
				href="/christopher_Clement.pdf"
				download="christopher_Clement.pdf"
				className="btn tracking-wide font-normal text-black btn-outline capitalize"
			>
				my resume
			</a>
			<button
				onClick={openMailApp}
				className="btn btn-primary text-white font-normal"
			>
				hire me
			</button>
		</div>
	);
};
