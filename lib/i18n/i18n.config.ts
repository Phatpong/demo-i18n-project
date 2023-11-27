const i18nConfig = {
	defaultLocale: "en",
	locales: ["en", "th"],
} as const;

type Locale = (typeof i18nConfig)["locales"][number];

export { i18nConfig, type Locale };
