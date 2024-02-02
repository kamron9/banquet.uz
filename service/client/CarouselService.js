import axios from 'axios'

export default class CarouselService {
	static url = 'https://shohruhbekk.pythonanywhere.com/corusel?format=json'

	static async getCarouselData() {
		try {
			const carouselData = await axios.get(this.url)
			return await carouselData.data
		} catch (error) {
			throw new Error(error)
		}
	}
}
