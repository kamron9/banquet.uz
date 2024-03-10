import { Box, Divider, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const Statistic = () => {
	const t = useTranslations('IndexPage')
	return (
		<Box as='section' mb={'80px'} id='statistic'>
			<Heading size={'lg'} mb={'30px'}>
				{t('Statistika')}
			</Heading>
			{/* statistic card */}
			<Grid
				templateColumns={{
					base: 'repeat(1,1fr)',
					sm: 'repeat(2,1fr)',
					lg: 'repeat(4,1fr)',
				}}
				gap={'20px'}
			>
				{/* 1 */}
				<GridItem
					background={
						'linear-gradient(136.33deg, #46C19E -19.25%, #46C19E 124.16%)'
					}
					boxShadow={
						'0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'
					}
					backdropFilter={'blur(10px)'}
					padding={'20px'}
					borderRadius={'8px'}
				>
					{/* statistic img */}
					<Box width={'100%'} display={'flex'} justifyContent={'center'}>
						<Image
							src={'/check-icon.svg'}
							width={80}
							height={40}
							alt='check icon'
						/>
					</Box>
					<Divider my={'20px'} colorScheme={'blue'} />
					{/* statistic body */}
					<Box textAlign={'center'} color={'white'}>
						<Text as={'b'} fontSize={'22px'}>
							1200+
						</Text>
						<Text textTransform={'capitalize'}>o'tkazilgan tadbirlar</Text>
					</Box>
				</GridItem>
				{/* 2 */}
				<GridItem
					background={
						'linear-gradient(136.33deg, #E86E00 -19.25%, #F8AED4 124.16%)'
					}
					boxShadow={
						'0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'
					}
					padding={'20px'}
					borderRadius={'8px'}
				>
					{/* statistic img */}
					<Box width={'100%'} display={'flex'} justifyContent={'center'}>
						<Image src={'/grow.svg'} width={80} height={40} alt='grow icon' />
					</Box>
					<Divider my={'20px'} />
					{/* statistic body */}
					<Box textAlign={'center'} color={'white'}>
						<Text as={'b'} fontSize={'22px'}>
							54+
						</Text>
						<Text textTransform={'capitalize'}>
							yaqinda o'tkaziladigan tadbirlar
						</Text>
					</Box>
				</GridItem>
				{/* 3 */}
				<GridItem
					background={
						'linear-gradient(136.33deg, #67257C -19.25%, #77A6FE 124.16%)'
					}
					boxShadow={
						'0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'
					}
					padding={'20px'}
					borderRadius={'8px'}
				>
					{/* statistic img */}
					<Box width={'100%'} display={'flex'} justifyContent={'center'}>
						<Image
							src={'/check-icon.svg'}
							width={80}
							height={40}
							alt='check icon'
						/>
					</Box>
					<Divider my={'20px'} />
					{/* statistic body */}
					<Box textAlign={'center'} color={'white'}>
						<Text as={'b'} fontSize={'22px'}>
							1200+
						</Text>
						<Text textTransform={'capitalize'}>o'tkazilgan tadbirlar</Text>
					</Box>
				</GridItem>
				{/* 4 */}
				<GridItem
					background={
						'linear-gradient(136.33deg, #00D8E4 -19.25%, #005FCD 124.16%)'
					}
					boxShadow={
						'0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'
					}
					padding={'20px'}
					borderRadius={'8px'}
				>
					{/* statistic img */}
					<Box width={'100%'} display={'flex'} justifyContent={'center'}>
						<Image
							src={'/check-icon.svg'}
							width={80}
							height={40}
							alt='check icon'
						/>
					</Box>
					<Divider my={'20px'} />
					{/* statistic body */}
					<Box textAlign={'center'} color={'white'}>
						<Text as={'b'} fontSize={'22px'}>
							1200+
						</Text>
						<Text textTransform={'capitalize'}>o'tkazilgan tadbirlar</Text>
					</Box>
				</GridItem>
			</Grid>
		</Box>
	)
}

export default Statistic
