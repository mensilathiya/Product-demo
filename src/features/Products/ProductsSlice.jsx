import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginAPI, getProductsAPI, getProductsDetailsApi } from "./ProductsAPI";
const initialState = {
    loding: false,
    data: {},
    productDetails:{},
    login:{
      username:{},
      password:{},
    }
}
export const getAllProducts = createAsyncThunk("Products/getAllProducts", async () => {
    try {
        const response = await getProductsAPI()
        // console.log(response);
        if (response.status == 200) {
            return response.data
        }
    } catch (e) {
        console.log(e.message);
    }
})
export const getProductsDetails = createAsyncThunk("Products/getProductsDetails", async (id) => {
    try {
        // console.log(id);
        let res = await getProductsDetailsApi(id)
        // console.log(res.data);
        if(res.status == 200){
            return res.data
        }
    }
    catch (e) {
        console.log(e.message);
    }
})
export const LoginData = createAsyncThunk("Products/Login",async()=>{
        let res = await LoginAPI()
       
        // console.log(data);
})
const productsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {},
    extraReducers : (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loding = true
        }).addCase(getAllProducts.fulfilled,(state ,action )=>{
            state.loding = false
            state.data = action.payload     
        }).addCase(getProductsDetails.pending,(state)=>{
            state.loding = true
        }).addCase(getProductsDetails.fulfilled,(state,action)=>{
            // console.log(action);
            state.loding = false
            state.productDetails = action.payload 
        }).addCase(LoginData.fulfilled((state,action)=>{
            console.log(action);
            state.login = action.payload
        }))
    }
})
export default productsSlice.reducer