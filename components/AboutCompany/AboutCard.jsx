import axios from "axios";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Img,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

//fetching about data
const fetchingAboutData = async () => {
  try {
    const cardData = await axios.get(
      "https://65ad7241adbd5aa31be0cf38.mockapi.io/api/v1/products",
    );
    return cardData.data;
  } catch (e) {
    throw new Error(e);
  }
};

const AboutCard = async () => {
  const cardData = (await fetchingAboutData()) || [];

  const date = `${new Date().getDate()},${
    new Date().getMonth() + 1
  },${new Date().getFullYear()}`;

  return (
    <Box my={"100px"}>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={"20px"}
      >
        {cardData.map((data) => (
          <GridItem
            position={"relative"}
            _notFirst={{ mt: "100px" }}
            // mt={{ base: "100px", lg: "0" }}
            key={data.id}
            className={"card-shadow"}
            height={400}
            backgroundColor={"white"}
            borderRadius={12}
          >
            <Box className={"card-img-wrapper"}>
              <Image
                width={300}
                height={150}
                src={data.img}
                alt={data.title}
                className={"about-card-img"}
              />
            </Box>
            <Box className={"about-card-content"}>
              <Text as={"span"} fontSize={"14px"} color={"gray"}>
                {date}
              </Text>
              <Heading as={"h2"} size={"md"} my={"10px"}>
                {data.title}
              </Heading>
              <Text className={"about-card-text"}>{data.description}</Text>
            </Box>
            {/* card footer */}
            <Box
              position={"absolute"}
              bottom={"20px"}
              textAlign={"center"}
              width={"100%"}
            >
              <Button colorScheme={"facebook"}>read more</Button>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutCard;
