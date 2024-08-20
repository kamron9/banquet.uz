'use client'

import burgerIcon from '@/assets/icons/burger.svg'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { navbar } from '@/constants/navbar'
import Image from 'next/image'
import Link from 'next/link'
import { LanguageSwitcherMobile } from './LanguageSwitcher'

const BurgerMenu = () => {
	return (
		<div className='block md:hidden'>
			<Sheet>
				<SheetTrigger asChild>
					<button>
						<Image
							src={burgerIcon}
							width={30}
							height={30}
							alt='burger-icon'
							className='rotate-180'
						/>
					</button>
				</SheetTrigger>

				<SheetContent side={'right'}>
					<div className='py-[30px]'>
						<ul className='flex flex-col items-center gap-[15px]'>
							{navbar.map(item => (
								<li key={item.id}>
									<Link className='font-bold text-gray-700' href={item.path}>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<LanguageSwitcherMobile />
				</SheetContent>
			</Sheet>
		</div>
	)
}
export default BurgerMenu
