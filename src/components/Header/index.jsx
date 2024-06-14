import {
	Box,
	Button,
	Container,
	Heading,
	List,
	ListItem,
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

import { Link } from '@/config/navigations'
import { navbar } from '@/constants/navbar'
import BurgerMenu from './BurgerMenu'
import LanguageMenu from './LanguageMenu'

const Header = () => {
	const t = useTranslations('IndexPage.Header')

	const translates = {
		yangiliklar: t('yangiliklar'),
		bizHaqimizda: t('bizHaqimizda'),
		Statistika: t('Statistika'),
		Galereya: t('Galereya'),
		Aloqa: t('Aloqa'),
	}

	return (
		<header className={'header'}>
			<Container maxW={'1400px'}>
				<Box
					display={'flex'}
					alignItems={'center'}
					justifyContent={'space-between'}
					height={70}
					w={'100%'}
				>
					{/*  header logo & navigations  */}
					<Box
						display={'flex'}
						alignItems={'center'}
						gap={'20px'}
						height={'100%'}
					>
						{/* logo */}

						<Link href={'/'}>
							<Heading size={'lg'} color={'purple'}>
								Logo
							</Heading>
						</Link>

						{/* navigations */}
						<Box as={'nav'} display={{ base: 'none', lg: 'block' }}>
							<List display={'flex'} alignItems={'center'} gap={'20px'}>
								{navbar.map(item => (
									<ListItem key={item.id}>
										<Link className='header-link' href={item.path}>
											{t(item.title)}
										</Link>
									</ListItem>
								))}
							</List>
						</Box>
					</Box>
					<Box display={'flex'} alignItems={'center'} gap={'20px'}>
						{/*  buyurtma berish  */}
						<Box display={'flex'} alignItems={'center'} gap={'20px'}>
							<Link href={`/xizmatlar`}>
								<Button colorScheme={'purple'}>{t('Xizmatlar')}</Button>
							</Link>
							<Box display={{ base: 'none', lg: 'inline-block' }}>
								<LanguageMenu />
							</Box>
						</Box>
						{/* burger menu */}
						<Box display={{ base: 'block', lg: 'none' }}>
							<BurgerMenu translates={translates} />
						</Box>
					</Box>
				</Box>
			</Container>
		</header>
	)
}

export default Header
