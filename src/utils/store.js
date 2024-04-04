import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";
const store=configureStore({
   //putting all slices into the store 
   reducer:{
      cart:cartSlice,
   },
});  
export default store;
