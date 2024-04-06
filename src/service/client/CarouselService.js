import axios from 'axios'

export default class CarouselService {
	static url = 'https://ecb30c1beda01ce0.mokky.dev/carousel'

	static async getCarouselData() {
		const carouselData = await axios.get(this.url)
		return await carouselData.data
	}
}
