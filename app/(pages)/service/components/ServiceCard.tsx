import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

interface IServiceCard {
	title: string
	img: StaticImageData
	className?: string
}

const ServiceCard: FC<IServiceCard> = ({ title, img, className }) => {
	return (
		<div
			className={`cursor-pointer w-full h-[230px]  relative group overflow-hidden transition-all duration-300 ${className}`}
		>
			<Image
				className='w-full  h-full object-cover brightness-[80%] rounded-md transition-all duration-500 group-hover:scale-110'
				src={img}
				alt='service-img'
				width={300}
				height={200}
			/>
			<div className='absolute bottom-3 left-3'>
				<span className='text-white font-semibold text-lg'>{title}</span>
			</div>
		</div>
	)
}

export default ServiceCard
