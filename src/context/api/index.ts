// import {
//   createApi,
//   fetchBaseQuery,
//   retry,
//   BaseQueryFn,
//   FetchArgs,
//   FetchBaseQueryError,
// } from "@reduxjs/toolkit/query/react";
// const baseQuery: BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//   const rawBaseQuery = fetchBaseQuery({
//     baseUrl: "https://safir.novacode.uz/api/",
//   });

//   const result = await rawBaseQuery(args, api, extraOptions);

//   return result;
// };

// const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

// export const api = createApi({
//   reducerPath: "myApi",
//   baseQuery: baseQueryWithRetry,
//   tagTypes: [
//     "CompanyImage",
//     "Product",
//     "Category",
//     "Slider",
//     "Contact",
//     "Blog",
//     "Compony",
//     "CompanyAddress",
//     "CompanyEmail",
//     "CompanyPhone",
//     "SubCategory",
//   ],
//   endpoints: () => ({}),
// });
import {
  createApi,
  fetchBaseQuery,
  retry,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://192.168.1.110:9000/api/",
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
  baseQuery: retry(baseQueryWithRetry, { maxRetries: 3 }),
  tagTypes: [
    "Product",
    "Category",
    "Slider",
    "Contact",
    "News",
    "Company",
    "CompanyPhone",
    "Vacansy",
    "Partners",
    "History",
    "Articles",
    "Certificates",
    "Goals",
    "Galery",
    "Factories",
    "MaterialTypes",
    "Qualities",
    "Socials",
    "Aplication",
    "Order",
  ],
  endpoints: () => ({}),
});
