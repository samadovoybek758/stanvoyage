import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { useCreateContactMutation } from "@/context/api/ContactApi";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import toast from "react-hot-toast";

const initialState = {
  full_name: "",
  phone: "",
  country: "",
  message: "",
};

interface ContactFormProps {
  className?: string;
}
const ContactForm: React.FC<ContactFormProps> = ({ className = "" }) => {
  const [contactCreate, { isLoading }] = useCreateContactMutation();
  const t = useTranslations("contact.contact-form");
  const [form, setForm] = useState(initialState);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Formani yuborish
  const handleContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await contactCreate(form).unwrap();
      toast.success(t("success"));
      setForm(initialState);
    } catch {
      toast.error(t("error"));
    }
  };

  return (
    <div className={`bg-[#FFFFFF] p-5 sm:p-[30px] rounded-lg ${className}`}>
      <h2 className="text-[#080808]  sm:text-[28px] leading-[42px] mb-5 md:mb-6 max-w-[282px] font-normal text-xl xssm:text-[22px] xssm:leading-[28px] ssm:text-[28px] ssm:leading-[39.2px] font-brigends-expanded">
        Arizangizni yuboring
      </h2>
      <form onSubmit={handleContact}>
        <div className="flex items-start flex-col gap-4 mb-6 w-full">
          <Input
            type="text"
            name="full_name"
            placeholder={t("full_name")}
            required
            value={form.full_name}
            onChange={handleChange}
            className="py-[14.5px] sm:py-[18px]"
          />
          <Input
            type="text"
            name="phone"
            placeholder={t("phone")}
            required
            value={form.phone}
            onChange={handleChange}
            className="py-[14.5px] sm:py-[18px]"
          />
          <Input
            type="text"
            name="country"
            placeholder={t("country")}
            required
            value={form.country}
            onChange={handleChange}
            className="py-[14.5px] sm:py-[18px]"
          />
          <Textarea
            name="message"
            placeholder={t("message")}
            value={form.message}
            onChange={handleChange}
            className="py-[14.5px] sm:py-[18px]"
          />
        </div>
        <Button
          text={isLoading ? t("button-loading") : t("button")}
          disabled={isLoading}
          type="submit"
          className="w-full sm:rounded-lg rounded-[95px] py-4  sm:py-5"
        />
      </form>
    </div>
  );
};

export default ContactForm;
