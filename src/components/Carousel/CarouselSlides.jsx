import Image from 'next/image'

export const CarouselNextBtn = ({ nextSlide }) => (
	<div
		onClick={nextSlide}
		className={'carousel-btn'}
		style={{ marginRight: '10px', cursor: 'pointer' }}
	>
		<Image
			src={'/assets/icons/right-arrow.svg'}
			alt={'right-arrow'}
			width={30}
			height={30}
		/>
	</div>
)
export const carouselPreviousBtn = ({ previousSlide }) => (
	<div
		onClick={previousSlide}
		className={'carousel-btn'}
		style={{ marginLeft: '10px', cursor: 'pointer' }}
	>
		<Image
			src={'/assets/icons/left-arrow.svg'}
			alt={'left-arrow'}
			width={30}
			height={30}
		/>
	</div>
)
