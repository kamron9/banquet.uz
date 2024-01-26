import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { useOurServiceModal } from "@/context/OurServiceModalContext";
import Image from "next/image";
import Link from "next/link";

export default function OurServiceModal() {
  const { show, closeModal } = useOurServiceModal();
  return (
    <>
      <Modal isOpen={show} onClose={closeModal} size={"xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tariflar</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List
              display={"flex"}
              gap={"20px"}
              mt={"50px"}
              flexWrap={{ base: "wrap", md: "nowrap" }}
              justifyContent={{ base: "center", md: "start" }}
            >
              <ListItem
                width={300}
                height={200}
                overflow={"hidden"}
                className={"our-service-list__item"}
              >
                <Link href={"/xizmatlar/oddiy"}>
                  <Image
                    src={"/basic.avif"}
                    alt={"basic"}
                    width={300}
                    height={200}
                    className={"service-img"}
                  />
                  <Text
                    as={"b"}
                    fontSize={"20px"}
                    position={"absolute"}
                    bottom={"10px"}
                    left={"10px"}
                    zIndex={2}
                    color={"white"}
                  >
                    oddiy
                  </Text>
                </Link>
              </ListItem>
              <ListItem
                width={300}
                height={200}
                overflow={"hidden"}
                className={"our-service-list__item"}
              >
                <Link href={"/xizmatlar/standard"}>
                  <Image
                    src={"/standard.avif"}
                    alt={"standard"}
                    width={300}
                    height={200}
                    className={"service-img"}
                  />
                  <Text
                    as={"b"}
                    fontSize={"20px"}
                    color={"white"}
                    position={"absolute"}
                    bottom={"10px"}
                    left={"10px"}
                    zIndex={2}
                  >
                    standard
                  </Text>
                </Link>
              </ListItem>
              <ListItem
                width={300}
                height={200}
                overflow={"hidden"}
                className={"our-service-list__item"}
              >
                <Link href={"/xizmatlar/premium"}>
                  <Image
                    src={"/premium.avif"}
                    alt={"standard"}
                    width={300}
                    height={200}
                    className={"service-img"}
                  />
                  <Text
                    as={"b"}
                    fontSize={"20px"}
                    color={"white"}
                    position={"absolute"}
                    bottom={"10px"}
                    left={"10px"}
                    zIndex={2}
                  >
                    standard
                  </Text>
                </Link>
              </ListItem>
            </List>
          </ModalBody>
          {/*<Button colorScheme="blue" mr={3} onClick={closeModal}>*/}
          {/*  Close*/}
          {/*</Button>*/}
        </ModalContent>
      </Modal>
    </>
  );
}
