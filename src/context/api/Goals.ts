import { api } from "./index";

export const getOurMission = api.injectEndpoints({
  endpoints: (build) => ({
    getOurMission: build.query({
      query: (params) => ({
        url: "our-mission/",
        params,
      }),
      providesTags: ["OurMission"],
    }),
  }),
});

export const { useGetOurMissionQuery  } = getOurMission;
