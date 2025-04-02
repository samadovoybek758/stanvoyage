import { api } from "./index";

export const bannerImageapi = api.injectEndpoints({
  endpoints: (build) => ({
    getBannerImage: build.query({
      query: (params) => ({
        url: "/banner-image/",
        params,
      }),
      providesTags: ["BannerImage"],
    }),
  }),
});

export const { useGetBannerImageQuery  } = bannerImageapi
