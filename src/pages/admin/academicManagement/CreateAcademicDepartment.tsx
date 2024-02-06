import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PhForm from "../../../components/forms/PhForm";
import PhInput from "../../../components/forms/PhInput";
import PhSelect from "../../../components/forms/PhSelect";
import {
  useAddAcademicDepartmentMutation,
  useGetAllAcademicFacultyQuery,
} from "../../../redux/features/admin/academicManagement";
import { createAcademicDepartmentSchema } from "../../../schema/academicManagement/createAcademicSemesterSchema";
import {
  TAcademicDepartment,
  TAcademicFaculty,
  TResponse,
} from "../../../types";

const CreateAcademicDepartment = () => {
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();
  const { data: facultyData, isLoading } =
    useGetAllAcademicFacultyQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  const facultySelectOptions = facultyData.data.map(
    (item: TAcademicFaculty) => ({
      value: item._id,
      label: item.name,
    })
  );

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Please wait");
    const semesterData = {
      academicFaculty: data.academicFaculty,
      name: data.name,
    };
    console.log(semesterData);
    try {
      const res = (await addAcademicDepartment(
        semesterData
      )) as TResponse<TAcademicDepartment>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Academic Department is created", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <PhForm
      onSubmit={onSubmit}
      resolver={zodResolver(createAcademicDepartmentSchema)}
    >
      <PhSelect
        options={facultySelectOptions}
        name="academicFaculty"
        label="Academic Faculty"
      />
      <PhInput name="name" type="text" label="Name" />
      <Button htmlType="submit">Submit</Button>
    </PhForm>
  );
};

export default CreateAcademicDepartment;
