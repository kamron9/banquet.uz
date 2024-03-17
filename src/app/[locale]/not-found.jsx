'use clinet'
import { ChakraProvider } from '@/providers/ChakraProvider'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { useLocale } from 'next-intl'
import Link from 'next/link'

const NotFound = () => {
	const locale = useLocale()

	return (
		<ChakraProvider>
			<Box
				display={'flex'}
				flexDirection={'column'}
				width={'100%'}
				height={'100vh'}
				justifyContent={'center'}
				alignItems={'center'}
			>
				<Heading as={'h1'} color={'purple'} size={'4xl'}>
					404
				</Heading>
				<Text mb={'20px'} fontSize={'20px'}>
					{locale === 'ru' ? 'Страница не найдена' : 'Sahifa topilmadi'}
				</Text>
				<Link href='/'>
					<Button colorScheme={'purple'}>
						{locale === 'ru' ? 'На главную' : 'Bosh sahifaga'}
					</Button>
				</Link>
			</Box>
		</ChakraProvider>
	)
}

export default NotFound
