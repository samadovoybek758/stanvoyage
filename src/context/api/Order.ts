import { api } from "./index";

export const orderApi = api.injectEndpoints({
  endpoints: (build) => ({

    createOrder: build.mutation({
      query: (body) => ({
        url: "/contact/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
