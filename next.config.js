/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();
// TODO :: CUSTOM I18N PATH
// Specify a custom path here
// './lib/i18n/i18n.ts'

const nextConfig = {};

module.exports = withNextIntl(nextConfig);
