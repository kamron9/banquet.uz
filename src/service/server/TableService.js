import axios from "axios";

const URL = "https://ecb30c1beda01ce0.mokky.dev/stollar";
const Table = async () => {
  try {
    const photoData = await axios.get(URL);
    return await photoData.data;
  } catch (e) {
    throw new Error(e);
  }
};

const TableService = {
  Table,
};
export default TableService;
