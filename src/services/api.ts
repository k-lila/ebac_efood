import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestauranteApi } from '../utils/types'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedInfo: builder.query<RestauranteApi[], void>({
      query: () => 'restaurantes'
    })
  })
})

export const { useGetFeaturedInfoQuery } = api
export default api
