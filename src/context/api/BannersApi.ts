import { api } from "./index";

export const bannerapi = api.injectEndpoints({
  endpoints: (build) => ({
    getBanner: build.query({
      query: (params) => ({
        url: "/banners",
        params,
      }),
      providesTags: ["Banners"],
    }),
  }),
});

export const { useGetBannerQuery  } = bannerapi
