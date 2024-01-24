import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import AboutCard from "@/components/AboutCompany/AboutCard";

const AboutCompany = () => {
  return (
    <Box border={"1px solid blue"} id={"about"} mt={"50px"}>
      <Heading size={"lg"}>Biz Haqimizda</Heading>
      <AboutCard />
    </Box>
  );
};

export default AboutCompany;
