import { api } from "./index";

export const commmentsapi = api.injectEndpoints({
  endpoints: (build) => ({
    getComments: build.query({
      query: (params) => ({
        url: "/comments",
        params,
      }),
      providesTags: ["Comments"],
    }),
  }),
});

export const {  useGetCommentsQuery } = commmentsapi;
