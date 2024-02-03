import axios from 'axios'

const URL = 'https://shohruhbekk.pythonanywhere.com/they_about?format=json'
const getAboutCompany = async () => {
	try {
		const photoData = await axios.get(URL)
		return await photoData.data
	} catch (e) {
		throw new Error(e)
	}
}
export default getAboutCompany
