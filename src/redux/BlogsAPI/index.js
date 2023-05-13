import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const blogsAPI = createApi({
  reducerPath: 'blogsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BASE_URL}` }),
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => ({
        url: `blog-posts`,
      }),
    }),
    getBlogDetails: builder.query({
      query: (id) => ({
        url: `blog-posts/${id}`,
      }),
    }),
    createBlogPart: builder.mutation({
      query: (body) => ({
        url: `blog-posts/blog-part`,
        method: 'POST',
        body: body,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllBlogsQuery, useGetBlogDetailsQuery, useCreateBlogPartMutation } = blogsAPI;
