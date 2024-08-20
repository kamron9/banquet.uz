'use client'

import ProductSection from '@/components/ProductSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { useGetQuery } from '@/hooks/useGetQuery'
import { useTranslation } from 'react-i18next'

interface ICofeBreak {
	id: number
	title: string
	img: string
	price: string
}

const CofeBreak = () => {
	const { t } = useTranslation('')
	const { data, isLoading } = useGetQuery<ICofeBreak[]>(
		'cofe-break',
		'https://7c63f3ffcb9c2508.mokky.dev/rent-table'
	)
	return (
		<div>
			<SectionTitle title={t('cofe-break')} />
			<ProductSection
				data={data?.data}
				className='mt-4'
				isLoading={isLoading}
			/>
		</div>
	)
}

export default CofeBreak
