import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BASE_URL}` }),
  endpoints: (builder) => ({
    getTopGainers: builder.query({
      query: (pageNo) => ({
        url: `home-page-sections/gainers/${pageNo}`,
      }),
    }),
    getTopLosers: builder.query({
      query: (pageNo) => ({
        url: `home-page-sections/losers/${pageNo}`,
      }),
    }),
    getLatestIdeas: builder.query({
      query: () => ({
        url: `home-page-sections/latest-ideas`,
      }),
    }),
    getTrendingIdeas: builder.query({
      query: () => ({
        url: `home-page-sections/trending-ideas`,
      }),
    }),
    getCompaniesByTag: builder.query({
      query: (arg) => {
        const {id, pageNo} = arg;
        return ({
          url: `home-page-sections/tag/${id}/page/${pageNo}`
        });
      },
    }),
    getAllCompaniesByTagId: builder.query({
      query: (arg) => {
        const {id} = arg;
        return ({
          url: `home-page-sections/companies-with-tag/${id}`
        });
      },
    }),
    getTagDetails: builder.query({
      query: (arg) => {
        const {id} = arg;
        return ({
          url: `tags/${id}`
        });
      },
    }),
    getSectors: builder.query({
      query: () => ({
        url: `sectors`,
      }),
    }),
    getSectorDetails: builder.query({
      query: (id) => ({
        url: `sectors/${id}`,
      }),
    }),
    getCategories: builder.query({
      query: () => ({
        url: `category`,
      }),
    }),
    getCategoryDetails: builder.query({
      query: (id) => ({
        url: `category/${id}`,
      }),
    }),
    getCategorySuggestedCompany: builder.query({
      query: (id) => ({
        url: `category/suggested-company/${id}`,
      }),
    }),
    getSectorSuggestedCompany: builder.query({
      query: (id) => ({
        url: `sectors/suggested-company/${id}`,
      }),
    }),
    getTimeSeriesValue: builder.mutation({
      query: (body) => ({
        url: `time-series/`,
        method: "post",
        body: body 
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTopGainersQuery, useGetTopLosersQuery, useGetSectorsQuery, useGetCategoryDetailsQuery, useGetCategorySuggestedCompanyQuery, useGetAllCompaniesByTagIdQuery,
  useGetSectorDetailsQuery, useGetCompaniesByTagQuery, useGetLatestIdeasQuery, useGetTrendingIdeasQuery, useGetTagDetailsQuery,
  useGetSectorSuggestedCompanyQuery, useGetTimeSeriesValueMutation, useGetCategoriesQuery } = homeApi;
