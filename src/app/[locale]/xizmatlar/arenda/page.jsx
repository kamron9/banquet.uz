import Loader from '@/components/Loader/Loader'
import { Suspense, lazy } from 'react'
const Rent = lazy(() => import('@/components/OurService/Rent'))

export const metadata = {
	title: 'Arenda xizmati',
	description:
		'stol, stul, stakan,  va boshqa mebel va posudalar arenda qilish xizmati',
}

const Arenda = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Rent />
		</Suspense>
	)
}

export default Arenda
