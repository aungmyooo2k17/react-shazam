import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/shazam',
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/top_tracks_country?country_code=UZ&limit=10',
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
