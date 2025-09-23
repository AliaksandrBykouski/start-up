import { SVGProps } from 'react'

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 24 24'
			{...props}
		>
			{/* Icon from Web3 Icons Branded by 0xa3k5 - https://github.com/0xa3k5/web3icons/blob/main/LICENCE */}
			<g fill='none'>
				<path
					fill='url(#SVGQQiLNcKH)'
					d='M12.373 17.4c1.527 0 2.407-.773 2.407-1.8c0-.952-.777-1.8-2.46-1.8H9v3.6zm-.673-7.2c1.527 0 2.33-.774 2.33-1.8c0-.951-.829-1.8-2.33-1.8H9v3.6zM4.2 3h8.69c2.277 0 3.882.786 4.943 1.813c.724.702 1.164 1.628 1.164 2.83v.049c0 2.03-1.19 3.23-2.794 3.907c2.2.702 3.597 1.903 3.597 4.282v.05c0 3.006-2.536 5.069-6.858 5.069H4.2z'
				/>
				<defs>
					<linearGradient
						id='SVGQQiLNcKH'
						x1='5.454'
						x2='19.897'
						y1='2.357'
						y2='20.842'
						gradientUnits='userSpaceOnUse'
					>
						<stop stopColor='#007CD0' />
						<stop offset='1' stopColor='#004EAE' />
					</linearGradient>
				</defs>
			</g>
		</svg>
	)
}
