import Link from "next/link";
import React from "react";
import { ActionButtons } from "../ActionButtons/ActionButtons";

export const Header = () => {
	return (
		<div className="navbar fixed flex justify-between items-center">
			<Link href="/" className="btn btn-ghost text-accent normal-case text-xl">
				Portfolio
			</Link>
			<ActionButtons className="hidden lg:flex text-white justify-between gap-x-8 " />
		</div>
	);
};
