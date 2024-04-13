import axios from "axios";

class NewsService {
  static async getNews() {
    const response = await axios.get(
      "https://ecb30c1beda01ce0.mokky.dev/about",
    );
    return await response.data;
  }
}
export default NewsService;
