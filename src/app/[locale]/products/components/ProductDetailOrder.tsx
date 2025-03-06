"use client";
import SmallSectionTitle from "@/components/shared/SmallSectionTitle";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import { useCreateOrderMutation } from "@/context/api/Order";
import { useTranslations } from "next-intl";
import React, { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

const initialState = {
  name: "",
  phone: "",
  country: "",
  message: "",
  quantity: "",
  category: "",
  quality: "",
  composition: "",
};
const ProductDetailOrder = () => {
  const t = useTranslations("order");
  const [form, setForm] = useState(initialState);
  const [orderCreate, { isLoading }] = useCreateOrderMutation();
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
      await orderCreate(form).unwrap();
      toast.success(t("success"));
      setForm(initialState);
    } catch {
      toast.error(t("error"));
    }
  };
  return (
    <section className="mb-[120px]">
      <div className="container">
        <div className="bg-white p-[30px] rounded-lg w-full flex justify-between items-start gap-14">
          <SmallSectionTitle title={t("title")} />
          <form onSubmit={handleContact} className="flex-1 w-full">
            <div className="mb-6">
              <div className="grid grid-cols-3 gap-x-4 gap-y-5 mb-4">
                <Select
                  name="category"
                  onChange={handleChange}
                  placeholder={t("category")}
                  options={[
                    { value: "electronics", label: "Electronics" },
                    { value: "clothing", label: "Clothing" },
                    { value: "furniture", label: "Furniture" },
                  ]}
                />
                <Select
                  name="quality"
                  onChange={handleChange}
                  placeholder={t("quality")}
                  options={[
                    { value: "electronics", label: "Electronics" },
                    { value: "clothing", label: "Clothing" },
                    { value: "furniture", label: "Furniture" },
                  ]}
                />
                <Select
                  name="composition"
                  onChange={handleChange}
                  placeholder={t("composition")}
                  options={[
                    { value: "electronics", label: "Electronics" },
                    { value: "clothing", label: "Clothing" },
                    { value: "furniture", label: "Furniture" },
                  ]}
                />
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-5 mb-4">
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
                  name="name"
                  placeholder={t("name")}
                  required
                  value={form.name}
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
              </div>
              <Textarea
                className=" w-full"
                name="message"
                placeholder={t("message")}
                required
                value={form.message}
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

export default ProductDetailOrder;
