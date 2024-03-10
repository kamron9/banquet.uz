'use client'
import { oddiyData } from '@/data/oddiyData'
import {
	Heading,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import ProductList from './ProductList'

const Products = () => {
	const [selectedProduct, setSelectedProduct] = useState('menu-1')

	// handle tab index
	const handleTabIndex = index => {
		setSelectedProduct(oddiyData[index])
	}

	// const findSelectedProduct = oddiyData.find(
	// 	({ title }) => title === selectedProduct
	// )
	console.log(selectedProduct)

	return (
		<Tabs
			onChange={index => handleTabIndex(index)}
			variant={'soft-rounded'}
			colorScheme={'green'}
			width={{ base: '100%', lg: '70%' }}
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
						_selected={{ color: 'white', bg: 'green', rounded: 'md' }}
						bg={'rgb(244 245 247)'}
						rounded={'md'}
					>
						<Text fontSize={'18px'}>{title}</Text>
					</Tab>
				))}
			</TabList>
			{/* product list */}
			<TabPanels>
				{oddiyData.map(({ id, products }) => (
					<TabPanel key={id}>
						{products ? (
							products.map(product => (
								<ProductList key={product.id} product={product} />
							))
						) : (
							<Heading size={'md'}>Bu menyuda maxsulot yo'q</Heading>
						)}
					</TabPanel>
				))}
			</TabPanels>
		</Tabs>
	)
}

export default Products
