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
  admissionSemester: string;
  academicDepartment: string;
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
