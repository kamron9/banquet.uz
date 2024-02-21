"use client";

import { extraServiceData } from "@/data/oddiyData";
import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
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
            key={data.id}
            gap={"20px"}
            pb={"5px"}
            _notLast={{ borderBottom: "1px solid #d1d1d1", mb: "20px" }}
          >
            <Flex
              display={"flex"}
              gap={"20px"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <FormControl display={"flex"} alignItems={"center"} gap={"20px"}>
                <Checkbox colorScheme={"green"} />
                <Box>
                  <FormLabel>{data.title}</FormLabel>
                </Box>
              </FormControl>
              {/* product price */}
              <Box>
                <Text>{data.price.toLocaleString("ru-Ru")} so'm</Text>
              </Box>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ExtraService;
