import { PrismaAdapter } from '@auth/prisma-adapter'
import { compact } from 'lodash-es'
import { AuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

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
			})
	])
}
