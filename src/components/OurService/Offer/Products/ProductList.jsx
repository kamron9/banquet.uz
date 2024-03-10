import { Box, Divider, Flex, List, ListItem, Text } from '@chakra-ui/react'
import Image from 'next/image'

const ProductList = ({ product }) => {
	return (
		product && (
			<List key={product.id} spacing={3}>
				<ListItem display={'flex'} alignItems={'center'}>
					<Flex alignItems={'center'} gap={'10px'}>
						<Image
							src={product.imgLink}
							alt={product.title}
							width={50}
							height={50}
							style={{
								borderRadius: '50%',
								width: 50,
								height: 50,
								objectFit: 'cover',
							}}
						/>
					</Flex>
					<Box
						pl={'20px'}
						width={'90%'}
						display={'flex'}
						alignItems={{ base: 'start', sm: 'center' }}
						flexDirection={{ base: 'column', sm: 'row' }}
						justifyContent={'space-between'}
					>
						<Text as='b'>{product.title}</Text>

						<Text>{product.price.toLocaleString('ru-Ru')} so'm</Text>
					</Box>
				</ListItem>
				<Divider my={'10px'} />
			</List>
		)
	)
}

export default ProductList
