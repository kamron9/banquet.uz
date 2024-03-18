'use client'
import postForm from '@/service/client/ContactFormService'
import {
	Box,
	Button,
	Input,
	InputGroup,
	InputLeftAddon,
	Text,
	useToast,
} from '@chakra-ui/react'
import { useState } from 'react'

const ContactForm = ({ translations }) => {
	const toast = useToast()
	const [numberInputValue, setNumberInputValue] = useState('')
	const [nameInputValue, setNameInputValue] = useState('')

	// form submit
	const handleData = async e => {
		e.preventDefault()

		if (nameInputValue.length < 1) {
			toast({
				title: translations.formMsg.error.ism,
				status: 'error',
			})
		} else if (numberInputValue.length < 9) {
			toast({
				title: translations.formMsg.error.tel,
				status: 'error',
			})
		} else {
			postForm({
				full_name: nameInputValue,
				phone: numberInputValue,
			})
			toast({
				title: translations.formMsg.success,
				status: 'success',
			})
			setNameInputValue('')
			setNumberInputValue('')
		}
	}

	return (
		<Box
			w={'100%'}
			h={'100%'}
			display={'flex'}
			bg={'var(--secondary-color)'}
			flexDirection={'column'}
			justifyContent={'center'}
			px={{ base: '20px', sm: '60px', md: '30px', lg: '80px' }}
			py={'50px'}
			gap={'30px'}
		>
			<Text as={'span'} fontSize={{ base: '20px', md: '28px' }}>
				{translations.FormSarlavha}
			</Text>
			<Box
				as='form'
				onSubmit={handleData}
				display={'flex'}
				flexDirection={'column'}
				gap={'7px'}
				maxW={'400px'}
			>
				<Input
					onChange={e => setNameInputValue(e.target.value)}
					value={nameInputValue}
					name='full_name'
					height={'45px'}
					placeholder={translations.ismFamiliya}
					bg={'white'}
				/>
				<InputGroup height={'45px'}>
					<InputLeftAddon height={'100%'}>+998</InputLeftAddon>
					<Input
						onChange={e => setNumberInputValue(e.target.value)}
						type='tel'
						name='phone'
						height={'100%'}
						value={numberInputValue.replace(/\D/g, '')}
						inputMode='numeric'
						placeholder={translations.Telfon}
						maxLength={9}
						bg={'white'}
					/>
				</InputGroup>
				<Box textAlign={'end'}>
					<Button colorScheme={'purple'} type='submit' width={'fit-content'}>
						{translations.yuborishBtn}
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default ContactForm
