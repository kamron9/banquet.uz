'use client'
import FeedbackService from '@/service/client/feedbackService'
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'
import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'

const CustomersFeedBack = () => {
	const [feedback, setFeedback] = useState([])

	const getFeedback = async () => {
		try {
			const feedback = await FeedbackService.getFeedback()
			setFeedback(feedback)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		getFeedback()
	}, [])

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
						<ReactPlayer url={video.url} width={'100%'} height={220} />
					</GridItem>
				))}
			</Grid>
		</Box>
	)
}

export default CustomersFeedBack
