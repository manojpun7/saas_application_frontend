import { Status } from "@/lib/types/type";

interface ITeacher {
  teacherName: string;
  teacherEmail: string;
  teacherPhoneNumber: string;
}

export interface IInitialTeacherData {
  teacher: ITeacher;
  status: Status;
}
