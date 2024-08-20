'use client'
import Skeleton from '@/components/Skeleton'
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import Section from '@/components/ui/section'
import { useGetQuery } from '@/hooks/useGetQuery'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

interface INews {
	id: number | string
	title: string
	url: string
	desc: string
}

const NewsCard = () => {
	const { t } = useTranslation()
	const { data, isLoading } = useGetQuery<any>(
		'news',
		'https://ecb30c1beda01ce0.mokky.dev/about'
	)

	if (isLoading) {
		return (
			<Carousel>
				<CarouselContent className='flex'>
					{[...Array(4)].map((_, i) => (
						<CarouselItem
							key={i}
							className='sm:basis-1/2 md:basis-1/3 lg:basis-1/4'
						>
							<Skeleton />
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		)
	}

	return (
		<Section title={t('home.navbar.news')} id='news'>
			<Carousel>
				<CarouselContent className='flex'>
					{data?.data.map((news: INews) => (
						<CarouselItem
							key={news.id}
							className='sm:basis-1/2 md:basis-1/3 lg:basis-1/4'
						>
							<Card className='h-full overflow-hidden'>
								<Image
									src={news?.url}
									alt={news?.title}
									width={300}
									height={200}
									className='aspect-square object-cover w-full h-[210px] rounded-t-md'
									objectFit='cover'
								/>

								<CardContent className='bg-lightGray pt-4 rounded-b-md h-full'>
									<CardTitle className='text-[18px] mb-1 news-card__title'>
										{news.title}
									</CardTitle>
									<CardDescription className='news-card__desc'>
										{news.desc}
									</CardDescription>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>

				<CarouselPrevious className='bottom-0 -left-[25px] lg:hidden' />
				<CarouselNext className='-right-[25px] lg:hidden' />
			</Carousel>
		</Section>
	)
}

export default NewsCard
