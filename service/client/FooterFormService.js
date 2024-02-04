import axios from 'axios'

const postForm = async data => {
	try {
		const form = await axios.post(
			'https://shohruhbekk.pythonanywhere.com/contact',
			data || {}
		)
		const res = await form.data
		console.log(res)
	} catch (error) {
		console.error(error.message)
	}
}
export default postForm
