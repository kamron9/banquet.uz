import { Box, Heading, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import AboutImg from "../../../public/assets/images/about-img.png";

const AboutCompany = () => {
  const t = useTranslations("IndexPage.bizHaqimizda");
  return (
    <Box as="section" id={"about"} my={"80px"}>
      <Heading as={"h2"} size={"lg"} mb={"30px"}>
        {t("Sarlavha")}
      </Heading>
      <Box
        borderRadius={"25px"}
        display={"flex"}
        bg={"var(--secondary-color)"}
        flexDirection={{ base: "column", md: "row" }}
        p={"48px"}
        gap={{ base: "30px", lg: "50px", xl: "100px" }}
      >
        {/* about right content */}
        <Box width={{ base: "100%", lg: "50%" }}>
          <Heading mb={"30px"} fontSize={"31px"} color={"purple"}>
            Catering-lux
          </Heading>
          <Text
            fontSize={{ base: "16px", md: "22px" }}
            lineHeight={{ base: "25px", md: "32px" }}
            color={"rgb(81,85,81)"}
          >
            {t("Matn")}
          </Text>
        </Box>
        {/*  about image  */}
        <Box
          width={{ base: "100%", md: "50%" }}
          display={{ md: "none", lg: "block" }}
        >
          <Image
            src={AboutImg}
            alt="about"
            height={500}
            priority={true}
            style={{
              width: "100%",
              borderRadius: "25px",
              maxHeight: "400px",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutCompany;
