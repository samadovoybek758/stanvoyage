import { api } from "./index";

export const blogapi = api.injectEndpoints({
  endpoints: (build) => ({
    getBlog: build.query({
      query: (params) => ({
        url: "/blog/",
        params,
      }),
      providesTags: ["Blog"],
    }),
    getBlogById: build.query({
        query: (id) => ({
          url: `/blog-details/${id}/`,
        }),
        providesTags: ["Blog"],
      }),
  }),
});

export const { useGetBlogQuery, useGetBlogByIdQuery } = blogapi;
