import AboutCompany from "@/components/AboutCompany";
import MainCarousel from "@/components/Carousel/MainCarousel";
import Contact from "@/components/Contact";
import PhotoGallery from "@/components/PhotoGallery";
import Statistic from "@/components/Statistic";

import News from "@/components/News";
import CustomersFeedBack from "@/components/CustomersFeedback";

export default function Home() {
  return (
    <div>
      <MainCarousel />
      <News />
      <AboutCompany />
      <Statistic />
      <PhotoGallery />
      <CustomersFeedBack />
      <Contact />
    </div>
  );
}
