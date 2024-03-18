'use client'
import {
	Box,
	Button,
	FormControl,
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
				<Input
					height={'45px'}
					type='text'
					maxLength={'20'}
					placeholder='Isminginzni kiriting'
				/>
			</FormControl>
			<FormControl>
				<InputGroup height={'45px'}>
					<InputLeftAddon height={'100%'}>+998</InputLeftAddon>
					<Input
						type='tel'
						height={'100%'}
						value={phoneNumber.replace(/\D/g, '')}
						maxLength='9'
						placeholder='Telefon raqamingiz'
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
