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
        removeFromCart: (state, action) => {
            const productId = action.payload;
            const index = state.findIndex((item) => item.id === productId);
      
            if (index !== -1) {
              const item = state[index];
              if (item.quantity > 1) {
                item.quantity -= 1;
              } else {
                state.splice(index, 1);
              }
            }
          }
        
      },
})

export default cartSlice.reducer;

export const {addToCart,removeFromCart} = cartSlice.actions;

