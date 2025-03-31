import { api } from "./index";

export const countriesapi = api.injectEndpoints({
  endpoints: (build) => ({
    getCountries: build.query({
      query: (params) => ({
        url: "/countries/",
        params,
      }),
      providesTags: ["Countries"],
    }),
    getCountriesById: build.query({
        query: (id) => ({
          url: `/country-detail/${id}/`,
        }),
        providesTags: ["Countries"],
      }),
  }),
});

export const { useGetCountriesQuery, useGetCountriesByIdQuery } = countriesapi;



