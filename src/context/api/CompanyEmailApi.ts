import { api } from "./index";

export const companyEmailApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCompanyEmail: build.query({
      query: (params) => ({
        url: "/company-email/",
        params,
      }),
      providesTags: ["CompanyEmail"],
    }),
  }),
});

export const { useGetCompanyEmailQuery } = companyEmailApi;
