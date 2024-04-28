import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import { Suspense, memo } from 'react'

const AboutCompany = dynamic(() => import('@/components/AboutCompany'))
const MainCarousel = dynamic(() => import('@/components/Carousel/MainCarousel'))
const Contact = dynamic(() => import('@/components/Contact'))
const PhotoGallery = dynamic(() => import('@/components/PhotoGallery'))
const Statistic = dynamic(() => import('@/components/Statistic'))
const News = dynamic(() => import('@/components/News'))
const CustomersFeedBack = dynamic(() =>
	import('@/components/CustomersFeedback')
)

function Home() {
	return (
		<Suspense fallback={<Loader />}>
			<MainCarousel />
			<News />
			<AboutCompany />
			<Statistic />
			<PhotoGallery />
			<CustomersFeedBack />
			<Contact />
		</Suspense>
	)
}
export default memo(Home)
