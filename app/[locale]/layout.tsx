import { Locale } from "@/lib/i18n/i18n.type";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { type ReactNode } from "react";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

type MainLayoutProps = {
	children: ReactNode;
	params: {
		locale: Locale;
	};
};

// Can be imported from a shared config
const locales: Locale[] = ["en", "th"];

export default function MainLayout({ children, params: { locale } }: MainLayoutProps) {
	// Validate that the imcoming `locale` parameter is valid
	if (!locales.includes(locale)) notFound();

	return (
		<html lang={locale}>
			<body className={inter.className}>
				<div>Locale: {locale}</div>
				{children}
			</body>
		</html>
	);
}