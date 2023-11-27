import { Locale } from "@/lib/i18n/i18n.type";
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
			<h1 className="text-2xl font-semibold">{$t("hello")}</h1>
		</main>
	);
}
