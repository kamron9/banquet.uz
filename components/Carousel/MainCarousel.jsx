'use client'
// import { carouselData } from '@/data/carouselData'
import CarouselService from '@/service/client/CarouselService'
import { Box, Button, Heading, Skeleton, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Carousel from 'nuka-carousel'
import { useEffect, useState } from 'react'
const MainCarousel = () => {
	const [carouselData, setCarouselData] = useState([])

	const getCarouselData = async () => {
		const data = await CarouselService.getCarouselData()
		setCarouselData(data)
	}
	useEffect(() => {
		getCarouselData()
	}, [])
	//   carousel previous btn
	const carouselPreviousBtn = ({ previousSlide }) => (
		<div
			onClick={previousSlide}
			className={'carousel-btn'}
			style={{ marginLeft: '10px' }}
		>
			<Image
				src={'/left-arrow.svg'}
				alt={'left-arrow'}
				width={30}
				height={30}
			/>
		</div>
	)

	const carouselNextBtn = ({ nextSlide }) => (
		<div
			onClick={nextSlide}
			className={'carousel-btn'}
			style={{ marginRight: '10px' }}
		>
			<Image
				src={'/right-arrow.svg'}
				alt={'right-arrow'}
				width={30}
				height={30}
			/>
		</div>
	)

	return (
		<Box>
			{!carouselData.length ? (
				<Skeleton
					className='carousel-skeleton'
					w={'100%'}
					maxH={'600px'}
					height={'600px'}
					borderRadius={'12px'}
				></Skeleton>
			) : (
				<Carousel
					autoplay={true}
					wrapAround={carouselData.length > 1 ? true : false}
					pauseOnHover={true}
					renderCenterLeftControls={carouselPreviousBtn}
					renderCenterRightControls={carouselNextBtn}
				>
					{carouselData.map(carouselItem => (
						<Box
							key={carouselItem.id}
							width={'100%'}
							height={'100%'}
							position={'relative'}
						>
							<Image
								src={carouselItem.image}
								alt={carouselItem.title}
								width={1000}
								height={400}
								draggable={false}
								className={'carousel-img'}
							/>
							<Box
								position={'absolute'}
								top={'50%'}
								left={{ base: '50%', sm: 0 }}
								color={'white'}
								width={'100%'}
								transform={{
									base: 'translate(-50%, -50%)',
									sm: 'translate(20%, -50%)',
									md: 'translate(10%, -50%)',
								}}
								display={'flex'}
								flexDir={'column'}
								gap={{ base: '10px', md: '30px' }}
								alignItems={{ base: 'center', sm: 'start' }}
							>
								<Heading
									size={{ base: 'lg', sm: 'xl' }}
									width={'100%'}
									textAlign={{ base: 'center', sm: 'start' }}
									textTransform={'capitalize'}
								>
									{carouselItem.title}
								</Heading>
								<Text
									maxW={{ base: '250px', sm: '310px', md: '500px', lg: '2xl' }}
									fontSize={{ base: '16px', sm: '18px', md: '22px' }}
									textAlign={{ base: 'center', sm: 'start' }}
									className='carousel-text'
								>
									{carouselItem.description}
								</Text>
								<Button
									mt={{ base: '30px', md: '0' }}
									size={'lg'}
									textColor={'white'}
									variant={'outline'}
									_hover={{ bg: 'transparent' }}
								>
									ko'rish
								</Button>
							</Box>
						</Box>
					))}
				</Carousel>
			)}
		</Box>
	)
}

export default MainCarousel
