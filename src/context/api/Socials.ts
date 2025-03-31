import { api } from "./index";

export const socialsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSocials: build.query({
      query: (params) => ({
        url: "/social",
        params,
      }),
      providesTags: ["Socials"],
    }),
  }),
});

export const { useGetSocialsQuery } = socialsApi;
