import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	// A list of all locales that are supported
	locales: ["en", "th"],

	// Used when no locale mathces
	defaultLocale: "en",
});

export const config = {
	// Mathc only internationalized pathnames
	matcher: ["/", "/(en|th)/:path*"],
};
