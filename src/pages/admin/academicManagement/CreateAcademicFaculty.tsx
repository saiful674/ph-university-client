import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PhForm from "../../../components/forms/PhForm";
import PhInput from "../../../components/forms/PhInput";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement";
import { createAcademicFacultySchema } from "../../../schema/academicManagement/createAcademicSemesterSchema";
import { TAcademicFaculty, TResponse } from "../../../types";

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Please wait");
    const facultyData = {
      name: data.name,
    };
    try {
      const res = (await addAcademicFaculty(
        facultyData
      )) as TResponse<TAcademicFaculty>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Faculty created", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <PhForm
      onSubmit={onSubmit}
      resolver={zodResolver(createAcademicFacultySchema)}
    >
      <PhInput type="text" name="name" label="Name" />

      <Button htmlType="submit">Submit</Button>
    </PhForm>
  );
};

export default CreateAcademicFaculty;
