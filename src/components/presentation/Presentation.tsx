"use client";
import React from "react";

export const Presentation = ({
	name,
	title,
	description,
}: {
	name: string;
	title: string;
	description: string;
}) => {
	const openMailApp = () => {
		const email = "clementchris9293@gmail.com";
		const subject = "Job Opportunity";
		const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
		window.location.href = mailtoUrl;
	};
	return (
		<div className="flex text-accent/90 flex-col gap-y-4 items-center px-4 ">
			<h1 className="font-semibold text-2xl capitalize">{name}</h1>
			<h2 className="font-medium text-xl capitalize max-w-xs md:max-w-full md:tracking-wide text-center">
				{title}
			</h2>
			<p className="font-normal text-base md:tracking-tight max-w-sm md:max-w-full text-center">
				{description}
			</p>
			<div className="flex text-white justify-between gap-x-12 mt-4">
				<a
					href="/christopher_Clement.pdf"
					download="christopher_Clement.pdf"
					className="btn tracking-wide font-normal text-black btn-outline capitalize"
				>
					my resume
				</a>
				<button onClick={openMailApp} className="btn btn-primary font-normal">
					hire me
				</button>
			</div>
		</div>
	);
};
