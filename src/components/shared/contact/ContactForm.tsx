// import Button from "@/components/ui/Button";
// import Input from "@/components/ui/Input";
// import Textarea from "@/components/ui/Textarea";
// import { useCreateContactMutation } from "@/context/api/ContactApi";
// import { useLocale, useTranslations } from "next-intl";
// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const initialState = {
//   full_name: "",
//   phone: "",
//   message: "",
// };

// interface ContactFormProps {
//   className?: string;
// }
// const ContactForm: React.FC<ContactFormProps> = ({ className = "" }) => {
//   const [contactCreate, { isLoading }] = useCreateContactMutation();
//   const t = useTranslations("contact.contact-form");
//   const [form, setForm] = useState(initialState);
//   const locale = useLocale();
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Formani yuborish
//   const handleContact = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       await contactCreate(form).unwrap();
//       toast.success(t("success"));
//       setForm(initialState);
//     } catch {
//       toast.error(t("error"));
//     }
//   };
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div
//       className={`bg-[#FFFFFF] p-5 sm:p-[30px] rounded-lg ${className}`}
//       data-aos="fade-up"
//       data-aos-delay="200"
//     >
//       <h2
//         className={`text-[#080808]  sm:text-[28px] leading-[42px] mb-5 md:mb-6 max-w-[282px] font-normal text-xl xssm:text-[22px] xssm:leading-[28px] ssm:text-[28px] ssm:leading-[39.2px] ${
//           locale === "ru" ? "font-brigends-unbounded" : "font-brigends-expanded"
//         } `}
//         data-aos="fade-up"
//         data-aos-delay="400"
//       >
//         {t("title")}
//       </h2>
//       <form onSubmit={handleContact}>
//         <div className="flex items-start flex-col gap-4 mb-6 w-full">
//           <Input
//             type="text"
//             name="full_name"
//             placeholder={t("full_name")}
//             required
//             value={form.full_name}
//             onChange={handleChange}
//             className="py-[14.5px] sm:py-[18px]"
//             data-aos="fade-up"
//             data-aos-delay="600"
//           />
//           <Input
//             type="text"
//             name="phone"
//             placeholder={t("phone")}
//             required
//             value={form.phone}
//             onChange={handleChange}
//             className="py-[14.5px] sm:py-[18px]"
//             data-aos="fade-up"
//             data-aos-delay="600"
//           />
//           <Textarea
//             name="message"
//             placeholder={t("message")}
//             value={form.message}
//             onChange={handleChange}
//             className="py-[14.5px] sm:py-[18px]"
//             data-aos="fade-up"
//             data-aos-delay="1000"
//           />
//         </div>
//         <Button
//           text={isLoading ? t("button-loading") : t("button")}
//           disabled={isLoading}
//           type="submit"
//           className="w-full sm:rounded-lg rounded-[95px] py-4  sm:py-5"
//           data-aos="fade-up"
//           data-aos-delay="1200"
//         />
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { useCreateContactMutation } from "@/context/api/ContactApi";
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

interface ContactFormProps {
  className?: string;
}

// Matn ichidan faqat so‘zlarni ajratib olish uchun funksiya
const countWords = (str: string) => str.trim().split(/\s+/).length;

const ContactForm: React.FC<ContactFormProps> = ({ className = "" }) => {
  const [contactCreate, { isLoading }] = useCreateContactMutation();
  const t = useTranslations("contact.contact-form");

  // Yup validatsiya sxemasi
  const validationSchema = Yup.object({
    full_name: Yup.string()
      .trim()
      .matches(/^[A-Za-z\s'-]+$/, t("errors.full_name_invalid"))
      .min(3, t("errors.full_name_short"))
      .max(50, t("errors.full_name_long"))
      .required(t("errors.full_name_required")),
    phone: Yup.string()
      .matches(/^\+?\d{10,15}$/, t("errors.phone_invalid"))
      .required(t("errors.phone_required")),
    message: Yup.string()
      .trim()
      .max(1000, t("errors.message_long")) // Maksimal 1000 ta belgi
      .test(
        "max-words",
        t("errors.message_max_words"),
        (value) => !value || countWords(value) <= 200
      ), // 200 ta so‘zdan oshmasligi kerak
  });

  const formik = useFormik({
    initialValues: {
      full_name: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await contactCreate(values).unwrap();
        toast.success(t("success"));
        resetForm();
      } catch {
        toast.error(t("error"));
      }
    },
  });

  return (
    <div className={`bg-[#FFFFFF] p-5 sm:p-[30px] rounded-lg ${className}`}>
      <h2 className="text-[#080808] sm:text-[28px] leading-[42px] mb-5 md:mb-6 max-w-[282px] font-normal text-xl xssm:text-[22px] xssm:leading-[28px] ssm:text-[28px] ssm:leading-[39.2px] font-brigends-expanded">
        {t("form_title")}
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-4 mb-6 w-full">
          <Input
            type="text"
            name="full_name"
            placeholder={t("full_name")}
            value={formik.values.full_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.full_name ? formik.errors.full_name : ""}
            required
          />
          <Input
            type="text"
            name="phone"
            placeholder={t("phone")}
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone ? formik.errors.phone : ""}
            required
          />
          <Textarea
            name="message"
            placeholder={t("message")}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message ? formik.errors.message : ""}
          />
        </div>
        <Button
          text={isLoading ? t("button-loading") : t("button")}
          disabled={isLoading}
          type="submit"
          className="w-full sm:rounded-lg py-4 sm:py-5"
        />
      </form>
    </div>
  );
};

export default ContactForm;
