import { Button, Col, Divider, Form, Input, Row } from "antd";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PhDatePicker from "../../../components/forms/PhDatePicker";
import PhForm from "../../../components/forms/PhForm";
import PhInput from "../../../components/forms/PhInput";
import PhSelect from "../../../components/forms/PhSelect";
import { bloodGroupOptons, genderOptons } from "../../../constant";
import {
  useGetAllAcademicDepartmentQuery,
  useGetAllAcademicFacultyQuery,
} from "../../../redux/features/admin/academicManagement";
import { useAddFacultyMutation } from "../../../redux/features/admin/userManagement";
import {
  TAcademicDepartment,
  TAcademicFaculty,
  TResponse,
} from "../../../types";
import { TFaculty } from "../../../types/userManagement.types";

const CreateFaculty = () => {
  const [addFaculty] = useAddFacultyMutation();
  const { data: departmentData, isLoading: dIsLoading } =
    useGetAllAcademicDepartmentQuery(undefined);

  const { data: facultyData, isLoading: fIsLoading } =
    useGetAllAcademicFacultyQuery(undefined);

  const facultySelectOptions = facultyData?.data.map(
    (item: TAcademicFaculty) => ({
      value: item._id,
      label: item.name,
    })
  );

  const departmentSelectOptions = departmentData?.data.map(
    (item: TAcademicDepartment) => ({
      value: item._id,
      label: item.name,
    })
  );

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Please wait...");
    const facultyData = {
      password: "Pass@1234",
      faculty: { ...data },
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(facultyData));
    formData.append("file", data.image);

    try {
      const res = (await addFaculty(formData)) as TResponse<TFaculty>;

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
    <Row>
      <Col span={24}>
        <PhForm onSubmit={onSubmit} isWidthFull={true}>
          <Divider>Personal Info</Divider>
          <Row gutter={10}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput name="name.firstName" type="text" label="First Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput name="name.middleName" type="text" label="Middle Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput name="name.lastName" type="text" label="Last Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhSelect name="gender" options={genderOptons} label="Gender" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhSelect
                name="bloodGroup"
                options={bloodGroupOptons}
                label="Blood Group"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput name="designation" type="text" label="Designation" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Controller
                name="image"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item label="Picture">
                    <Input
                      type="file"
                      value={value?.fileName}
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    />
                  </Form.Item>
                )}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhDatePicker name="dateOfBirth" label="Date Of Birth" />
            </Col>
          </Row>
          <Divider>Contact Info</Divider>
          <Row gutter={10}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput name="email" type="email" label="Email" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput name="contactNo" type="number" label="Contact No." />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                name="emergencyContactNo"
                type="number"
                label="Emergency Contact No."
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                name="presentAddress"
                type="text"
                label="Present Address"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                name="permanentAddress"
                type="text"
                label="Permanent Address"
              />
            </Col>
          </Row>

          <Divider>Academic Info</Divider>
          <Row gutter={10}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhSelect
                disabled={fIsLoading}
                name="academicFaculty"
                options={facultySelectOptions}
                label="Academic Faculty"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhSelect
                disabled={dIsLoading}
                name="academicDepartment"
                options={departmentSelectOptions}
                label="Academic Department"
              />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Col>
    </Row>
  );
};

export default CreateFaculty;
