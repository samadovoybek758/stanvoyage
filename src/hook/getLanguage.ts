interface Title {
  title_ru: string;
  title_en: string;
  title_uz: string;
}

interface Description {
  description_ru: string;
  description_en: string;
  description_uz: string;
}
interface Content {
  content_ru: string;
  content_en: string;
  content_uz: string;
}
interface Type_t {
  type_ru: string;
  type_en: string;
  type_uz: string;
}
interface Amount {
  amount_ru: string;
  amount_en: string;
  amount_uz: string;
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
export const getContent = (item: Content, locale: string) => {
  const content = item[`content_${locale}` as keyof Content];
  return content;
};
export const getDescriptionShort = (item: Description, locale: string) => {
  const description = item[`description_${locale}` as keyof Description];
  return description;
};

export const getType = (item: Type_t, locale: string) => {
  const type = item[`type_${locale}` as keyof Type_t];
  return type;
}
export const getAmount = (item: Amount, locale: string) => {
  const amount = item[`amount_${locale}` as keyof Amount];
  return amount;
}

export const getAddress = (item: Address, locale: string) => {
  const address = item[`address_${locale}` as keyof Address];
  return address;
}

