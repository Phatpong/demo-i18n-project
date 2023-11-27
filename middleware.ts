import { authMiddleware } from "@clerk/nextjs";

import createMiddleware from "next-intl/middleware";

export const intlMiddleware = createMiddleware({
	locales: ["en", "th"],

	defaultLocale: "en",
});

export default authMiddleware({
	beforeAuth: (request) => {
		// Execute next-intl middle before Clerk's auth middleware
		return intlMiddleware(request);
	},

	// Ensure that locale specific sign-in pages are public
	publicRoutes: [
		//
		"/:locale",
		// SIGN IN
		"/sign-in",
		"/:locale/sign-in",
		// SIGN UP
		"/sign-up",
		"/:locale/sign-up",
		// FORGOT PASSWORD
		"/forgot-password",
		"/:locale/forgot-password",
		// WEBHOOK
		"/:locale/api/webhook/clerk",
	],
	ignoredRoutes: [
		//
		"/:locale/sign-in",
		"/:locale/sign-up",
	],
});

// Path ไหนก็ตามต่อจากนี้จะโดน next-intl และ clerk จับตาดู
export const config = {
	matcher: [
		//
		// "/((?!.+\\.[\\w]+$|_next).*)",
		"/(api|trpc)(.*)",
		"/",
		"/(en|th)/:path*", // ทุก Route ที่ขึ้นต้นด้วย /en หรือ /th จะโดน clerk protect หมด
	],
};
