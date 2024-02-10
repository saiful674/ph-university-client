import { Button, Col, Flex } from "antd";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PhForm from "../../../components/forms/PhForm";
import PhInput from "../../../components/forms/PhInput";
import PhSelect from "../../../components/forms/PhSelect";
import PhSelectWithWatch from "../../../components/forms/PhSelectWithWatch";
import { daysOptions } from "../../../constant";
import {
  useGetAllAcademicDepartmentQuery,
  useGetAllAcademicFacultyQuery,
} from "../../../redux/features/admin/academicManagement";
import {
  useAddOfferCourseMutation,
  useGetAllCoursesQuery,
  useGetAllRegisteredSemesterQuery,
  useGetFacultiesWithCourseQuery,
} from "../../../redux/features/admin/courseManagement";

const OfferCourse = () => {
  const [courseId, setCourseId] = useState("");
  const [addOfferCourse] = useAddOfferCourseMutation();
  const { data: coursesData, isFetching: cIsFetching } =
    useGetAllCoursesQuery(undefined);
  const { data: registeredSemesterData, isFetching: rsIsFetching } =
    useGetAllRegisteredSemesterQuery(undefined);
  const { data: academicDepartmentData, isFetching: adIsFetching } =
    useGetAllAcademicDepartmentQuery(undefined);
  const { data: academicFacultyData, isFetching: afIsFetching } =
    useGetAllAcademicFacultyQuery(undefined);
  const { data: FacultyWithCourseData, isFetching: fcIsFetching } =
    useGetFacultiesWithCourseQuery(courseId, { skip: !courseId });

  console.log(courseId, FacultyWithCourseData);

  const registeredSemesterOptions = registeredSemesterData?.data?.map(
    (item: any) => ({
      value: item._id,
      label: `${item?.academicSemester?.name} ${item?.academicSemester?.year}`,
    })
  );
  const academicFacultyOptions = academicFacultyData?.data?.map(
    (item: any) => ({
      value: item._id,
      label: item.name,
    })
  );
  const academicDepartmentOptions = academicDepartmentData?.data?.map(
    (item: any) => ({
      value: item._id,
      label: item.name,
    })
  );
  const coursesOptions = coursesData?.data?.map((item: any) => ({
    value: item._id,
    label: item.title,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Please wait");
    const offerCourseData = {
      ...data,
    };
    console.log(offerCourseData);
    // try {
    //   const res = (await addOfferCourse(courseData)) as TResponse<any>;
    //   console.log(res);
    //   if (res.error) {
    //     toast.error(res.error.data.message, { id: toastId });
    //   } else {
    //     toast.success("Course is added successfully", { id: toastId });
    //   }
    // } catch (err) {
    //   toast.error("Something went wrong", { id: toastId });
    // }
  };
  return (
    <Flex justify="center">
      <Col span={8}>
        <PhForm onSubmit={onSubmit}>
          <PhSelect
            options={registeredSemesterOptions}
            name="semesterRegistration"
            label="Semester Registration"
            disabled={rsIsFetching}
          />
          <PhSelect
            options={academicFacultyOptions}
            name="academicFaculty"
            label="Academic Faculty"
            disabled={afIsFetching}
          />
          <PhSelect
            options={academicDepartmentOptions}
            name="academicDepartment"
            label="Academic Department"
            disabled={adIsFetching}
          />
          <PhSelectWithWatch
            onValueChange={setCourseId}
            options={coursesOptions}
            name="course"
            label="Course"
            disabled={cIsFetching}
          />
          <PhSelect
            options={coursesOptions}
            name="faculty"
            label="Faculty"
            disabled={cIsFetching}
          />
          <PhInput name="maxCapacity" label="Max Capacity" type="number" />
          <PhInput name="section" label="Section" type="number" />
          <PhSelect
            mode="multiple"
            options={daysOptions}
            name="days"
            label="Days"
          />

          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Col>
    </Flex>
  );
};

export default OfferCourse;
