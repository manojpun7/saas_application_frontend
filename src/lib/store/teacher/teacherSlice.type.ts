import { Status } from "../../types/type";

export interface ITeacher {
  teacherName: string;
  teacherEmail: string;
  teacherPhoneNumber: string;
}

export interface IInitialTeacherData {
  teacher: ITeacher;
  status: Status;
}
