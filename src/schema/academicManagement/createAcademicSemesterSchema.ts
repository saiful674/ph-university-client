import { z } from "zod";

export const createAcademicSemesterSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  year: z.string({ required_error: "year is required" }),
  startMonth: z.string({ required_error: "Start Month is required" }),
  endMonth: z.string({ required_error: "End Month is required" }),
});
export const createAcademicFacultySchema = z.object({
  name: z.string({ required_error: "Name is required" }),
});
export const createAcademicDepartmentSchema = z.object({
  academicFaculty: z.string({ required_error: "Academic Faculty is required" }),
  name: z.string({ required_error: "Name is required" }),
});
