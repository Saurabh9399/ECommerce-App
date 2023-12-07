import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name:"search",
    initialState: {
        items:[]
    },
    reducers: {
        setItems:(state,action)=>{
            state.items = action.payload;
        },
        searchResult:(state, action)=>{
            const filteredProducts = state.items.filter(product =>
                product.title.toLowerCase().includes(action.payload.toLowerCase())
              );
              state.items = filteredProducts;
        }
        
    }
})


export default productsSlice.reducer;

export const {setItems,searchResult} = productsSlice.actions;