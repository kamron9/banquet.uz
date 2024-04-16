import { ChakraProvider } from "@/providers/ChakraProvider";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const NotFound = () => {
  const t = useTranslations("NotFound");
  return (
    <ChakraProvider>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={"70vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading as={"h1"} color={"purple"} size={"4xl"}>
          404
        </Heading>
        <Text mb={"20px"} fontSize={"20px"}>
          {t("Sarlavha")}
        </Text>
        <Link href="/">
          <Button colorScheme={"purple"}>{t("Link")}</Button>
        </Link>
      </Box>
    </ChakraProvider>
  );
};

export default NotFound;
