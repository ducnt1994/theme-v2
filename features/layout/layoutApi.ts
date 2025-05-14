import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ILayoutResponseDto } from "@/types/api";

export const layoutApi = createApi({
  reducerPath: "layoutApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    getLayoutBySlug: builder.query<ILayoutResponseDto, string>({
      query: (slug) => `/layout/${slug}`,
    }),
  }),
});

export const { useGetLayoutBySlugQuery } = layoutApi;