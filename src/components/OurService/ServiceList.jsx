'use client'
import { useOurServiceModal } from '@/context/OurServiceModalProvider'
import { List, ListItem, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
const ServiceList = ({ listLanguage }) => {
	const { onOpen } = useOurServiceModal()
	return (
		<List
			display={'flex'}
			flexWrap={'wrap'}
			justifyContent={{ base: 'center', md: 'flex-start' }}
			alignContent={'start'}
			gap={'20px'}
		>
			<ListItem
				maxW={'350px'}
				overflow={'hidden'}
				className={'our-service-list__item'}
				onClick={onOpen}
			>
				<Image
					src={'/assets/images/catering.jpeg'}
					alt={'event'}
					width={400}
					height={300}
					className={'service-img'}
				/>
				<Text
					as={'b'}
					fontSize={'20px'}
					position={'absolute'}
					bottom={'10px'}
					left={'10px'}
					color={'white'}
				>
					{listLanguage.ketrin}
				</Text>
			</ListItem>
			<ListItem
				maxW={'350px'}
				overflow={'hidden'}
				className={'our-service-list__item'}
			>
				<Link href={'/xizmatlar/arenda'}>
					<Image
						src={'/assets/images/rent.webp'}
						alt={'rent'}
						width={400}
						height={300}
						className={'service-img'}
					/>
					<Text
						as={'b'}
						fontSize={'20px'}
						color={'white'}
						position={'absolute'}
						bottom={'10px'}
						left={'10px'}
					>
						{listLanguage.arenda}
					</Text>
				</Link>
			</ListItem>
			<ListItem
				maxW={'350px'}
				overflow={'hidden'}
				className={'our-service-list__item'}
			>
				<Link href={'/xizmatlar/cofe-break'}>
					<Image
						src={'/cofe-break.jpg'}
						alt={'rent'}
						width={400}
						height={300}
						className={'service-img'}
					/>
					<Text
						as={'b'}
						fontSize={'20px'}
						color={'white'}
						position={'absolute'}
						bottom={'10px'}
						left={'10px'}
					>
						{listLanguage.coffee}
					</Text>
				</Link>
			</ListItem>
		</List>
	)
}

export default ServiceList
