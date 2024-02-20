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

export type TEnrolledCourse = {
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
};

export type TStudent = {
  name: TName;
  _id: string;
  id: string;
  user: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  gender: string;
  bloodGroup: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  isDeleted: boolean;
  profileImg: string;
  admissionSemester: TAcademicSemester;
  academicDepartment: TAcademicDepartment;
  academicFaculty: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  _id: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  relation: string;
  contactNo: string;
  address: string;
  _id: string;
};
