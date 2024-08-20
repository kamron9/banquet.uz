'use client'

import { useImageModal } from '@/context/ImageModalProvider'
import { useGetQuery } from '@/hooks/useGetQuery'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../../../../../../components/ui/SectionTitle'

interface ITable {
	id: number
	title: string
	img: string
	price: string
}
const Table = () => {
	const { t } = useTranslation('')
	const { openModal } = useImageModal()
	const { data } = useGetQuery<ITable[]>(
		'table',
		'https://7c63f3ffcb9c2508.mokky.dev/table'
	)

	return (
		<div>
			<SectionTitle title={t('table-chairs')} />
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4 gap-4'>
				{data?.data.map((tab: ITable) => (
					<div
						key={tab.id}
						className='flex flex-col relative  group overflow-hidden'
					>
						<Image
							src={tab.img}
							alt={tab.title}
							width={300}
							height={200}
							className='w-full h-[200px] sm:h-[230px] lg:h-[300px] object-cover rounded-lg'
						/>
						<div className='absolute bottom-0 z-20 bg-primary w-full py-1'>
							<span className='inline-block w-full text-white px-2 text-[13px] sm:text-base'>
								{tab.title}
							</span>
						</div>
						<div
							onClick={() => openModal(tab.img)}
							className='px-2 py-1 right-0 cursor-pointer h-fit w-fit  lg:top-full lg:group-hover:top-0 transition-all duration-500 lg:h-full absolute  lg:w-full bg-[rgb(19,19,19,0.6)] backdrop-blur-sm flex items-center justify-center'
						>
							<div className='flex gap-1'>
								<Image
									src={'/icons/eye.svg'}
									width={20}
									height={20}
									alt='eye icon'
								/>
								<span className='text-white'>Ko'rish</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Table
