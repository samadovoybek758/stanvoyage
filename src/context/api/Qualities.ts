import { api } from "./index";

export const qualitiesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getQualities: build.query({
      query: (params) => ({
        url: "/qualities/",
        params,
      }),
      providesTags: ["Qualities"],
    }),
  }),
});

export const { useGetQualitiesQuery  } = qualitiesApi;
