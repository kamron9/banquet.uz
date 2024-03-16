"use client";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

function OrderModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme={"purple"} variant={"outline"}>
        buyurtma berish
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Buyurtma</ModalHeader>
          <ModalCloseButton />
          <ModalBody>test</ModalBody>
          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={onClose}>
              yuborish
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default OrderModal;
