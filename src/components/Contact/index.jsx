import ContactForm from '@/components/Form'
import { Box, Image as ChakraImage, Flex, Heading } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import callCenter from '../../../public/assets/images/callcenter.jpeg'

const Contact = () => {
	const t = useTranslations('IndexPage.Aloqa')
	const imgStyle = {
		height: '400px',
		objectFit: 'cover',
		objectPosition: 'center',
	}

	const translations = {
		FormSarlavha: t('FormSarlavha'),
		ismFamiliya: t('IsmFamiliya'),
		Telfon: t('Telfon'),
		yuborishBtn: t('yuborishBtn'),
		formMsg: {
			error: {
				ism: t('FormMsg.error.ism-kiriting'),
				tel: t('FormMsg.error.telfon-kiriting'),
			},
			success: t('FormMsg.success'),
		},
	}

	return (
		<Box as={'section'} mb={'30px'} id='contact'>
			<Heading size={'lg'} mb={'30px'} id='contact'>
				{t('Sarlavha')}
			</Heading>
			<Flex flexDirection={{ base: 'column', md: 'row' }}>
				<ChakraImage
					as={Image}
					src={callCenter}
					alt={'callcenter'}
					width={{ base: '100%', md: '50%' }}
					style={imgStyle}
				/>
				<Box
					width={{ base: '100%', md: '50%' }}
					bg={'var(--secondary-color)'}
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'center'}
					alignItems={'center'}
					px={'20px'}
					py={'50px'}
					gap={'30px'}
				>
					<Heading size={'md'} mb={'20px'}>
						{t('FormSarlavha')}
					</Heading>
					<ContactForm translations={translations} />
				</Box>
			</Flex>
		</Box>
	)
}

export default Contact
