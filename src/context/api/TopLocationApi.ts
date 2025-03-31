import { api } from "./index";

export const locationapi = api.injectEndpoints({
  endpoints: (build) => ({
    getTopLocation: build.query({
      query: (params) => ({
        url: "/top-locations",
        params,
      }),
      providesTags: ["TopLocation"],
    }),
  }),
});

export const { useGetTopLocationQuery } = locationapi;
