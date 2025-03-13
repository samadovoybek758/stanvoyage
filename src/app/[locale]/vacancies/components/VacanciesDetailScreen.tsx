"use client";
import { getDescription, getTitle } from "@/hook/getLanguage";
import { useGetVacansyByIdQuery } from "@/context/api/Vacancies";
import { useLocale, useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import DOMPurify from "dompurify";
import SmallSectionTitle from "@/components/shared/SmallSectionTitle";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import pdfIcon from "../../../../../public/Images/pdf-icon.svg";
import Image from "next/image";
import Textarea from "@/components/ui/Textarea";
import { useState, ChangeEvent, FormEvent } from "react";
import { useCreateAplicationMutation } from "@/context/api/Aplication";
import toast from "react-hot-toast";
import arrowLeft from "../../../../../public/Images/vacancies-left-arow.svg";

const VacanciesDetailScreen = () => {
  const { id } = useParams();
  const locale = useLocale();
  const { data: item } = useGetVacansyByIdQuery(id);
  const [aplicationCreate, { isLoading }] = useCreateAplicationMutation();
  const t = useTranslations("vacancy");
  const router = useRouter();
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    experience: "",
    content: "",
    resume: null as File | null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, file }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("full_name", formData.full_name);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("experience", formData.experience);
    formDataToSend.append("content", formData.content);
    formDataToSend.append("vacancy", id as string);
    if (formData.resume) {
      formDataToSend.append("resume", formData.resume);
    }

    try {
      await aplicationCreate(formDataToSend);
      toast.success(t("success"));

      setFormData({
        full_name: "",
        phone: "",
        experience: "",
        content: "",
        resume: null,
      });
    } catch (error) {
      toast.error(t("error"));
      console.log(error);
    }
  };

  return (
    <section className="mb-16 sm:mb-20 md:mb-28 lg:mb-[120px] mt-[136px] ">
      <div className="container flex md:flex-row flex-col  justify-between gap-10">
        <div className="max-w-[638px]">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 mb-4 text-[#000] font-normal"
          >
            <Image src={arrowLeft} alt="arrow-left" width={24} height={24} />
            {t("back")}
          </button>
          <SmallSectionTitle
            title={item ? getTitle(item, locale) : ""}
            className="mb-[30px]"
          />
          <div
            className="text-[#000] text-base sm:text-[18px] leading-[29px] font-normal"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                String(item ? getDescription(item, locale) : "")
              ),
            }}
          />
        </div>

        <div className="w-full md:max-w-[504px] rounded-lg bg-[#fff] py-[18px] px-4 sm:p-[30px]">
          <div className="mb-6 max-w-[282px]">
            <SmallSectionTitle title={t("title")} />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 mb-5">
              <Input
                required
                placeholder={t("full_name")}
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
              />
              <Input
                required
                placeholder={t("phone")}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <Input
                required
                placeholder={t("experience")}
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              />
              <Textarea
                placeholder={t("content")}
                name="content"
                value={formData.content}
                onChange={handleChange}
              />
            </div>
            <label htmlFor="file" className="mb-8 inline-block cursor-pointer">
              <input
                type="file"
                name="file"
                id="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <div className="flex items-center gap-2 p-1 rounded-lg">
                <Image src={pdfIcon} alt="pdf" width={24} height={24} />
                <p className="text-[#3B3B3B] font-medium">{t("resume")}</p>
              </div>
              {formData.resume && (
                <div className="flex items-center gap-2 p-1 text-[#3B3B3B] font-normal">
                  {formData.resume.name}
                </div>
              )}
            </label>

            <Button
              type="submit"
              className="w-full"
              text={isLoading ? t("loading") : t("send")}
              disabled={isLoading}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default VacanciesDetailScreen;
