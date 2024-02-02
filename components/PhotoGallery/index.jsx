// 'use client'
import getPhotoGallery from '@/service/server/PhotoGalleryService'
import { Box, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import styles from './style.module.css'

const PhotoGallery = async () => {
	const photoData = (await getPhotoGallery()) || []
	console.log(photoData)
	return (
		<Box>
			<Heading size={'lg'} mb={'30px'} id='gallery'>
				Tadbirdan Lavhalar
			</Heading>
			{/*    gallery */}
			<Box className={styles.galleryScroller}>
				<Box className={styles.galleryScroller__inner_reversed}>
					{photoData.map(data => (
						<Image
							key={data.id}
							draggable={false}
							className={styles.galleryImg}
							src={data.photo}
							alt={data.name}
							width={'200'}
							height={100}
							aria-hidden={true}
						/>
					))}
				</Box>

				<Box className={styles.galleryScroller__inner}>
					{photoData.map(data => (
						<Image
							key={data.id}
							className={styles.galleryImg}
							src={data.photo}
							draggable={false}
							alt={data.name}
							width={'200'}
							height={100}
							aria-hidden={true}
						/>
					))}
				</Box>
			</Box>
		</Box>
	)
}

export default PhotoGallery
