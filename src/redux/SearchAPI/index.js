import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const searchAPI = createApi({
  reducerPath: 'searchAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BASE_URL}` }),
  endpoints: (builder) => ({
    searchAPI: builder.mutation({
      query: (key) => ({
        url: `search`,
        method: 'POST',
        body: {
            key,
        },
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSearchAPIMutation } = searchAPI;
