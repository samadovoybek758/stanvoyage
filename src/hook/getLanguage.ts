interface Title {
  title_ru: string;
  title_en: string;
  title_fr: string;
  title_de: string;
  title_es: string;
}

interface Description {
  description_ru: string;
  description_en: string;
  description_de: string;
  description_es: string;
  description_fr: string;

}
interface ContentType {
  content_ru: string;
  content_en: string;
  content_de: string;
  content_es: string;
  content_fr: string;

}

interface Address {
  address_ru: string;
  address_en: string;
  address_uz: string;
} 

export const getTitle = (item: Title, locale: string) => {
  const title = item[`title_${locale}` as keyof Title];
  return title;
};

export const getDescription = (item: Description, locale: string) => {
  const description = item[`description_${locale}` as keyof Description];
  return description;
};
export const getContent = (item: ContentType, locale: string) => {
  const content = item[`content_${locale}` as keyof ContentType];
  return content;
};

export const getDescriptionShort = (item: Description, locale: string) => {
  const description = item[`description_${locale}` as keyof Description];
  return description;
};



export const getAddress = (item: Address, locale: string) => {
  const address = item[`address_${locale}` as keyof Address];
  return address;
}

