import { api } from "./index";
export interface News {
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

export interface NewsParams {
  page?: number;
  limit?: number;
}

export const newsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query<News[], NewsParams>({
      query: (params) => ({
        url: "/news/",
        params,
      }),
      providesTags: ["News"],
    }),
    getNewsById: build.query<News, string>({
      query: (id) => ({
        url: `/news/detail/${id}`,
      }),
      providesTags: ["News"],
    }), 
  }),
});

export const { useGetNewsQuery, useGetNewsByIdQuery } = newsApi;
