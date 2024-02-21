import { TQueryParam } from "../../../types";
import { baseApi } from "../../api/baseApi";

const studentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyOfferedCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/offered-courses/my-offered-courses",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["enrollCourse"],
    }),
    getMyEnrolledCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/enrolled-courses/my-enrolled-courses",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["enrollCourse"],
    }),
    enrollCourse: builder.mutation({
      query: (data) => ({
        url: "/enrolled-courses/create-enrolled-course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["enrollCourse"],
    }),
    getMyInfo: builder.query({
      query: () => {
        return {
          url: "/users/me",
          method: "GET",
        };
      },
      providesTags: ["myInfo"],
    }),
    updateStudentMyInfo: builder.mutation({
      query: (data) => ({
        url: "/students/update-my-info",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["myInfo"],
    }),
  }),
});

export const {
  useGetMyOfferedCoursesQuery,
  useEnrollCourseMutation,
  useGetMyEnrolledCoursesQuery,
  useUpdateStudentMyInfoMutation,
  useGetMyInfoQuery,
} = studentApi;
