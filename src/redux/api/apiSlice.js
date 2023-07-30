import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    endpoints: (builder) => ({
        getProcessor: builder.query({
            query: () => "/processor"
        }),
        getMonitor: builder.query({
            query: () => "/monitor"
        }),
        getRam: builder.query({
            query: () => "/ram"
        }),
        getMotherboard: builder.query({
            query: () => "/motherboard"
        }),
        getStorage: builder.query({
            query: () => "/storage"
        }),
        getPowerSupply: builder.query({
            query: () => "/powerSupply"
        }),
    })
})

export const {useGetProcessorQuery, useGetMonitorQuery, useGetMotherboardQuery, useGetPowerSupplyQuery, useGetRamQuery, useGetStorageQuery} = api