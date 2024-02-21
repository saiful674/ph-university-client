/* eslint-disable no-unsafe-optional-chaining */
import { Avatar, Card, Col, Flex, Row } from "antd";
import Meta from "antd/es/card/Meta";
import avater from "../../assets/images/avater.png";
import UpdateStudentInfoModal from "../../components/modal/UpdateStudentInfoModal";
import { useGetMyInfoQuery } from "../../redux/features/student/studentApi";
import Loading from "../Loading";
const FacultyDashboard = () => {
  const { data: facultyData, isLoading } = useGetMyInfoQuery(undefined);

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
    academicDepartment,
    academicFaculty,
  } = facultyData?.data;

  return (
    <div>
      <Card bordered={false} loading={isLoading}>
        <Meta
          style={{ fontSize: "20px" }}
          avatar={<Avatar src={profileImg ? profileImg : avater} size={60} />}
          title={`${name.firstName} ${name.middleName} ${name.lastName}`}
        />
        <Flex justify="end">
          <UpdateStudentInfoModal studentData={facultyData?.data} />
        </Flex>
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
            <h4>Academic Info</h4>
            <p>A. Faculty: {academicFaculty?.name}</p>
            <p>A. Department: {academicDepartment?.name}</p>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default FacultyDashboard;
