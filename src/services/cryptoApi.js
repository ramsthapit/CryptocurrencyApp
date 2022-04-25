import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '2c05ce83d4msh5722e9018c623fbp19e77cjsn000e678dc984',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    })
  })
})

export const { 
  useGetCryptosQuery,
} = cryptoApi