import { api } from "./index";

export const CompanyEmailApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCompanyEmail: build.query({
      query: (params) => ({
        url: "/companyemail/",
        params,
      }),
      providesTags: ["CompanyEmail"],
    }),
  }),
});

export const { useGetCompanyEmailQuery } = CompanyEmailApi;
