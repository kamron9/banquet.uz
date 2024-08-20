// Gallery.tsx
'use client'

import Section from '@/components/ui/section'
import { useGetQuery } from '@/hooks/useGetQuery'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import './gallery.css'
interface IGallery {
	id: number
	img: string
}

const Gallery = () => {
	const { t } = useTranslation()
	const { data } = useGetQuery(
		'gallery',
		'https://7c63f3ffcb9c2508.mokky.dev/gallery'
	)
	const results = data?.data as IGallery[]

	return (
		<Section title={t('home.navbar.gallery')} id='gallery'>
			<div className='gallery-animation'>
				<div className='gallery-container'>
					{results?.map(item => (
						<div key={item.id}>
							<Image
								width={300}
								height={200}
								className='w-[300px] h-[200px] object-cover rounded-md'
								src={item.img}
								alt='gallery'
							/>
						</div>
					))}
				</div>
			</div>
		</Section>
	)
}

export default Gallery
