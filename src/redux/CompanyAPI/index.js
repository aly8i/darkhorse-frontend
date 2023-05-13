import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const companyAPI = createApi({
  reducerPath: 'companyAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BASE_URL}` }),
  endpoints: (builder) => ({
    getCompanyList: builder.query({
      query: () => ({
        url: `company-list`,
      }),
    }),
    getCompany: builder.query({
      query: (id) => ({
        url: `company-list/${id}`,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCompanyListQuery, useGetCompanyQuery } = companyAPI;
