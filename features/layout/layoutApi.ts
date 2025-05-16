import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ILayoutResponseDto } from "@/types/api";

export const layoutApi = createApi({
  reducerPath: "layoutApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    getLayoutBySlug: builder.query<ILayoutResponseDto, string>({
      query: (slug) => `/products`,
    }),
  }),
});

export const {
  useGetLayoutBySlugQuery,        // Client-side hook
} = layoutApi;

export const getLayoutBySlugInitiate = layoutApi.endpoints.getLayoutBySlug.initiate; // SSR dùng