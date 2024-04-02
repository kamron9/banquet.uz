"use client";
import { Box, Grid, GridItem, Skeleton, Text } from "@chakra-ui/react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Thumbnails } from "yet-another-react-lightbox/plugins";
import Gallery from "./Gallery";

const GalleryContainer = ({ rentData, title }) => {
  const [index, setIndex] = useState(-1);
  const skeleton = new Array(10).fill(
    <Skeleton width={"100%"} height={"250px"} borderRadius={"10px"} />,
  );
  return (
    <Box width={"100%"} mb={"50px"}>
      <Text as={"span"} fontSize={"1.5rem"}>
        {title}
      </Text>

      <Gallery imagesData={rentData} onClick={(i) => setIndex(i)} />
      {rentData.length > 0 ? (
        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={rentData}
          plugins={[Thumbnails]}
        />
      ) : (
        <Grid
          gap={{ base: "5px", sm: "20px" }}
          templateColumns={{
            base: "repeat(2,1fr)",
            sm: "repeat(auto-fit,minmax(15rem,1fr))",
          }}
        >
          {skeleton.map((item, index) => (
            <GridItem key={index} m={"10px"}>
              {item}
            </GridItem>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default GalleryContainer;
