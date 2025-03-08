import { api } from "./index";

export const searchApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSearch: build.query({
      query: (params) => ({
        url: "/search/",
        params,
      }),
      providesTags: ["Search"],
    }),
  }),
});

export const { useGetSearchQuery  } = searchApi;
