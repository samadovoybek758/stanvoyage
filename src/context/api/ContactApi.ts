import { api } from "./index";

export const contactApi = api.injectEndpoints({
  endpoints: (build) => ({
    createContact: build.mutation({
      query: (body) => ({
        url: "/contact-create/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useCreateContactMutation,
} = contactApi;
