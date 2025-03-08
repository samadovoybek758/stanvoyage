"use client";
import React, { ChangeEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import SmallSectionTitle from "../shared/SmallSectionTitle";
import Input from "./Input";
import Textarea from "./Textarea";
import toast from "react-hot-toast";
import { useCreateOrderMutation } from "@/context/api/Order";
import Button from "./Button";
import Select from "./Select";

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
const OrderModal = () => {
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
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <li>
        <button
          onClick={openModal}
          className={`text-base sm:text-xl lg:text-2xl xl:text-base font-normal text-[#000] xl:text-[#fff] relative transition-all duration-300 ease-in-out `}
        >
          {t("title")}
        </button>
      </li>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#080808] bg-opacity-50 flex items-center justify-center z-[9999]"
            onClick={closeModal}
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
              <div className="bg-white p-[30px] rounded-lg shadow-xl w-full flex justify-between items-start gap-14">
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OrderModal;
