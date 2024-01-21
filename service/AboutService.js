import axios from "axios";

export default class AboutService {
  static url = "https://65ad7241adbd5aa31be0cf38.mockapi.io/api/v1/products";

  static async getData() {
    return await axios.get(this.url);
  }
}
