"use client";
import postForm from "@/service/client/ContactFormService";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useLocale } from "next-intl";
import { useState } from "react";
import { lang } from "./lang";

const ContactForm = ({ category, onClose }) => {
  const toast = useToast();
  const [numberInputValue, setNumberInputValue] = useState("");
  const [nameInputValue, setNameInputValue] = useState("");
  const locale = useLocale();

  // form submit
  const sendForm = () => {
    try {
      postForm({
        full_name: nameInputValue,
        phone: numberInputValue,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleData = async (e) => {
    e.preventDefault();

    if (nameInputValue.length < 1) {
      toast({
        title: lang.FormMsg.error.ismKiriting[locale],
        status: "error",
      });
    } else if (numberInputValue.length < 9) {
      toast({
        title: lang.FormMsg.error.telefonKiriting[locale],
        status: "error",
      });
    } else {
      sendForm();
      onClose(true);
      toast({
        title: lang.FormMsg.success[locale],
        status: "success",
      });
      setNameInputValue("");
      setNumberInputValue("");
    }
  };

  return (
    <>
      <Box
        as="form"
        onSubmit={handleData}
        autoComplete="off"
        display={"flex"}
        width={"100%"}
        flexDirection={"column"}
        gap={"7px"}
        maxW={"400px"}
      >
        <Input
          onChange={(e) => setNameInputValue(e.target.value)}
          value={nameInputValue}
          name="full_name"
          height={"45px"}
          placeholder={lang.IsmFamiliya[locale]}
          bg={"white"}
        />
        <InputGroup height={"45px"}>
          <InputLeftAddon height={"100%"}>+998</InputLeftAddon>
          <Input
            onChange={(e) => setNumberInputValue(e.target.value)}
            type="tel"
            name="phone"
            height={"100%"}
            value={numberInputValue.replace(/\D/g, "")}
            inputMode="numeric"
            placeholder={lang.Telefon[locale]}
            maxLength={9}
            bg={"white"}
          />
        </InputGroup>
        <Box textAlign={"end"}>
          <Button colorScheme={"purple"} type="submit" width={"fit-content"}>
            {lang.yuborishBtn[locale]}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;
