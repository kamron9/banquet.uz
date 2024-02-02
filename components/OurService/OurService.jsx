'use client'
import OurServiceModal from '@/components/OurService/OurServiceModal'
import { useOurServiceModal } from '@/context/OurServiceModalContext'
import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react'
import Image from 'next/image'

const OurService = () => {
	const { onOpen } = useOurServiceModal()
	return (
		<Box>
			<Heading size={'md'}>Bizning Xizmatlar</Heading>
			<List
				display={'flex'}
				gap={'20px'}
				mt={'50px'}
				flexWrap={{ base: 'wrap', md: 'nowrap' }}
				justifyContent={{ base: 'center', md: 'start' }}
			>
				<ListItem
					width={400}
					height={300}
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
						Tadbirlar uchun buyurtma
					</Text>
				</ListItem>
				<ListItem
					width={400}
					height={300}
					overflow={'hidden'}
					className={'our-service-list__item'}
				>
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
						Tadbirlar uchun arenda
					</Text>
				</ListItem>
			</List>
			<OurServiceModal />
		</Box>
	)
}

export default OurService
