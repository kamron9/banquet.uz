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
import LanguageMenu from './LanguageMenu'

const Header = () => {
	const t = useTranslations('IndexPage.Header')
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
					<Box display={'flex'} alignItems={'center'} gap={'20px'}>
						{/* logo */}

						<Link href={'/'}>
							<Heading size={'lg'} mr={'50px'}>
								Logo
							</Heading>
						</Link>

						{/* navigations */}
						<Box as={'nav'} display={{ base: 'none', md: 'block' }}>
							<List display={'flex'} alignItems={'center'} gap={'20px'}>
								<ListItem>
									<Link className='header-link' href={'/#about'}>
										{t('bizHaqimizda')}
									</Link>
								</ListItem>
								<ListItem>
									<Link className='header-link' href={'/#statistic'}>
										{t('Statistika')}
									</Link>
								</ListItem>
								<ListItem>
									<Link className='header-link' href={'/#gallery'}>
										{t('Galereya')}
									</Link>
								</ListItem>
								<ListItem>
									<Link className='header-link' href={'/#contact'}>
										{t('Aloqa')}
									</Link>
								</ListItem>
							</List>
						</Box>
					</Box>
					{/*  buyurtma berish  */}
					<Box display={'flex'} alignItems={'center'} gap={'20px'}>
						<Link href={`/xizmatlar`}>
							<Button colorScheme={'purple'}>{t('Xizmatlar')}</Button>
						</Link>
						<LanguageMenu />
					</Box>
				</Box>
			</Container>
		</header>
	)
}

export default Header
