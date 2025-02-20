import { api } from "./index";

export const SubCategoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSubCategory: build.query({
      query: (params) => ({
        url: "/subcategory/",
        params,
      }),
      providesTags: ["SubCategory"],
    }),
  }),
});

export const { useGetSubCategoryQuery } = SubCategoryApi;
