'use client'
import { navbar } from '@/constants/navbar'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import BurgerMenu from './BurgerMenu'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
	const { t } = useTranslation()
	console.log(t('home.navbar[about]'))

	return (
		<header className='w-full border border-solid border-[#0f172a1a] bg-header fixed top-0 left-0 z-40 backdrop-blur-[5px]'>
			<div className='container flex items-center justify-between h-[70px]'>
				<div className='flex items-center gap-[40px]'>
					<Link href={'/'}>logo</Link>
					<ul className='hidden md:flex item-center gap-[20px] '>
						{navbar.map(item => (
							<li key={item.id}>
								<Link href={item.path}>{t(`home.navbar.${item.title}`)}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='flex items-center gap-3'>
					<Link href={'/service'}>
						<Button>{t('home.services')}</Button>
					</Link>
					<div className='hidden md:inline-block'>
						<LanguageSwitcher />
					</div>
					<BurgerMenu />
				</div>
			</div>
		</header>
	)
}

export default Header
