import Image from "next/image";
import { memo } from "react";

export const CarouselNextBtn = memo(({ nextSlide }) => (
  <div
    onClick={nextSlide}
    className={"carousel-btn"}
    style={{ marginRight: "10px", cursor: "pointer" }}
  >
    <Image
      src={"/right-arrow.svg"}
      alt={"right-arrow"}
      width={30}
      height={30}
    />
  </div>
));
export const carouselPreviousBtn = memo(({ previousSlide }) => (
  <div
    onClick={previousSlide}
    className={"carousel-btn"}
    style={{ marginLeft: "10px", cursor: "pointer" }}
  >
    <Image src={"/left-arrow.svg"} alt={"left-arrow"} width={30} height={30} />
  </div>
));
