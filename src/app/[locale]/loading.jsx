import React from "react";
import { Box, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box width={"100%"} display={"flex"} justifyContent={"center"}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="purple"
        size="xl"
      />
    </Box>
  );
};

export default Loading;
