import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicSemesterQuery } from "../../../redux/features/admin/academicManagement";
import { TAcademicSemester } from "../../../types";

interface DataType {
  key: React.Key;
  name: string;
  year: string;
  startMonth: string;
  endMonth: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
    ],
  },
  {
    title: "Year",
    dataIndex: "year",
  },
  {
    title: "Start Month",
    dataIndex: "startMonth",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
  },
  {
    title: "End Month",
    dataIndex: "endMonth",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};
const AcademicSemester = () => {
  const { data: semesterData, isLoading } =
    useGetAllAcademicSemesterQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(semesterData);
  const semesterTableData = semesterData.data.map(
    ({ _id, name, year, startMonth, endMonth }: TAcademicSemester) => {
      return { key: _id, name, year, startMonth, endMonth };
    }
  );

  return (
    <Table
      columns={columns}
      dataSource={semesterTableData}
      onChange={onChange}
    />
  );
};

export default AcademicSemester;
