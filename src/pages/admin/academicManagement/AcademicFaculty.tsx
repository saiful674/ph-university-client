import { Button, Table, TableColumnsType } from "antd";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement";
import { TAcademicFaculty } from "../../../types";

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
  },
  {
    title: "Action",
    dataIndex: "x",
    render: () => <Button>Update</Button>,
  },
];

const AcademicFaculty = () => {
  const {
    data: facultyData,
    isLoading,
    isFetching,
  } = useGetAllAcademicFacultyQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const semesterTableData = facultyData?.data.map(
    ({ _id, name }: TAcademicFaculty) => {
      return { key: _id, name };
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

export default AcademicFaculty;
