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

type preRequisiteCourses = {
  course: TCourse;
  isDeleted: boolean;
};
export type TCourse = {
  _id: string;
  title: string;
  prefix: string;
  code: number;
  credits: number;
  isDeleted: boolean;
  preRequisiteCourses: preRequisiteCourses[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};
