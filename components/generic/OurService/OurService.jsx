import { Box } from "@chakra-ui/react";
import ExtraService from "./ExtraService";
import ServiceProductList from "./ServiceProductList";
import TableAndPlate from "@/components/generic/OurService/TableAndPlate";

const OurService = () => {
  return (
    <Box>
      <TableAndPlate />
      <Box display={"flex"} gap={"50px"}>
        <ServiceProductList />
        <ExtraService />
      </Box>
    </Box>
  );
};

export default OurService;
