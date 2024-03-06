"use client";
import CarouselService from "@/service/client/CarouselService";
import { Box, Button, Heading, Skeleton, Text } from "@chakra-ui/react";
import Image from "next/image";
import Carousel from "nuka-carousel";
import { memo, useEffect, useState } from "react";
import { CarouselNextBtn, carouselPreviousBtn } from "./CarouselSlides";

const MainCarousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  const getCarouselData = async () => {
    const data = await CarouselService.getCarouselData();
    setCarouselData(data);
  };

  useEffect(() => {
    getCarouselData();
  }, []);

  return (
    <Box>
      {!carouselData.length ? (
        <Skeleton
          className="carousel-skeleton"
          w={"100%"}
          maxH={"600px"}
          height={"600px"}
          borderRadius={"12px"}
        ></Skeleton>
      ) : (
        <Carousel
          autoplay={true}
          wrapAround={carouselData.length > 1}
          pauseOnHover={true}
          renderCenterLeftControls={carouselPreviousBtn}
          renderCenterRightControls={CarouselNextBtn}
        >
          {carouselData.map((carouselItem) => (
            <Box
              key={carouselItem.id}
              className={"carousel-inner"}
              width={"100%"}
              height={"100%"}
              position={"relative"}
            >
              <Image
                src={carouselItem.image}
                alt={carouselItem.title}
                width={1000}
                height={400}
                draggable={false}
                className={"carousel-img"}
              />
              <Box
                position={"absolute"}
                bottom={"80px"}
                left={{ base: "50%", sm: "80px" }}
                color={"white"}
                width={"100%"}
                zIndex={2}
                // transform={{
                //   base: "translate(-50%, -50%)",
                //   sm: "translate(20%, -50%)",
                //   md: "translate(10%, -50%)",
                // }}
                display={"flex"}
                flexDir={"column"}
                gap={{ base: "10px", md: "30px" }}
                alignItems={{ base: "center", sm: "start" }}
              >
                <Heading
                  fontSize={"54px"}
                  width={"100%"}
                  textAlign={{ base: "center", sm: "start" }}
                  textTransform={"capitalize"}
                >
                  {carouselItem.title}
                </Heading>
                <Box display={"flex"} alignItems={"center"} gap={"30px"}>
                  <Text
                    color={"white"}
                    maxW={"450px"}
                    fontSize={"20px"}
                    lineHeight={"29.83px"}
                    className="carousel-text"
                  >
                    {carouselItem.description}
                  </Text>
                  <Button
                    mt={{ base: "30px", md: "0" }}
                    size={"lg"}
                    textColor={"white"}
                    variant={"outline"}
                    _hover={{ bg: "transparent" }}
                  >
                    ko'rish
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Carousel>
      )}
    </Box>
  );
};

export default memo(MainCarousel);
