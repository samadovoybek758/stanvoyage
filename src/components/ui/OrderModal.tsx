"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
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

interface OrderForm {
  full_name: string;
  phone: string;
  country: string;
  message: string;
  quantity: string;
  category: string;
  quality: string;
  composition: string;
  material_type: string;
  email: string;
  company_name: string;
  content: string;
  product: string;
}

const initialState: OrderForm = {
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
  message: "",
  category: "",
};

const OrderModal = () => {
  const local = useLocale();
  const t = useTranslations("order");
  const [form, setForm] = useState(initialState);

  const [id, setId] = useState<string>("");
  useEffect(() => {
    setId(form?.category);
  }, [form, id]);
  const [orderCreate, { isLoading }] = useCreateOrderMutation();
  const { data: category } = useGetCategoryQuery({});
  const { data: qualities } = useGetCategoryQualitiesQuery(id as string);
  const { data: materials } = useGetCategoryMaterialsQuery(id as string);
  const { data: composition } = useGetCategoryCompositionQuery(id as string);
  const { data: categoryProduct } = useGetCategoryByIdQuery(id as string);
  const dispatch = useDispatch();

  const { isOpen, position } = useSelector(
    (state: RootState) => state.orderModal
  );

  const close = () => {
    dispatch(closeModal());
  };

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
      setId("");
    } catch {
      toast.error(t("error"));
    }
  };
  const selects = [
    category?.length && {
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
    },
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
              <div className="bg-white p-[30px] rounded-lg shadow-xl w-full flex lg:flex-row flex-col justify-between items-start gap-14">
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OrderModal;
