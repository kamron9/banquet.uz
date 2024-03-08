import AboutCard from "@/components/AboutCompany/AboutCard";
import { Box, Heading } from "@chakra-ui/react";

const AboutCompany = () => {
  return (
    <Box as="section" id={"about"} my={"80px"}>
      <Heading size={"lg"} mb={"30px"}>
        Biz Haqimizda
      </Heading>
      <AboutCard />
    </Box>
  );
};

export default AboutCompany;
