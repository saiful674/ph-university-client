import { TAcademicSemester } from ".";

export interface TRegisteredSemester {
  _id: string;
  academicSemester: TAcademicSemester;
  status: string;
  startDate: Date;
  endDate: Date;
  minCredit: number;
  maxCredit: number;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
