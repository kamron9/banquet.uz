import MainCarousel from "@/components/Carousel/MainCarousel";
import AboutCompany from "@/components/AboutCompany";
import PhotoGallery from "@/components/PhotoGallery";

export default function Home() {
  return (
    <div>
      <MainCarousel />
      <AboutCompany />
      <PhotoGallery />
    </div>
  );
}
