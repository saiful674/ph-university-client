import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PhForm from "../../../components/forms/PhForm";
import PhSelect from "../../../components/forms/PhSelect";
import {
  semesterMonthsOption,
  semesterNameOptions,
} from "../../../constant/academicManagement";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement";
import { createAcademicSemesterSchema } from "../../../schema/academicManagement/createAcademicSemesterSchema";
import { TAcademicSemester, TResponse } from "../../../types";

const currentYear = new Date().getFullYear();
const yearOpttions = [0, 1, 2, 3, 4, 5].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Please wait");
    const name = semesterNameOptions[Number(data.name) - 1].label;
    const semesterData = {
      name: name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    try {
      const res = (await addAcademicSemester(
        semesterData
      )) as TResponse<TAcademicSemester>;

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Semester created", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <PhForm
      onSubmit={onSubmit}
      resolver={zodResolver(createAcademicSemesterSchema)}
    >
      <PhSelect options={semesterNameOptions} name="name" label="Name" />
      <PhSelect options={yearOpttions} name="year" label="Year" />
      <PhSelect
        options={semesterMonthsOption}
        name="startMonth"
        label="Start Month"
      />
      <PhSelect
        options={semesterMonthsOption}
        name="endMonth"
        label="End Month"
      />

      <Button htmlType="submit">Submit</Button>
    </PhForm>
  );
};

export default CreateAcademicSemester;
