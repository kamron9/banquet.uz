'use client'
import Skeleton from '@/components/Skeleton'
import Section from '@/components/ui/section'
import { useGetQuery } from '@/hooks/useGetQuery'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

interface Ilanguage<T> {
	uz: T
	ru: T
}

interface IAbout {
	id: number
	title: Ilanguage<string>
	description: Ilanguage<string>
	img: string
}

const AboutUs = () => {
	const { t } = useTranslation()
	const { data, isLoading } = useGetQuery<IAbout>(
		'about',
		`https://7c63f3ffcb9c2508.mokky.dev/about_us`
	)

	return (
		<Section id='about' title={t('home.navbar.about')}>
			<div className='bg-lightGray rounded-md p-4 md:p-8'>
				{isLoading && (
					<div className='flex flex-wrap md:flex-nowrap gap-5'>
						{[...Array(2)].map((_, i) => (
							<Skeleton key={i} />
						))}
					</div>
				)}
				{data?.data.map((item: IAbout) => (
					<div
						key={item.id}
						className='flex flex-col-reverse md:flex-row gap-5'
					>
						<div className='w-full md:w-2/4 flex flex-col gap-5'>
							<h1 className='text-primary font-bold text-lg md:text-xl'>
								{item.title.uz}
							</h1>
							<p className='text-sm sm:text-base lg:text-lg text-textColor'>
								{item.description.uz}
							</p>
						</div>
						<div className='w-full md:w-2/4'>
							<Image
								width={400}
								height={300}
								className='w-full object-cover rounded-md max-h-[350px]'
								src={item?.img}
								alt='community-photo'
							/>
						</div>
					</div>
				))}
			</div>
		</Section>
	)
}

export default AboutUs
