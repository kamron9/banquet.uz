import NewsService from '@/service/server/NewsService'
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import { useLocale } from 'next-intl'
import Image from 'next/image'

const News = async () => {
	const newsData = (await NewsService.getNews()) || []
	const locale = useLocale()
	return (
		<Box as={'section'} my={'80px'} id={'news'}>
			<Heading as={'h2'} size={'lg'} mb={'30px'}>
				{locale === 'uz' ? 'Yangiliklar' : 'Новости'}
			</Heading>
			<Grid
				gap={'25px'}
				templateColumns={{
					base: 'repeat(1,1fr)',
					sm: 'repeat(2,1fr)',
					lg: 'repeat(4,1fr)',
				}}
			>
				{newsData.map(value => (
					<GridItem key={value.id} bg={'var(--secondary-color)'}>
						<Image
							style={{ width: '100%', height: '210px', objectFit: 'cover' }}
							src={value.url}
							alt={value.title}
							width={200}
							height={300}
							loading='lazy'
							className={'news-card__img'}
						/>
						<Box p={'24px'}>
							<Heading
								mb={'10px'}
								as={'h2'}
								fontSize={'21px'}
								fontWeight={'400'}
								className={'news-card__title'}
							>
								{value.title}
							</Heading>
							<Text
								lineHeight={'21px'}
								color={'#555351'}
								className={'news-card__text'}
							>
								{value.desc}
							</Text>
						</Box>
					</GridItem>
				))}
			</Grid>
		</Box>
	)
}

export default News
