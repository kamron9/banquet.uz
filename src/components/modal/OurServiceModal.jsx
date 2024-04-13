"use client";

import { useOurServiceModal } from "@/context/OurServiceModalProvider";
import {
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function OurServiceModal() {
  const locale = useLocale();
  const { isOpen, onClose } = useOurServiceModal();
  const serviceLanguage = {
    oddiy: {
      ru: "Обычный",
      uz: "Oddiy",
    },
    standard: {
      ru: "Стандартный",
      uz: "Standard",
    },
    premium: {
      ru: "Премиум",
      uz: "Premium",
    },
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{locale === "uz" ? "Tariflar" : "Тарифы"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List
              display={"flex"}
              gap={"20px"}
              mt={"10px"}
              flexWrap={{ base: "wrap", md: "nowrap" }}
              justifyContent={{ base: "center", md: "start" }}
            >
              <ListItem
                width={300}
                height={200}
                overflow={"hidden"}
                className={"our-service-list__item"}
                onClick={onClose}
              >
                <Link href={"/xizmatlar/ketrin/oddiy"}>
                  <Image
                    src={"/assets/images/base-catering.jpeg"}
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
                    {serviceLanguage.oddiy[locale]}
                  </Text>
                </Link>
              </ListItem>
              <ListItem
                width={300}
                height={200}
                overflow={"hidden"}
                className={"our-service-list__item"}
                onClick={onClose}
              >
                <Link href={"/xizmatlar/ketrin/standard"}>
                  <Image
                    src={"/assets/images/standart-catering.jpeg"}
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
                    {serviceLanguage.standard[locale]}
                  </Text>
                </Link>
              </ListItem>
              <ListItem
                width={300}
                height={200}
                overflow={"hidden"}
                className={"our-service-list__item"}
                onClick={onClose}
              >
                <Link href={"/xizmatlar/ketrin/premium"}>
                  <Image
                    src={"/assets/images/premium-catering.webp"}
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
                    {serviceLanguage.premium[locale]}
                  </Text>
                </Link>
              </ListItem>
            </List>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
