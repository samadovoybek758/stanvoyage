import { api } from "./index";

export const CompanyAddressApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCompanyAddress: build.query({
      query: (params) => ({
        url: "/companyaddress/",
        params,
      }),
      providesTags: ["CompanyAddress"],
    }),
  }),
});

export const { useGetCompanyAddressQuery } = CompanyAddressApi;
