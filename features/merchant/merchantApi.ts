import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const merchantApi = createApi({
  reducerPath: "merchantApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getMerchantById: builder.query({
      query: (id: string) => `/merchant/${id}`,
    }),
    getAllMerchants: builder.query({
      query: () => `/merchants`,
    }),
  }),
});

export const {
  useGetMerchantByIdQuery,
  useGetAllMerchantsQuery,
} = merchantApi;