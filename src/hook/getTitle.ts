interface Title {
  title_ru: string;
  title_en: string;
  title_uz: string;
}

export const getTitle = (item: Title, locale: string) => {
  const title = item[`title_${locale}` as keyof Title];
  return title;
};
