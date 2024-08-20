'use client'
import { createContext, useContext, useState } from 'react'

interface IImageModalContext {
	openModal: (src: string) => void
	closeModal: () => void
	showModal: boolean
	imageSrc: string
}

const ImageModalContext = createContext<IImageModalContext>({
	openModal: (src: string) => {},
	closeModal: () => {},
	showModal: false,
	imageSrc: '',
})

export const useImageModal = () => useContext(ImageModalContext)

const ImageModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [showModal, setShowModal] = useState(false)
	const [imageSrc, setImageSrc] = useState('')

	const openModal = (src: string) => {
		setImageSrc(src)
		setShowModal(true)
	}

	const closeModal = () => {
		setShowModal(false)
		setImageSrc('')
	}

	return (
		<ImageModalContext.Provider
			value={{ openModal, closeModal, showModal, imageSrc }}
		>
			{children}
		</ImageModalContext.Provider>
	)
}
export default ImageModalProvider
