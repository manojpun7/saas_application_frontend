import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategoryData, ICategoryInititalData } from "./category.types";
import { Status } from "@/lib/types/type";
import { setDefaultAutoSelectFamily } from "net";
import { AppDispatch } from "../../store";
import APIWITHTOKEN from "@/lib/http/ApiWithToken";

const initialState:ICategoryInititalData = {
    data: [],
    status: Status.LOADING
}


const categorySlice = createSlice({
    name : "categorySlice",
    initialState,
    reducers:{
        setStatus(state: ICategoryInititalData, action:PayloadAction<Status>){
            state.status = action.payload
        },
        setData(state:ICategoryInititalData, action:PayloadAction<ICategoryData[]>){
            state.data = action.payload
        }
    }
})

const {setStatus, setData} = categorySlice.actions
export default categorySlice.reducer


export function fetchCategories (){
    return async function fetchCategoriesThunk(dispatch:AppDispatch) {
        try{
            const response = await APIWITHTOKEN.get("institute/category")
            if(response.status=== 200){
                dispatch(setStatus(Status.SUCCESS))
                response.data.data.length > 0 && dispatch(setData(response.data.data))
            }
            else{
                dispatch(setStatus(Status.ERROR))
            }
        }catch(error){
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }   
}