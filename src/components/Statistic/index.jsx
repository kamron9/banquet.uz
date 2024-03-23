import { statistika } from "@/data/statistika";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

const Statistic = () => {
  const t = useTranslations("IndexPage");
  return (
    <Box as="section" mb={"80px"} id="statistic">
      <Heading size={"lg"} mb={"30px"}>
        {t("Statistika")}
      </Heading>
      {/* statistic card */}
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={"20px"}
      >
        {statistika.map((item) => (
          <GridItem
            key={item.id}
            boxShadow={
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
            }
            padding={"20px"}
            borderRadius={"8px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            backgroundColor={"var(--secondary-color)"}
            justifyContent={"center"}
            height={"200px"}
          >
            {/* statistic img */}
            <Box width={"100%"} display={"flex"} justifyContent={"center"}>
              <Heading as={"h2"} fontSize={"26px"}>
                {item.count}+
              </Heading>
            </Box>
            <Box my={"20px"} h={"1px"} width={"100%"} bg={"#0000001c"} />

            {/* statistic body */}
            <Box textAlign={"center"} color={"black"}>
              <Text textTransform={"capitalize"} fontSize={"xl"}>
                {item.title}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Statistic;
