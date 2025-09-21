import * as Sentry from '@sentry/nextjs'
import { captureRequestError } from '@sentry/nextjs'

export async function register() {
	Sentry.init({
		dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
		environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT,
		// Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
		tracesSampleRate: 1,

		// Enable logs to be sent to Sentry
		enableLogs: true,

		// Setting this option to true will print useful information to the console while you're setting up Sentry.
		debug: false
	})
}

export async function onRequestError(
	err: unknown,
	request: Request,
	context: any
) {
	// @ts-ignore
	captureRequestError(err, request, {
		statusCode: context.res?.statusCode,
		user: context.user
	})
}
