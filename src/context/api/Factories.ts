import { api } from "./index";

export const factoriesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getFactories: build.query({
      query: (params) => ({
        url: "/factories/",
        params,
      }),
      providesTags: ["Factories"],
    }),
  }),
});

export const { useGetFactoriesQuery  } = factoriesApi;
