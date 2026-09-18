// Set NEXT_PUBLIC_SITE_URL to the final public origin before deploying.
const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);

export const siteUrl = configuredUrl
  ? new URL(configuredUrl).origin
  : undefined;
