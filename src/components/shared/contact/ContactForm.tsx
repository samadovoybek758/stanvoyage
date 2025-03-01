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
    <div className={`bg-[#FFFFFF] p-[30px] rounded-[25px] ${className}`}>
      <h2 className="text-[#080808] text-[28px] leading-[42px] font-semibold mb-6 max-[282px] font-brigends-expanded">
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
          />
          <Input
            type="text"
            name="phone"
            placeholder={t("phone")}
            required
            value={form.phone}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="country"
            placeholder={t("country")}
            required
            value={form.country}
            onChange={handleChange}
          />
          <Textarea
            name="message"
            placeholder={t("message")}
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <Button
          text={isLoading ? t("button-loading") : t("button")}
          disabled={isLoading}
          type="submit"
          className="w-full"
        />
      </form>
    </div>
  );
};

export default ContactForm;
