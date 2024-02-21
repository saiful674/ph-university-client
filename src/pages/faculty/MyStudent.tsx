import { Button, Modal, Table } from "antd";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import PhForm from "../../components/forms/PhForm";
import PhInput from "../../components/forms/PhInput";
import {
  useAddMarkMutation,
  useGetFacultyCoursesQuery,
} from "../../redux/features/faculty/facultyApi";
import { TEnrolledCourse, TResponse } from "../../types";

const MyStudent = () => {
  const { registerSemesterId, courseId } = useParams();
  const { data: facultyCoursesData } = useGetFacultyCoursesQuery([
    { name: "semesterRegistration", value: registerSemesterId },
    { name: "course", value: courseId },
  ]);

  const tableData = facultyCoursesData?.data?.map(
    ({
      _id,
      student,
      semesterRegistration,
      offeredCourse,
    }: TEnrolledCourse) => ({
      key: _id,
      name: `${student.name.firstName} ${
        student.name.middleName ? student.name.middleName : ""
      } ${student.name.lastName}`,
      roll: student.id,
      semesterRegistration: semesterRegistration._id,
      student: student._id,
      offeredCourse: offeredCourse._id,
    })
  );

  const columns = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Roll",
      key: "roll",
      dataIndex: "roll",
    },
    {
      title: "Action",
      key: "x",
      render: (item: any) => {
        return (
          <div>
            <AddMarksModal studentInfo={item} />
          </div>
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={tableData} />;
};

export default MyStudent;

const AddMarksModal = ({
  studentInfo,
}: {
  studentInfo: Record<string, any>;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addMark] = useAddMarkMutation();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Please wait...");
    const studentMark = {
      semesterRegistration: studentInfo.semesterRegistration,
      offeredCourse: studentInfo.offeredCourse,
      student: studentInfo.student,
      courseMarks: {
        classTest1: Number(data.classTest1),
        midTerm: Number(data.midTerm),
        classTest2: Number(data.classTest2),
        finalTerm: Number(data.finalTerm),
      },
    };

    try {
      const res = (await addMark(studentMark)) as TResponse<any>;

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Course mark is updated successfully", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }

    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Add Marks</Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <PhForm onSubmit={handleSubmit}>
          <PhInput type="number" name="classTest1" label="Class Test 1" />
          <PhInput type="number" name="classTest2" label="Class Test 2" />
          <PhInput type="number" name="midTerm" label="Midterm" />
          <PhInput type="number" name="finalTerm" label="Final" />
          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Modal>
    </>
  );
};
