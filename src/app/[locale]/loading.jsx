import { Box, Spinner } from '@chakra-ui/react'

const Loading = () => {
	return (
		<Box
			width={'100vw'}
			position={'absolute'}
			top={0}
			left={0}
			height={'100vh'}
			display={'flex'}
			justifyContent={'center'}
			alignItems={'center'}
			zIndex={9}
		>
			<Spinner
				thickness='4px'
				speed='0.65s'
				emptyColor='gray.200'
				color='purple'
				size='xl'
			/>
		</Box>
	)
}

export default Loading
