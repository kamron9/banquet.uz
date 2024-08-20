'use client'
import cateringImg from '@/public/images/catering.jpeg'
import cafeBreak from '@/public/images/cofe-break.jpg'
import rentImg from '@/public/images/rent.webp'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import ServiceCard from './components/ServiceCard'
import ServiceModal from './components/ServiceModal'

const Service = () => {
	const { t } = useTranslation('')

	const cardTitle = {
		base: t('service.catering.base'),
		standard: t('service.catering.standard'),
		premium: t('service.catering.premium'),
	}

	return (
		<div className='mt-[20px]'>
			<h2 className='text-[1.2rem] lg:text-[1.5rem] font-bold mb-[20px]'>
				{t('service.title')}
			</h2>
			<div className='grid grid-cols-[repeat(auto-fit,minmax(300px,330px))] sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(300px,330px))] gap-5 justify-center md:justify-start'>
				<ServiceModal title={t('service.tarif')} cardTitle={cardTitle}>
					<ServiceCard img={cateringImg} title={t('service.catering.title')} />
				</ServiceModal>
				<Link href={'/service/rent'}>
					<ServiceCard img={rentImg} title={t('service.rentTitle')} />
				</Link>
				<Link href={'/service/cofe-break'}>
					<ServiceCard img={cafeBreak} title={t('service.cofee')} />
				</Link>
			</div>
		</div>
	)
}

export default Service

//grid-cols-[repeat(auto-fit,minmax(300px,300px))]
