import { api } from "./index";

export const componyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCompony: build.query({
      query: (params) => ({
        url: "about-us/",
        params,
      }),
      providesTags: ["Company"],
    }),
  }),
});

export const {  useGetComponyQuery } = componyApi;
