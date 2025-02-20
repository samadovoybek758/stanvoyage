import { api } from "./index";

export const materialTypesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMaterialTypes: build.query({
      query: (params) => ({
        url: "/material-types/",
        params,
      }),
      providesTags: ["MaterialTypes"],
    }),
  }),
});

export const { useGetMaterialTypesQuery  } = materialTypesApi;
