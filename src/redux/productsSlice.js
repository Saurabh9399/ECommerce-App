import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name:"products",
    initialState: {
        items:[],
        filteredItems:[]
    },
    reducers: {
        setItems:(state,action)=>{
            state.items = action.payload;
        },
        setFilteredItems:(state,action)=>{
            state.filteredItems = action.payload;
        }
    }
})


export default productsSlice.reducer;

export const {setItems,searchResult,setFilteredItems} = productsSlice.actions;