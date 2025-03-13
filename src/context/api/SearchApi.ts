import { api } from "./index";

export const searchApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSearch: build.query({
      query: (params) => ({
        url: `search/`,
        params,
      }),
      providesTags: ["Search"],
    }),
    getSearchProduct: build.query({
      query: (params) => ({
        url: `search/product/`,
        params,
      }),
      providesTags: ["Search"],
    }),
  }),
});

export const { useGetSearchQuery, useGetSearchProductQuery } = searchApi;
