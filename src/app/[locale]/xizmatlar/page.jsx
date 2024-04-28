import Loader from '@/components/Loader/Loader'
import { Suspense, lazy } from 'react'
const OurService = lazy(() => import('@/components/OurService'))
export const metadata = {
	title: 'Bizning xizmatlar',
	description:
		'Bizning xizmatlar: banketlar, tadbirlar, arenda xizmatlari, kateyring xizmatlari, posuda arenda xizmatlari',
}

const AllService = () => {
	return (
		<Suspense fallback={<Loader />}>
			<OurService />
		</Suspense>
	)
}

export default AllService
