
import {
  createApi,
  fetchBaseQuery,
  retry,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../public/static/Index";

const baseQuery = fetchBaseQuery({
  baseUrl: `${baseUrl}api/`,
  prepareHeaders: (headers) => {
    headers.set("Accept", "application/json");
    return headers;
  },
});

const baseQueryWithRetry: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
  }
  return result;
};

export const api = createApi({
  reducerPath: "myApi",
  baseQuery: retry(baseQueryWithRetry, { maxRetries: 0 }),
  tagTypes: [
    "TopLocation",
    "Blog",
    "OurMission",
    "WhyUs",
    "Countries",
    "Trip",
    "Contact",
    "Company",
    "Galery",
    "Socials",
    "Comments",
    "CompanyInfo"
  ],
  endpoints: () => ({}),
});
