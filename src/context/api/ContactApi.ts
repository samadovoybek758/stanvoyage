import { api } from "./index";

export const contactApi = api.injectEndpoints({
  endpoints: (build) => ({
    getContacts: build.query({
      query: (params) => ({
        url: "/contact/",
        params,
      }),
      providesTags: ["Contact"],
    }),
    createContact: build.mutation({
      query: (body) => ({
        url: "/contact/create/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Contact"],
    }),
    deleteContact: build.mutation({
      query: (id) => ({
        url: `/contact/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
    updateContact: build.mutation({
      query: ({ id, body }) => ({
        url: `/contact/update/${id}`,
        method: "PUT", // or "PATCH"
        body,
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactApi;
