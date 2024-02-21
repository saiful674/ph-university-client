import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PhForm from "../../../components/forms/PhForm";
import PhInput from "../../../components/forms/PhInput";
import PhSelect from "../../../components/forms/PhSelect";
import {
  useAddCourseMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/admin/courseManagement";
import { TResponse } from "../../../types";

const CreateCourse = () => {
  const [addCourse] = useAddCourseMutation();
  const { data: coursesData, isFetching } = useGetAllCoursesQuery(undefined);

  const coursesOptions = coursesData?.data?.map((item: any) => ({
    value: item._id,
    label: item.title,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Please wait");

    try {
      const courseData = {
        ...data,
        code: Number(data.code),
        credits: Number(data.credits),
        preRequisiteCourses: data?.preRequisiteCourses
          ? data?.preRequisiteCourses?.map((item: string) => ({
              course: item,

              isDeleted: false,
            }))
          : [],
      };
      const res = (await addCourse(courseData)) as TResponse<any>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Course is added successfully", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <PhForm onSubmit={onSubmit}>
      <PhInput name="title" label="Title" type="text" />
      <PhInput name="prefix" label="Prefix" type="text" />
      <PhInput name="code" label="Code" type="number" />
      <PhInput name="credits" label="Credit" type="number" />
      <PhSelect
        mode="multiple"
        options={coursesOptions}
        name="preRequisiteCourses"
        label="Pre Requisite Courses"
        disabled={isFetching}
      />
      <Button htmlType="submit">Submit</Button>
    </PhForm>
  );
};

export default CreateCourse;
