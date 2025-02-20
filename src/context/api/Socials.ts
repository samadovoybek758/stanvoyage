import { api } from "./index";

export const socialsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSocials: build.query({
      query: (params) => ({
        url: "/socials/",
        params,
      }),
      providesTags: ["Socials"],
    }),
  }),
});

export const { useGetSocialsQuery } = socialsApi;
