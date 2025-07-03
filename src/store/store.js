// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { booksApi } from './../services/BooksApi';

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});
