'use client'
import { useLanguage } from '@/hooks/useLanguage'
import { Button } from '../ui/button'
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from '../ui/menubar'

const LanguageSwitcher = () => {
	const { i18n, changeLanguage } = useLanguage()

	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>{i18n.language === 'uz' ? 'uz' : 'ру'}</MenubarTrigger>
				<MenubarContent className='min-w-[60px]'>
					<MenubarItem onClick={() => changeLanguage('uz')}>uz</MenubarItem>
					<MenubarItem onClick={() => changeLanguage('ru')}>ру</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	)
}

export default LanguageSwitcher

export const LanguageSwitcherMobile = () => {
	const { changeLanguage, i18n } = useLanguage()
	return (
		<div className='flex items-center justify-center gap-5'>
			<Button
				variant={i18n.language === 'uz' ? 'default' : 'outline'}
				onClick={() => changeLanguage('uz')}
			>
				uz
			</Button>
			<Button
				variant={i18n.language === 'ru' ? 'default' : 'outline'}
				onClick={() => changeLanguage('ru')}
			>
				ру
			</Button>
		</div>
	)
}
