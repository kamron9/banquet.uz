import ProductSkeleton from '@/components/ProductSkeleton'
import { useGetQuery } from '@/hooks/useGetQuery'
import Image from 'next/image'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface IProduct {
	id: number
	category_id: number
	title: string
	price: string
	img: string
	count: number
}
const Products: FC<{ activeTab: number }> = ({ activeTab }) => {
	const { t } = useTranslation('')
	const { data: product, isLoading } = useGetQuery<IProduct[]>(
		'catering_menu',
		'https://7c63f3ffcb9c2508.mokky.dev/products'
	)
	return (
		<div className='py-4'>
			<div className='grid gap-2 sm:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{isLoading ? (
					<ProductSkeleton />
				) : (
					product?.data
						.filter((item: IProduct) => item.category_id === activeTab)
						.map((item: IProduct) => (
							<div
								key={item.id}
								className='px-2 pt-1 pb-3 card-shadow rounded-lg  gap-2 flex flex-col h-full'
							>
								<div className='w-full'>
									<Image
										src={item.img}
										alt={item.title}
										width={150}
										height={300}
										className='rounded-lg  object-cover aspect-video h-[120px] sm:h-[200px] w-full'
									/>
								</div>
								<div className='flex flex-col justify-between h-full w-full items-start gap-1'>
									<h3 className='text-[13px] md:text-[14px] lg:text-base'>
										{item.title}
									</h3>
									<div>
										<p className='text-[13px] md:text-[14px] lg:text-base text-deepGray'>
											{t('card.calculated')}:{' '}
											<b className='text-primary'>{item.count}</b>{' '}
											{t('card.person')}
										</p>
										<button className='text-[13px] md:text-[14px] bg-lightGray2 px-2 py-1 rounded-xl'>
											<b>
												{Number(item.price.replace('$', ''))} {t('card.sum')}
											</b>
										</button>
									</div>
								</div>
							</div>
						))
				)}
			</div>
		</div>
	)
}

export default Products
