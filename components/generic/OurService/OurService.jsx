import { Box } from '@chakra-ui/react'
import ExtraService from './ExtraService'
import ServiceProductList from './ServiceProductList'

const OurService = () => {
	return (
		<Box display={'flex'} gap={'50px'}>
			<ServiceProductList />
			<ExtraService />
		</Box>
	)
}

export default OurService
