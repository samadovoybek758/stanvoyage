import { api } from "./index";

export const sliderApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSlider: build.query({
      query: (params) => ({
        url: "/sliders/",
        params,
      }),
      providesTags: ["Slider"],
    }),
  }),
});

export const { useGetSliderQuery } = sliderApi;
