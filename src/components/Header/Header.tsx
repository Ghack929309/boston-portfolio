import Link from "next/link";
import React from "react";

export const Header = () => {
	return (
		<div className="navbar flex justify-between items-center mb-8">
			<Link href="/" className="btn btn-ghost text-accent normal-case text-xl">
				Boston
			</Link>
		</div>
	);
};
