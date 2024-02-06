import { z } from "zod";

export const createAcademicSemesterSchema = z.object({
  name: z.string({ required_error: "name is required" }),
  year: z.string({ required_error: "year is required" }),
  startMonth: z.string({ required_error: "name is required" }),
  endMonth: z.string({ required_error: "name is required" }),
});
export const createAcademicFacultySchema = z.object({
  name: z.string({ required_error: "name is required" }),
});
