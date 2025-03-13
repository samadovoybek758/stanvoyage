"use client";
import SmallSectionTitle from "@/components/shared/SmallSectionTitle";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import {
  useGetCategoryByIdQuery,
  useGetCategoryCompositionQuery,
  useGetCategoryMaterialsQuery,
  useGetCategoryQualitiesQuery,
} from "@/context/api/CategoryApi";
import { useCreateOrderMutation } from "@/context/api/Order";
import { getTitle } from "@/hook/getLanguage";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

const initialState = {
  quantity: "",
  quality: "",
  composition: "",
  material_type: "",

  full_name: "",
  phone: "",
  email: "",
  country: "",
  company_name: "",
  content: "",
  product: "",
};
const CategoryDetailOrder = () => {
  const { id } = useParams();
  const local = useLocale();
  const t = useTranslations("order");
  const [form, setForm] = useState(initialState);
  const [orderCreate, { isLoading }] = useCreateOrderMutation();
  const { data: qualities } = useGetCategoryQualitiesQuery(id);
  const { data: materials } = useGetCategoryMaterialsQuery(id);
  const { data: composition } = useGetCategoryCompositionQuery(id);
  const { data: categoryProduct } = useGetCategoryByIdQuery(id as string);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newObject = {
        ...form,
        category: id,
      };
      await orderCreate(newObject).unwrap();
      toast.success(t("success"));
      setForm(initialState);
    } catch {
      toast.error(t("error"));
    }
  };
  const selects = [
    categoryProduct?.products?.length && {
      name: "product",
      placeholder: t("product"),
      options: categoryProduct?.products?.map(
        (product: {
          uuid: string;
          title_uz: string;
          title_ru: string;
          title_en: string;
        }) => ({
          value: product.uuid,
          label: getTitle(product, local),
        })
      ),
    },
    qualities?.length && {
      name: "quality",
      placeholder: t("quality"),
      options: qualities.map(
        (quality: {
          uuid: string;
          title_uz: string;
          title_ru: string;
          title_en: string;
        }) => ({
          value: quality.uuid,
          label: getTitle(quality, local),
        })
      ),
    },
    materials?.length && {
      name: "material_type",
      placeholder: t("materials"),
      options: materials.map(
        (material: {
          uuid: string;
          title_uz: string;
          title_ru: string;
          title_en: string;
        }) => ({
          value: material.uuid,
          label: getTitle(material, local),
        })
      ),
    },
    composition?.length && {
      name: "composition",
      placeholder: t("composition"),
      options: composition.map(
        (comp: {
          uuid: string;
          title_uz: string;
          title_ru: string;
          title_en: string;
        }) => ({
          value: comp.uuid,
          label: getTitle(comp, local),
        })
      ),
    },
  ].filter(Boolean);
  if (!selects.length) return null;

  const gridClass = `grid gap-x-4 gap-y-5 mb-4 ${
    selects.length === 1
      ? "grid-cols-1"
      : selects.length === 2
      ? "grid-cols-2"
      : selects.length === 3
      ? "sm:grid-cols-2 md:grid-cols-3"
      : "sm:grid-cols-2 md:grid-cols-2"
  }`;
  return (
    <section className="mb-[120px]">
      <div className="container">
        <div className="bg-white p-4 md:p-[30px] rounded-lg w-full lg:flex-row flex-col flex justify-between items-start gap-14">
          <SmallSectionTitle title={t("title")} />
          <form onSubmit={handleContact} className="flex-1 w-full">
            <div className="mb-6">
              <div className={gridClass}>
                {selects.map((select) => (
                  <Select
                    key={select.name}
                    required
                    name={select.name}
                    onChange={handleChange}
                    placeholder={select.placeholder}
                    options={select.options}
                  />
                ))}
              </div>
              <div className="grid  md:grid-cols-2 gap-x-4 gap-y-5 mb-4">
                <Input
                  type="number"
                  name="quantity"
                  placeholder={t("quantity")}
                  required
                  value={form.quantity}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="full_name"
                  placeholder={t("name")}
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
                <Input
                  type="text"
                  name="email"
                  placeholder={t("email")}
                  value={form.email}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="company_name"
                  placeholder={t("company_name")}
                  value={form.company_name}
                  onChange={handleChange}
                />
              </div>
              <Textarea
                className=" w-full"
                name="content"
                placeholder={t("message")}
                value={form.content}
                onChange={handleChange}
              />
            </div>
            <div className="max-w-[430px] w-full">
              <Button
                text={isLoading ? t("button-loading") : t("button")}
                disabled={isLoading}
                type="submit"
                className="w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CategoryDetailOrder;
