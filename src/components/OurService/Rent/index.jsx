"use client";
import { Heading } from "@chakra-ui/react";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import "./style.css";
import tableService from "@/service/server/TableService";
import GalleryContainer from "@/components/OurService/Rent/GalleryContainer";
import { useEffect, useState } from "react";
import OrderModal from "@/components/modal/OrderModal";
const Rent = () => {
  const [tableData, setTableData] = useState([]);

  const getTableData = async () => {
    try {
      const data = await tableService.Table();
      setTableData(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getTableData();
  }, []);
  return (
    <div>
      <Heading
        textTransform={"capitalize"}
        color={"purple"}
        size={"lg"}
        textAlign={"center"}
        width={"100%"}
        mb={"30px"}
      >
        arenda xizmati
      </Heading>
      <GalleryContainer rentData={tableData} title={"Stol va Stullar"} />
      <GalleryContainer rentData={tableData} title={"Posudalar"} />
      <GalleryContainer rentData={tableData} title={"Boshqa Jixozlar"} />
      <OrderModal />
    </div>
  );
};

export default Rent;
