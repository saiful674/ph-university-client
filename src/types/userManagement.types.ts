import { TAcademicDepartment, TAcademicFaculty, TAcademicSemester } from ".";

export interface TStudent {
  name: TName;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  gender: string;
  bloodGroup: string;
  dateOfBirth: Date;
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  admissionSemester: TAcademicSemester;
  academicDepartment: TAcademicDepartment;
  _id: string;
  id: string;
  fullName: string;
}

export interface TGuardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
}

export interface TLocalGuardian {
  name: string;
  occupation: string;
  relation: string;
  contactNo: string;
  address: string;
}

export interface TName {
  firstName: string;
  middleName: string;
  lastName: string;
}

export type TFaculty = {
  id: string;
  user: string;
  designation: string;
  name: TName;
  gender: string;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloogGroup: string;
  presentAddress: string;
  permanentAddress: string;
  profileImg: string;
  academicDepartment: TAcademicDepartment;
  academicFaculty: TAcademicFaculty;
  isDeleted: boolean;
  _id: string;
  __v: number;
  fullName: string;
};

export type TAdmin = {
  _id: string;
  id: string;
  user: string;
  designation: string;
  name: TName;
  gender: string;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloogGroup: string;
  presentAddress: string;
  permanentAddress: string;
  profileImg: string;
  isDeleted: boolean;
  fullName: string;
};
