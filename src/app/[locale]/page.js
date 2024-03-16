import AboutCompany from "@/components/AboutCompany";
import MainCarousel from "@/components/Carousel/MainCarousel";
import Contact from "@/components/Contact";
import PhotoGallery from "@/components/PhotoGallery";
import Statistic from "@/components/Statistic";
import { Suspense } from "react";
import Loading from "@/app/[locale]/loading";

export default function Home() {
  return (
    <div>
      <MainCarousel />
      <AboutCompany />
      <Statistic />
      <PhotoGallery />
      <Contact />
    </div>
  );
}
