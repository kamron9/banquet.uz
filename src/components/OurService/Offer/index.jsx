import Table from '@/components/OurService/Offer/Products/Table/index'
import OrderModal from '@/components/modal/OrderModal'
import { Box } from '@chakra-ui/react'
import Menu from './Products/Menu/Menu'

const Offer = () => {
	return (
		<Box>
			<Menu />
			<Box mb={'60px'}>
				<Table />
				{/* <ExtraService /> */}
			</Box>
			<OrderModal />
		</Box>
	)
}

export default Offer
