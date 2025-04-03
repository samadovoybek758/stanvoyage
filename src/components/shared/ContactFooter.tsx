"use client"
import React, { useState } from 'react'
import { useCreateContactMutation } from '@/context/api/ContactApi'
import { useLocale, useTranslations } from 'next-intl'
import toast from 'react-hot-toast';

const initialState = {
    fullname: "",
    phone: "",
    message: ""
};
function ContactFooter() {
    const t = useTranslations("contact")
    const locale = useLocale()

    const [contactCreate, { isLoading }] = useCreateContactMutation()
    const [form, setForm] = useState(initialState);
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

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

        <section >
            <div className='max-w-[1190px]'>
                <div className='flex flex-col lg:flex-row gap-5 lg:gap-[53px] lg:items-center items-start '>
                    <h1 className={`w-[200px] text-2xl text-black font-medium inline-block ${locale === "ru" ? "unbo": "interNor"}`}>{t("title")}</h1>

                    <form onSubmit={handleContact} className='flex w-full gap-3 md:flex-row flex-col text-lg text-[#000000] '>
                        <input name="fullname" required value={form.fullname} onChange={handleChange} className='rounded-[15px] border border-[#2C4691] sm:border-none py-[16.5px] pl-6 bg-white w-full cursor-pointer' type="text" placeholder={t("name")} />
                        <input name="phone" required value={form.phone}
                            onChange={handleChange} className='rounded-[15px] border border-[#2C4691] sm:border-none py-[16.5px] pl-6 bg-white w-full' type="number" placeholder={t("phone")} />
                        <button  type='submit'
                            disabled={isLoading} className='py-[19px] w-full cursor-pointer  text-[#F0F0F0] bg-[#2C4691] rounded-[15px]' >{isLoading ? t("loading") : t("button")}</button>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default ContactFooter