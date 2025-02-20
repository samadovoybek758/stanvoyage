import { api } from "./index";

export const galeryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getGalery: build.query({
      query: (params) => ({
        url: "/gallery/",
        params,
      }),
      providesTags: ["Galery"],
    }),
  }),
});

export const { useGetGaleryQuery  } = galeryApi;
