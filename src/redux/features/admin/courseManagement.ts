import { TQueryParam } from "../../../types";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRegisteredSemester: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        console.log(args);
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/semester-registaions",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["semesterRegistration"],
    }),
    addSemesterRegistration: builder.mutation({
      query: (data) => ({
        url: "/semester-registaions/create-semester-registration",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["semesterRegistration"],
    }),
    updateSemesterRegistrationStatus: builder.mutation({
      query: (args) => ({
        url: `/semester-registaions/${args?.id}`,
        method: "PATCH",
        body: args?.data,
      }),
      invalidatesTags: ["semesterRegistration"],
    }),
    getAllCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        console.log(args);
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/courses",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["courses"],
    }),
    addCourse: builder.mutation({
      query: (data) => ({
        url: "/courses/create-course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["courses"],
    }),
  }),
});

export const {
  useGetAllRegisteredSemesterQuery,
  useAddSemesterRegistrationMutation,
  useUpdateSemesterRegistrationStatusMutation,
  useAddCourseMutation,
  useGetAllCoursesQuery,
} = courseManagementApi;
