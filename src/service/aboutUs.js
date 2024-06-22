import { apiUrl } from '../constants/url'
export default class AboutUs {
	static async getAboutData() {
		const response = await fetch(apiUrl + '/about_us')
		return response.json()
	}
}
