// "use client";
import { oddiyData } from "@/data/oddiyData";
import {
  Box,
  Heading,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import ProductList from "./MenuList";

const Menu = () => {
  return (
    <Box mb="50px">
      <Heading
        color={"purple"}
        size={"lg"}
        textAlign={"center"}
        width={"100%"}
        mb={"30px"}
      >
        Bizning Menyu
      </Heading>
      <Text mb={"15px"} fontSize={"xl"}>
        Menyuni tanlang
      </Text>
      <Tabs
        variant={"soft-rounded"}
        colorScheme={"green"}
        width={{ base: "100%", lg: "100%" }}
      >
        {/* product tabs */}
        <TabList
          display={"flex"}
          flexWrap={"wrap"}
          alignContent={"start"}
          gap={"10px"}
        >
          {oddiyData.map(({ id, title }) => (
            <Tab
              key={id}
              _selected={{
                color: "green",
                border: "1px solid green",
                rounded: "md",
              }}
              border={"1px solid rgb(244 245 247)"}
              rounded={"md"}
            >
              <Text fontSize={"18px"}>{title}</Text>
            </Tab>
          ))}
        </TabList>
        {/* product list */}
        <TabPanels>
          {oddiyData.map(({ id, products }) => (
            <TabPanel key={id} padding={"0"} my={"30px"}>
              <SimpleGrid
                spacing={4}
                width={"100%"}
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  sm: "repeat(auto-fill, minmax(200px, 1fr))",
                }}
              >
                {products ? (
                  products.map((product) => (
                    <ProductList key={product.id} product={product} />
                  ))
                ) : (
                  <Heading size={"md"}>Bu menyuda maxsulot yo'q</Heading>
                )}
              </SimpleGrid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Menu;
