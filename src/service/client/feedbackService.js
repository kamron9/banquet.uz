import axios from 'axios'

class FeedbackService {
	static url = 'https://ecb30c1beda01ce0.mokky.dev/feedback'
	static async getFeedback() {
		const response = await axios.get(this.url)
		return response.data
	}
}
export default FeedbackService
