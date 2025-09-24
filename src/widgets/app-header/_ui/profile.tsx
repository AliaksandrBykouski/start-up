'use client'

import { LogOut, User } from 'lucide-react'
import Link from 'next/link'

import { useAppSession } from '@/entities/session/use-app-session'
import { SignInButton } from '@/features/auth/sign-in-button'
import { useSignOut } from '@/features/auth/use-sign-out'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { Button } from '@/shared/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/shared/ui/dropdown-menu'
import { Skeleton } from '@/shared/ui/skeleton'

export function Profile() {
	const session = useAppSession()
	const { signOut, isPending: isLoadingSignOut } = useSignOut()

	if (session.status === 'loading') {
		return <Skeleton className='h-8 w-8 rounded-full' />
	}

	if (session.status === 'unauthenticated') {
		return <SignInButton />
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					className='p-px rounded-full self-center h-8 w-8'
				>
					<Avatar className='h-8 w-8'>
						<AvatarImage
							src={session.data?.user.image}
							alt={session.data?.user.name}
						/>
						<AvatarFallback>AB</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56 mr-2 '>
				<DropdownMenuLabel>
					<p>{session.data?.user.name}</p>
				</DropdownMenuLabel>
				<DropdownMenuGroup></DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem asChild>
						<Link href={`/profile/`}>
							<User className='mr-2 h-4 w-4' />
							<span>Профиль</span>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem
						disabled={isLoadingSignOut}
						onClick={() => signOut()}
					>
						<LogOut className='mr-2 h-4 w-4' />
						<span>Выход</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
