import { TQueryParam } from "../../../types";
import { baseApi } from "../../api/baseApi";

const facultyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFacultyCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        console.log(args);
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
  }),
});

export const { useGetFacultyCoursesQuery } = facultyApi;
