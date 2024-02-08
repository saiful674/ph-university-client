import { Button, Table, TableColumnsType } from "antd";
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
    render: (item) => (
      <Button onClick={() => console.log(item.key)}>Assign Faculty</Button>
    ),
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
