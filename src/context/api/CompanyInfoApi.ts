import { api } from "./index";

export const companyInfoapi = api.injectEndpoints({
  endpoints: (build) => ({
    getCompanyInfo: build.query({
      query: (params) => ({
        url: "/company-info/",
        params,
      }),
      providesTags: ["CompanyInfo"],
    }),
  }),
});

export const {  useGetCompanyInfoQuery } = companyInfoapi;
