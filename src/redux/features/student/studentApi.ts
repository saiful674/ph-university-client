import { TQueryParam } from "../../../types";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyOfferedCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        console.log(args);
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

        console.log(args);
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
  }),
});

export const {
  useGetMyOfferedCoursesQuery,
  useEnrollCourseMutation,
  useGetMyEnrolledCoursesQuery,
} = userManagementApi;
