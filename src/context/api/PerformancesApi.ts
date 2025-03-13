import { api } from "./index";

export const performancesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPerformances: build.query({
      query: ({ id }) => ({
        url: `/performances/${id}`,
      }),
      providesTags: ["Performances"],
    }),
  }),
});

export const { useGetPerformancesQuery } = performancesApi;
