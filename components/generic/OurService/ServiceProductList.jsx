'use client'
import { oddiyData } from '@/data/oddiyData'
import { Box, Divider, Flex, List, ListItem, Text } from '@chakra-ui/react'
import Image from 'next/image'

const ServiceProductList = () => {
	return (
		<Box width={'70%'}>
			{oddiyData.map(data => (
				<List key={data.id} spacing={3}>
					<ListItem
						display={'flex'}
						alignItems={'center'}
						justifyContent={'space-between'}
					>
						<Flex alignItems={'center'} gap={'30px'}>
							<Box display={'flex'} alignItems={'center'} gap={'10px'}>
								<Image
									src={'/check-circle.svg'}
									width={25}
									height={25}
									alt='check-icon'
								/>
								<Image
									src={data.imgLink}
									alt={data.title}
									width={50}
									height={50}
									style={{
										borderRadius: '50%',
										width: 50,
										height: 50,
										objectFit: 'cover',
									}}
								/>
							</Box>

							<Box>
								<Text as='b'>{data.title}</Text>
							</Box>
						</Flex>
						<Box>
							<Text>{data.price.toLocaleString('ru-Ru')} so'm</Text>
						</Box>
					</ListItem>
					<Divider my={'10px'} />
				</List>
			))}
		</Box>
	)
}

export default ServiceProductList
