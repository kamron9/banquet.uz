"use client";

import { ChakraProvider as Provider } from "@chakra-ui/react";

export function ChakraProvider({ children }) {
  return <Provider>{children}</Provider>;
}
