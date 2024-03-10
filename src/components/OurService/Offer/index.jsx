import ProductPrice from '@/components/OurService/Offer/ProductPrice'
import TableAndPlate from '@/components/OurService/Offer/TableAndPlate/index'
import { Box } from '@chakra-ui/react'
import ExtraService from './ExtraService'
import Products from './Products/Products'

const Offer = () => {
	return (
		<Box>
			<TableAndPlate />
			<Box display={{ base: 'block', lg: 'flex' }} gap={'50px'}>
				<Products />
				<ExtraService />
			</Box>
			<ProductPrice />
		</Box>
	)
}

export default Offer
