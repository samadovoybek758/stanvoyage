import { api } from "./index";

export const whyusapi = api.injectEndpoints({
  endpoints: (build) => ({
    getWhyUs: build.query({
      query: (params) => ({
        url: "/why-us",
        params,
      }),
      providesTags: ["WhyUs"],
    }),
  }),
});

export const { useGetWhyUsQuery } = whyusapi;
