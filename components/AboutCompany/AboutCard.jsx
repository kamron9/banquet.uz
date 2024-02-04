import getAboutCompany from '@/service/server/AboutCompanyService'
import { Box, Button, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import styles from './style.module.css'

const AboutCard = async () => {
	const cardData = (await getAboutCompany()) || []

	return (
		<Box my={'100px'}>
			<Grid
				templateColumns={{
					base: 'repeat(1,1fr)',
					sm: 'repeat(2,1fr)',
					lg: 'repeat(4,1fr)',
				}}
				gap={'20px'}
			>
				{cardData.map(data => (
					<GridItem
						position={'relative'}
						key={data.id}
						className={styles.about_card}
						height={350}
						backgroundColor={'white'}
						borderRadius={12}
					>
						<Box className={styles.card_img_wrapper}>
							<Image
								width={300}
								height={150}
								src={data.image}
								alt={data.title}
								className={styles.about_card_img}
							/>
						</Box>
						<Box className={styles.about_card_content}>
							<Heading as={'h2'} size={'md'} my={'10px'}>
								{data.title}
							</Heading>
							<Text className={styles.about_card_text}>{data.description}</Text>
						</Box>
						{/* card footer */}
						<Box
							position={'absolute'}
							bottom={'20px'}
							textAlign={'center'}
							width={'100%'}
						>
							<Text as={'span'} fontSize={'14px'} color={'gray'}>
								{cardData?.created?.slice(0, 10)}
							</Text>
							<Button colorScheme={'facebook'}>read more</Button>
						</Box>
					</GridItem>
				))}
			</Grid>
		</Box>
	)
}

export default AboutCard
