"use client";
import { List, ListItem, Text } from "@chakra-ui/react";
import { useOurServiceModal } from "@/context/OurServiceModalProvider";
import Image from "next/image";
const ServiceList = ({ listLanguage }) => {
  const { onOpen } = useOurServiceModal();
  return (
    <List
      display={"flex"}
      gap={"20px"}
      flexWrap={{ base: "wrap", md: "nowrap" }}
      justifyContent={{ base: "center", md: "start" }}
    >
      <ListItem
        width={400}
        height={300}
        overflow={"hidden"}
        className={"our-service-list__item"}
        onClick={onOpen}
      >
        <Image
          src={"/event.avif"}
          alt={"event"}
          width={400}
          height={300}
          className={"service-img"}
        />
        <Text
          as={"b"}
          fontSize={"20px"}
          position={"absolute"}
          bottom={"10px"}
          left={"10px"}
          color={"white"}
        >
          {listLanguage.ketrin}
        </Text>
      </ListItem>
      <ListItem
        width={400}
        height={300}
        overflow={"hidden"}
        className={"our-service-list__item"}
      >
        <Image
          src={"/rent.avif"}
          alt={"rent"}
          width={400}
          height={300}
          className={"service-img"}
        />
        <Text
          as={"b"}
          fontSize={"20px"}
          color={"white"}
          position={"absolute"}
          bottom={"10px"}
          left={"10px"}
        >
          {listLanguage.arenda}
        </Text>
      </ListItem>
    </List>
  );
};

export default ServiceList;
