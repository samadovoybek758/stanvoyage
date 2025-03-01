import AllHero from "@/components/shared/AllHero";
import galleryImg from "../../../../../public/Images/gallery-hero.jpg";
import GallerySwiper from "./GallerySwiper";
const GalleryScreen = () => {
  return (
    <>
      <AllHero image={galleryImg} title="Gallery" />
      <GallerySwiper />
    </>
  );
};

export default GalleryScreen;
