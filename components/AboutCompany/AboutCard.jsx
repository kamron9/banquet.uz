import getAboutCompany from "@/service/server/AboutCompanyService";
import { Box, Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import styles from "./style.module.css";

const AboutCard = async () => {
  const cardData = (await getAboutCompany()) || [];

  return (
    <Box>
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
            key={data.id}
            bg={"var(--secondary-color)"}
            borderBottomLeftRadius={"12px"}
            borderBottomRightRadius={"12px"}
          >
            <Box>
              <Image
                width={300}
                height={216}
                src={data.image}
                alt={data.title}
                className={styles.about_card_image}
              />
            </Box>
            <Box p={"24px"}>
              <Text className={styles.about_card_title}>{data.title}</Text>
              <Text className={styles.about_card_text}>{data.description}</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutCard;
