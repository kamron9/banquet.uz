import axios from "axios";

const postForm = async (data) => {
  const form = await axios.post(
    "https://shohruhbekk.pythonanywhere.com/contact",
    data || {},
  );
  const res = await form.data;
  console.log(res);
};
export default postForm;
