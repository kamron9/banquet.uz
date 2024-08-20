import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import baseCatering from '@/public/images/base-catering.jpeg'
import premiumCatering from '@/public/images/premium-catering.webp'
import standardCatering from '@/public/images/standart-catering.jpeg'
import Link from 'next/link'
import { FC } from 'react'
import ServiceCard from './ServiceCard'

interface IserviceTitle {
	base: string
	standard: string
	premium: string
}

interface IserviceModal {
	title: string
	children: React.ReactNode
	cardTitle: IserviceTitle
}

const ServiceModal: FC<IserviceModal> = ({ children, cardTitle, title }) => {
	return (
		<Dialog>
			<DialogTrigger>{children}</DialogTrigger>
			<DialogContent className='max-w-[600px] w-full'>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
				</DialogHeader>
				<div className='grid grid-cols-1 justify-center items-center sm:grid-cols-3 gap-4'>
					<Link href={'/service/catering/base'}>
						<ServiceCard
							title={cardTitle.base}
							img={baseCatering}
							className='max-h-[200px]  w-full'
						/>
					</Link>
					<Link href={'/service/catering/standard'}>
						<ServiceCard
							title={cardTitle.standard}
							img={standardCatering}
							className='max-h-[200px] w-full'
						/>
					</Link>
					<Link href={'/service/catering/premium'}>
						<ServiceCard
							title={cardTitle.premium}
							img={premiumCatering}
							className='max-h-[200px] w-full '
						/>
					</Link>
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default ServiceModal
