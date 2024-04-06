"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import ContactForm from "../Form";
import { useLocale } from "next-intl";

function OrderModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const locale = useLocale();
  return (
    <>
      <Button onClick={onOpen} colorScheme={"purple"} variant={"outline"}>
        {locale === "uz" ? "Buyurtma berish" : "Заказать"}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {locale === "uz" ? "Qayta aloqa" : "Связаться с нами"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            pb={"20px"}
          >
            <ContactForm onClose={(close) => onClose(close)} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default OrderModal;
