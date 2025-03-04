import AllHero from "@/components/shared/AllHero";
import galleryImg from "../../../../../public/Images/gallery-hero.jpg";
import GallerySwiper from "./GallerySwiper";
import GalleryTopBox from "./GalleryTopBox";
import { useTranslations } from "next-intl";
const GalleryScreen = () => {
  const t = useTranslations("gallery");
  return (
    <>
      <AllHero image={galleryImg} title={t("title")} />
      <GalleryTopBox />
      <GallerySwiper />
    </>
  );
};

export default GalleryScreen;
