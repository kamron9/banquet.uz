"use client";
import {
  Box,
  Button,
  Container,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";
import Link from "next/link";
import ChooseLanguage from "@/components/Header/ChooseLanguage";
import { usePathname } from "next/navigation";

const Header = () => {
  const params = usePathname();
  // toast shows when send btn clicked
  const navigateTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <header className={"header"}>
      <Container maxW={"1400px"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          height={70}
          w={"100%"}
        >
          {/*  header logo & navigations  */}
          <Box display={"flex"} alignItems={"center"} gap={"20px"}>
            {/* logo */}
            <Link href={"/"}>
              <Heading size={"lg"} mr={"70px"}>
                logo
              </Heading>
            </Link>

            {/* navigations */}
            <Box as={"nav"} display={{ base: "none", md: "block" }}>
              <List display={"flex"} alignItems={"center"} gap={"20px"}>
                <ListItem>
                  <Link href={"/"} style={{ cursor: "pointer" }}>
                    home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"/#about"} scroll={true}>
                    about
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"#footer"}>contact</Link>
                </ListItem>
              </List>
            </Box>
          </Box>
          {/*  buyurtma berish  */}
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <Link href={"/xizmatlar"}>
              <Button colorScheme={"purple"}>xizmatlar</Button>
            </Link>
            <ChooseLanguage />
          </Box>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
