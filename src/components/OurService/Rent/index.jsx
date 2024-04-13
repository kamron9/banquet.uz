"use client";
import GalleryContainer from "@/components/OurService/Rent/GalleryContainer";
import OrderModal from "@/components/modal/OrderModal";
import tableService from "@/service/server/TableService";
import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import "./style.css";
import { useLocale } from "next-intl";
const Rent = () => {
  const [tableData, setTableData] = useState([]);
  const locale = useLocale();
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

  const language = {
    uz: {
      title: "Arenda xizmati",
      table: "Stol va stullar",
      dishes: "Posudalar",
      other: "Boshqa jixozlar",
    },
    ru: {
      title: "Аренда услуги",
      table: "Стол и стулья",
      dishes: "Посуда",
      other: "Другие услуги",
    },
  };

  return (
    <div>
      <Heading
        color={"purple"}
        size={"lg"}
        textAlign={"center"}
        width={"100%"}
        mb={"30px"}
      >
        {language[locale]?.title}
      </Heading>
      <GalleryContainer rentData={tableData} title={language[locale]?.table} />
      <GalleryContainer rentData={tableData} title={language[locale]?.dishes} />
      <GalleryContainer rentData={tableData} title={language[locale]?.other} />
      <Box textAlign={"end"}>
        <OrderModal />
      </Box>
    </div>
  );
};

export default Rent;
