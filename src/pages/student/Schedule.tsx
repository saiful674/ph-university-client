import { Button, Space, Table, TableColumnsType, Tag } from "antd";
import { useGetMyEnrolledCoursesQuery } from "../../redux/features/student/studentApi";
import { TEnrolledCourse } from "../../types";

const columns: TableColumnsType<any> = [
  {
    title: "Course",
    dataIndex: "course",
  },
  {
    title: "Faculty",
    dataIndex: "faculty",
    responsive: ["md"],
  },
  {
    title: "Days",
    dataIndex: "days",
    render: (days) => (
      <Space>
        {days.map((day: string, index: number) => (
          <Tag color="blue" key={index}>
            {day}
          </Tag>
        ))}
      </Space>
    ),
    responsive: ["md"],
  },
  {
    title: "Start Time",
    dataIndex: "startTime",
  },
  {
    title: "End Time",
    dataIndex: "endTime",
  },
  {
    title: "Action",
    dataIndex: "",
    render: () => <Button>Details</Button>,
  },
];

const Schedule = () => {
  const { data: enrolledCoursesData, isFetching } =
    useGetMyEnrolledCoursesQuery(undefined);

  console.log(enrolledCoursesData);

  const enrolledCoursesTableData = enrolledCoursesData?.data?.map(
    ({ offeredCourse, course, _id, faculty }: TEnrolledCourse) => {
      return {
        key: _id,
        course: course.title,
        startTime: offeredCourse.startTime,
        endTime: offeredCourse.endTime,
        faculty: `${faculty.name.firstName} ${faculty.name.middleName} ${faculty.name.lastName}`,
        days: offeredCourse.days,
      };
    }
  );

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={enrolledCoursesTableData}
    />
  );
};

export default Schedule;
