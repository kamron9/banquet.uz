import ContactForm from '@/components/Contact/ContactForm'
import { Box, Image as ChakraImage, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import callCenter from '../../public/assets/images/callcenter.jpeg'
const Contact = () => {
	const imgStyle = {
		height: '400px',
		objectFit: 'cover',
		objectPosition: 'center',
	}

	return (
		<Box as={'section'} mb={'30px'} id='contact'>
			<Heading size={'lg'} mb={'30px'} id='contact'>
				Bog'lanish
			</Heading>
			<Flex flexDirection={{ base: 'column', md: 'row' }}>
				<ChakraImage
					as={Image}
					src={callCenter}
					alt={'callcenter'}
					width={{ base: '100%', md: '50%' }}
					style={imgStyle}
				/>
				<Box width={{ base: '100%', md: '50%' }}>
					<ContactForm />
				</Box>
			</Flex>
		</Box>
	)
}

export default Contact
