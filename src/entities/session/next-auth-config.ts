import { PrismaAdapter } from '@auth/prisma-adapter'
import { compact } from 'lodash-es'
import { AuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

import { privateConfig } from '@/shared/config/private'
import { dbClient } from '@/shared/lib/db'

export const nextAuthConfig: AuthOptions = {
	adapter: PrismaAdapter(dbClient),
	providers: compact([
		privateConfig.GITHUB_ID &&
			privateConfig.GITHUB_SECRET &&
			GitHubProvider({
				clientId: process.env.GITHUB_ID ?? '',
				clientSecret: process.env.GITHUB_SECRET ?? ''
			}),
		privateConfig.GOOGLE_CLIENT_ID &&
			privateConfig.GOOGLE_CLIENT_SECRET &&
			GoogleProvider({
				clientId: process.env.GOOGLE_CLIENT_ID ?? '',
				clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
			})
	])
}
