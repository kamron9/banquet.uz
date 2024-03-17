'use client'
import { useCalculateTotalContext } from '@/context/CalculateTotalProvider'
import {
	Badge,
	Box,
	Button,
	Divider,
	Flex,
	FormControl,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Text,
	useDisclosure,
} from '@chakra-ui/react'

function OrderModal() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { selectedProduct, selectedTable } = useCalculateTotalContext()
	return (
		<>
			<Button onClick={onOpen} colorScheme={'purple'} variant={'outline'}>
				buyurtma berish
			</Button>

			<Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
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
						<Divider my={'10px'} />
						<TotalPricing
							selectedProduct={selectedProduct}
							selectedTable={selectedTable}
						/>
					</ModalBody>
					<ModalFooter>
						<Box width={'100%'}>
							<ModalForm />
						</Box>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}
export default OrderModal

const TotalPricing = ({ selectedProduct, selectedTable }) => {
	return (
		<Box>
			{/* choose count of people */}
			<Flex
				columnGap={'10px'}
				flexWrap={'wrap'}
				alignContent={'start'}
				alignItems={'center'}
			>
				<Text fontSize={'lg'}>Kishi sonini kiriting:</Text>
				{/* number input */}
				<NumberInput size='md' defaultValue={10} min={10} max={1000}>
					<NumberInputField />
					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
			</Flex>
			{/* calculate total price */}
			<Flex alignItems={'center'} gap={'7px'} mt={'10px'}>
				<Text fontSize={'lg'}>Umumiy summa:</Text>
				<Text as={'b'} fontSize={'19px'}>
					130000 so'm
				</Text>
			</Flex>
		</Box>
	)
}

const ModalForm = () => {
	return (
		<FormControl display={'flex'} flexDirection={'column'} gap={'10px'}>
			<Input type='text' placeholder='Ismingiz?' />
			<Input type='tel' placeholder='Telefon raqamingiz?' />
			<Box textAlign={'center'}>
				<Button colorScheme={'purple'}>Yuborish</Button>
			</Box>
		</FormControl>
	)
}

const FlexContent = ({ text, selectedItem }) => {
	return (
		<Flex
			columnGap={'10px'}
			flexWrap={'wrap'}
			alignContent={'start'}
			alignItems={'beseline'}
			justifyContent={'space-between'}
			flexDirection={{ base: 'column', sm: 'row' }}
			mb={'10px'}
		>
			<Text fontSize={'lg'} p={0}>
				{text}:
			</Text>
			<Box
				display={{ base: 'none', sm: 'inline-block' }}
				my={{ base: '5px', sm: '0' }}
				flexGrow={1}
				width={{ base: '100%', sm: 'auto' }}
				borderBottom={'1px dashed #999'}
				position={'relative'}
				bottom={'5px'}
			></Box>
			<Badge
				width={'fit-content'}
				fontSize={'15px'}
				display={'flex'}
				alignItems={'center'}
			>
				{selectedItem}
			</Badge>
		</Flex>
	)
}
