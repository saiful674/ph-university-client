import { Button, Col, Divider, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhDatePicker from "../../../components/forms/PhDatePicker";
import PhForm from "../../../components/forms/PhForm";
import PhInput from "../../../components/forms/PhInput";
import PhSelect from "../../../components/forms/PhSelect";
import { bloodGroupOptons, genderOptons } from "../../../constant";

const studentDummyData = {
  password: "Pass@1234",
  student: {
    name: {
      firstName: "John",
      middleName: "",
      lastName: "Doe",
    },
    email: "student1@gmail.com",
    contactNo: "1234567890",
    emergencyContactNo: "9876543210",
    gender: "male",
    bloodGroup: "A+",
    dateOfBirth: "1990-01-01",
    presentAddress: "123 Main Street, City",
    permanentAddress: "456 Park Avenue, Town",
    guardian: {
      fatherName: "John Doe Sr.",
      fatherOccupation: "Engineer",
      fatherContactNo: "1234567890",
      motherName: "Jane Doe",
      motherOccupation: "Doctor",
      motherContactNo: "9876543210",
    },
    localGuardian: {
      name: "Local Guardian",
      occupation: "Business",
      relation: "Uncle",
      contactNo: "9998887777",
      address: "789 Street, Nearby City",
    },
    admissionSemester: "65be36537738dd806382dcb8",
    academicDepartment: "65be35cc7738dd806382dcb3",
  },
};

const studentDefaultData = {
  name: {
    firstName: "Md.",
    middleName: "Saiful",
    lastName: "Islam",
  },
  gender: "male",
  bloodGroup: "A+",

  email: "student1@gmail.com",
  contactNo: "1234567890",
  emergencyContactNo: "9876543210",
  presentAddress: "123 Main Street, City",
  permanentAddress: "456 Park Avenue, Town",

  guardian: {
    fatherName: "John Doe Sr.",
    fatherOccupation: "Engineer",
    fatherContactNo: "1234567890",
    motherName: "Jane Doe",
    motherOccupation: "Doctor",
    motherContactNo: "9876543210",
  },

  localGuardian: {
    name: "Local Guardian",
    occupation: "Business",
    relation: "Uncle",
    contactNo: "9998887777",
    address: "789 Street, Nearby City",
  },

  admissionSemester: "65be36537738dd806382dcb8",
  academicDepartment: "65be35cc7738dd806382dcb3",
};
const CreateStudent = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <Row>
      <Col span={24}>
        <PhForm onSubmit={onSubmit} defaultValues={studentDefaultData}>
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
          <Divider>Guardian Info</Divider>
          <Row gutter={10}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                name="guardian.fatherName"
                type="text"
                label="Father Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                name="guardian.fatherOccupation"
                type="text"
                label="Father Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                name="guardian.fatherContactNo"
                type="number"
                label="Father Contact No"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                name="guardian.motherName"
                type="text"
                label="Mother Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                name="guardian.motherOccupation"
                type="text"
                label="Mother Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                name="guardian.motherContactNo"
                type="number"
                label="Mother Contact No"
              />
            </Col>
          </Row>
          <Divider>Local Guardian Info</Divider>
          <Row gutter={10}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput name="localGuardian.name" type="text" label="Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                name="localGuardian.occupation"
                type="text"
                label="Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                name="localGuardian.relation"
                type="text"
                label="Relation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                name="localGuardian.contactNo"
                type="number"
                label="Contact No"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                name="localGuardian.address"
                type="text"
                label="Address"
              />
            </Col>
          </Row>
          <Divider>Academic Info</Divider>
          <Row gutter={10}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                name="admissionSemester"
                type="text"
                label="Admission Semester"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                name="academicDepartment"
                type="text"
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

export default CreateStudent;
