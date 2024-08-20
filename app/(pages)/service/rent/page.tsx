'use client'

import ProductSection from '@/components/ProductSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { useGetQuery } from '@/hooks/useGetQuery'
import { useTranslation } from 'react-i18next'

interface IRent {
	id: number
	title: string
	img: string
	price: string
}

const Rent = () => {
	const { t } = useTranslation()
	const { data, isLoading } = useGetQuery<IRent[]>(
		'arenda-table',
		'https://7c63f3ffcb9c2508.mokky.dev/rent-table'
	)
	const { data: rentDish, isLoading: isRentLoading } = useGetQuery<IRent[]>(
		'arenda-table',
		'https://7c63f3ffcb9c2508.mokky.dev/rent-table'
	)

	return (
		<div>
			<SectionTitle title={t('rent-service')} />
			<ProductSection
				isLoading={isLoading}
				title={t('table-chairs')}
				data={data?.data}
			/>
			<ProductSection
				isLoading={isRentLoading}
				title={t('dishes')}
				className='mt-[80px]'
				data={rentDish?.data}
			/>
		</div>
	)
}

export default Rent
