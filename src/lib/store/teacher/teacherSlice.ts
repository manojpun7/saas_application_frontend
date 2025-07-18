import { Status } from "@/lib/types/type"
import { IInitialTeacherData } from "./teacherSlice.type"

const initialState:IInitialTeacherData= {
    teacher:{
        teacherName: "",
        teacherEmail: "",
        teacherPhoneNumber: ""
    },
    status: Status.LOADING
}



createSlice({
    name :"teacher",
    initialState:
})