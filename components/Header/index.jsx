'use client'
import {
	Box,
	Button,
	Container,
	Heading,
	List,
	ListItem,
} from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LanguageMenu from './LanguageMenu'
const Header = () => {
	const pathname = usePathname()
	console.log(pathname)
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
						{pathname !== '/' ? (
							<Link href={'/'}>
								<Heading size={'lg'} mr={'70px'}>
									logo
								</Heading>
							</Link>
						) : (
							<Heading size={'lg'} mr={'70px'}>
								logo
							</Heading>
						)}

						{/* navigations */}
						<Box as={'nav'} display={{ base: 'none', md: 'block' }}>
							<List display={'flex'} alignItems={'center'} gap={'20px'}>
								<ListItem>
									<Link href={'/#about'}>biz haqimizda</Link>
								</ListItem>
								<ListItem>
									<Link href={'/#statistic'}>statistika</Link>
								</ListItem>
								<ListItem>
									<Link href={'/#gallery'}>galeraya</Link>
								</ListItem>
								<ListItem>
									<Link href={'#contact'}>bog'lanish</Link>
								</ListItem>
							</List>
						</Box>
					</Box>
					{/*  buyurtma berish  */}
					<Box display={'flex'} alignItems={'center'} gap={'20px'}>
						<Link href={'/xizmatlar'}>
							<Button colorScheme={'purple'}>xizmatlar</Button>
						</Link>
						<LanguageMenu />
					</Box>
				</Box>
			</Container>
		</header>
	)
}

export default Header
