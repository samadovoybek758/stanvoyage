"use client";
import React, { useState } from "react";
import Image from "next/image";
import icon from '../../../../../public/Images/stanvoyage/blog.png'
import SectionTitle from "@/components/shared/SectionTitle";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useGetBlogQuery } from "@/context/api/BlogApi";
import Pagination from "@/components/ui/Pagination";
import { getTitle } from "@/hook/getLanguage";
import { baseUrl } from "../../../../../public/static/Index";
import NewsItemLoading from "@/components/ui/itemLoader/NewsItemLoading";


interface ItemType {
    uuid: string;
    created_at: string;
    updated_at: string
    title_en: string;
    title_ru: string;
    title_fr: string;
    title_de: string;
    title_es: string;
    image: string;
    description_en: string
    description_ru: string
    description_fr: string
    description_es: string
    description_de: string
}

function Blogs() {
    const [currentPage, setCurrentPage] = useState(1);
    const { data } = useGetBlogQuery({ page: currentPage, })

    const handlePageChange = (selectedPage: number) => {
        setCurrentPage(selectedPage + 1);
    };

    const t = useTranslations("blog")
    const locale = useLocale()
    return (
        <section className="mb-32">
            <div className="container">

                <SectionTitle title={t("blog")} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        data?.items ? (
                            data.items.map((item: ItemType, index: number) => (
                                <Link href={`/${locale}/blog/${item.uuid}`} key={index}>
                                    <div className="relative h-[400px] mb-3" >
                                        <div className="absolute -z-10  rounded-[20px] overflow-hidden shadow-lg w-full  h-full">
                                            <Image
                                                width={205}
                                                height={266}
                                                alt="About Company"
                                                className=" w-full h-full object-cover "
                                                src={baseUrl + item.image}
                                                quality={100}
                                                unoptimized
                                            />
                                        </div>
                                    </div>
                                    <div className="max-w-[320px]">
                                        <h2 className="text-2xl font-medium mb-[10px] line-clamp-1">{item ? getTitle(item, locale) : ""}</h2>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-medium ">Read more</span>
                                            <Image
                                                src={icon}
                                                alt="icon"
                                                width={20}
                                                height={20}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )
                            : (
                                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[1100px] gap-4'>
                                    <NewsItemLoading />
                                    <NewsItemLoading />
                                    <NewsItemLoading />
                                </div>
                            )
                    }
                </div>

                <div>
                    {data?.total_pages > 1 && (
                        <Pagination
                            pageCount={data?.total_pages}
                            onPageChange={handlePageChange}
                        />
                    )}
                </div>

            </div>
        </section>
    );
}

export default Blogs;
