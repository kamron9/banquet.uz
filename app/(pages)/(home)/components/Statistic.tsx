'use client'
import Section from '@/components/ui/section'
import { useGetQuery } from '@/hooks/useGetQuery'
import { Ilanguage } from '@/types'
import { useTranslation } from 'react-i18next'

interface IStatistic {
	id: number
	title: Ilanguage<string>
	count: number
}

const Statistic = () => {
	const { t } = useTranslation()
	const { data } = useGetQuery(
		'statistic',
		`https://7c63f3ffcb9c2508.mokky.dev/statistic`
	)

	const result = data?.data as IStatistic[]
	return (
		<Section title={t('home.navbar.statistic')} id='statistic'>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
				{result?.map(item => (
					<div
						key={item?.id}
						className='flex flex-col items-center justify-center p-5 h-[200px] bg-lightGray rounded-md shadow-md'
					>
						<p className='text-2xl font-bold text-center'>{item?.count}+</p>
						<div className='h-[1px] w-full bg-gray-200 my-4'></div>
						<h3 className='text-lg text-textColor text-center'>
							{item?.title?.uz}
						</h3>
					</div>
				))}
			</div>
		</Section>
	)
}
export default Statistic
