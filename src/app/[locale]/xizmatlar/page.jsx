import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
const OurService = dynamic(() => import('@/components/OurService'), {
	loading: () => <Loader />,
	ssr: false,
})
export const metadata = {
	title: 'Bizning xizmatlar',
	description:
		'Bizning xizmatlar: banketlar, tadbirlar, arenda xizmatlari, kateyring xizmatlari, posuda arenda xizmatlari',
}

const AllService = () => {
	return (
		<>
			<OurService />
		</>
	)
}

export default AllService
