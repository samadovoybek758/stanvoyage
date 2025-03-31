import { api } from "./index";

export const ourMissionapi = api.injectEndpoints({
  endpoints: (build) => ({
    getOurmission: build.query({
      query: (params) => ({
        url: "/our-mission/",
        params,
      }),
      providesTags: ["OurMission"],
    }),
  }),
});

export const { useGetOurmissionQuery } = ourMissionapi;
