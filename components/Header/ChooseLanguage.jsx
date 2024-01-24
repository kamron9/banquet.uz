import { Box, Select, Text } from "@chakra-ui/react";
import Image from "next/image";

const ChooseLanguage = () => {
  return (
    <Select maxW={"90px"}>
      <option value="option1">O'z</option>
      <option value="option2">РУ</option>
    </Select>
  );
};

export default ChooseLanguage;
