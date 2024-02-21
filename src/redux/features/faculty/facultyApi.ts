import { TQueryParam } from "../../../types";
import { baseApi } from "../../api/baseApi";

const facultyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFacultyCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/enrolled-courses",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["facultyCoursees"],
    }),
    addMark: builder.mutation({
      query: (data) => ({
        url: "/enrolled-courses/update-enrolled-course-marks",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const { useGetFacultyCoursesQuery, useAddMarkMutation } = facultyApi;
