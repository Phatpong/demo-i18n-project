import { Locale } from "@/lib/i18n/i18n.config";
import Link from "next/link";

type HomePageProps = {
	params: {
		locale: Locale;
	};
};

const HomePage = ({ params: { locale } }: HomePageProps) => {
	return (
		<div className="flex flex-col">
			<Link
				className="text-blue-500 underline"
				href={`/${locale}/products`}>
				Go to {`/${locale}/products`}
			</Link>
			HomePage
		</div>
	);
};

export default HomePage;
