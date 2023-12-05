import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers: {
        addToCart: (state, action) => {
          const { id, title, price,image } = action.payload;
          const existingProduct = state.find((item) => item.id === id);
    
          if (existingProduct) {
            existingProduct.quantity += 1;
          } else {
            state.push({ id, title, price,image, quantity: 1 });
          }
        },
        
      },
})

export default cartSlice.reducer;

export const {addToCart} = cartSlice.actions;

