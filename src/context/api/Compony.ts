import { api } from "./index";

export const ComponyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCompony: build.query({
      query: (params) => ({
        url: "/company/",
        params,
      }),
      providesTags: ["Compony"],
    }),
  }),
});

export const { useGetComponyQuery } = ComponyApi;
