import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { ChakraProvider } from '../ChakraProvider'
const ServerError = () => {
	return (
		<div>
			<ChakraProvider>
				<Box
					display={'flex'}
					flexDirection={'column'}
					width={'100%'}
					height={'70vh'}
					justifyContent={'center'}
					alignItems={'center'}
				>
					<Heading as={'h1'} color={'purple'} size={'4xl'}>
						500
					</Heading>
					<Text mb={'20px'} fontSize={'20px'}>
						Server Error
					</Text>
					<Link href='/'>
						<Button colorScheme={'purple'}>Go back to home page</Button>
					</Link>
				</Box>
			</ChakraProvider>
		</div>
	)
}

export default ServerError
