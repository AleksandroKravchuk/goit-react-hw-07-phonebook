// import axios from 'axios';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// axios.defaults.baseURL = 'https://62ef7097f5521ecad582887f.mockapi.io';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62ef7097f5521ecad582887f.mockapi.io',
  }),
  tagTypes: ['Contakts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contakts/',
      providesTags: ['Contakts'],
    }),
    addContact: builder.mutation({
      query: newContakt => ({
        url: '/contakts/',
        method: 'POST',
        body: newContakt,
      }),
      invalidatesTags: [{ type: 'Contakts' }],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contakts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Contakts' }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactApi;


// createAsyncThunk;

// export const fetchGetContact = createAsyncThunk(
//   'contacts/fetchGet',
//   async () => {
//     try {
//       const { data } = await axios.get('/contakts');
//       return data;
//     } catch (error) {
//       Notify.failure('Sorry, failed to make the request');
//     }
//   }
// );

// export const fetchAddContact = createAsyncThunk(
//   'contacts/fetchAdd',
//   async contact => {
//     try {
//       const { data } = await axios.post('/contakts', contact);
//       return data;
//     } catch (error) {
//       Notify.failure('Sorry, failed to make the request');
//     }
//   }
// );

// export const fetchDeleteContact = createAsyncThunk(
//   'contacts/fetchDelete',
//   async id => {
//     try {
//       const { data } = await axios.delete(`/contakts/${id}`);
//       return data;
//     } catch (error) {
//       Notify.failure('Sorry, failed to make the request');
//     }
//   }
// );
