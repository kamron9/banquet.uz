import axios from "axios";

const URL = "https://ecb30c1beda01ce0.mokky.dev/stollar";
const Table = async () => {
  const photoData = await axios.get(URL);
  return await photoData.data;
};

const TableService = {
  Table,
};
export default TableService;
