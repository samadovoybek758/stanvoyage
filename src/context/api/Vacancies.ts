import { api } from "./index";

export const vacansyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getVacansy: build.query({
      query: (params) => ({
        url: "/vacancies/",
        params,
      }),
      providesTags: ["Vacansy"],
    }),
  }),
});

export const { useGetVacansyQuery  } = vacansyApi;
