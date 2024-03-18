'use client'
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftAddon,
} from '@chakra-ui/react'
import { useState } from 'react'

const OrderForm = () => {
	const [phoneNumber, setPhoneNumber] = useState('')

	return (
		<Box display={'flex'} flexDirection={'column'} gap={'10px'}>
			<FormControl>
				<FormLabel color={'#828282'}>ismingizni kiriting:</FormLabel>
				<Input height={'50px'} type='text' maxLength={'20'} />
			</FormControl>
			<FormControl>
				<FormLabel color={'#828282'}>Telefon raqamingiz:</FormLabel>
				<InputGroup height={'50px'}>
					<InputLeftAddon height={'100%'}>+998</InputLeftAddon>
					<Input
						type='tel'
						height={'100%'}
						value={phoneNumber.replace(/\D/g, '')}
						maxLength='9'
						onChange={e => setPhoneNumber(e.target.value)}
					/>
				</InputGroup>
			</FormControl>

			<Box textAlign={'center'}>
				<Button colorScheme={'purple'}>Yuborish</Button>
			</Box>
		</Box>
	)
}

export default OrderForm
