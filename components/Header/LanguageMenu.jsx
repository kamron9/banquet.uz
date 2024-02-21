'use client'
import { useLanguage } from '@/context/LanguageProvider'
import { Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import Image from 'next/image'

const LanguageMenu = () => {
	const { lang, setLang } = useLanguage()
	return (
		<Menu>
			<MenuButton>
				{lang === 'uz' ? (
					<Image src={'/assets/icons/uz.svg'} width={24} height={24} alt='uz' />
				) : (
					<Image src={'/assets/icons/ru.svg'} width={24} height={24} alt='ru' />
				)}
			</MenuButton>
			<MenuList bg={'white'} minW={'auto'} p={0} mt={'10px'}>
				<MenuItem
					display={'flex'}
					alignItems={'center'}
					gap={'10px'}
					minH='48px'
					onClick={() => setLang('uz')}
				>
					<Image width={24} height={24} src='/assets/icons/uz.svg' alt='uz' />
					<Text as={'span'} fontWeight={lang === 'uz' && 'bold'}>
						uz
					</Text>
				</MenuItem>
				<MenuItem
					display={'flex'}
					alignItems={'center'}
					background={lang === 'ru' && '#dedee238'}
					gap={'10px'}
					minH='48px'
					onClick={() => setLang('ru')}
				>
					<Image width={24} height={24} src='/assets/icons/ru.svg' alt='uz' />
					<Text as='span' fontWeight={lang === 'ru' && 'bold'}>
						ru
					</Text>
				</MenuItem>
			</MenuList>
		</Menu>
	)
}

export default LanguageMenu
