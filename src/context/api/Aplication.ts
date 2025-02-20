import { api } from "./index";

export const aplicationApi = api.injectEndpoints({
  endpoints: (build) => ({
    createAplication: build.mutation({
      query: (body) => ({
        url: "/application/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Aplication"],
    }),

  }),
});

export const { useCreateAplicationMutation } = aplicationApi;
