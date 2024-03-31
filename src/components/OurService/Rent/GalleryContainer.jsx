"use client";
import Loading from "@/app/[locale]/loading";
import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Thumbnails } from "yet-another-react-lightbox/plugins";
import Gallery from "./Gallery";

const GalleryContainer = ({ rentData, title }) => {
  const [index, setIndex] = useState(-1);

  return (
    <Box width={"100%"}>
      <Text as={"span"} fontSize={"1.5rem"}>
        {title}
      </Text>
      <Gallery imagesData={rentData} onClick={(i) => setIndex(i)} />
      {rentData.length ? (
        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={rentData}
          plugins={[Thumbnails]}
        />
      ) : (
        <Loading />
      )}
    </Box>
  );
};

export default GalleryContainer;
