import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../components/forms/PhForm";
import PhSelect from "../../components/forms/PhSelect";

import { useNavigate } from "react-router-dom";
import { useGetFacultyCoursesQuery } from "../../redux/features/faculty/facultyApi";

const MyClasses = () => {
  const { data: facultyCoursesData, isFetching } =
    useGetFacultyCoursesQuery(undefined);
  const navigate = useNavigate();

  const semesterOptions = facultyCoursesData?.data?.map((item: any) => ({
    label: `${item.academicSemester.name} ${item.academicSemester.year}`,
    value: item.semesterRegistration._id,
  }));

  const courseOptions = facultyCoursesData?.data?.map((item: any) => ({
    label: item.course.title,
    value: item.course._id,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    navigate(`/faculty/courses/${data.semesterRegistration}/${data.course}`);
  };
  return (
    <PhForm onSubmit={onSubmit}>
      <PhSelect
        options={semesterOptions}
        name="semesterRegistration"
        label="Semester"
        disabled={isFetching}
      />
      <PhSelect
        options={courseOptions}
        name="course"
        label="Course"
        disabled={isFetching}
      />
      <Button htmlType="submit">Submit</Button>
    </PhForm>
  );
};

export default MyClasses;
