"use client";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  //toast shows when send btn clicked
  const toast = useToast();
  const handleData = () => {
    toast({
      title: "Raxmat, 24 soat ichida mutahasisimiz siz bilan bog'lanadi",
      status: "success",
      duration: 4000,
    });
  };
  return (
    <Box as={"footer"} id={"footer"} bg={"rgb(244 245 247)"} padding={"40px 0"}>
      <Container maxW={"1400px"}>
        <Box
          display={"flex"}
          alignItems={{ base: "start" }}
          justifyContent={{ base: "start", sm: "space-between" }}
          flexWrap={"wrap"}
          gap={"30px"}
        >
          {/* logo */}
          <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
            <Heading>Logo</Heading>
            {/* contacts */}
            <Box>
              <Text>Телефон поддержки</Text>
              <a href={"tel:919192020"}>
                <Text as={"b"}>+998 (91) 919 20 20</Text>
              </a>
            </Box>
            {/*  address */}
            <Box display={"flex"} alignItems={"center"} gap={"3px"}>
              <Image
                src={"/location.svg"}
                alt={"location"}
                width={20}
                height={20}
              />
              <Text>urgench darital</Text>
            </Box>
            {/*  email  */}
            <Box display={"flex"} alignItems={"center"} gap={"3px"}>
              <Image
                src={"/email.svg"}
                alt={"location"}
                width={20}
                height={20}
              />
              <a href="mailto:kamronalimov80@gmail.com">
                <Text>kamronalimov80@gmail.com</Text>
              </a>
            </Box>
          </Box>
          {/* navigations */}
          <Box
            as={"nav"}
            display={{ base: "none", lg: "flex" }}
            flexDirection={"column"}
            gap={"10px"}
          >
            <Link href={"/"}>
              <Text as={"span"} color={"purple"}>
                buyurtma berish
              </Text>
            </Link>
            <Link href={"/"}>home</Link>
            <Link href={"/"}>about</Link>
            <Link href={"/"}>contact</Link>
          </Box>
          {/*  form  */}
          <Box
            maxW={"300px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"5px"}
          >
            <Text as={"b"} fontSize={"14px"}>
              Наши специалисты с радостью помогут Вам оставьте свой номер
              телефона!
            </Text>
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <Input
                border={"1px solid gray"}
                placeholder={"enter your name"}
              />
              <Input placeholder={"your number"} border={"1px solid gray"} />
              <Button colorScheme={"purple"} onClick={handleData}>
                send
              </Button>
            </Box>
          </Box>
        </Box>
        <hr style={{ margin: "20px 0" }} />
        <Box
          display={"flex"}
          alignItems={{ base: "start", sm: "center" }}
          flexDirection={{ base: "column", sm: "row" }}
          gap={"20px"}
          justifyContent={"space-between"}
        >
          <Text as={"span"} fontSize={"14px"}>
            © Sofiya 2023 - 2024 All rights reserved
          </Text>
          {/*  socials */}
          <Box display={"flex"} alignItems={"center"} gap={"5px"}>
            {/* telegram icon */}
            <a href={"https://telegram.com"}>
              <Image
                src={"/telegram.svg"}
                alt={"telegram icon"}
                width={20}
                height={20}
                style={{ width: "25px", height: "25px" }}
              />
            </a>
            {/* instagram icon */}
            <a href={"https://facebook.com"}>
              <Image
                src={"/instagram.svg"}
                alt={"telegram icon"}
                width={20}
                height={20}
                style={{ width: "25px", height: "25px" }}
              />
            </a>
            {/* facebook icon */}
            <a href={"https://instagram.com"}>
              <Image
                src={"/facebook.svg"}
                alt={"telegram icon"}
                width={20}
                height={20}
                style={{ width: "25px", height: "25px" }}
              />
            </a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
