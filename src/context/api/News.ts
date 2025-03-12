import { api } from "./index";

export const newsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query({
      query: ({ page }) => ({
        url: "/news/",
        params: { page },
      }),
      providesTags: ["News"],
    }),

    getArticles: build.query({
      query: (params) => ({
        url: "/news/",
        params,
      }),
      providesTags: ["Articles"],
    }),

    getNewsById: build.query({
      query: (id) => ({
        url: `/news/${id}`,
      }),
      providesTags: ["News"],
    }),
  }),
});

export const { useGetNewsQuery, useGetArticlesQuery, useGetNewsByIdQuery } =
  newsApi;
