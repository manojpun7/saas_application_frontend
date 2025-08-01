import { Status } from "../../../types/type";

export interface IInstituteTeacherInitialDataState {
  teacherName: string;
  teacherEmail: string;
  id: string;
}

export interface IInstituteTeacherInitialData {
  status: Status;
  teachers: IInstituteTeacherInitialDataState[];
}

export interface IInstituteTeacherPostData {
  teacherName: string | null;
  teacherEmail: string | null;
  teacherPhoneNumber: string;
  teacherExperience: string;
  teacherSalary: string;
  teacherJoinedDate: string;
  teacherPhoto: File | null;
  courseId: string;
}

// interface IInstituteTeacherInitialDataTeacherCourse{
//     courseName : string,
//     coursePrice : string,
//     courseThumbnail : string
// }
// export interface IInstituteTeacherData{
//     id: string,
//     teacherName: string,
//     teacherPhoneNumber: string
// }

// export interface IInstituteTeacherInitialDataTeacher{

// }

// interface IInitialTeacherDataWithCourse extends IInstituteTeacherInitialDataTeacher{
// course ?: IInstituteTeacherInitialDataTeacherCourse

// }

// export interface IInstituteTeacherInitialData{
//     teachers : IInitialTeacherDataWithCourse[],
//     status : Status
// }
