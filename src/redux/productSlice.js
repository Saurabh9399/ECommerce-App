import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
   name:"product",
   initialState: {
     productDetail:{}
   },
   reducers:{
     setClickedProductDetails: (state,action) => {
        state.productDetail = action.payload;
     },
     getProductDetails: (state) => {
        return state.productDetail;
     }
   }
})

export const {setClickedProductDetails,getProductDetails} = productSlice.actions;

export default productSlice.reducer;