'use client'
import rightCircleIcon from '@/assets/icons/right-arrow-circle.svg'
import Skeleton from '@/components/Skeleton'
import { useGetQuery } from '@/hooks/useGetQuery'
import { Ilanguage } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface ICarousel {
	id: number
	title: Ilanguage<string>
	img: string
	desc: Ilanguage<string>
}

const Carousel = () => {
	const { data, isLoading } = useGetQuery<ICarousel>(
		'carousel',
		'https://ecb30c1beda01ce0.mokky.dev/carousel'
	)

	if (isLoading) return <Skeleton />
	return (
		<div className='mt-[20px]'>
			<Swiper
				loop={true}
				slidesPerView={1}
				navigation={true}
				autoplay={{ delay: 3000 }}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination, Navigation, Autoplay]}
			>
				{data?.data.map((item: ICarousel) => (
					<SwiperSlide key={item.id} className='relative'>
						<div className='w-full h-full relative carousel-inner'>
							<Image
								width={500}
								height={600}
								src={item.img}
								alt={item.title?.uz}
								className='carousel-img w-full h-full max-h-[600px] object-cover rounded-md'
							/>

							<div className='w-full absolute bottom-6 sm:bottom-[50px] left-5 md:bottom-[100px] md:left-20 z-10 text-white max-w-[500px] pr-10'>
								<h2 className='text-[16px] sm:text-[20px] md:text-[40px] font-bold capitalize md:mb-3'>
									{item.title?.uz}
								</h2>
								<div className='flex items-start gap-[10px]'>
									<p className='font-light text-[12px] sm:text-[16px]'>
										{item.desc?.uz}
									</p>
									<Link href='/'>
										<Image
											src={rightCircleIcon}
											alt='icon-arrow'
											width={30}
											height={30}
											className='min-w-[30px] sm:min-w-[50px] sm:min-h-[50px] w-[30px] h-[30px] '
										/>
									</Link>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Carousel
