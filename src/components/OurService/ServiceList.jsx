'use client'
import { useOurServiceModal } from '@/context/OurServiceModalProvider'
import { Grid, GridItem, Text } from '@chakra-ui/react'
import Image from 'next/image'
const ServiceList = ({ listLanguage }) => {
	const { onOpen } = useOurServiceModal()
	return (
		<Grid
			// gridTemplateRows={'repeat(1,200px)'}
			gridTemplateColumns={{
				base: 'repeat(1,300px)',
				sm: 'repeat(2,1fr)',
				md: 'repeat(3,1fr)',
				xl: 'repeat(3,350px)',
			}}
			justifyContent={{ base: 'center', sm: 'start' }}
			gap={'20px'}
		>
			<GridItem
				overflow={'hidden'}
				className={'our-service-list__item'}
				onClick={onOpen}
			>
				<Image
					src={'/event.avif'}
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
			</GridItem>
			<GridItem overflow={'hidden'} className={'our-service-list__item'}>
				<Image
					src={'/rent.avif'}
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
			</GridItem>
			<GridItem overflow={'hidden'} className={'our-service-list__item'}>
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
			</GridItem>
		</Grid>
	)
}

export default ServiceList
