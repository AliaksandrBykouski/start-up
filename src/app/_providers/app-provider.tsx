'use client'

import { QueryClientProvider } from '@tanstack/react-query'

import { AppSessionProvider } from '@/entities/session/app-session-provider'
import { ThemeProvider } from '@/features/theme/theme-provider'
import { queryClient } from '@/shared/api/querry-client'
import { ComposeChildren } from '@/shared/lib/react'

export function AppProvider({ children }: { children: React.ReactNode }) {
	return (
		<ComposeChildren>
			<ThemeProvider />
			<AppSessionProvider />
			<QueryClientProvider client={queryClient} />
			{children}
		</ComposeChildren>
	)
}
