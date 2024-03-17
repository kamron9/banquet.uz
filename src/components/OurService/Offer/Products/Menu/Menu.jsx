'use client'
import { useCalculateTotalContext } from '@/context/CalculateTotalProvider'
import { oddiyData } from '@/data/oddiyData'
import {
	Box,
	Heading,
	SimpleGrid,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import ProductList from './MenuList'

const Menu = () => {
	const [selectedTab, setSelectedTab] = useState(oddiyData[0])
	const { setSelectedProduct } = useCalculateTotalContext()
	// handle tab index
	const handleTabIndex = index => {
		setSelectedTab(oddiyData[index])
	}
	// set selected product to context
	useEffect(() => {
		setSelectedProduct(selectedTab)
	}, [selectedTab])
	return (
		<Box mb='50px'>
			<Heading
				color={'purple'}
				size={'lg'}
				textAlign={'center'}
				width={'100%'}
				mb={'30px'}
			>
				Bizning Menyu
			</Heading>
			<Text mb={'15px'} fontSize={'xl'}>
				Menyuni tanlang
			</Text>
			<Tabs
				onChange={index => handleTabIndex(index)}
				variant={'soft-rounded'}
				colorScheme={'green'}
				width={{ base: '100%', lg: '100%' }}
			>
				{/* product tabs */}
				<TabList
					display={'flex'}
					flexWrap={'wrap'}
					alignContent={'start'}
					gap={'10px'}
				>
					{oddiyData.map(({ id, title }) => (
						<Tab
							key={id}
							_selected={{
								color: 'green',
								border: '1px solid green',
								rounded: 'md',
								_before: {
									content: `''`,
									backgroundImage: `url(/assets/icons/check-circle.png)`,
									width: '20px',
									backgroundSize: 'cover',
									height: '20px',
									marginRight: '10px',
								},
							}}
							border={'1px solid rgb(244 245 247)'}
							rounded={'md'}
						>
							<Text fontSize={'18px'}>{title}</Text>
						</Tab>
					))}
				</TabList>
				{/* product list */}
				<TabPanels>
					{oddiyData.map(({ id, products }) => (
						<TabPanel key={id} padding={'0'} my={'30px'}>
							<SimpleGrid
								spacing={4}
								width={'100%'}
								templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
							>
								{products ? (
									products.map(product => (
										<ProductList key={product.id} product={product} />
									))
								) : (
									<Heading size={'md'}>Bu menyuda maxsulot yo'q</Heading>
								)}
							</SimpleGrid>
						</TabPanel>
					))}
				</TabPanels>
			</Tabs>
		</Box>
	)
}

export default Menu
