/* eslint-disable no-unsafe-optional-chaining */
import { Avatar, Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { useGetMyInfoQuery } from "../../redux/features/student/studentApi";
import Loading from "../Loading";

const StudentDashboard = () => {
  const { data: myInfo, isLoading } = useGetMyInfoQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  const {
    name,
    profileImg,
    email,
    gender,
    dateOfBirth,
    bloodGroup,
    contactNo,
    emergencyContactNo,
    permanentAddress,
    presentAddress,
    guardian,
    admissionSemester,
    academicFaculty,
    academicDepartment,
  } = myInfo?.data;
  const {
    fatherName,
    motherName,
    motherContactNo,
    fatherOccupation,
    motherOccupation,
    fatherContactNo,
  } = guardian;
  return (
    <div>
      <Card bordered={false} loading={isLoading}>
        <Meta
          style={{ fontSize: "20px" }}
          avatar={<Avatar src={profileImg} size={60} />}
          title={`${name.firstName} ${name.middleName} ${name.lastName}`}
        />
        <Row>
          <Col
            md={{ span: 12 }}
            lg={{ span: 8 }}
            style={{ marginTop: "20px", fontSize: "16px" }}
          >
            <h4>Personal Info</h4>
            <p>
              Name: {`${name.firstName} ${name.middleName} ${name.lastName}`}
            </p>
            <p>Gender: {gender}</p>
            <p>Date of Birth: {dateOfBirth}</p>
            <p>Blood Group: {bloodGroup}</p>
          </Col>

          <Col
            md={{ span: 12 }}
            lg={{ span: 8 }}
            style={{ marginTop: "20px", fontSize: "16px" }}
          >
            <h4>Contact Info</h4>
            <p>Email: {email}</p>
            <p>Contact No: {contactNo}</p>
            <p>E. Contact No: {emergencyContactNo}</p>
          </Col>

          <Col
            md={{ span: 12 }}
            lg={{ span: 8 }}
            style={{ marginTop: "20px", fontSize: "16px" }}
          >
            <h4>Address</h4>
            <p>Present Addr.: {presentAddress}</p>
            <p>Permanent Addr.: {permanentAddress}</p>
          </Col>
          <Col
            md={{ span: 12 }}
            lg={{ span: 8 }}
            style={{ marginTop: "20px", fontSize: "16px" }}
          >
            <h4>Guardian Info</h4>
            <p>Father N.: {fatherName}</p>
            <p>Father Oc.: {fatherOccupation}</p>
            <p>Father C. No.: {fatherContactNo}</p>
            <p>Mother N.: {motherName}</p>
            <p>Mother Oc.: {motherOccupation}</p>
            <p>Mother C. No.: {motherContactNo}</p>
          </Col>

          <Col
            md={{ span: 12 }}
            lg={{ span: 8 }}
            style={{ marginTop: "20px", fontSize: "16px" }}
          >
            <h4>Academic Info</h4>
            <p>Academic Department : {academicDepartment.name}</p>
            <p>Academic Faculty : {academicFaculty.name}</p>
            <p>
              Academic Semesrer :{" "}
              {`${admissionSemester?.name}  ${admissionSemester?.year}`}
            </p>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default StudentDashboard;
