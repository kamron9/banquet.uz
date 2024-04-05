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

function OrderModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} colorScheme={"purple"} variant={"outline"}>
        buyurtma berish
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Buyurtma</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            pb={"20px"}
          >
            <ContactForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default OrderModal;
