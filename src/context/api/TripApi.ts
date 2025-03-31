import { api } from "./index";

export const tripapi = api.injectEndpoints({
  endpoints: (build) => ({
    getTrip: build.query({
      query: (params) => ({
        url: "/trips",
        params,
      }),
      providesTags: ["Trip"],
    }),
    getTripById: build.query({
        query: (id) => ({
          url: `/trip-details/${id}/`,
        }),
        providesTags: ["Trip"],
      }),
  }),
});

export const { useGetTripByIdQuery, useGetTripQuery } = tripapi;



