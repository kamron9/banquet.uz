import React from "react";
import { Box, Button, Container, Heading } from "@chakra-ui/react";

const ProductPrice = () => {
  return (
    <Box
      position={"fixed"}
      bottom={0}
      left={0}
      zIndex={12}
      w={"100%"}
      h={"fit-content"}
      bg={"white"}
    >
      <Container maxW={1400} p={"20px"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          h={"100%"}
          gap={"20px"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          <Heading size={"md"}>150 000 so'm</Heading>
          <Button colorScheme={"green"}>buyurtma berish</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductPrice;
