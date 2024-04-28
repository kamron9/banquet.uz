import Loader from '@/components/Loader/Loader'
import { Suspense, lazy } from 'react'

const Ketrin = lazy(() => import('@/components/OurService/Ketrin'))

export const metadata = {
	title: 'Keytering',
	description:
		"Keytering xizmati,xar xil turdagi tadbir va banketlarni o'tkazish xizmatlari",
}
const KeyteringPage = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Ketrin />;
		</Suspense>
	)
}

export default KeyteringPage
