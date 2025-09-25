export const generateTestLink = ({
	callbackUrl,
	token,
	email
}: {
	callbackUrl: string
	token: string
	email: string
}) => {
	// Check if we're in a browser environment
	const origin =
		typeof window !== 'undefined'
			? window.location.origin
			: 'http://localhost:3000' // fallback for server-side rendering

	const url = new URL(`${origin}/api/auth/callback/email`)
	url.searchParams.set('callbackUrl', callbackUrl)
	url.searchParams.set('token', token)
	url.searchParams.set('email', email)

	return url.toString()
}
