const { createSlice } = require("@reduxjs/toolkit");

const initialState ={
    products: [],
    status: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.products.push(action.payload)
            state.status = !state.status;
        }
    }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;