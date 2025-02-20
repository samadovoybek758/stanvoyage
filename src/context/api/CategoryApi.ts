import { api } from "./index";

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query({
      query: (params) => ({
        url: "/categories/",
        params,
      }),
      providesTags: ["Category"],
    }),
  }),
});

export const { useGetCategoryQuery } = categoryApi;
