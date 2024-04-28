import FeedbackService from '@/service/server/feedbackService'
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'
import { useLocale } from 'next-intl'

const CustomersFeedBack = async () => {
	const feedback = await FeedbackService.getFeedback()

	const locale = useLocale()

	return (
		<Box my={'80px'} as='section'>
			<Heading as={'h2'} size={'lg'} mb={'30px'}>
				{locale === 'uz' ? 'Mijozlarimiz fikrlari' : 'Отзывы наших клиентов'}
			</Heading>
			<Grid
				gap={'10px'}
				templateColumns={{
					base: 'repeat(1,1fr)',
					sm: 'repeat(2,1fr)',
					lg: 'repeat(4,1fr)',
				}}
			>
				{feedback?.map(video => (
					<GridItem key={video.id}>
						<iframe
							width='100%'
							height='250px'
							src={video.url}
							title={`video ${video.id}`}
							allowFullScreen
						></iframe>
					</GridItem>
				))}
			</Grid>
		</Box>
	)
}

export default CustomersFeedBack
