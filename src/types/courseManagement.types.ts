import { TAcademicDepartment, TAcademicFaculty, TAcademicSemester } from ".";

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

export type TOfferedCourse = {
  _id: string;
  semesterRegistration: any;
  academicSemester: TAcademicSemester;
  academicFaculty: TAcademicFaculty;
  academicDepartment: TAcademicDepartment;
  course: TCourse;
  faculty: any;
  maxCapacity: number;
  section: number;
  days: string[];
  startTime: string;
  endTime: string;
};
