import { Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";

const Gallery = ({ imagesData, onClick }) => {
  const openImg = (index) => {
    onClick(index);
  };
  return (
    <Grid
      gap={{ base: "5px", sm: "20px" }}
      templateColumns={{
        base: "repeat(2,1fr)",
        md: "repeat(auto-fit,minmax(15rem,1fr))",
      }}
    >
      {imagesData.length > 0 &&
        imagesData.map(({ src, id }, index) => (
          <GridItem key={id}>
            <Image
              src={src}
              alt="gallery"
              width={500}
              height={600}
              priority={true}
              className={"gallery-img"}
              onClick={() => openImg(index)}
            />
          </GridItem>
        ))}
    </Grid>
  );
};

export default Gallery;
