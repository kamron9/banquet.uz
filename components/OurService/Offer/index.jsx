import { Box } from "@chakra-ui/react";
import ExtraService from "./ExtraService";
import ServiceProductList from "./ServiceProductList";
import TableAndPlate from "@/components/OurService/Offer/TableAndPlate";

const Offer = () => {
  return (
    <Box>
      <TableAndPlate />
      <Box display={{ base: "block", lg: "flex" }} gap={"50px"}>
        <ServiceProductList />
        <ExtraService />
      </Box>
    </Box>
  );
};

export default Offer;
