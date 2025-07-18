import { Status } from "@/lib/types/type";
import { IInstituteInitialData } from "./instituteSlice.type";


const initialState:IInstituteInitialData = {
   institute:{
      instituteName: "";
  instituteEmail: "";
  institutePhoneNumber: "";
  instituteAddress: "";
   },
   status: Status.LOADING
    
}
createSlice({
    name: "institute",
    initialState:{
        
    }
})