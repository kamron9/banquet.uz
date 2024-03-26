import { Grid, GridItem } from '@chakra-ui/react'
import Image from 'next/image'

const Gallery = ({ imagesData, onClick }) => {
	const openImg = index => {
		onClick(index)
	}
	return (
		<Grid
			gap={'20px'}
			templateColumns={{
				base: 'repeat(2,1fr)',
				sm: 'repeat(auto-fit,minmax(15rem,1fr))',
			}}
		>
			{imagesData.length &&
				imagesData.map(({ src, id }, index) => (
					<GridItem>
						<Image
							src={src}
							alt='gallery'
							width={500}
							height={600}
							style={{ height: '300px', objectFit: 'cover' }}
							onClick={() => openImg(index)}
						/>
					</GridItem>
				))}
		</Grid>
	)
}

export default Gallery
