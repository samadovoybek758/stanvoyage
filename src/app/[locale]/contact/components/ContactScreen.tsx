import AllHero from "@/components/shared/AllHero";
import Contact from "@/components/shared/contact/Contact";
import hero from "../../../../../public/Images/contact.jpg";
import React from "react";
import { useTranslations } from "next-intl";

const ContactScreen = () => {
  const t = useTranslations("contact");
  
  return (
    <>
      <AllHero image={hero} title={t("contact")} />
      <Contact />
    </>
  );
};

export default ContactScreen;
