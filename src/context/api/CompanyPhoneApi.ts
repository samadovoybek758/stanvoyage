import { api } from "./index";

export const CompanyPhoneApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCompanyPhone: build.query({
      query: (params) => ({
        url: "/companyphone/",
        params,
      }),
      providesTags: ["CompanyPhone"],
    }),
  }),
});

export const { useGetCompanyPhoneQuery } = CompanyPhoneApi;
