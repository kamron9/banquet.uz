import { Box } from "@chakra-ui/react";
import ExtraService from "./ExtraService";
import ServiceProductList from "./ServiceProductList";
import TableAndPlate from "@/components/OurService/Offer/TableAndPlate/index";
import ProductPrice from "@/components/OurService/Offer/ProductPrice";

const Offer = () => {
  return (
    <Box>
      <TableAndPlate />
      <Box display={{ base: "block", lg: "flex" }} gap={"50px"}>
        <ServiceProductList />
        <ExtraService />
      </Box>
      <ProductPrice />
    </Box>
  );
};

export default Offer;
