import Loader from '@/components/Loader/Loader'
import { Suspense, lazy, memo } from 'react'

const AboutCompany = lazy(() => import('@/components/AboutCompany'))
const MainCarousel = lazy(() => import('@/components/Carousel/MainCarousel'))
const Contact = lazy(() => import('@/components/Contact'))
const PhotoGallery = lazy(() => import('@/components/PhotoGallery'))
const Statistic = lazy(() => import('@/components/Statistic'))
const News = lazy(() => import('@/components/News'))
const CustomersFeedBack = lazy(() => import('@/components/CustomersFeedback'))

function Home() {
	return (
		<Suspense fallback={<Loader />}>
			<MainCarousel />
			<News />
			<AboutCompany />
			<Statistic />
			{/* <PhotoGallery /> */}
			<CustomersFeedBack />
			<Contact />
		</Suspense>
	)
}
export default memo(Home)
