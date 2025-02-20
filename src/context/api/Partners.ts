import { api } from "./index";

export const partnersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPartners: build.query({
      query: (params) => ({
        url: "/partners/",
        params,
      }),
      providesTags: ["Partners"],
    }),
  }),
});

export const { useGetPartnersQuery  } = partnersApi;
