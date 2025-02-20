import { api } from "./index";

export const CategoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query({
      query: (params) => ({
        url: "/category/",
        params,
      }),
      providesTags: ["Category"],
    }),
  }),
});

export const { useGetCategoryQuery } = CategoryApi;
