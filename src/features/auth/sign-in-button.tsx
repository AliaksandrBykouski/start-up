'use client'

import { LogIn } from 'lucide-react'
import { signIn } from 'next-auth/react'

import { Button } from '@/shared/ui/button'

export function SignInButton() {
	const handleSignOut = () => {
		signIn()
	}

	return (
		<Button
			onClick={handleSignOut}
			variant='outline'
			className='cursor-pointer'
		>
			<LogIn className='mr-2 h-4 w-4' />
			Sign in
		</Button>
	)
}
