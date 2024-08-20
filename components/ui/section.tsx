import { FC } from 'react'

interface ISection {
	title: string
	children: React.ReactNode
	className?: string
	id?: string
}

const Section: FC<ISection> = ({ title, className, children, id }) => {
	return (
		<section className={`mt-[80px] ${className}`} id={id}>
			<h2 className='capitalize text-[1.2rem] lg:text-[1.5rem] font-bold mb-[20px]'>
				{title}
			</h2>
			{children}
		</section>
	)
}

export default Section
