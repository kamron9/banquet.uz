import { Box, Divider, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const Statistic = () => {
  return (
    <Box as="section" mb={"50px"} id="statistic">
      <Heading size={"lg"} mb={"30px"}>
        Statistika
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
        {/* 1 */}
        <GridItem
          backgroundColor={"white"}
          padding={"20px"}
          borderRadius={"8px"}
        >
          {/* statistic img */}
          <Box width={"100%"} display={"flex"} justifyContent={"center"}>
            <Image
              src={"/check-icon.svg"}
              width={80}
              height={40}
              alt="check icon"
            />
          </Box>
          <Divider my={"20px"} />
          {/* statistic body */}
          <Box textAlign={"center"}>
            <Text as={"b"} fontSize={"22px"}>
              1200+
            </Text>
            <Text textTransform={"capitalize"}>o'tkazilgan tadbirlar</Text>
          </Box>
        </GridItem>
        {/* 2 */}
        <GridItem
          backgroundColor={"white"}
          padding={"20px"}
          borderRadius={"8px"}
        >
          {/* statistic img */}
          <Box width={"100%"} display={"flex"} justifyContent={"center"}>
            <Image src={"/grow.svg"} width={80} height={40} alt="grow icon" />
          </Box>
          <Divider my={"20px"} />
          {/* statistic body */}
          <Box textAlign={"center"}>
            <Text as={"b"} fontSize={"22px"}>
              54+
            </Text>
            <Text textTransform={"capitalize"}>
              yaqinda o'tkaziladigan tadbirlar
            </Text>
          </Box>
        </GridItem>
        {/* 3 */}
        <GridItem
          backgroundColor={"white"}
          padding={"20px"}
          borderRadius={"8px"}
        >
          {/* statistic img */}
          <Box width={"100%"} display={"flex"} justifyContent={"center"}>
            <Image
              src={"/check-icon.svg"}
              width={80}
              height={40}
              alt="check icon"
            />
          </Box>
          <Divider my={"20px"} />
          {/* statistic body */}
          <Box textAlign={"center"}>
            <Text as={"b"} fontSize={"22px"}>
              1200+
            </Text>
            <Text textTransform={"capitalize"}>o'tkazilgan tadbirlar</Text>
          </Box>
        </GridItem>
        {/* 4 */}
        <GridItem
          backgroundColor={"white"}
          padding={"20px"}
          borderRadius={"8px"}
        >
          {/* statistic img */}
          <Box width={"100%"} display={"flex"} justifyContent={"center"}>
            <Image
              src={"/check-icon.svg"}
              width={80}
              height={40}
              alt="check icon"
            />
          </Box>
          <Divider my={"20px"} />
          {/* statistic body */}
          <Box textAlign={"center"}>
            <Text as={"b"} fontSize={"22px"}>
              1200+
            </Text>
            <Text textTransform={"capitalize"}>o'tkazilgan tadbirlar</Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Statistic;
