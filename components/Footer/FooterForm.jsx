import postForm from '@/service/client/FooterFormService'
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

const FooterForm = () => {
	const toast = useToast()
	const [numberInputValue, setNumberInputValue] = useState('')
	const [nameInputValue, setNameInputValue] = useState('')


	// form submit
	const handleData = async e => {
		e.preventDefault()

		if (nameInputValue.length < 3) {
			toast({
				title: "ism 3 dan kam xarf bo'masligi kerak",
				status: 'error',
			})
		} else if (numberInputValue.length < 9) {
			toast({
				title: "telefon raqam 9 dan kam  bo'masligi kerak",
				status: 'error',
			})
		} else {
			postForm({
				full_name: nameInputValue,
				phone: numberInputValue,
			})
			toast({
				title:
					"so'rovingiz uchun raxmat 24 soat ichida operatorimiz siz bilan bog'lanadi",
				status: 'success',
			})
			setNameInputValue('')
			setNumberInputValue('')
		}
	}

	return (
		<Box maxW={'300px'} display={'flex'} flexDirection={'column'} gap={'5px'}>
			<Text as={'b'} fontSize={'14px'}>
				Наши специалисты с радостью помогут Вам оставьте свой номер телефона!
			</Text>
			<Box
				as='form'
				onSubmit={handleData}
				display={'flex'}
				flexDirection={'column'}
				gap={'5px'}
			>
				<Input
					onChange={e => setNameInputValue(e.target.value)}
					value={nameInputValue}
					name='full_name'
					placeholder={'enter your name'}
				/>
				<InputGroup>
					<InputLeftAddon>+998</InputLeftAddon>
					<Input
						onChange={e => setNumberInputValue(e.target.value)}
						type='tel'
						name='phone'
						value={numberInputValue}
						inputMode='numeric'
						placeholder={'your number'}
						maxLength={9}
					/>
				</InputGroup>

				<Button colorScheme={'purple'} type='submit'>
					send
				</Button>
			</Box>
		</Box>
	)
}

export default FooterForm
