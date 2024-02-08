import { Button, Modal } from "antd";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useAssignFacultyWithCourseMutation } from "../../redux/features/admin/courseManagement";
import { useGetAllFacultyQuery } from "../../redux/features/admin/userManagement";
import { TCourse, TResponse } from "../../types";
import PhForm from "../forms/PhForm";
import PhSelect from "../forms/PhSelect";

const AssignFacultyModal = ({ courseId }: { courseId: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: facultyData } = useGetAllFacultyQuery(undefined);

  const [assignFacultyWithCourse] = useAssignFacultyWithCourseMutation();

  const facultySelectOptions = facultyData?.data?.map((item: any) => ({
    value: item._id,
    label: `${item.name.firstName} ${item.name.middleName} ${item.name.lastName}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Please wait...");
    const updateData = {
      courseId,
      data,
    };
    try {
      const res = (await assignFacultyWithCourse(
        updateData
      )) as TResponse<TCourse>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Faculty is assigned successfully", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Assign Faculty</Button>
      <Modal
        title="Assign Faculty"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
      >
        <PhForm onSubmit={onSubmit}>
          <PhSelect
            mode="multiple"
            options={facultySelectOptions}
            name="faculties"
            label="Select Faculty"
          />
          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Modal>
    </>
  );
};

export default AssignFacultyModal;
