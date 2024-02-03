import {
	Box,
	Button,
	Input,
	InputGroup,
	InputLeftAddon,
	Text,
	useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import { useRef } from 'react'

const FooterForm = () => {
	const toast = useToast()
	const inputNameRef = useRef(null)
	const inputPhoneRef = useRef(null)

	const postForm = async () => {
		try {
			const form = await axios.post(
				'https://shohruhbekk.pythonanywhere.com/contact',
				{
					full_name: inputNameRef.current.value,
					phone: inputPhoneRef.current.value,
				}
			)
			const res = await form.data
			console.log(res)
		} catch (error) {
			console.log(error.response.data)
		}
	}

	//toast shows when send btn clicked
	const handleData = () => {
		postForm()
		toast({
			title: "Raxmat, 24 soat ichida mutahasisimiz siz bilan bog'lanadi",
			status: 'success',
			duration: 4000,
		})
	}
	const handleNumberInput = e => {
		console.log(e.target.value)
	}
	return (
		<Box maxW={'300px'} display={'flex'} flexDirection={'column'} gap={'5px'}>
			<Text as={'b'} fontSize={'14px'}>
				Наши специалисты с радостью помогут Вам оставьте свой номер телефона!
			</Text>
			<Box display={'flex'} flexDirection={'column'} gap={'5px'}>
				<Input ref={inputNameRef} placeholder={'enter your name'} />
				<InputGroup>
					<InputLeftAddon>+998</InputLeftAddon>
					<Input
						ref={inputPhoneRef}
						onChange={handleNumberInput}
						type='tel'
						inputMode='numeric'
						placeholder={'your number'}
						maxLength={9}
						pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
					/>
				</InputGroup>

				<Button colorScheme={'purple'} onClick={handleData}>
					send
				</Button>
			</Box>
		</Box>
	)
}

export default FooterForm
