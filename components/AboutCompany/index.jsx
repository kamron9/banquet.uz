import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import AboutCard from "@/components/AboutCompany/AboutCard";

const AboutCompany = () => {
  return (
    <Box>
      <Heading size={"lg"} mt={"50px"}>
        Biz Haqimizda
      </Heading>
      <AboutCard />
    </Box>
  );
};

export default AboutCompany;
