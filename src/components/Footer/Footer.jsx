import {
	Box,
	Container,
	Flex,
	Grid,
	GridItem,
	Heading,
	Text,
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import emailIcon from '../../../public/assets/icons/email.svg'
import facebookIcon from '../../../public/assets/icons/facebook.svg'
import instagramIcon from '../../../public/assets/icons/instagram.svg'
import mapIcon from '../../../public/assets/icons/map.svg'
import phoneIcon from '../../../public/assets/icons/phone.svg'
import telegramIcon from '../../../public/assets/icons/telegram.svg'

const Footer = () => {
	const t = useTranslations('IndexPage.Footer')
	return (
		<Box as={'footer'} bg={'rgb(244 245 247)'} padding={'40px 0'}>
			<Container maxW={'1400px'}>
				<Grid
					gap={'30px'}
					px={'20px'}
					templateColumns={{
						base: 'repeat(1, 1fr)',
						md: 'repeat(3, 1fr)',
						lg: 'repeat(4, 1fr)',
					}}
				>
					{/* logo */}
					<GridItem>
						<Heading>Logo</Heading>
					</GridItem>
					{/* social media */}
					<GridItem>
						<Text>{t('IjtimoiyTarmoq')}</Text>
						<Flex mt={'10px'} alignItems={'center'} gap={'10px'}>
							<a href={'#'}>
								<Image src={telegramIcon} alt={'telegram'} height={25} />
							</a>
							<a href={'#'}>
								<Image src={instagramIcon} alt={'instagram'} height={32} />
							</a>
							<a href={'#'}>
								<Image src={facebookIcon} alt={'facebook'} height={25} />
							</a>
						</Flex>
					</GridItem>

					{/* contacts */}
					<GridItem>
						{/* phone number */}
						<Flex alignItems={'center'} gap={'10px'} mb={'10px'}>
							<Image src={phoneIcon} height={25} alt='phone icon' />
							<a href={'tel:919192020'}>
								<Text>+998 (91) 919 20 20</Text>
							</a>
						</Flex>
						{/* email */}
						<Flex alignItems={'center'} gap={'10px'}>
							<Image src={emailIcon} alt={'email'} height={25} />
							<a href='mailto:kamronalimov80@gmail.com'>
								<Text>kamronalimov80@gmail.com</Text>
							</a>
						</Flex>
					</GridItem>
					{/*  address */}

					<GridItem px={{ base: '0', lg: '10px' }}>
						<Text mb={'10px'}>
							Toshkent shahri, Сhilanzor Yakkabog’ ko’chasi 25-uy
						</Text>
						<a href='#'>
							<Box
								display={'inline-flex'}
								alignItems={'center'}
								gap={'10px'}
								bg={'white'}
								padding={'10px 20px'}
								borderRadius={'12px'}
							>
								<Image src={mapIcon} alt={'location'} height={20} />
								<Text fontSize={'16px'}>{t('Xarita')}</Text>
							</Box>
						</a>
					</GridItem>
				</Grid>
			</Container>
		</Box>
	)
}

export default Footer
