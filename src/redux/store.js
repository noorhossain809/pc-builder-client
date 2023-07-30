import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import cartReducer from "@/redux/features/cart/cartSlice"


const store = configureStore({
    reducer: {
        cart: cartReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export default store