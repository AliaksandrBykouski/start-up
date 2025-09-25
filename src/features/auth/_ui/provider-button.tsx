'use client'

import { ClientSafeProvider } from 'next-auth/react'

import { Button } from '@/shared/ui/button'
import { Spinner } from '@/shared/ui/spinner'

import { useOAuthSignIn } from '../_vm/use-oauth-sign-in'

export function ProviderButton({ provider }: { provider: ClientSafeProvider }) {
	const oauthSignIn = useOAuthSignIn(provider)

	const getIcon = (provider: ClientSafeProvider) => {
		const GitHub = (props: React.SVGProps<SVGSVGElement>) => (
			<svg
				className='w-5 h-5 mr-2'
				viewBox='0 0 24 24'
				fill='currentColor'
				{...props}
			>
				<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
			</svg>
		)
		const Google = (props: React.SVGProps<SVGSVGElement>) => (
			<svg viewBox='0 0 24 24' fill='none' {...props}>
				<path
					d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
					fill='#4285F4'
				/>
				<path
					d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.13v2.84C3.93 20.94 7.61 23 12 23z'
					fill='#34A853'
				/>
				<path
					d='M5.84 14.8c-.22-.66-.35-1.36-.35-2.08s.13-1.42.35-2.08V8.8H2.13C1.43 10.16 1 11.56 1 13s.43 2.84 1.13 4.2l3.71-2.4z'
					fill='#FBBC05'
				/>
				<path
					d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 15.03 1 12 1 7.61 1 3.93 3.06 2.13 6.2l3.71 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
					fill='#EA4335'
				/>
			</svg>
		)

		switch (provider.id) {
			case 'github':
				return <GitHub className='mr-2 h-4 w-4' />
			case 'google':
				return <Google className='mr-2 h-4 w-4' />
			default:
				return null
		}
	}

	return (
		<Button
			variant='outline'
			type='button'
			disabled={oauthSignIn.isPending}
			onClick={() => oauthSignIn.signIn()}
			className='cursor-pointer'
		>
			{oauthSignIn.isPending ? (
				<Spinner className='mr-2 h-4 w-4 animate-spin' aria-label='Вход' />
			) : (
				getIcon(provider)
			)}
			{provider.name}
		</Button>
	)
}
