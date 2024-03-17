import TableAndPlate from '@/components/OurService/Offer/TableAndPlate/index'
import OrderModal from '@/components/modal/OrderModal'
import { Box, Heading } from '@chakra-ui/react'
import ExtraService from './ExtraService'
import Products from './Products/Products'

const Offer = () => {
	return (
		<Box>
			<Box display={'flex'} mb={'60px'}>
				<TableAndPlate />
				<ExtraService />
			</Box>
			<Heading
				color={'purple'}
				size={'lg'}
				textAlign={'center'}
				width={'100%'}
				mb={'30px'}
			>
				Bizning Menyu
			</Heading>
			<Products />

			<OrderModal />
		</Box>
	)
}

export default Offer
