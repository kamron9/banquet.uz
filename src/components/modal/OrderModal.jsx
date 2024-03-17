'use client'
import { useCalculateTotalContext } from '@/context/CalculateTotalProvider'
import {
	Badge,
	Button,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
} from '@chakra-ui/react'

function OrderModal() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { selectedProduct, selectedTable } = useCalculateTotalContext()
	console.log(selectedProduct, 'product')
	console.log(selectedTable, 'table')
	return (
		<>
			<Button onClick={onOpen} colorScheme={'purple'} variant={'outline'}>
				buyurtma berish
			</Button>

			<Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Buyurtma</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						{/* selected menu */}
						<FlexContent
							text={'Tanlangan menyu'}
							selectedItem={selectedProduct?.title}
						/>

						{/* selected table */}
						<FlexContent
							text={'Tanlangan stol'}
							selectedItem={selectedTable?.name}
						/>

						{/* selected table variant */}
						<FlexContent
							text={'Tanlangan stol turi'}
							selectedItem={selectedTable?.variant}
						/>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme='purple' mr={3} onClick={onClose}>
							yuborish
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}

export default OrderModal

const FlexContent = ({ text, selectedItem }) => {
	return (
		<Flex
			columnGap={'10px'}
			flexWrap={'wrap'}
			alignContent={'start'}
			alignItems={'center'}
		>
			<Text fontSize={'lg'}>{text}:</Text>
			<Badge fontSize={'15px'}>{selectedItem}</Badge>
		</Flex>
	)
}
