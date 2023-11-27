import { Locale } from "@/lib/i18n/i18n.config";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { type ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

type LocaleLayoutProps = {
	children: ReactNode;
	params: {
		locale: Locale;
	};
};

// Can be imported from a shared config
const locales: Locale[] = ["en", "th"];

const LocaleLayout = ({ children, params: { locale } }: LocaleLayoutProps) => {
	// Validate that the imcoming `locale` parameter is valid
	if (!locales.includes(locale)) notFound();

	return (
		<html lang={locale}>
			<body className={inter.className}>
				{/* NAVBAR */}
				<div className="flex flex-row items-center justify-between w-full px-4 h-16 border-b bg-slate-200">
					{/* LEFT */}
					<div className="flex text-xl font-bold">i18n</div>

					{/* CENTER */}
					<div className="flex flex-1 items-center justify-center">
						<div>Locale: {locale}</div>
					</div>

					{/* RIGHT */}
					<div className="flex"></div>
				</div>
				<main>{children}</main>
			</body>
		</html>
	);
};

export default LocaleLayout;
