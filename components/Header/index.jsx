import {
  Box,
  Button,
  Container,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  // toast shows when send btn clicked
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
            <Heading size={"lg"} mr={"70px"}>
              logo
            </Heading>
            {/* navigations */}
            <Box as={"nav"} display={{ base: "none", md: "block" }}>
              <List display={"flex"} alignItems={"center"} gap={"20px"}>
                <ListItem>
                  <Link href={"/"}>home</Link>
                </ListItem>
                <ListItem>
                  <Link href={"#about"} scroll={true}>
                    about
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"/"}>contact</Link>
                </ListItem>
              </List>
            </Box>
          </Box>
          {/*  buyurtma berish  */}
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <Button colorScheme={"purple"}>buyurtma berish</Button>
          </Box>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
