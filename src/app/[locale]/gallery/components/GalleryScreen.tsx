import AllHero from "@/components/shared/AllHero";
import galleryImg from "../../../../../public/Images/stanvoyage/gallery-hero.png";
import GalleryTopBox from "./GalleryTopBox";
import { useTranslations } from "next-intl";
const GalleryScreen = () => {
  const t = useTranslations("gallery");
  return (
    <>
      <AllHero image={galleryImg} title={t("title")} page='/gallery'/>
      <GalleryTopBox />
    </>
  );
};

export default GalleryScreen;
