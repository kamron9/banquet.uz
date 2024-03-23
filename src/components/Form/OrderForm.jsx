'use client'
import { useCalculateTotalContext } from '@/context/CalculateTotalProvider'
import {
	Box,
	Button,
	FormControl,
	Input,
	InputGroup,
	InputLeftAddon,
} from '@chakra-ui/react'
import { useState } from 'react'

const OrderForm = ({ amoutPeople }) => {
	const [phoneNumber, setPhoneNumber] = useState('')
	const { selectedProduct, selectedTable } = useCalculateTotalContext()
	console.log(amoutPeople)
	const handleSubmitData = e => {
		e.preventDefault()
		const data = {
			name: e.target[0].value,
			phone: e.target[1].value,
			selectedProduct,
			selectedTable,
			amoutPeople,
		}
		console.log(data)
	}

	return (
		<Box
			onSubmit={handleSubmitData}
			as='form'
			display={'flex'}
			flexDirection={'column'}
			gap={'10px'}
		>
			<FormControl>
				<Input
					height={'45px'}
					type='text'
					maxLength={'20'}
					required
					placeholder='Isminginzni kiriting'
				/>
			</FormControl>
			<FormControl>
				<InputGroup height={'45px'}>
					<InputLeftAddon height={'100%'}>+998</InputLeftAddon>
					<Input
						type='tel'
						height={'100%'}
						required
						value={phoneNumber.replace(/\D/g, '')}
						minLength={9}
						maxLength='9'
						placeholder='Telefon raqamingiz'
						onChange={e => setPhoneNumber(e.target.value)}
					/>
				</InputGroup>
			</FormControl>

			<Box textAlign={'center'}>
				<Button type='submit' colorScheme={'purple'}>
					Yuborish
				</Button>
			</Box>
		</Box>
	)
}

export default OrderForm
