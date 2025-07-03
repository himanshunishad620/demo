// src/services/booksApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment-1-lgyj.onrender.com",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      transformResponse: (response) => {
        // Reverse the array before returning
        return response.slice().reverse();
      },
      providesTags: ["book"],
    }),
    addBook: builder.mutation({
      query: (book) => ({
        url: "/addbook",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["book"],
    }),
    getBookById: builder.query({
      query: (id) => `book/${id}`,
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `deletebook/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useDeleteBookMutation,
  useAddBookMutation,
} = booksApi;
