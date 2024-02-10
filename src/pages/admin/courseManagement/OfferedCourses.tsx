import { Table, TableColumnsType, Tag } from "antd";
import { useGetAllOfferedCoursesQuery } from "../../../redux/features/admin/courseManagement";
import { TOfferedCourse } from "../../../types";

const OfferedCourses = () => {
  const {
    data: offeredCoursesData,

    isFetching,
  } = useGetAllOfferedCoursesQuery(undefined);

  const offeredCoursesTableData = offeredCoursesData?.data?.map(
    ({
      _id,
      course,
      faculty,
      section,
      days,
      maxCapacity,
      startTime,
      endTime,
    }: TOfferedCourse) => {
      return {
        key: _id,
        course: `${course.title}`,
        faculty: `${faculty.name.firstName} ${faculty.name.middleName} ${faculty.name.lastName}`,
        section,
        days,
        maxCapacity,
        startTime,
        endTime,
      };
    }
  );

  const columns: TableColumnsType<
    Pick<
      TOfferedCourse,
      | "course"
      | "faculty"
      | "days"
      | "startTime"
      | "endTime"
      | "maxCapacity"
      | "section"
    >
  > = [
    {
      title: "Course",
      dataIndex: "course",
    },

    {
      title: "Faculty",
      dataIndex: "faculty",
    },
    {
      title: "Days",
      dataIndex: "days",
      responsive: ["lg"],
      render: (days: string[]) => (
        <Tag color="blue">{days.map((day) => day + " ")}</Tag>
      ),
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      responsive: ["lg"],
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      responsive: ["lg"],
    },

    {
      title: "Max Capacity",
      dataIndex: "maxCapacity",
    },
    {
      title: "Section",
      dataIndex: "section",
      responsive: ["md"],
    },
  ];
  console.log(offeredCoursesTableData);
  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={offeredCoursesTableData}
      //   onChange={onChange}
    />
  );
};

export default OfferedCourses;
