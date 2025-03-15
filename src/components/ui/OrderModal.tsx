"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import SmallSectionTitle from "../shared/SmallSectionTitle";
import Input from "./Input";
import Textarea from "./Textarea";
import toast from "react-hot-toast";
import { useCreateOrderMutation } from "@/context/api/Order";
import Button from "./Button";
import Select from "./Select";
import {
  useGetCategoryByIdQuery,
  useGetCategoryCompositionQuery,
  useGetCategoryMaterialsQuery,
  useGetCategoryQualitiesQuery,
  useGetCategoryQuery,
} from "@/context/api/CategoryApi";
import { getTitle } from "@/hook/getLanguage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/context";
import { closeModal } from "@/context/slice/OpenOrderModal";
import { X } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectField {
  name: "category" | "product" | "quality" | "material_type" | "composition";
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
  product: string | null;
  message: string;
  category: string;
}

const countWords = (str: string) => str.trim().split(/\s+/).length;

const OrderModal = () => {
  const local = useLocale();
  const t = useTranslations("order");
  const [id, setId] = useState<string>("");
  const [orderCreate, { isLoading }] = useCreateOrderMutation();
  const { data: category } = useGetCategoryQuery({});
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
    refetchCategoryProduct,
    refetchComposition,
    refetchMaterials,
    refetchQualities,
  ]);

  const dispatch = useDispatch();

  const { isOpen, position } = useSelector(
    (state: RootState) => state.orderModal
  );

  const close = () => {
    dispatch(closeModal());
  };

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
    category: Yup.string().trim().required(t("errors.category_required")),
    message: Yup.string()
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

    // ✅ **Shartli validatsiya - faqat mavjud bo'lsa tekshirish**
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
      product: null,
      message: "",
      category: "",
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
    category?.length
      ? {
          name: "category",
          placeholder: t("category"),
          options: category?.map(
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
      ? "md:grid-cols-2 lg:grid-cols-3"
      : selects.length === 4
      ? "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  }`;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#080808] bg-opacity-50 flex items-center justify-center z-[9999]"
            onClick={close}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
                x: position.x - window.innerWidth / 2,
                y: position.y - window.innerHeight / 2,
              }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{
                opacity: 0,
                scale: 0.5,
                x: position.x - window.innerWidth / 2,
                y: position.y - window.innerHeight / 2,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="max-w-[1262px] w-full px-[15px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white p-[30px] rounded-lg shadow-xl w-full flex lg:flex-row flex-col justify-between items-start gap-8 lg:gap-14">
                <SmallSectionTitle
                  title={t("title")}
                  className="hidden lg:flex"
                />
                <div className="lg:hidden flex items-center justify-between w-full">
                  <SmallSectionTitle title={t("title")} />
                  <button
                    onClick={close}
                    className="lg:hidden flex items-center justify-center text-xs"
                  >
                    <X />
                  </button>
                </div>
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

                            if (select.name === "category") {
                              setId(e.target.value);
                            }
                          }}
                          onBlur={formik.handleBlur}
                          placeholder={select.placeholder}
                          options={select.options}
                          error={
                            formik.touched[select.name] &&
                            formik.errors[select.name]
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
                        error={
                          formik.touched.quantity ? formik.errors.quantity : ""
                        }
                      />
                      <Input
                        type="text"
                        name="full_name"
                        placeholder={t("name")}
                        value={formik.values.full_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.full_name
                            ? formik.errors.full_name
                            : ""
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
                        error={
                          formik.touched.country ? formik.errors.country : ""
                        }
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
                      name="message"
                      placeholder={t("message")}
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.message ? formik.errors.message : ""
                      }
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OrderModal;
