'use client'
import { imgData } from '@/data/imgData'
import { Box, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import styles from './style.module.css'

const PhotoGallery = () => {
	return (
		<Box>
			<Heading size={'lg'} mb={'30px'}>
				Tadbirdan Lavhalar
			</Heading>
			{/*    gallery */}
			<Box className={styles.galleryScroller}>
				<Box className={styles.galleryScroller__inner_reversed}>
					{imgData.map((image, index) => (
						<Image
							key={index}
							className={styles.galleryImg}
							src={image}
							alt={'party${index}'}
							width={'200'}
							height={100}
							aria-hidden={true}
						/>
					))}
				</Box>

				<Box className={styles.galleryScroller__inner}>
					{imgData.map((image, index) => (
						<Image
							key={index}
							className={styles.galleryImg}
							src={image}
							alt={'party${index}'}
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
