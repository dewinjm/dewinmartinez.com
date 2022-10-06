// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'
import packageInfo from './package.json';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN
const SENTRY_LOG = process.env.SENTRY_LOG_LEVEL

Sentry.init({
  dsn: SENTRY_DSN,
  debug: SENTRY_LOG,
  tracesSampleRate: 1.0,
  release: packageInfo.version,
});
