import { Status } from "../../../types/type";


// export enum TeacherExpertise{
//     Begineer = "begineer", 
//     Intermediate = "intermediate", 
//     Pro = "pro"
// }

interface IInstituteTeacherInitialDataTeacherCourse{
    courseName : string, 
    coursePrice : string, 
    courseThumbnail : string
}

export interface IInstituteTeacherInitialDataTeacher{
id?:string,
teacherName : string | null,
teacherEmail :string | null ,
teacherPhoneNumber : string,
teacherExperience : string ,
teacherSalary : string,
teacherJoinedDate : string, 
teacherPhoto : File | null, 
courseId:string,
}

interface IInitialTeacherDataWithCourse extends IInstituteTeacherInitialDataTeacher{
course ?: IInstituteTeacherInitialDataTeacherCourse

}



export interface IInstituteTeacherInitialData{
    teachers : IInitialTeacherDataWithCourse[], 
    status : Status
}