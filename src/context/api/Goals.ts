import { api } from "./index";

export const goalsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getGoals: build.query({
      query: (params) => ({
        url: "goals/",
        params,
      }),
      providesTags: ["Goals"],
    }),
  }),
});

export const { useGetGoalsQuery  } = goalsApi;
