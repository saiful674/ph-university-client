import { Table, TableColumnsType } from "antd";
import AssignFacultyModal from "../../../components/modal/AssignFacultyModal";
import { useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement";
import { TCourse } from "../../../types";

const columns: TableColumnsType<
  Pick<TCourse, "title" | "code" | "credits" | "prefix">
> = [
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Prefix",
    dataIndex: "prefix",
  },
  {
    title: "Code",
    dataIndex: "code",
  },
  {
    title: "Credits",
    dataIndex: "credits",
  },
  {
    title: "Action",
    dataIndex: "",
    render: (item) => <AssignFacultyModal courseId={item.key} />,
  },
];

const Courses = () => {
  const {
    data: courseData,

    isFetching,
  } = useGetAllCoursesQuery(undefined);

  console.log(courseData);

  const semesterTableData = courseData?.data?.map(
    ({ _id, title, prefix, code, credits }: TCourse) => {
      return { key: _id, title, prefix, code, credits };
    }
  );

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={semesterTableData}
    />
  );
};

export default Courses;
