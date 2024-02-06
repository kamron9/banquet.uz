"use client";

import { extraServiceData } from "@/data/oddiyData";
import {
  Box,
  Checkbox,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
const ExtraService = () => {
  return (
    <Box
      width={{ base: "100%", lg: "30%" }}
      height={"fit-content"}
      border={"1px solid #d1d1d1"}
      padding={"10px"}
      borderRadius={"12px"}
    >
      <Heading size={"md"} mb={"20px"}>
        Qo'shmcha xizmatlar
      </Heading>
      <List>
        {extraServiceData.map((data) => (
          <ListItem
            display={"flex"}
            key={data.id}
            alignItems={"center"}
            gap={"20px"}
            justifyContent={"space-between"}
            pb={"5px"}
            borderBottom={"1px solid #d1d1d1"}
            mb={"20px"}
          >
            <Flex alignItems={"center"} gap={"20px"}>
              <Checkbox colorScheme={"green"} />
              <Box>
                <Text as={"b"}>{data.title}</Text>
              </Box>
            </Flex>
            <Box display={"flex"} alignItems={"center"}>
              <Text>{data.price.toLocaleString("ru-Ru")} so'm</Text>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ExtraService;
