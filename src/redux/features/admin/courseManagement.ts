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
    }),
    addSemesterRegistration: builder.mutation({
      query: (data) => ({
        url: "semester-registaions/create-semester-registration",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllRegisteredSemesterQuery,
  useAddSemesterRegistrationMutation,
} = courseManagementApi;
