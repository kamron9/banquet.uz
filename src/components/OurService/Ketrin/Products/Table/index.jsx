'use client'
import TableService from '@/service/server/TableService'
import { Box, Flex, Heading, Skeleton, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Table = () => {
	const [tableData, setTableData] = useState([])
	const [activeTab, setActiveTab] = useState([])
	const [activeVariant, setActiveVariant] = useState('torburchak')
	// get table data from server
	const getTableData = async () => {
		try {
			const data = await TableService.Table()
			setTableData(data)
			setActiveTab(data[0])
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		getTableData()
	}, [])

	// changing active tab
	const changeActiveTab = id => {
		const findData = tableData.find(value => value.id === id)
		setActiveTab(findData ? findData : [])
	}

	return (
		<Box>
			<Heading
				size={'lg'}
				color={'purple'}
				textAlign={'center'}
				width={'100%'}
				mb={'30px'}
			>
				Stollar
			</Heading>
			{!tableData.length ? (
				<Skeleton width={'350px'} height={'350px'} />
			) : (
				<Box
					display={{ base: 'block', md: 'flex' }}
					gap={'20px'}
					alignItems={'start'}
				>
					{/* table img */}
					<Box
						width={'100%'}
						maxW={{ base: '100%', md: '450px' }}
						mb={{ base: '30px', md: '0' }}
						height={350}
					>
						<Image
							src={activeTab?.src}
							width={300}
							height={300}
							style={{
								minWidth: '320px',
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								borderRadius: '5px',
							}}
							alt='test'
						/>
					</Box>
					{/* table tab and table variant */}
					<Box>
						{/* table tab */}

						<Box
							display={'flex'}
							gap={'10px'}
							flexWrap={'wrap'}
							alignContent={'flex-start'}
						>
							{tableData &&
								tableData.map(({ name, id }) => {
									return (
										<Box
											onClick={() => changeActiveTab(id)}
											key={id}
											userSelect={'none'}
											fontSize={{ base: '14px', md: '16px' }}
											border={`${
												activeTab?.id === id
													? '1px solid green'
													: '1px solid gray'
											}`}
											fontWeight={`900`}
											color={`${activeTab?.id === id ? 'green' : 'black'}`}
											cursor={'pointer'}
											borderRadius={'5px'}
											p={'10px'}
										>
											{name}
										</Box>
									)
								})}
						</Box>
						{/* table variant */}
						<Box>
							<Text fontSize={'xl'} mt={'20px'} mb={'10px'}>
								Stol turi:
							</Text>
							<Flex gap={'10px'}>
								{/* circular tab */}
								<Box
									onClick={() => setActiveVariant('torburchak')}
									userSelect={'none'}
									border={`${
										activeVariant === 'torburchak'
											? '1px solid green'
											: '1px solid gray'
									}`}
									fontWeight={`900`}
									color={`${
										activeVariant === 'torburchak' ? 'green' : 'black'
									}`}
									cursor={'pointer'}
									fontSize={{ base: '14px', sm: '16px' }}
									borderRadius={'5px'}
									p={'10px'}
								>
									To'rtburchak
								</Box>
								{/*  */}
								<Box
									onClick={() => setActiveVariant('dumaloq')}
									userSelect={'none'}
									border={`${
										activeVariant === 'dumaloq'
											? '1px solid green'
											: '1px solid gray'
									}`}
									fontWeight={`${activeVariant === 'dumaloq' ? 900 : 900}`}
									color={`${activeVariant === 'dumaloq' ? 'green' : 'black'}`}
									cursor={'pointer'}
									borderRadius={'5px'}
									p={'10px'}
								>
									Dumaloq
								</Box>
							</Flex>
						</Box>
					</Box>
				</Box>
			)}
		</Box>
	)
}

export default Table
