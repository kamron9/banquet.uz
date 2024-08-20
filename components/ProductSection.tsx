'use client'
import Image from 'next/image'
import { FC } from 'react'
import ProductSkeleton from './ProductSkeleton'
import { Card, CardContent, CardDescription, CardHeader } from './ui/card'

interface IProduct {
	id: number
	title: string
	img: string
	price: string
}
interface ISection {
	title?: string
	className?: string
	id?: string
	data: IProduct[]
	isLoading?: boolean
}

const ProductSection: FC<ISection> = ({
	title,
	className,
	data,
	id,
	isLoading,
}) => {
	return (
		<section className={`${className}`} id={id}>
			{title && (
				<h2 className='text-[1.2rem] lg:text-[1.5rem] font-bold mb-[20px]'>
					{title}
				</h2>
			)}

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
				{isLoading ? (
					<ProductSkeleton />
				) : (
					data?.map((item: IProduct) => (
						<Card key={item.id}>
							<CardHeader>
								<Image
									src={item.img}
									alt={item.title}
									width={200}
									height={200}
									className='w-full object-cover rounded-md'
								/>
							</CardHeader>
							<CardContent>
								<CardDescription>{item.title}</CardDescription>
								<span className='text-primary'>{item.price}</span>
							</CardContent>
						</Card>
					))
				)}
			</div>
		</section>
	)
}

export default ProductSection
