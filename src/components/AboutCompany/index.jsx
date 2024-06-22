import AboutUs from '@/service/aboutUs'
import { Box, Heading, Text } from '@chakra-ui/react'
import { useLocale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

const AboutCompany = async () => {
	const aboutData = await AboutUs.getAboutData()
	const result = aboutData.results[0]
	const locale = useLocale()
	const t = await getTranslations('IndexPage.bizHaqimizda')
	return (
		<Box as='section' id={'about'} my={'80px'}>
			<Heading as={'h2'} size={'lg'} mb={'30px'}>
				{t('Sarlavha')}
			</Heading>
			<Box
				borderRadius={'25px'}
				display={'flex'}
				bg={'var(--secondary-color)'}
				flexDirection={{ base: 'column', md: 'row' }}
				p={'48px'}
				gap={{ base: '30px', lg: '50px', xl: '100px' }}
			>
				{/* about right content */}
				<Box width={{ base: '100%', lg: '50%' }}>
					<Heading
						mb={'20px'}
						fontSize={{ base: '22px', lg: '31px' }}
						color={'purple'}
					>
						{result[locale].title}
					</Heading>
					<Text
						fontSize={{ base: '16px', md: '18px' }}
						lineHeight={{ base: '25px', md: '32px' }}
						color={'rgb(81,85,81)'}
					>
						{result[locale].comment}
					</Text>
				</Box>
				{/*  about image  */}
				<Box
					width={{ base: '100%', md: '50%' }}
					display={{ md: 'none', lg: 'block' }}
				>
					<Image
						src={result[locale].img}
						alt='about'
						height={500}
						width={500}
						loading='lazy'
						style={{
							width: '100%',
							borderRadius: '25px',
							maxHeight: '400px',
							height: '100%',
							objectFit: 'cover',
						}}
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default AboutCompany
