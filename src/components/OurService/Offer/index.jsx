import TableAndPlate from "@/components/OurService/Offer/TableAndPlate/index";
import { Box, Button } from "@chakra-ui/react";
import ExtraService from "./ExtraService";
import Products from "./Products/Products";
import OrderModal from "@/components/modal/OrderModal";

const Offer = () => {
  return (
    <Box>
      <TableAndPlate />
      <Box display={{ base: "block", lg: "flex" }} gap={"50px"}>
        <Products />
        <ExtraService />
      </Box>
      <OrderModal />
    </Box>
  );
};

export default Offer;
