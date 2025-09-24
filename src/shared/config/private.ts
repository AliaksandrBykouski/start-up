import { z } from 'zod'

const privateConfigSchema = z.object({
	ADMIN_EMAILS: z.string().optional(),
	TEST_EMAIL_TOKEN: z.string().optional(),

	GITHUB_ID: z.string().optional(),
	GITHUB_SECRET: z.string().optional(),

	GOOGLE_CLIENT_ID: z.string().optional(),
	GOOGLE_CLIENT_SECRET: z.string().optional(),

	EMAIL_SERVER_USER: z.string().optional(),
	EMAIL_SERVER_PASSWORD: z.string().optional(),
	EMAIL_SERVER_HOST: z.string().optional(),
	EMAIL_SERVER_PORT: z.string().optional(),
	EMAIL_FROM: z.string().optional(),

	S3_ACCESS_KEY_ID: z.string().optional(),
	S3_SECRET_ACCESS_KEY: z.string().optional(),
	S3_IMAGES_BUCKET: z.string().optional(),
	S3_ENDPOINT: z.string().optional(),
	S3_REGION: z.string().optional()
})

export const privateConfig = privateConfigSchema.parse(process.env)
