import { Status } from "../../types/type";

export interface IInstitute {
  instituteName: string;
  instituteEmail: string;
  institutePhoneNumber: string;
  instituteAddress: string;
  institutePanNumber ?: string, 
    instituteVatNumber ?: string
}

export interface IInstituteInitialData {
  institute: IInstitute;
  status: Status;
}
