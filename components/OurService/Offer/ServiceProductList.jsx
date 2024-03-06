"use client";
import { oddiyData } from "@/data/oddiyData";
import {
  Box,
  Divider,
  Flex,
  Heading,
  List,
  ListItem,
  Select,
  SelectField,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const ServiceProductList = () => {
  return (
    <Box width={{ base: "100%", lg: "70%" }}>
      <Heading size={"md"} mb={"20px"}>
        Menyu 1
      </Heading>
      {oddiyData.map((data) => (
        <List key={data.id} spacing={3}>
          <ListItem display={"flex"} alignItems={"center"}>
            <Flex alignItems={"center"} gap={"10px"}>
              <Image
                src={"/check-circle.svg"}
                width={25}
                height={25}
                alt="check-icon"
              />
              <Image
                src={data.imgLink}
                alt={data.title}
                width={50}
                height={50}
                style={{
                  borderRadius: "50%",
                  width: 50,
                  height: 50,
                  objectFit: "cover",
                }}
              />
            </Flex>
            <Box
              pl={"20px"}
              width={"90%"}
              display={"flex"}
              alignItems={{ base: "start", sm: "center" }}
              flexDirection={{ base: "column", sm: "row" }}
              justifyContent={"space-between"}
            >
              <Text as="b">{data.title}</Text>

              <Text>{data.price.toLocaleString("ru-Ru")} so'm</Text>
            </Box>
          </ListItem>
          <Divider my={"10px"} />
        </List>
      ))}
    </Box>
  );
};

export default ServiceProductList;
