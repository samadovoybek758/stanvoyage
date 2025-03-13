import { api } from "./index";

export const statisticsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getStatistics: build.query({
      query: (params) => ({
        url: "statistics/",
        params,
      }),
      providesTags: ["Statistics"],
    }),
  }),
});

export const { useGetStatisticsQuery  } = statisticsApi;
