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
    getCategoryDownloadFile: build.query({
      query: ({ id }) => ({
        url: `/category/download/${id}/`,
      }),
      providesTags: ["Category"],
    }),

    getCategoryById: build.query({
      query: (id) => ({
        url: `/category/${id}/`,
      }),
      providesTags: ["Category"],
    }),
    getCategoryMaterials: build.query({
      query: (id) => ({
        url: `/category/materials/${id}/`,
      }),
      providesTags: ["Category"],
    }),
    getCategoryQualities: build.query({
      query: (id) => ({
        url: `/category/qualities/${id}/`,
      }),
      providesTags: ["Category"],
    }),
    getCategoryComposition: build.query({
      query: (id) => ({
        url: `/category/compositions/${id}/`,
      }),
      providesTags: ["Category"],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useGetCategoryByIdQuery,
  useGetCategoryCompositionQuery,
  useGetCategoryMaterialsQuery,
  useGetCategoryQualitiesQuery,
} = categoryApi;
