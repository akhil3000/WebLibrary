
import {createSlice} from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:["Mango","Apples"],
    },
    reducers:{
        //Mapping between action and reducer item
        //reducer function is taking state and action payload as arguments
        addItem:(state,action)=>{
            state.items.push(action.payload);
            //payload is the data passed from add to cart function
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items=[];
        }
    }
})
//all reducers are being exported as single reducer
export const{addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;