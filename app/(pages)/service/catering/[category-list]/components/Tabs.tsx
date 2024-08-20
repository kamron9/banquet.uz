'use client'

import { useGetQuery } from '@/hooks/useGetQuery'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../../../../../../components/ui/SectionTitle'
import Products from './Products'

interface IMenu {
	id: number
	category_id: number
	title: string
}
const Tabs = () => {
	const { t } = useTranslation('')
	const { data, isLoading } = useGetQuery<IMenu[]>(
		'catering_base',
		'https://7c63f3ffcb9c2508.mokky.dev/menu'
	)
	const [activeTab, setActiveTab] = useState(1)
	return (
		<div>
			<SectionTitle title={t('our-menu')} />
			<div className='flex gap-1 flex-nowrap my-4 overflow-x-auto service-tab'>
				{data?.data.map((tab: IMenu) => (
					<button
						key={tab.id}
						className={`px-4 break-words py-2 text-[13px] sm:text-[16px]   flex-shrink-0 rounded-3xl  transition-colors duration-300 ${
							activeTab === tab.id
								? 'bg-primary text-white'
								: 'bg-lightGray2 text-gray-700'
						}`}
						onClick={() => setActiveTab(tab.id)}
					>
						{tab.title}
					</button>
				))}
			</div>
			<Products activeTab={activeTab} />
		</div>
	)
}

export default Tabs
