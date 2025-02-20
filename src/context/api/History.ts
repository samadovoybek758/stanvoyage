import { api } from "./index";

export const historyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getHistory: build.query({
      query: (params) => ({
        url: "/history/",
        params,
      }),
      providesTags: ["History"],
    }),
  }),
});

export const { useGetHistoryQuery  } = historyApi;
