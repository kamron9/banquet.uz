export default class RentService {
	static url = 'https://ecb30c1beda01ce0.mokky.dev/arenda'
	static async getRent() {
		const response = await fetch(this.url)
		return await response.json()
	}
}
