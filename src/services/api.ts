import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedInfo: builder.query<RestauranteApi[], void>({
      query: () => 'restaurantes'
    }),
    purchase: builder.mutation<OrderId, Order>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetFeaturedInfoQuery, usePurchaseMutation } = api
export default api
