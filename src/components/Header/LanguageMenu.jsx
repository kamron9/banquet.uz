'use client'
import { usePathname, useRouter } from '@/config/navigations'
import { Box, Button, HStack, Select } from '@chakra-ui/react'
import { useLocale } from 'next-intl'
import { useParams } from 'next/navigation'
import { useTransition } from 'react'

const LanguageMenu = () => {
	const locale = useLocale()
	const params = useParams()

	const router = useRouter()
	const pathname = usePathname()
	const [isPending, setTranslation] = useTransition()

	const changeLocale = e => {
		const nextLocale = e.target.value
		setTranslation(() => {
			router.replace({ pathname, params }, { locale: nextLocale })
		})
	}

	const changeLanguage = lng => {
		setTranslation(() => {
			router.replace({ pathname, params }, { locale: lng })
		})
	}

	return (
		<Box>
			<Box maxW={'120px'} display={{ base: 'none', lg: 'block' }}>
				<Select defaultValue={locale} onChange={changeLocale}>
					<option value='uz'>uz</option>
					<option value='ru'>ru</option>
				</Select>
			</Box>

			{/* language menu for burger menu */}
			<Box display={{ base: 'block', lg: 'none' }}>
				<HStack justify={'center'} align='center' spacing={4} p={5}>
					<Button
						variant={'outline'}
						onClick={() => changeLanguage('ru')}
						colorScheme={locale === 'ru' ? 'purple' : 'gray'}
					>
						Ru
					</Button>
					<Button
						variant={'outline'}
						onClick={() => changeLanguage('uz')}
						colorScheme={locale === 'uz' ? 'purple' : 'gray'}
					>
						Uz
					</Button>
				</HStack>
			</Box>
		</Box>
	)
}

export default LanguageMenu
