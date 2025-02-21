import { api } from "./index";

export const companyPhoneApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCompanyPhone: build.query({
      query: (params) => ({
        url: "/company-phones/",
        params,
      }),
      providesTags: ["CompanyPhone"],
    }),
  }),
});

export const { useGetCompanyPhoneQuery } = companyPhoneApi;
