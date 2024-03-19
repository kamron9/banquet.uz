'use client'
import CarouselService from '@/service/client/CarouselService'
import {
	Box,
	Image as ChakraImage,
	Heading,
	Skeleton,
	Text,
} from '@chakra-ui/react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'nuka-carousel'
import { memo, useEffect, useState } from 'react'
import RightArrow from '../../../public/assets/icons/right-arrow-circle.svg'
import { CarouselNextBtn, carouselPreviousBtn } from './CarouselSlides'

const MainCarousel = () => {
	const [carouselData, setCarouselData] = useState([])
	const locale = useLocale()

	useEffect(() => {
		CarouselService.getCarouselData().then(res => setCarouselData(res))
	}, [])

	// generate carousel link

	const generateLink = category => {
		switch (category) {
			case 'ketrin':
				return '/xizmatlar/ketrin/standart'
			case 'arenda':
				return '/xizmatlar/arenda'
			case 'cofebreak':
				return '/xizmatlar/cofe-break'
			default:
				return '/'
		}
	}

	return (
		<Box>
			{!carouselData?.length ? (
				<Skeleton
					className='carousel-skeleton'
					w={'100%'}
					maxH={'600px'}
					height={'600px'}
					borderRadius={'12px'}
				></Skeleton>
			) : (
				<Carousel
					// autoplay={true}
					wrapAround={carouselData.length > 1}
					pauseOnHover={true}
					renderCenterLeftControls={carouselPreviousBtn}
					renderCenterRightControls={CarouselNextBtn}
				>
					{carouselData.map(carouselItem => (
						<Box
							key={carouselItem.id}
							className={'carousel-inner'}
							width={'100%'}
							height={'100%'}
							position={'relative'}
							borderRadius={'12px'}
							overflow={'hidden'}
						>
							<Image
								src={carouselItem?.img}
								alt={carouselItem?.title?.uz}
								width={1000}
								height={400}
								draggable={false}
								priority={true}
								className={'carousel-img'}
							/>
							<Box
								position={'absolute'}
								bottom={'80px'}
								left={{ base: '20px', md: '80px' }}
								color={'white'}
								width={{ base: 'auto', md: '100%' }}
								zIndex={2}
								display={'flex'}
								flexDir={{ base: 'row', sm: 'column' }}
								alignItems={{ base: 'center', sm: 'flex-start' }}
								gap={'20px'}
							>
								<Heading
									fontSize={{ base: '24px', sm: '28px', md: '3rem' }}
									width={'100%'}
									textTransform={'capitalize'}
								>
									{carouselItem.title && carouselItem?.title[locale]}
								</Heading>
								<Box
									display={'flex'}
									alignItems={'center'}
									gap={'20px'}
									paddingRight={'10px'}
								>
									<Text
										color={'white'}
										maxW={'450px'}
										fontSize={{ base: '16px', md: '20px' }}
										lineHeight={'29.83px'}
										className={'carousel-text'}
										display={{ base: 'none', sm: 'block' }}
									>
										{carouselItem.desc[locale]}
									</Text>
									{/* circle arrow img */}
									<Box>
										<Link href={generateLink(carouselItem.category)}>
											<ChakraImage
												as={Image}
												src={RightArrow}
												alt={'right arrow'}
												width={{ base: '40px', sm: '60px' }}
												height={{ base: '40px', sm: '60px' }}
												minW={{ base: '40px', sm: '60px' }}
											/>
										</Link>
									</Box>
								</Box>
							</Box>
						</Box>
					))}
				</Carousel>
			)}
		</Box>
	)
}

export default memo(MainCarousel)
