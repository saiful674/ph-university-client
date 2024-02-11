import {
  TAcademicDepartment,
  TAcademicFaculty,
  TAcademicSemester,
  TCourse,
  TOfferedCourse,
  TRegisteredSemester,
} from ".";

export type TCourseMarks = {
  classTest1: number;
  midTerm: number;
  classTest2: number;
  finalTerm: number;
};

export interface TEnrolledCourse {
  _id: string;
  semesterRegistration: TRegisteredSemester;
  academicSemester: TAcademicSemester;
  academicFaculty: TAcademicFaculty;
  academicDepartment: TAcademicDepartment;
  offeredCourse: TOfferedCourse;
  course: TCourse;
  student: any;
  faculty: any;
  isEnrolled: boolean;
  courseMarks: TCourseMarks;
  grade: string;
  gradePoints: number;
  isCompleted: boolean;
}
