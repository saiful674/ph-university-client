import { TQueryParam } from "../../../types";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/students",
          method: "GET",
          params: params,
        };
      },
    }),
    addStudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student",
        method: "POST",
        body: data,
      }),
    }),
    getAllFaculty: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/faculties",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["faculties"],
    }),
    addFaculty: builder.mutation({
      query: (data) => ({
        url: "/users/create-faculty",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["faculties"],
    }),
    getAllAdmin: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/admins",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["admins"],
    }),
    addAdmin: builder.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["admins"],
    }),
  }),
});

export const {
  useAddStudentMutation,
  useGetAllStudentsQuery,
  useGetAllFacultyQuery,
  useAddFacultyMutation,
  useAddAdminMutation,
  useGetAllAdminQuery,
} = userManagementApi;
