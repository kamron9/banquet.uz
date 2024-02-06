import AboutCompany from "@/components/AboutCompany";
import MainCarousel from "@/components/Carousel/MainCarousel";
import PhotoGallery from "@/components/PhotoGallery";
import Statistic from "@/components/Statistic";

export default function Home() {
  console.log("render");
  return (
    <div>
      <MainCarousel />
      <AboutCompany />
      <Statistic />
      <PhotoGallery />
    </div>
  );
}
