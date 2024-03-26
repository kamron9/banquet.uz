'use client'
import Loading from '@/app/[locale]/loading'
import RentService from '@/service/client/RentService'
import { Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import { Thumbnails } from 'yet-another-react-lightbox/plugins'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'
import Gallery from './Gallery'
const Rent = () => {
	const [rentData, setRentData] = useState([])

	const [index, setIndex] = useState(-1)

	const fetchData = async () => {
		try {
			const response = await RentService.getRent()
			setRentData(response)
		} catch (error) {
			console.log(error)
		}
	}
	console.log(rentData)
	useEffect(() => {
		fetchData()
	}, [])

	return (
		<div>
			<Heading>arenda</Heading>
			<Gallery imagesData={rentData} onClick={i => setIndex(i)} />
			{rentData.length ? (
				<Lightbox
					open={index >= 0}
					close={() => setIndex(-1)}
					index={index}
					slides={rentData}
					plugins={[Thumbnails]}
				/>
			) : (
				<Loading />
			)}
		</div>
	)
}

export default Rent
