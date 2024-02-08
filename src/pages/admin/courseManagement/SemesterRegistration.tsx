import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PhDatePicker from "../../../components/forms/PhDatePicker";
import PhForm from "../../../components/forms/PhForm";
import PhInput from "../../../components/forms/PhInput";
import PhSelect from "../../../components/forms/PhSelect";
import { semesterREgistrationStatusOptions } from "../../../constant/courseManagement";
import { useGetAllAcademicSemesterQuery } from "../../../redux/features/admin/academicManagement";
import { useAddSemesterRegistrationMutation } from "../../../redux/features/admin/courseManagement";
import { TAcademicSemester, TResponse } from "../../../types";

const SemesterRegistration = () => {
  const [addSemesterRegistration] = useAddSemesterRegistrationMutation();
  const { data: academicSemesterData, isFetching } =
    useGetAllAcademicSemesterQuery([{ name: "sort", value: "year" }]);

  const academicSemesterOptions = academicSemesterData?.data?.map(
    (item: TAcademicSemester) => ({
      value: item._id,
      label: `${item.name} ${item.year}`,
    })
  );

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Please wait");
    const semesterData = {
      ...data,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit),
    };
    console.log(semesterData);
    try {
      const res = (await addSemesterRegistration(
        semesterData
      )) as TResponse<any>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Semester Registration added", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <Flex justify="center">
      <Col span={8}>
        <PhForm onSubmit={onSubmit}>
          <PhSelect
            options={academicSemesterOptions}
            name="academicSemester"
            label="Academic Semester"
            disabled={isFetching}
          />
          <PhSelect
            options={semesterREgistrationStatusOptions}
            name="status"
            label="Status"
          />
          <PhDatePicker name="startDate" label="Start Date" />
          <PhDatePicker name="endDate" label="End Date" />
          <PhInput name="minCredit" label="Min Credit" type="number" />
          <PhInput name="maxCredit" label="Max Credit" type="number" />
          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;
