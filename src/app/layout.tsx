import "react-loading-skeleton/dist/skeleton.css";
import "./globals.css";
import { AppContext } from "@/context/AppContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Clement Portfolio",
	description:
		"I'm Chris Clement UI Designer /UX Designer & Researcher I help users to easily interact with your projects.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={"bg-zinc-100 " + inter.className}>
				<AppContext>
					<Header />
					<div className="pt-20">{children}</div>
					<Footer />
				</AppContext>
			</body>
		</html>
	);
}
