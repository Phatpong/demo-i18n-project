import { Locale } from "@/lib/i18n/i18n.config";
import { UserButton } from "@clerk/nextjs";
import { useTranslations } from "next-intl";

type HomePageProps = {
	params: {
		locale: Locale;
	};
};

export default function Home({ params: { locale } }: HomePageProps) {
	const $t = useTranslations();

	return (
		<main className="flex items-center justify-center h-screen w-screen">
			<div className="flex flex-col space-y-4">
				{/* <h1 className="text-2xl font-semibold">Normal</h1> */}
				<h1 className="text-2xl font-semibold">{$t("hello")}</h1>
				<UserButton afterSignOutUrl="/" />
			</div>
		</main>
	);
}
