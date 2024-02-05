import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/forms/PhForm";
import PhSelect from "../../../components/forms/PhSelect";
import {
  semesterMonthsOption,
  semesterNameOptions,
} from "../../../constant/academicManagement";
import { createAcademicSemesterSchema } from "../../../schema/academicManagement/createAcademicSemesterSchema";

const currentYear = new Date().getFullYear();
const yearOpttions = [0, 1, 2, 3, 4, 5].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = semesterNameOptions[Number(data.name) - 1].label;
    const semesterData = {
      name: name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semesterData);
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
