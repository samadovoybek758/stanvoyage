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
