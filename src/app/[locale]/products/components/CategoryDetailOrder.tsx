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
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectField {
  name: "product" | "quality" | "material_type" | "composition";
  placeholder: string;
  options: SelectOption[];
}

interface FormValues {
  quantity: string;
  quality: string | null;
  composition: string | null;
  material_type: string | null;
  full_name: string;
  phone: string;
  email: string | undefined;
  company_name: string | undefined;
  country: string;
  content: string;
  product: string;
}

const countWords = (str: string) => str.trim().split(/\s+/).length;

const CategoryDetailOrder = () => {
  const { id } = useParams();
  const local = useLocale();
  const t = useTranslations("order");
  const [orderCreate, { isLoading }] = useCreateOrderMutation();
  const { data: qualities, refetch: refetchQualities } =
    useGetCategoryQualitiesQuery(id, { skip: !id });
  const { data: materials, refetch: refetchMaterials } =
    useGetCategoryMaterialsQuery(id, { skip: !id });
  const { data: composition, refetch: refetchComposition } =
    useGetCategoryCompositionQuery(id, { skip: !id });
  const { data: categoryProduct, refetch: refetchCategoryProduct } =
    useGetCategoryByIdQuery(id, { skip: !id });

  useEffect(() => {
    if (id) {
      refetchQualities();
      refetchMaterials();
      refetchComposition();
      refetchCategoryProduct();
    }
  }, [
    id,
    refetchComposition,
    refetchMaterials,
    refetchQualities,
    refetchCategoryProduct,
  ]);

  const validationSchema = Yup.object().shape({
    quantity: Yup.string().trim().required(t("errors.quantity_required")),
    full_name: Yup.string()
      .trim()
      .matches(/^[A-Za-z\s'-]+$/, t("errors.full_name_invalid"))
      .min(3, t("errors.full_name_short"))
      .max(50, t("errors.full_name_long"))
      .required(t("errors.full_name_required")),
    phone: Yup.string()
      .matches(/^\+?[0-9()\s]{10,20}$/, t("errors.phone_invalid"))
      .required(t("errors.phone_required")),
    country: Yup.string().trim().required(t("errors.country_required")),
    content: Yup.string()
      .trim()
      .max(1000, t("errors.message_long"))
      .test(
        "max-words",
        t("errors.message_max_words"),
        (value) => !value || countWords(value) <= 200
      ),
    email: Yup.string().trim().email(t("errors.email_invalid")).nullable(),
    company_name: Yup.string()
      .trim()
      .min(2, t("errors.company_name_short"))
      .max(100, t("errors.company_name_long"))
      .nullable(),
    product: categoryProduct?.products?.length
      ? Yup.string().trim().required(t("errors.product_required"))
      : Yup.string().nullable(),
    quality: qualities?.length
      ? Yup.string().trim().required(t("errors.quality_required"))
      : Yup.string().nullable(),

    material_type: materials?.length
      ? Yup.string().trim().required(t("errors.material_type_required"))
      : Yup.string().nullable(),

    composition: composition?.length
      ? Yup.string().trim().required(t("errors.composition_required"))
      : Yup.string().nullable(),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      quantity: "",
      quality: null,
      composition: null,
      material_type: null,
      full_name: "",
      phone: "",
      email: "",
      country: "",
      company_name: "",
      content: "",
      product: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const newObject = {
          ...values,
          category: id,
        };
        await orderCreate(newObject).unwrap();
        toast.success(t("success"));
        resetForm();
      } catch {
        toast.error(t("error"));
      }
    },
  });

  const selects: SelectField[] = [
    categoryProduct?.products?.length
      ? {
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
        }
      : null,
    qualities?.length
      ? {
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
        }
      : null,
    materials?.length
      ? {
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
        }
      : null,
    composition?.length
      ? {
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
        }
      : null,
  ].filter(Boolean) as SelectField[];
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
          <form onSubmit={formik.handleSubmit} className="flex-1 w-full">
            <div className="mb-6 overflow-y-auto max-h-[450px] ssm:max-h-[500px] sm:max-h-[588px]">
              <div className={gridClass}>
                {selects.map((select) => (
                  <Select
                    key={select.name}
                    name={select.name}
                    value={formik.values[select.name] || ""}
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                    placeholder={select.placeholder}
                    options={select.options}
                    error={
                      formik.touched[select.name] && formik.errors[select.name]
                        ? formik.errors[select.name]
                        : ""
                    }
                  />
                ))}
              </div>
              <div className="grid  md:grid-cols-2 gap-x-4 gap-y-5 mb-4">
                <Input
                  type="number"
                  name="quantity"
                  placeholder={t("quantity")}
                  value={formik.values.quantity}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.quantity ? formik.errors.quantity : ""}
                />
                <Input
                  type="text"
                  name="full_name"
                  placeholder={t("name")}
                  value={formik.values.full_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.full_name ? formik.errors.full_name : ""
                  }
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder={t("phone")}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone ? formik.errors.phone : ""}
                />
                <Input
                  type="text"
                  name="country"
                  placeholder={t("country")}
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.country ? formik.errors.country : ""}
                />
                <Input
                  type="text"
                  name="email"
                  placeholder={t("email")}
                  value={formik.values.email || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email ? formik.errors.email : ""}
                />

                <Input
                  type="text"
                  name="company_name"
                  placeholder={t("company_name")}
                  value={formik.values.company_name || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.company_name
                      ? formik.errors.company_name
                      : ""
                  }
                />
              </div>
              <Textarea
                name="content"
                placeholder={t("message")}
                value={formik.values.content}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.content ? formik.errors.content : ""}
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
