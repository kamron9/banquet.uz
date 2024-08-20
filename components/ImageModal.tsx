'use client'

import { useImageModal } from '@/context/ImageModalProvider'
import Image from 'next/image'

const ImageModal = () => {
	const { closeModal, showModal, imageSrc } = useImageModal()

	return (
		showModal && (
			<div className='fixed inset-0 top-0 left-0 z-50 w-full h-screen bg-[rgba(0,0,0,0.9)]'>
				<div className='w-full h-full p-10 flex items-center justify-center'>
					<button
						onClick={closeModal}
						className='absolute top-4 right-4 text-white text-3xl'
					>
						&times;
					</button>
					<Image
						src={imageSrc}
						alt='image'
						className='object-contain h-auto rounded-md'
						width={500}
						height={500}
					/>
				</div>
			</div>
		)
	)
}

export default ImageModal
