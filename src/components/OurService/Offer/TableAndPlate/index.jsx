'use client'
import { imgData } from '@/data/imgData'
import {
	Box,
	Grid,
	GridItem,
	Heading,
	Text,
	useRadio,
	useRadioGroup,
} from '@chakra-ui/react'
import Image from 'next/image'
import styles from './style.module.css'
function RadioCard(props) {
	const { getInputProps, getRadioProps } = useRadio(props)
	const input = getInputProps()
	const checkbox = getRadioProps()

	return (
		<Box as='label'>
			<input {...input} />
			<Box
				{...checkbox}
				cursor='pointer'
				borderWidth='1px'
				borderRadius='md'
				boxShadow='md'
				_checked={{
					bg: 'teal.600',
					color: 'white',
					borderColor: 'teal.900',
				}}
				_focus={{
					boxShadow: 'outline',
				}}
				px={2}
				py={2}
			>
				<Box position={'relative'}>
					<Image
						src={props.children.url}
						alt={props.children.title || 'image'}
						width={200}
						height={100}
						priority={true}
						style={{ width: '100%', height: '200px' }}
						className={styles.tableCardImg}
					/>
					<Box
						transform={'translate(-50%,-50%)'}
						position={'absolute'}
						top={'50%'}
						left={'50%'}
					>
						<Text as={'b'} color={'white'} width={'100%'}>
							{props.children.name}
						</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export default function TableAndPlates() {
	const { getRootProps, getRadioProps } = useRadioGroup({
		name: imgData[0].name,
		defaultValue: imgData[0].name,
		onChange: console.log,
	})

	const group = getRootProps()

	return (
		<Box>
			<Heading size={'md'}>Stollar</Heading>
			<Grid
				{...group}
				templateColumns={{
					base: 'repeat(1,1fr)',
					sm: 'repeat(2,1fr)',
					md: 'repeat(3,1fr)',
					lg: 'repeat(4,1fr)',
				}}
				flexWrap={'wrap'}
				mb={'50px'}
			>
				{imgData.map(value => {
					const radio = getRadioProps({ value })
					return (
						<GridItem key={value.id}>
							<RadioCard key={value.id} {...radio}>
								{value}
							</RadioCard>
						</GridItem>
					)
				})}
			</Grid>
		</Box>
	)
}
