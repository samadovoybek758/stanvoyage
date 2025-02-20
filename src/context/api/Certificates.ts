import { api } from "./index";

export const certificatesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCertificates: build.query({
      query: (params) => ({
        url: "/certificates/",
        params,
      }),
      providesTags: ["Certificates"],
    }),
  }),
});

export const { useGetCertificatesQuery  } = certificatesApi;
