import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '127263eadbmsh730ef14e7b9122ap1d606fjsn41a9ea47a1ef',
    'X-RapidAPI-Host': 'shazam-api6.p.rapidapi.com',
  },
};

fetch(
  'https://shazam-api6.p.rapidapi.com/shazam/top_tracks_country?country_code=UZ&limit=10',
  options,
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-api6.p.rapidapi.com/shazam',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '127263eadbmsh730ef14e7b9122ap1d606fjsn41a9ea47a1ef',
      );
      headers.set('X-RapidAPI-Host', 'shazam-api6.p.rapidapi.com');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/top_tracks_country?country_code=UZ&limit=10',
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
