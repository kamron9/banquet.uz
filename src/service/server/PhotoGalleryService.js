import axios from 'axios'

const URL = 'https://shohruhbekk.pythonanywhere.com/my_photos?format=json'
const getPhotoGallery = async () => {
	try {
		const photoData = await axios.get(URL)
		return await photoData.data
	} catch (e) {
		throw new Error(e)
	}
}
export default getPhotoGallery
