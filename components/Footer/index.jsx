'use client'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import FooterForm from './FooterForm'

const Footer = () => {
	return (
		<Box as={'footer'} id={'footer'} bg={'rgb(244 245 247)'} padding={'40px 0'}>
			<Container maxW={'1400px'}>
				<Box
					display={'flex'}
					alignItems={{ base: 'start' }}
					justifyContent={{ base: 'start', sm: 'space-between' }}
					flexWrap={'wrap'}
					gap={'30px'}
				>
					{/* logo */}
					<Box display={'flex'} flexDirection={'column'} gap={'10px'}>
						<Heading>Logo</Heading>
						{/* contacts */}
						<Box>
							<Text>Телефон поддержки</Text>
							<a href={'tel:919192020'}>
								<Text as={'b'}>+998 (91) 919 20 20</Text>
							</a>
						</Box>
						{/*  address */}
						<Box display={'flex'} alignItems={'center'} gap={'3px'}>
							<Image
								src={'/location.svg'}
								alt={'location'}
								width={20}
								height={20}
							/>
							<Text>urgench darital</Text>
						</Box>
						{/*  email  */}
						<Box display={'flex'} alignItems={'center'} gap={'3px'}>
							<Image
								src={'/email.svg'}
								alt={'location'}
								width={20}
								height={20}
							/>
							<a href='mailto:kamronalimov80@gmail.com'>
								<Text>kamronalimov80@gmail.com</Text>
							</a>
						</Box>
					</Box>
					{/* navigations */}
					<Box
						as={'nav'}
						display={{ base: 'none', lg: 'flex' }}
						flexDirection={'column'}
						gap={'10px'}
					>
						<Link href={'/'}>
							<Text as={'span'} color={'purple'}>
								buyurtma berish
							</Text>
						</Link>
						<Link href={'/'}>home</Link>
						<Link href={'/'}>about</Link>
						<Link href={'/'}>contact</Link>
					</Box>
					{/*  form  */}
					<FooterForm />
				</Box>
				<hr style={{ margin: '20px 0' }} />
				<Box
					display={'flex'}
					alignItems={{ base: 'start', sm: 'center' }}
					flexDirection={{ base: 'column', sm: 'row' }}
					gap={'20px'}
					justifyContent={'space-between'}
				>
					<Text as={'span'} fontSize={'14px'}>
						© Sofiya 2023 - 2024 All rights reserved
					</Text>
					{/*  socials */}
					<Box display={'flex'} alignItems={'center'} gap={'5px'}>
						{/* telegram icon */}
						<a href={'https://telegram.com'}>
							<Image
								src={'/telegram.svg'}
								alt={'telegram icon'}
								width={20}
								height={20}
								style={{ width: '25px', height: '25px' }}
							/>
						</a>
						{/* instagram icon */}
						<a href={'https://facebook.com'}>
							<Image
								src={'/instagram.svg'}
								alt={'telegram icon'}
								width={20}
								height={20}
								style={{ width: '25px', height: '25px' }}
							/>
						</a>
						{/* facebook icon */}
						<a href={'https://instagram.com'}>
							<Image
								src={'/facebook.svg'}
								alt={'telegram icon'}
								width={20}
								height={20}
								style={{ width: '25px', height: '25px' }}
							/>
						</a>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default Footer
