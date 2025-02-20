import { api } from "./index";

export const SliderApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSlider: build.query({
      query: (params) => ({
        url: "/slider/",
        params,
      }),
      providesTags: ["Slider"],
    }),
  }),
});

export const { useGetSliderQuery } = SliderApi;
