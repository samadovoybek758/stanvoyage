import { api } from "./index";

export const companyImageApi = api.injectEndpoints({
  endpoints: (build) => ({
    getImages: build.query({
      query: (params) => ({
        url: "/companyimage/",
        params,
      }),
      providesTags: ["CompanyImage"],
    }),
  }),
});

export const { useGetImagesQuery } = companyImageApi;
