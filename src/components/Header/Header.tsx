import Link from "next/link";
import React from "react";
import { ActionButtons } from "../ActionButtons/ActionButtons";

export const Header = () => {
	return (
		<div className="navbar fixed z-10 flex justify-between items-center bg-zinc-100 ">
			<Link href="/" className="btn uppercase btn-ghost text-accent text-xl">
				Portfolio
			</Link>
			<ActionButtons className="hidden lg:flex text-white justify-between gap-x-8 " />
		</div>
	);
};
